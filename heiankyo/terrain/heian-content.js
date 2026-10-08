// 平安京 台詞・頼みごとパックの読み込みと検査（2026-10-07）
// 目的: 新しい人物連作・派生クエスト・季節クエストを、CadKit/index.html にも会話エンジンにも heian-lines.js にも触れず、
//       terrain/quests/ にファイルを足して manifest に1行書くだけでゲームへ入れる。
// 流れ（本体 index.html の heianLoadContentPacks が呼ぶ）:
//   heian-lines.js を読む → このファイルを読む → HEIAN_CONTENT.load(L,…) が quests/manifest.js の並びでパックを順に読む
//   → 全部そろってから本体が頼みごとの名前・顔ぶれ・会話の索引を作る（途中の状態はゲームに見えない）
// パック1個の形: (function(){ const L=window.HEIAN_LINES; if(!L) return; L.quests.x={ja,en}; L.dialogs.push({…}); L.say.push({…}); })();
//   データを足すだけ。関数・eval・script を値に入れない（入れても取り除く）。足りない機能は本体に名前付きの処理（@名前・set・gate）を足してもらう
// 1個のパックが壊れても止めない: 読み込み失敗・実行時エラー・不正データはそのパックの分を取り消し、どのファイルかを console に出して続ける
// 検査（開発時だけ）: 重複 id・存在しない char/at/who・選択肢の行き先・条件の書き方・頼みごと名の未登録など。本番ゲームは止めない
// node でも動く: 平安京/residents/lines_check.js が同じ検査を使う（module.exports）
(function(root){
'use strict';
const arr=v=>v==null?[]:Array.isArray(v)?v:[v];
const len=s=>[...String(s)].length;
const isObj=v=>v!=null&&typeof v==='object'&&!Array.isArray(v);
// ---- 条件言語（DSL）の語彙。index.html の heianSpeechCond・heianQuestCond と同じ。増やすときは本体側も直す
const WHEN=new Set(['dawn','morning','noon','afternoon','dusk','night']);
const IFS=new Set(['dawn','dusk','marketDay','offDay','open','closing','spring','summer','autumn','winter','ume','sakura','kouyou','wakaba','karegi','fullMoon','newMoon','michiae','hyakki','robot','hover','waiting','night','day','kugyo','kugyoWait','rain','cloudy','clear','dry','odori','odoriSelf','odoriMiru','fue','fueSelf','hideri','ohideri','yudachi','nagaame','ameagari']);
// 時代の段（index.html HEIAN_PHASES）。era は段 id（'>=' '<=' '<' '>' 付きも可・配列も可）。from/until は [年,月,日]（900〜922年・陰暦）
const ERA=new Map([['shotai',[900,1,1]],['yocho',[900,10,1]],['zenya',[901,1,1]],['tojitsu',[901,1,25]],['chokugo',[901,1,26]],['yoha',[901,3,1]],['engi',[901,7,15]],['koki',[909,4,4]]]);
const eraParse=s=>/^(>=|<=|<|>)?(\w+)$/.exec(String(s));
const eraOK=e=>arr(e).length>0&&arr(e).every(s=>{const m=eraParse(s);return !!m&&ERA.has(m[2]);});
const dateOK=v=>Array.isArray(v)&&v.length===3&&v.every(Number.isInteger)&&v[0]>=900&&v[0]<=922&&v[1]>=1&&v[1]<=12&&v[2]>=1&&v[2]<=30;
// 条件 'a&b&c'（スペースは入れない）。使える項: q:名前(>=|<=|=|<|>)数／gate:名前／!gate:名前／done>=数／days:名前>=数／IFS の語。q: には ! を付けられない（本体が読まない）
const QCOND=/^(q:\w+(>=|<=|=|<|>)\d+|!?gate:\w+|done>=\d+|days:\w+>=\d+)$/;
function condProblem(c){
 if(typeof c!=='string'||!c)return '条件は空でない文字列';
 for(const p of c.split('&')){
  if(!p)return '空の条件（& の前後）';
  if(/^!q:/.test(p))return '「'+p+'」: q: に ! は付けられない（q:名前<1 のように書く。! は !gate: だけ）';
  if(/\s/.test(p))return '「'+p+'」: 条件にスペースは入れない';
  if(QCOND.test(p)||IFS.has(p))continue;
  return '「'+p+'」は使えない条件';}
 return null;}
// 本体 heianSpeechTags が出す場所タグ（固定のもの）。地点 id・曹司の類・estate_／interior_／quirk_ は本体から受け取るか接頭辞で判定する
const FIXED_AT=['any','street','daidairi','suzaku','matsunohara','sakyo','ukyo','kitabe','minamibe','kamo','tsuji','ikuhomon','kemari','kokuso','kokyu','soshi','south','suzakumon','yomeimon','interior','meryo','okura','efu','kuriya','jingikan','onmyo','tenyaku','shoin','kobo','gaku','shingon','zusho'];
const FIXED_WHO=['売り子','客','官人','女房','家司','僧','検非違使','人夫','行商','童','母','女','衛士','学生','博士','旅人','船頭','庶民','牛飼童','従者','馬部','洗い女','炊女','下人','厩の者','火長'];
const FN_NAMES=['omenDir','omenImi','omenHour','market','area','rumor','greet','lore','hoshi']; // 本体が渡せないときの控え。普段は engine.fns（heianDialogFn のキー）
const SAY_KEYS=['at','who','when','if','t','n','kind','kishitsu','ware','era','from','until','go'];
const TALK_KEYS=['at','who','when','if','lines','n','kind','era','from','until'];
const DIALOG_KEYS=['id','char','who','at','if','when','title','start','nodes','n','era','from','until','tier','auto','keep','noExtra'];
const NODE_KEYS=['t','c','set','end','gate','n'];
const internalState=k=>/^[a-z]{1,2}_/.test(k); // 途中の印（bk_・xx_・bn_・iy_ など2字までの接頭辞）。頼みごと名の登録は要らない

// ---- 検査 ------------------------------------------------------------------------------------------------
// 返り値 {findings:[{level:'ng'|'warn',code,pack,where,msg}]}。ng＝その行が出ない・対話が壊れる、warn＝人の目で見るもの
// 本体が持つ語彙は opt.engine={at:[…],who:[…],fns:[…]} で受ける（無ければ heian-lines.js 本体で使われているものを「確かに有る」とみなす）
function validate(L,opt){
 opt=opt||{};const F=[],skip=new Set(opt.skip||[]),eng=opt.engine||{};
 const add=(level,code,o,where,msg)=>{if(!skip.has(code))F.push({level,code,pack:(o&&o.__pack)||'heian-lines.js',where,msg});};
 const say=arr(L.say),talk=arr(L.talk),dialogs=arr(L.dialogs),terms=isObj(L.terms)?L.terms:{},quests=isObj(L.quests)?L.quests:{};
 const people=new Set(arr(L.people).map(p=>p&&p.id));
 const isBase=o=>!(o&&o.__pack);
 const knownAt=new Set([...FIXED_AT,...arr(eng.at)]),knownWho=new Set([...FIXED_WHO,...arr(eng.who)]);
 for(const o of [...say,...talk,...dialogs])if(isObj(o)&&isBase(o)){arr(o.at).forEach(a=>knownAt.add(a));arr(o.who).forEach(w=>knownWho.add(w));}
 const atOK=a=>knownAt.has(a)||/^(estate_|interior_|quirk_)\w+$/.test(a);
 const fnOK=new Set(eng.fns&&eng.fns.length?eng.fns:FN_NAMES);
 const uses=[],setNames=new Set(); // 頼みごとの状態名の使われ方 [名前,持ち主,場所]
 const useCond=(c,o,w)=>{if(typeof c!=='string')return;for(const m of c.matchAll(/q:(\w+)/g))uses.push([m[1],o,w]);};
 const lab=(o,i,kind)=>kind+'['+i+']'+(o.id?'('+o.id+')':typeof o.t==='string'?' 「'+o.t.slice(0,14)+'」':'');
 // 共通: at・who・when・if・era・from・until
 function common(o,w,needAt,needWho){
  if(needAt){const ats=arr(o.at);if(!ats.length)add('ng','no-at',o,w,'at が無い');for(const a of ats)if(typeof a!=='string'||!atOK(a))add('warn','unknown-at',o,w,'unknown at: '+a+'（本体が出す場所タグか、heian-lines.js で使われているタグか確かめる）');}
  if(needWho){const ws=arr(o.who);if(!ws.length)add('ng','no-who',o,w,'who が無い');for(const x of ws)if(!knownWho.has(x))add('warn','unknown-who',o,w,'unknown who: '+x+'（話し手の種類が本体に無いと出ない）');}
  for(const t of arr(o.when))if(!WHEN.has(t))add('ng','bad-when',o,w,'when「'+t+'」は使えない（'+[...WHEN].join('/')+'）');
  if(o.if!=null){const p=condProblem(o.if);if(p)add('ng','bad-cond',o,w,'if: '+p);else useCond(o.if,o,w);}
  if(o.era!=null&&!eraOK(o.era))add('ng','bad-era',o,w,'era「'+JSON.stringify(o.era)+'」は '+[...ERA.keys()].join('・')+'（>= < 付きも可）');
  for(const k of ['from','until'])if(o[k]!=null&&!dateOK(o[k]))add('ng','bad-date',o,w,k+' は [年,月,日]（900〜922年）… '+JSON.stringify(o[k]));}
 const unknownKeys=(o,ok,w,what)=>{for(const k of Object.keys(o))if(!ok.includes(k))add('warn','unknown-field',o,w,what+'の知らない項目 '+k+'（本体は読まない）');};
 say.forEach((s,i)=>{if(!isObj(s)){add('ng','bad-item',null,'say['+i+']','オブジェクトでない');return;}
  const w=lab(s,i,'say');common(s,w,true,true);unknownKeys(s,SAY_KEYS,w,'say');
  if(typeof s.t!=='string'||!s.t)add('ng','no-text',s,w,'t（台詞）が無い');else if(len(s.t)>40)add('warn','long-text',s,w,len(s.t)+'字（吹き出しは28字程度・40字まで）');});
 talk.forEach((s,i)=>{if(!isObj(s)){add('ng','bad-item',null,'talk['+i+']','オブジェクトでない');return;}
  const w=lab({id:s.id,t:s.lines&&s.lines[0]&&s.lines[0][1]},i,'talk'),who=arr(s.who);common(s,w,true,true);unknownKeys(s,TALK_KEYS,w,'talk');
  if(who.length<2)add('ng','talk-who',s,w,'who は2人以上');
  if(!Array.isArray(s.lines)||!s.lines.length)add('ng','no-lines',s,w,'lines が無い');
  (s.lines||[]).forEach((r,j)=>{if(!Array.isArray(r)||r.length!==2||!Number.isInteger(r[0])||typeof r[1]!=='string'){add('ng','bad-lines',s,w,'lines['+j+'] は [話し手の番号,台詞]');return;}
   if(r[0]<0||r[0]>=who.length)add('ng','bad-lines',s,w,'lines['+j+'] の話し手 '+r[0]+' が who に居ない');if(len(r[1])>40)add('warn','long-text',s,w,'lines['+j+'] '+len(r[1])+'字');});});
 const ids=new Map();
 dialogs.forEach((d,i)=>{if(!isObj(d)){add('ng','bad-item',null,'dialogs['+i+']','オブジェクトでない');return;}
  const w=lab(d,i,'dialogs');
  if(!d.id)add('ng','no-id',d,w,'id が無い');
  else if(ids.has(d.id))add('ng','dup-dialog-id',d,w,'duplicate dialog id: '+d.id+'（もう1つは '+(ids.get(d.id).__pack||'heian-lines.js')+'）');else ids.set(d.id,d);
  if(d.char&&!people.has(d.char))add('ng','unknown-char',d,w,'unknown char: '+d.char+'（people に居ない）');
  if(!d.char&&!arr(d.who).length)add('warn','no-target',d,w,'char も who も無い（誰の対話か決まらない）');
  common(d,w,false,false);unknownKeys(d,DIALOG_KEYS,w,'dialogs');
  if(d.at)for(const a of arr(d.at))if(typeof a!=='string'||!atOK(a))add('warn','unknown-at',d,w,'unknown at: '+a);
  for(const x of arr(d.who))if(!knownWho.has(x))add('warn','unknown-who',d,w,'unknown who: '+x);
  if(isObj(d.auto)&&d.auto.if!=null){const p=condProblem(d.auto.if);if(p)add('ng','bad-cond',d,w,'auto.if: '+p);else useCond(d.auto.if,d,w);}
  const N=isObj(d.nodes)?d.nodes:{};
  if(!d.start||!N[d.start])add('ng','bad-start',d,w,'start「'+d.start+'」の節が無い');
  for(const [nk,nd] of Object.entries(N)){const nw=w+'.'+nk;
   if(!isObj(nd)){add('ng','bad-node',d,nw,'節がオブジェクトでない');continue;}
   unknownKeys(nd,NODE_KEYS,nw,'節');
   for(const t of arr(nd.t)){if(typeof t!=='string'){add('ng','bad-text',d,nw,'t が文字列でない');continue;}
    if(t.startsWith('@')){const f=t.slice(1);if(!fnOK.has(f)&&!f.startsWith('char'))add('warn','unknown-fn',d,nw,'unknown function: '+t+'（本体の heianDialogFn に無い）');}
    else if(len(t)>90)add('warn','long-text',d,nw,len(t)+'字（対話の窓は90字まで）');}
   for(const s of arr(nd.set)){const m=/^(\w+)=\d+$/.exec(s);if(!m)add('ng','bad-set',d,nw,'set「'+s+'」は 名前=数');else{uses.push([m[1],d,nw]);setNames.add(m[1]);}}
   if(nd.gate!=null&&!/^\w+$/.test(nd.gate))add('ng','bad-gate',d,nw,'gate「'+nd.gate+'」は名前だけ');
   for(const c of Array.isArray(nd.c)?nd.c:[]){
    if(!Array.isArray(c)||c.length<2||typeof c[0]!=='string'){add('ng','bad-choice',d,nw,'c の要素は [選択肢,次の節]');continue;}
    if(c[1]!=='$end'&&!N[c[1]])add('ng','bad-target',d,nw,'選択肢「'+c[0]+'」の行き先「'+c[1]+'」の節が無い');
    if(c[2]!=null){if(!isObj(c[2])||c[2].if==null)add('warn','bad-choice',d,nw,'選択肢の3番目は {if:条件}');
     else{const p=condProblem(c[2].if);if(p)add('ng','bad-cond',d,nw,'選択肢「'+c[0]+'」if: '+p);else useCond(c[2].if,d,nw);}}}
   if(!nd.end&&!(Array.isArray(nd.c)&&nd.c.length))add('ng','dead-end',d,nw,'選択肢も end も無い（行き止まり）');}});
 // 言い伝え（terms）: パックが足したものだけ（本体の分は lines_check が見る）
 for(const [k,t] of Object.entries(terms)){if(isBase(t))continue;
  if(!isObj(t)||!t.q||!arr(t.keys).length||!arr(t.t).length)add('ng','bad-term',t,'terms.'+k,'q・keys・t が要る');
  else for(const r of arr(t.rel))if(!terms[r])add('warn','bad-term',t,'terms.'+k,'rel「'+r+'」が terms に無い');}
 // 頼みごとの名前（L.quests）。パックが足した分は ja が要る。en が無いと英語表示で日本語のまま
 for(const [k,q] of Object.entries(quests)){if(isBase(q))continue;
  if(!/^\w+$/.test(k))add('ng','bad-quest',q,'quests.'+k,'id は英数字と _ だけ');
  if(!isObj(q)||typeof q.ja!=='string'||!q.ja)add('ng','bad-quest',q,'quests.'+k,'ja（頼みごとの名前）が無い');
  else if(typeof q.en!=='string'||!q.en)add('warn','quest-no-en',q,'quests.'+k,'en が無い（英語表示でも日本語のまま）');
  if(isObj(q)&&!setNames.has(k))add('warn','quest-never-set',q,'quests.'+k,'どの節でも set:\''+k+'=…\' されていない（入口が無い？）');}
 // 登録の無い状態名を、頼みごととして使っていないか。2字までの接頭辞（bk_ xx_ bn_ iy_）の途中の印と、本体で既に使われている名前は除く
 const baseUsed=new Set(uses.filter(u=>isBase(u[1])).map(u=>u[0])),said=new Set();
 for(const [name,o,w] of uses){if(isBase(o)||quests[name]||internalState(name)||baseUsed.has(name))continue;
  const key=(o.__pack||'')+'|'+name;if(said.has(key))continue;said.add(key);
  add('warn','unregistered-quest',o,w,'unregistered quest state: '+name+'（L.quests に登録するか、途中の印なら bk_ のように2字+_ で始める）');}
 return{findings:F};}
const fmt=f=>'- ['+f.pack+'] '+f.where+': '+f.msg;

// ---- 読み込み ----------------------------------------------------------------------------------------------
// パックは window.HEIAN_LINES へ足すだけ。読む前後の差で「どのファイルが何を足したか」を知り、壊れたら足した分を取り消す
function snapshot(L){const s={keys:new Set(Object.keys(L)),arr:{},obj:{}};
 for(const k of s.keys){const v=L[k];if(Array.isArray(v))s.arr[k]=v.length;else if(isObj(v))s.obj[k]=new Set(Object.keys(v));}return s;}
function rollback(L,s){
 for(const k of Object.keys(L))if(!s.keys.has(k))delete L[k];
 for(const [k,n] of Object.entries(s.arr))if(Array.isArray(L[k])&&L[k].length>n)L[k].length=n;
 for(const [k,set] of Object.entries(s.obj))if(isObj(L[k]))for(const x of Object.keys(L[k]))if(!set.has(x))delete L[k][x];}
// 値に入った関数を取り除く（データから任意のコードを動かさない。本体は関数を呼ばないが、将来の誤用も防ぐ）
function stripFunctions(v,path,out,depth){
 if(depth>8||v==null||typeof v!=='object')return;
 for(const k of Object.keys(v)){const x=v[k];
  if(typeof x==='function'){out.push(path+'.'+k);try{if(Array.isArray(v))v[k]=null;else delete v[k];}catch(e){}}
  else stripFunctions(x,path+'.'+k,out,depth+1);}}
// 足した分に持ち主（ファイル名）を付ける。列挙されない項目 __pack なので、本体の処理にも保存にも見えない
function claim(L,s,file){
 const added={},fn=[],tag=o=>{if(o&&typeof o==='object'&&!Object.prototype.hasOwnProperty.call(o,'__pack')){try{Object.defineProperty(o,'__pack',{value:file,enumerable:false});}catch(e){}}};
 for(const k of Object.keys(L)){const v=L[k];
  if(!s.keys.has(k)){tag(v);stripFunctions(v,k,fn,0);added[k]=isObj(v)?Object.keys(v).length:Array.isArray(v)?v.length:1;continue;}
  if(Array.isArray(v)&&s.arr[k]!=null){const n=v.length-s.arr[k];if(n>0){added[k]=n;for(let i=s.arr[k];i<v.length;i++){tag(v[i]);stripFunctions(v[i],k+'['+i+']',fn,0);}}}
  else if(isObj(v)&&s.obj[k]){let n=0;for(const x of Object.keys(v))if(!s.obj[k].has(x)){n++;tag(v[x]);stripFunctions(v[x],k+'.'+x,fn,0);}if(n)added[k]=n;}}
 return{added,fn};}
// 1個のパックを読む前後。L.quests は読む間だけ Proxy にして、既にある頼みごと id への上書き（重複）を拾う
function begin(L,home,file){
 const c={L,home,s:snapshot(L),dup:[],real:L.quests,px:null,errs:[]},base=String(file).split('/').pop();
 if(isObj(c.real))c.px=L.quests=new Proxy(c.real,{set(t,k,v){if(Object.prototype.hasOwnProperty.call(t,k))c.dup.push(String(k));t[k]=v;return true;}});
 c.onErr=e=>{const fn=(e&&e.filename)||'';if(fn&&!fn.includes(base))return;c.errs.push((e&&e.message)||String(e&&e.error||e));}; // 読み込み中に起きた他所のエラーは数えない
 if(root.addEventListener)root.addEventListener('error',c.onErr);return c;}
function end(c,file,fail){
 const L=c.L;if(root.removeEventListener)root.removeEventListener('error',c.onErr);
 if(c.px&&L.quests===c.px)L.quests=c.real;
 const out={file,ok:true,error:null,added:{},findings:[]};let err=fail?(fail.message||String(fail)):c.errs[0]||null;
 if(!err&&c.home.HEIAN_LINES!==L){c.home.HEIAN_LINES=L;err='window.HEIAN_LINES を差し替えた（足すだけにする）';}
 if(err){rollback(L,c.s);out.ok=false;out.error=err;return out;}
 const r=claim(L,c.s,file);out.added=r.added;
 for(const k of new Set(c.dup))out.findings.push({level:'ng',code:'dup-quest-id',pack:file,where:'quests.'+k,msg:'duplicate quest id: '+k+'（既にある頼みごとを上書きした）'});
 for(const p of r.fn)out.findings.push({level:'ng',code:'func-in-data',pack:file,where:p,msg:'データに関数が入っていた。取り除いた（データは値だけ。足りない動きは本体に名前付きの処理を頼む）'});
 return out;}
const count=L=>({quests:Object.keys(L.quests||{}).length,dialogs:arr(L.dialogs).length,say:arr(L.say).length,talk:arr(L.talk).length,terms:Object.keys(L.terms||{}).length,chores:arr(L.chores).length});
const withTimeout=(p,ms)=>{ms=ms||12000;if(!root.setTimeout)return Promise.resolve(p);let t;
 return Promise.race([Promise.resolve(p),new Promise((_,rej)=>{t=root.setTimeout(()=>rej(new Error('読み込みに '+ms/1000+' 秒かかったので諦めた')),ms);})]).finally(()=>root.clearTimeout(t));};
// manifest（window.HEIAN_CONTENT_FILES＝本番に入れるパック・HEIAN_CONTENT_DEV_FILES＝?devpacks=1 のときだけ読む試験用）から読むファイルの一覧を作る
function manifestFiles(home,opt,rep){
 const raw=[...arr(home.HEIAN_CONTENT_FILES),...(opt.devPacks?arr(home.HEIAN_CONTENT_DEV_FILES):[])],seen=new Set(),out=[];
 for(const f of raw){
  if(typeof f!=='string'||!/^quests\/[\w.\-\/]+\.js$/.test(f)||f.includes('..')||f==='quests/manifest.js'){rep.findings.push({level:'ng',code:'bad-manifest',pack:'quests/manifest.js',where:JSON.stringify(f),msg:'manifest の項目は quests/〜.js（manifest.js 自身と .. は不可）'});continue;}
  if(seen.has(f)){rep.findings.push({level:'warn',code:'bad-manifest',pack:'quests/manifest.js',where:f,msg:'同じファイルが2回書かれている（2回目は読まない）'});continue;}
  seen.add(f);out.push(f);}
 return out;}
const newReport=opt=>({dev:!!opt.dev,devPacks:!!opt.devPacks,manifest:null,packs:[],findings:[],totals:null,loaded:0,failed:0,lines:[]});
async function load(L,opt){
 opt=opt||{};const home=opt.home||root,rep=newReport(opt);let files=[];
 try{await withTimeout(opt.loadFile('quests/manifest.js','HEIAN_CONTENT_FILES'),opt.timeout);rep.manifest='ok';files=manifestFiles(home,opt,rep);}
 catch(e){rep.manifest='無し';} // manifest が無い（古い公開）・読めない: パック無しで続ける
 for(const file of files){const c=begin(L,home,file);let fail=null;
  try{await withTimeout(opt.loadFile(file,null),opt.timeout);}catch(e){fail=e;}
  rep.packs.push(end(c,file,fail));}
 return finish(L,rep,opt);}
// node 用（lines_check.js）。opt.loadFile(file,glob) は同期で読んで実行し、失敗なら投げる
function loadSync(L,opt){
 opt=opt||{};const home=opt.home||root,rep=newReport(opt);let files=[];
 try{opt.loadFile('quests/manifest.js','HEIAN_CONTENT_FILES');rep.manifest='ok';files=manifestFiles(home,opt,rep);}catch(e){rep.manifest='無し';}
 for(const file of files){const c=begin(L,home,file);let fail=null;try{opt.loadFile(file,null);}catch(e){fail=e;}rep.packs.push(end(c,file,fail));}
 return finish(L,rep,opt);}
function summary(rep){
 const t=rep.totals,mine=rep.findings.filter(f=>f.pack!=='heian-lines.js'),base=rep.findings.length-mine.length;
 const o=['Loaded quest packs: '+rep.loaded+(rep.failed?'（読み込めなかった '+rep.failed+'）':''),'Quests: '+t.quests,'Dialogs: '+t.dialogs,'Say: '+t.say,'Talk: '+t.talk];
 if(rep.devPacks)o.push('（?devpacks=1: 試験用パックも読んだ）');
 o.push('',mine.length?'Warnings:':'Warnings: なし');for(const f of mine)o.push(fmt(f));
 if(base)o.push('（heian-lines.js 本体への指摘 '+base+' 件は node 平安京/residents/lines_check.js で確認）');
 return o;}
function finish(L,rep,opt){
 rep.totals=count(L);rep.loaded=rep.packs.filter(p=>p.ok).length;rep.failed=rep.packs.length-rep.loaded;
 for(const p of rep.packs){if(!p.ok)rep.findings.push({level:'ng',code:'pack-failed',pack:p.file,where:'(ファイル)',msg:'読み込めない／実行時エラー: '+p.error+'。このパックの分は取り消した'});rep.findings.push(...p.findings);}
 if(opt.dev||opt.validate)rep.findings.push(...validate(L,opt).findings);
 rep.lines=summary(rep);
 if(opt.report!==false)report(rep,opt);
 return rep;}
// ブラウザの console へ。壊れたパックは本番でも警告を出す（どのファイルか分かるように）。件数・検査の結果は開発時（dev）だけ
function report(rep,opt){
 const con=opt.console||root.console;if(!con)return;
 for(const p of rep.packs)if(!p.ok)con.warn('[台詞パック] '+p.file+' は入れずに続けます: '+p.error);
 if(!rep.dev)return;
 const mine=rep.findings.filter(f=>f.pack!=='heian-lines.js');
 (mine.length?con.warn:con.info).call(con,'[台詞パック]\n'+rep.lines.join('\n'));}
const api={load,loadSync,validate,summary,fmt,condProblem,count,
 vocab:{WHEN,IFS,ERA,FIXED_AT,FIXED_WHO,SAY_KEYS,TALK_KEYS,DIALOG_KEYS,NODE_KEYS,eraOK,dateOK,eraParse,internalState}};
root.HEIAN_CONTENT=api;
if(typeof module!=='undefined'&&module.exports)module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
