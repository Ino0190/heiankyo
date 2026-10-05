// 平安京 体験層（Director）。3層分離（街＝CadKit/index.html・人＝residents.json/heian-lines.js・体験＝このファイル）の3つめ。
// 読み込み: CadKit/index.html の startHeianGame が loadHeianDataFile('heianDirector','heian-director.js') で読み、init(api) でエンジンの部品を受け取る。
// 約束（2026-10-05）
// ・classic script。エンジン（<script type="module">）の変数は見えない。要るものは init で受け取った api と、呼び出しの引数 ws（heianWorldState）だけを使う
// ・DOM と CSS はエンジンの api.toast が持つ。ここは文面と状態だけ
// ・このファイルは焼き込みの照合キー（index.html の script 本文の SHA-256）に入らない＝直しても bake は要らない。逆に、焼き込みの形を変えるコードはここへ置かない
// ・クエスト・門籍（heianQuest*）はエンジンに残す（台詞の条件から同期で毎回呼ばれ、読めなかったとき進行が消えるため）
// ・読めなかったときはエンジン側の HEIAN_DIRECTOR_NULL が代わりに応える（今日の都が出ない・なじみ0）。エンジンは止まらない
(function(){'use strict';
let api=null;
const D={
 version:1,
 ready:false, // init が済んだら true。エンジンは ready の間だけこれを使う
 init(a){api=a||null;D.ready=!!api;return D;},
 // ---- 今日の都: worldState を読んで、その日の都の表情を一言で迎える。ページを開いている間、日が変わるたびに一度
 todayDay:null,
 todayLine(ws){const en=ws.lang==='en',dro=ws.drought||0;
  const season=en?{spring:'Spring',summer:'Summer',autumn:'Autumn',winter:'Winter'}[ws.season]:{spring:'春',summer:'夏',autumn:'秋',winter:'冬'}[ws.season];
  const weather=en?(dro>=2?'a long drought':dro>=1?'a dry spell':{clear:'clear skies',cloudy:'grey skies',rain:'rain'}[ws.weather]):(dro>=2?'大日照り続き':dro>=1?'日照り続き':{clear:'晴れ',cloudy:'曇り',rain:'雨'}[ws.weather]);
  const market=en?(ws.open==='eastMarket'?'The East Market trades today.':'The West Market trades today.'):(ws.open==='eastMarket'?'東市が立つ日。':'西市が立つ日。'); // 市は半月交替で毎日どちらかが立つ
  return en?`${season}, ${weather}. ${market}`:`${season}の${weather}。${market}`;},
 // 台詞の更新ごとに呼ばれる。日が変わっていれば迎えの札を出す
 onScan(ws){if(D.todayDay===ws.day)return;D.todayDay=ws.day;api?.toast?.({cls:'heian-today-toast',title:ws.lang==='en'?'The city today':'今日の都',text:D.todayLine(ws),ms:5200});},
 // ---- なじみ度（設計: residents/通う・顔なじみの仕組み_設計 ＆ なじみ度で変わる台詞）。点は減らない。段 1/3/6/10/15
 najimiState:(()=>{try{return JSON.parse(localStorage.getItem('heian-najimi')||'{}')||{};}catch(e){return{};}})(),
 najimiSaveAt:0,
 najimiSave(){const n=performance.now();if(n-D.najimiSaveAt<4000)return;D.najimiSaveAt=n;try{localStorage.setItem('heian-najimi',JSON.stringify(D.najimiState));}catch(e){}},
 najimiRec(id){return D.najimiState[id]||(D.najimiState[id]={pts:0,lastDay:0,metDay:0,talkDay:0,lineDay:0,awhile:false});},
 najimi(id){return D.najimiRec(id).pts;},
 najimiRawLevel(id){const p=D.najimiRec(id).pts;return p>=15?5:p>=10?4:p>=6?3:p>=3?2:p>=1?1:0;},
 // 名乗り（intro）を聞き終えるまでは本音段へ上げない＝未了なら最大2（顔なじみ）で頭打ち。聞いた段は api.introStep(id) で受け取る
 najimiLevel(ch){const lv=D.najimiRawLevel(ch.id),il=ch.intro?ch.intro.length:0,st=api?.introStep?.(ch.id)||0;return(il&&st<il)?Math.min(lv,2):lv;},
 najimiMeet(id,day){const r=D.najimiRec(id);if(r.lastDay&&day>r.lastDay)r.awhile=(day-r.lastDay)>=7;if(r.metDay!==day){r.pts+=0.25;r.metDay=day;}r.lastDay=day;D.najimiSave();},
 najimiTalk(id,day){const r=D.najimiRec(id);if(r.talkDay!==day){r.pts+=0.5;r.talkDay=day;D.najimiSave();}},
 najimiAdd(id,pts){const r=D.najimiRec(id);r.pts+=pts;D.najimiSave();}, // 届け物+1・場面+1・達成+2（都度・将来のquest連動用）
 // その日まだなら、なじみの一言（7日ぶりは away）を返す。game.najimi={lv:[5段],away,era?}（着手案16の形）。無ければ null＝従来の挙動へ素通り
 najimiLine(ch,day){const g=ch.game&&ch.game.najimi;if(!g||!g.lv)return null;const r=D.najimiRec(ch.id);if(r.lineDay===day)return null;
  const lv=D.najimiLevel(ch);let line=null;
  if(r.awhile&&g.away){line=g.away;r.awhile=false;}else if(lv>=1){line=g.lv[lv-1]||null;} // era（段での差し替え）は年の進行の実装後
  if(line){r.lineDay=day;D.najimiSave();}return line;},
 // ---- 1日に1人から聞ける話の数（2026-10-05井内さん「1人と話していくとどんどんいろんな話を聞けてしまう」→案3）。
 // なじみの段（0〜5）で増える。名前の無い町の人は stranger。数えるのはエンジン側が「話の節」と決めた所だけ（身の上・近ごろ・言い伝え・噂・聞き込み・解説など）。
 // 頼みごとの節目・あいさつ・別れ・時刻や市の問いは数えない。日が変わると戻る。数はここを直せば焼き込み無しで調整できる
 talkCaps:{stranger:2,lv:[2,2,3,4,5,5]},
 talkState:(()=>{try{const v=JSON.parse(localStorage.getItem('heian-talk')||'null');return v&&typeof v.used==='object'?v:{day:null,used:{}};}catch(e){return{day:null,used:{}};}})(),
 talkRoll(day){if(D.talkState.day!==day)D.talkState={day,used:{}};},
 talkCap(ch){return ch?(D.talkCaps.lv[D.najimiLevel(ch)]??2):D.talkCaps.stranger;},
 talkLeft(key,day,ch){D.talkRoll(day);return Math.max(0,D.talkCap(ch)-(D.talkState.used[key]||0));},
 talkUse(key,day){D.talkRoll(day);D.talkState.used[key]=(D.talkState.used[key]||0)+1;try{localStorage.setItem('heian-talk',JSON.stringify(D.talkState));}catch(e){}},
 // 検証用
 inspect(){return{version:D.version,ready:D.ready,todayDay:D.todayDay,najimiPeople:Object.keys(D.najimiState).length};}
};
window.heianDirector=D;
})();
