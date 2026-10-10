// 平安京 環境層（2026-10-10 井内さん「A案で」）
// 季節・霞・朝モヤなど「形でなく見た目の値」で決まるものをここに置く。
// 🚫 CadKit/index.html の script 全文が焼き込みの照合キー。ここは外部ファイルなので、直しても bake は要らない（heian-lines.js・heian-director.js と同じ流儀）。
// エンジンとの接点は init(api) で渡す api と、毎フレームの update() だけ。読めない・壊れたときもエンジンは止まらない。
// 調整: URL に ?env=1 で調整パネル（霞・モヤ・時刻・季節）。値は localStorage に保存でき、決まったらここの DEFAULTS へ書き写す。
//       ?haze=0..3 / ?mist=0..3 で強さの倍率だけ URL からも決められる（0で無効）。
(function(){
'use strict';
const DEFAULTS={
 // 霞（遠景の空気遠近）: 遠くほど地平の色へ寄る。🚫 2026-09-25 に入れて外した（山が白く抜けて平板・空の地平と色が合わない）。
 //  ⇒ ①色は空の地平の色から毎フレーム取り青みへ寄せる ②最大でも半分（シェーダの上限）③地上を歩く時だけ・飛行中は0へ消す ④季節・朝・雨で強さを変える
 haze:{on:true,strength:1.0,blue:0.35,near:3000,farBase:50000,
  groundAlt:[350,2200],   // カメラが地面からこの高さ（単位は10＝1m）以下で全開、上で0へ
  fadeSec:1.6,            // 飛行へ入る・出るときの消え方
  rainBoost:0.35,morningBoost:0.5,
  // 年の日（2月7日＋d）ごとの強さの倍率。春の霞・梅雨と夏の湿り気で濃く、冬は澄む
  season:[[0,.5],[40,.7],[75,.95],[120,1.0],[165,1.2],[215,1.1],[250,.8],[290,.55],[340,.4],[366,.5]]},
 // 朝モヤ: 川と堀川の上に低く漂う霞んだ帯。日の出の前後だけ。秋〜冬の朝に濃く、夏は薄い
 mist:{on:true,strength:1.0,count:90,radius:9000,size:[500,1100],height:[14,48],opacity:0.34,
  beforeSunrise:1.2,afterSunrise:2.6,
  season:[[0,.8],[75,.5],[150,.2],[220,.25],[250,.7],[290,1],[340,1],[366,.8]]}
};
const clamp=(v,a,b)=>Math.min(b,Math.max(a,v)),sstep=(x,a,b)=>{const t=clamp((x-a)/(b-a),0,1);return t*t*(3-2*t);};
const curve=(tab,d)=>{d=((d%365)+365)%365;for(let i=1;i<tab.length;i++){if(d<=tab[i][0]){const[a,fa]=tab[i-1],[b,fb]=tab[i],t=(d-a)/Math.max(1e-6,b-a);return fa+(fb-fa)*t*t*(3-2*t);}}return tab[tab.length-1][1];};
const clone=o=>JSON.parse(JSON.stringify(o));
const merge=(base,add)=>{for(const k of Object.keys(add||{})){if(add[k]&&typeof add[k]==='object'&&!Array.isArray(add[k]))merge(base[k]=base[k]||{},add[k]);else base[k]=add[k];}return base;};
const hash=(a,b)=>{const v=Math.sin(a*12.9898+b*78.233)*43758.5453;return v-Math.floor(v);};
const Q=new URLSearchParams(location.search);
let api=null,T=null,P=clone(DEFAULTS),fog=null,fadeNow=1,lastMs=0,lastInfo=null;
const mist={group:null,slots:[],cand:null,assigned:new Map(),lastX:1e9,lastZ:1e9,lastAt:0,active:0,alpha:0};
// ---- 霞 ---------------------------------------------------------------------------------------
// three@0.160 の線形フォグの式（smoothstep で far では100%）を、「始まりから指数で寄り、最大でも半分」に差し替える。
// 🚫 100%にすると遠い山が地平の色に溶けて平板になる。near〜far は「この距離で約半分の半分（≒.47）」の目安として使う。
function patchFogChunk(){const C=T.ShaderChunk;if(!C||!C.fog_fragment||C.fog_fragment.includes('heianHaze'))return;
 C.fog_fragment=C.fog_fragment.replace(/float fogFactor = smoothstep\( fogNear, fogFar, vFogDepth \);/,
  'float fogFactor = 0.5 * ( 1.0 - exp( - 3.0 * max( vFogDepth - fogNear, 0.0 ) / max( fogFar - fogNear, 1.0 ) ) ); /* heianHaze */');}
function hazeStrength(st){const H=P.haze;let s=H.strength*(Number(Q.get('haze'))>=0&&Q.has('haze')?Number(Q.get('haze')):1);
 s*=curve(H.season,st.doy);
 const sr=st.sunrise,morn=sstep(st.hour,sr-1.2,sr-.2)*(1-sstep(st.hour,sr+.8,sr+2.6));
 s*=1+H.morningBoost*morn;
 s*=1+H.rainBoost*(st.weather==='rain'?1:st.weather==='cloudy'?.4:0);
 return s;}
function updateHaze(st,dt){const H=P.haze;if(!fog)return;
 const alt=st.cameraY-st.groundY,groundK=1-sstep(alt,H.groundAlt[0],H.groundAlt[1]);
 const want=(!H.on||st.flying||!st.gameMode)?0:groundK;
 fadeNow+=(want-fadeNow)*clamp(dt/Math.max(.05,H.fadeSec),0,1);
 const s=hazeStrength(st)*fadeNow;
 const horizon=api.horizonColor(),lum=horizon.r*.3+horizon.g*.59+horizon.b*.11;
 const blue=new T.Color(0xb9cde0).multiplyScalar(Math.min(1,lum/.88));
 fog.color.copy(horizon).lerp(blue,H.blue);
 fog.near=H.near;fog.far=s<.02?1e9:H.near+H.farBase/s;
 lastInfo={strength:Math.round(s*1000)/1000,fade:Math.round(fadeNow*100)/100,near:fog.near,far:Math.round(fog.far),color:'#'+fog.color.getHexString()};}
// ---- 朝モヤ -----------------------------------------------------------------------------------
// 川・堀川の流路を一定間隔の点にし、カメラの近くの点にだけ「柔らかい霞の板」（常にこちらを向く板）を置く。点が増えても板の数は count まで
function buildCandidates(){const xs=[],zs=[],ws=[],STEP=420;
 const addLine=(pts,half)=>{for(let i=1;i<pts.length;i++){const[ax,az]=pts[i-1],[bx,bz]=pts[i],L=Math.hypot(bx-ax,bz-az),n=Math.max(1,Math.round(L/STEP));
  for(let k=0;k<n;k++){const t=k/n;xs.push(ax+(bx-ax)*t);zs.push(az+(bz-az)*t);ws.push(half);}}};
 for(const r of api.rivers()){const name=(r.name||'').replace(/\s+/g,'');if(!/鴨川|桂川|宇治川|天神川|紙屋川|高瀬川|白河|賀茂/.test(name)&&(r.widthM||0)<8)continue;
  addLine(r.points,(r.widthM||12)*5);}
 const c=api.canals;if(c)for(const sx of[1,-1])addLine([[sx*c.x,c.z0],[sx*c.x,c.z1]],40);
 return{xs:Float32Array.from(xs),zs:Float32Array.from(zs),ws:Float32Array.from(ws),n:xs.length};}
function makeTexture(){const cv=document.createElement('canvas');cv.width=128;cv.height=64;const g=cv.getContext('2d');
 const gr=g.createRadialGradient(64,32,2,64,32,62);gr.addColorStop(0,'rgba(255,255,255,.95)');gr.addColorStop(.35,'rgba(255,255,255,.55)');gr.addColorStop(1,'rgba(255,255,255,0)');
 g.save();g.translate(0,0);g.scale(1,.5);g.translate(0,32);g.fillStyle=gr;g.fillRect(0,-32,128,128);g.restore();
 const t=new T.CanvasTexture(cv);t.colorSpace=T.SRGBColorSpace;return t;}
function buildMist(){const M=P.mist;mist.group=new T.Group();mist.group.name='平安京・朝モヤ（環境層）';
 const tex=makeTexture();
 for(let i=0;i<M.count;i++){const mat=new T.SpriteMaterial({map:tex,color:0xf0f4f6,transparent:true,opacity:0,depthWrite:false,fog:false});
  const s=new T.Sprite(mat);s.visible=false;s.frustumCulled=false;s.renderOrder=3;mist.group.add(s);mist.slots.push({s,idx:-1,a:0,base:0,sway:hash(i,3)*6.28,w:700,h:300,y:0});}
 api.scene.add(mist.group);}
function reassign(st){const M=P.mist,cam=api.camera.position;if(!mist.cand)mist.cand=buildCandidates();const C=mist.cand;if(!C.n)return;
 const R2=M.radius*M.radius,list=[];
 for(let i=0;i<C.n;i++){const dx=C.xs[i]-cam.x,dz=C.zs[i]-cam.z,d=dx*dx+dz*dz;if(d<R2)list.push([d,i]);}
 list.sort((a,b)=>a[0]-b[0]);const want=new Set(list.slice(0,M.count).map(q=>q[1]));
 for(const sl of mist.slots)if(sl.idx>=0&&!want.has(sl.idx)){mist.assigned.delete(sl.idx);sl.idx=-1;}
 for(const i of want){if(mist.assigned.has(i))continue;const sl=mist.slots.find(q=>q.idx<0);if(!sl)break;
  sl.idx=i;mist.assigned.set(i,sl);const ang=hash(i,1)*6.283,half=C.ws[i]*1.2,off=(hash(i,2)-.5)*2*half;
  sl.x=C.xs[i]+Math.cos(ang)*off;sl.z=C.zs[i]+Math.sin(ang)*off;const gy=api.terrainY(sl.x,sl.z);
  sl.w=M.size[0]+hash(i,4)*(M.size[1]-M.size[0]);sl.h=M.height[0]+hash(i,5)*(M.height[1]-M.height[0]);sl.sh=sl.w*.12+sl.h;sl.y=(Number.isFinite(gy)?gy:0)+sl.sh*.5+2;sl.base=.6+.4*hash(i,6);}}
function updateMist(st,dt){const M=P.mist;if(!mist.group)return;
 const k=(Q.has('mist')?Number(Q.get('mist')):1)*M.strength;
 const alt=st.cameraY-st.groundY,altK=1-sstep(alt,500,4000);
 const sr=st.sunrise,morn=sstep(st.hour,sr-M.beforeSunrise,sr-.2)*(1-sstep(st.hour,sr+.4,sr+M.afterSunrise));
 const wx=st.weather==='rain'?.5:1;
 const amp=M.on&&st.gameMode?k*curve(M.season,st.doy)*morn*altK*wx:0;
 mist.alpha=amp;mist.group.visible=amp>.003||mist.slots.some(q=>q.a>.003);
 if(!mist.group.visible)return;
 const cam=api.camera.position,now=performance.now();
 if(now-mist.lastAt>600&&(Math.hypot(cam.x-mist.lastX,cam.z-mist.lastZ)>400||mist.lastAt===0)){mist.lastAt=now;mist.lastX=cam.x;mist.lastZ=cam.z;reassign(st);}
 const tint=fog?fog.color:api.horizonColor(),col=new T.Color(0xf0f4f6).lerp(tint,.35),t=now/1000;let act=0;
 for(const sl of mist.slots){const target=sl.idx>=0?amp*sl.base:0;sl.a+=(target-sl.a)*clamp(dt/1.5,0,1);
  const vis=sl.a>.003;sl.s.visible=vis;if(!vis)continue;act++;
  const dc=Math.hypot(sl.x-cam.x,sl.z-cam.z); // 🚫 地面や近い面で切れた縁が見えた（2026-10-10）。下端は地面より上に置き、近いものは薄くする
  sl.s.material.opacity=clamp(sl.a*M.opacity*sstep(dc,200,900),0,.6);sl.s.material.color.copy(col);
  sl.s.position.set(sl.x+Math.sin(t*.05+sl.sway)*30,sl.y+Math.sin(t*.11+sl.sway)*3,sl.z+Math.cos(t*.04+sl.sway)*30);sl.s.scale.set(sl.w,sl.sh||sl.h,1);}
 mist.active=act;}
// ---- 調整パネル（?env=1）----------------------------------------------------------------------
const TUNE_KEY='heian-env-tune';
function loadTune(){try{const j=JSON.parse(localStorage.getItem(TUNE_KEY)||'null');if(j)merge(P,j);}catch(e){}}
function panel(){if(document.getElementById('heianEnvPanel'))return;const box=document.createElement('div');box.id='heianEnvPanel';
 box.style.cssText='position:fixed;right:12px;bottom:12px;z-index:60;width:300px;max-height:80vh;overflow:auto;background:rgba(24,30,40,.92);color:#eef1f4;font:14px/1.5 system-ui,sans-serif;padding:10px 12px;border:1px solid #556;border-radius:4px';
 const row=(label,get,set,min,max,step)=>{const w=document.createElement('label');w.style.cssText='display:block;margin:4px 0';const v=document.createElement('span');v.style.float='right';
  const inp=document.createElement('input');inp.type='range';inp.min=min;inp.max=max;inp.step=step;inp.value=get();inp.style.cssText='width:100%';
  const show=()=>{v.textContent=Number(inp.value).toFixed(step<1?2:0);};show();inp.oninput=()=>{set(Number(inp.value));show();};
  w.append(label,v,document.createElement('br'),inp);box.append(w);return inp;};
 const h=document.createElement('div');h.textContent='環境の調整（?env=1）';h.style.cssText='font-weight:700;margin-bottom:4px';box.append(h);
 row('霞の強さ',()=>P.haze.strength,v=>P.haze.strength=v,0,3,.05);row('霞の青み',()=>P.haze.blue,v=>P.haze.blue=v,0,1,.05);
 row('朝の霞の増し',()=>P.haze.morningBoost,v=>P.haze.morningBoost=v,0,2,.05);
 row('朝モヤの強さ',()=>P.mist.strength,v=>P.mist.strength=v,0,3,.05);row('朝モヤの濃さ(不透明度)',()=>P.mist.opacity,v=>P.mist.opacity=v,0,.6,.01);
 row('時刻',()=>api.state().hour,v=>api.setClock(v),0,24,.05);
 const seasons=document.createElement('div');seasons.style.margin='6px 0';
 for(const[k,l]of[['spring','春'],['summer','夏'],['autumn','秋'],['winter','冬']]){const b=document.createElement('button');b.textContent=l;b.style.cssText='font-size:14px;margin-right:6px;padding:2px 10px';b.onclick=()=>api.lockSeason(k);seasons.append(b);}
 box.append(seasons);
 const info=document.createElement('pre');info.style.cssText='font-size:13px;margin:6px 0;white-space:pre-wrap';box.append(info);
 setInterval(()=>{const i=lastInfo;info.textContent=i?'霞 '+i.strength+'（地上 '+i.fade+'）遠 '+i.far+'\n朝モヤ 板'+mist.active+' 年の日 '+Math.round(api.state().doy):'';},500);
 const bar=document.createElement('div');
 for(const[l,f]of[['保存',()=>{try{localStorage.setItem(TUNE_KEY,JSON.stringify({haze:{strength:P.haze.strength,blue:P.haze.blue,morningBoost:P.haze.morningBoost},mist:{strength:P.mist.strength,opacity:P.mist.opacity}}));}catch(e){}}],
  ['値をコピー',()=>{const t=JSON.stringify({haze:{strength:P.haze.strength,blue:P.haze.blue,morningBoost:P.haze.morningBoost},mist:{strength:P.mist.strength,opacity:P.mist.opacity}});navigator.clipboard?.writeText(t);}],
  ['初期値',()=>{localStorage.removeItem(TUNE_KEY);P=clone(DEFAULTS);}]]){const b=document.createElement('button');b.textContent=l;b.style.cssText='font-size:14px;margin-right:6px;padding:2px 10px';b.onclick=f;bar.append(b);}
 box.append(bar);document.body.appendChild(box);}
// ---- 入口 -------------------------------------------------------------------------------------
const env={version:'2026-10-10',defaults:DEFAULTS,
 init(a){api=a;T=a.THREE;patchFogChunk();
  if(Q.get('env'))loadTune();
  // 🚫 フォグは最初から入れておく（後から入れると全材質の組み直しが要る）。強さ0（far が遠い）から始める
  fog=new T.Fog(0xdfe6ea,P.haze.near,1e9);a.scene.fog=fog;
  buildMist();if(Q.get('env'))panel();lastMs=performance.now();return true;},
 update(){if(!api)return;const now=performance.now(),dt=Math.min(.2,(now-lastMs)/1000);lastMs=now;
  const st=api.state();
  try{updateHaze(st,dt);}catch(e){console.warn('霞の更新に失敗',e);}
  try{updateMist(st,dt);}catch(e){console.warn('朝モヤの更新に失敗',e);}},
 tune(o){merge(P,o||{});return P;},
 panel,
 inspect(){return{version:env.version,haze:lastInfo,mist:{slots:mist.slots.length,active:mist.active,alpha:Math.round(mist.alpha*1000)/1000,candidates:mist.cand?.n??null},params:P};},
 dispose(){if(!api)return;try{if(api.scene.fog===fog)api.scene.fog=null;mist.group&&api.scene.remove(mist.group);document.getElementById('heianEnvPanel')?.remove();}catch(e){}api=null;}};
window.heianEnv=env;
})();
