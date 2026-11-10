// 鞠の童（風船ロボ）だけの動き（噴射・滑空・浮き・飛ぶのを見た人）（2026-11-10 t70c 井内さんの調べ 4 の②「ロボごとに動きを別々に直せる仕組み」）。CadKit/index.html から移した。
// 読み込み: CadKit/index.html の <head> が <script src="robots/heian-maru.js"> で先に読み、module の一番初めで window.HEIAN_ROBOT_MARU_INSTALL(K) を呼ぶ。
// ここの関数は本体（module）の中と同じ名前で、本体のほかの所からそのまま呼ばれる（本体が同じ名前の const で受け取る）。
// 本体の名前の使い方:
//   ・本体の function と import（THREE など）は、下の「本体から受け取る」で1回だけ受け取る（名前はそのまま）
//   ・本体の let / const（値が変わる・後で決まる）は __K.名前（K の getter/setter）。新しく本体の let / const を使う時は、本体の HEIAN_ROBOT_K に名前を足す
// 直したら: node --check でこのファイルの構文を見る（python3 CadKit/heian-syntax-check.py でも見る）→ bash 平安京/QA/robot-check/robot-check.sh
//   焼き込み（bake）は要らない（形ではなく動き）。公開は python3 CadKit/heian-pages.py（このファイルも写す）
window.HEIAN_ROBOT_MARU_INSTALL=function(__K){'use strict';
// ---- 本体から受け取る（function・import。install の時に1回だけ）
const {THREE,heianFootSurfaceAt,heianGateDecksBuild,heianRobotLandPuff,heianSfxAudio,heianSfxCount,heianSfxNoise,heianSfxRobotFoot,heianSfxTone,heianSpeechProject,heianSpeechShow,heianWalkGroundY,heianWalkGroundYAt,setStatus}=__K.direct;
// ---- ここから移した関数（11個・本体の中での並び順）
// 2026-11-04 噴射の天井（足もとからの高さ）。門の楼上の縁のそば（外の箱＋8m）では、縁の上 3m まで上がれる（井内さん「楼門の高欄には登れる」）
function heianRocketCeilAt(x,z,gy){let c=__K.HEIAN_ROCKET.ceil;if(!Number.isFinite(gy))return c;const m=80;for(const D of heianGateDecksBuild()){const O=D.outer;if(x<O.x0-m||x>O.x1+m||z<O.z0-m||z>O.z1+m)continue;c=Math.max(c,D.top-gy+30);}return c;}
// まるのホバーの前傾（2026-11-01 井内さん「ホバー中、もっと前傾にできるといいな。まるロボット」）: 1.179 は体ごと 22°（滑空は 28°）傾けた。
//  →井内さん「ホバー１というポーズを作ったよ」: 姿勢 HEIAN_MARU_HOVER_POSE（前傾 30.8）に替え、体ごとの傾けはやめた（重ねると 50° を超える）
function heianMaruFloat(rt){const F=__K.HEIAN_MARU_FLOAT,now=performance.now()/1000,W=__K.heianWalk;
 const ok=/^maru/.test(rt.robotId||'')&&rt.visible!==false&&!rt.moving&&!rt.hovering&&!rt.flying&&!rt.carry&&!rt.posePin&&(rt.squash??1)>=.999&&(!rt.action||/^(peace|wave)$/.test(rt.action.name))&&!W?.ledge&&!W?.bounce&&!W?.riding&&!W?.flying;
 if(!ok)rt.floatSince=null;else if(rt.floatSince==null)rt.floatSince=now;
 const want=ok&&now-rt.floatSince>=F.delay,dt=Math.min(.1,Math.max(0,now-(rt.floatT??now)));rt.floatT=now;
 const k0=rt.floatK||0,k=want?Math.min(1,k0+dt/F.up):Math.max(0,k0-dt/F.down);rt.floatK=k;if(k<=1e-3)return null;
 const s=THREE.MathUtils.smoothstep(k,0,1),ph=now*F.w+(rt.floatPh??(rt.floatPh=Math.random()*6.28)),sn=Math.sin(ph); /* 2026-11-04 井内さん「膨らむと浮いて、しぼむと下がるがこれは最高！…いつでもそうなるように」: 浮く上下を呼吸と同じ周期・位相にそろえる(いちばん膨らんだ時にいちばん高い)。🚫 前は浮きの周期(2π/1.7≈3.70s・位相はランダム)が呼吸(3.6s)と別で、たまたま合った時だけ膨らみ＝最高点に見え、少しずつずれていた */ const _B=rt.breath||{},_bp=Math.max(.1,_B.period||3.6),_bc=_B.freeze?(_B.phase||0):(now/_bp+(_B.phase||0)),bsn=-Math.cos((_bc-Math.floor(_bc))*Math.PI*2);
 return{k:s,lift:s*(F.h+F.amp*bsn),roll:s*F.roll*Math.sin(ph*.53+1.1),
  pose:{右肩開き:8+3*Math.sin(ph*.8),左肩開き:8+3*Math.sin(ph*.8+.9),右肘曲げ:-8,左肘曲げ:-8,右股:-3,左股:-3,右膝曲げ:10+3*sn,左膝曲げ:10+3*Math.sin(ph+.5),右足首:-8,左足首:-8,首前後:-1.5*sn}};}
function heianRocketBusy(){try{const S=__K.heianRocket,n=performance.now()/1000;return !!(__K.heianWalk&&__K.heianWalk.flying)||!!S.hold||(S.landAt>0&&n-S.landAt<1.2);}catch(e){return false;}} /* 2026-11-04 GC 噴射・滑空中か、着地から1.2秒以内か。自動の話しかけを止めるのに使う */
function heianRocketThrust(){const R=__K.HEIAN_ROCKET,S=__K.heianRocket,rt=__K.heianTinRobotRuntime;if(!rt||!__K.heianWalk?.active)return false;
 if(S.fuel<R.cost){S.empty++;setStatus(__K.heianLang==='en'?'Out of fuel. It refills when you let go of Space.':'燃料が切れた（Space を離すと少しずつ戻る）');const A=heianSfxAudio();if(A?.on)heianSfxRocketEmpty(A,A.ctx.currentTime+.01);return false;}
 const _wasFly=!!__K.heianWalk.flying;if(!__K.heianWalk.thrust(__K.heianWalk.flying?R.dv*R.air:R.dv))return false;if(!_wasFly){try{heianRobotLandPuff(rt,1.5);if(rt.jelly)rt.jelly.boing={amp:-.09,w:13,decay:4.5,tilt:0,dur:.65,t0:performance.now()};}catch(e){}}/* fix-t68 maru-fly2 F5: 地面から噴いた瞬間、足もとに砂ぼこりの輪を立て、体を縦に伸ばす(ぷるん) */
 const now=performance.now()/1000;S.fuel=Math.max(0,S.fuel-R.cost);S.thrusts++;rt.flyThrustAt=now;__K.heianRobotActionLog.rocket=(__K.heianRobotActionLog.rocket||0)+1;
 S.hold=true;S.holdBy='key';S.holdT0=now;S.burnAt=now;S.puff=now;S.emptyHold=false; // 押している間は噴き続ける（heianRocketTick・離す＝heianRocketRelease）
 const A=heianSfxAudio();if(A?.on)heianSfxRocket(A,A.ctx.currentTime+.01);heianSfxCount('rocket');heianRocketGauge(true);return true;}
function heianRocketFlyChange(on,info){const rt=__K.heianTinRobotRuntime,S=__K.heianRocket;S.flying=!!on;if(on)return;S.landAt=performance.now()/1000;if(!rt||info?.warp)return;
 const v=Math.abs(info?.vy||0);heianRobotLandPuff(rt,1+Math.min(1,v/40)*.6);heianSfxRobotFoot('land',heianFootSurfaceAt(rt.position.x,rt.position.z));
 if(rt.jelly)rt.jelly.boing={amp:.08,w:16,decay:4,tilt:0,dur:.7,t0:performance.now()};} // 降りた所で小さくぷるん
// 毎コマ: 燃料を戻し、目盛りを動かす
function heianRocketTick(){const S=__K.heianRocket,R=__K.HEIAN_ROCKET,H=R.hold,now=performance.now()/1000,dt=Math.min(.1,Math.max(0,now-(S.t||now)));S.t=now;const maru=__K.heianRobotIsMaru()&&!!__K.heianWalk?.active;
 if(S.hold&&(!maru||__K.heianInterior||!__K.heianWalk.flying&&now-S.holdT0>.3))S.hold=false; // まるでない・屋内・降りた（押したままでも、地面に着いたら噴射は終わり）
 if(S.hold&&now-S.holdT0>H.after){ // 押している間: 上へ押し続け、燃料を使う。炎は強いまま・音は H.puff 秒ごと
  // 上がる速さは足もとからの高さで抑える（低い所 3m/秒・ceil で 0）。🚫 押し続けて足すだけでは勢いで 9m まで上がった（撮影の検査）
  const F=__K.heianWalk.flying,wp=__K.heianWalk.position,gy=heianWalkGroundYAt(wp.x,wp.z,__K.heianPerchRef),vt=Number.isFinite(gy)&&F?30*THREE.MathUtils.clamp((R.ceil-(F.y-gy))/R.ceil,0,1):0;
  if(S.fuel>0){if(F&&F.vy<vt)__K.heianWalk.thrust(H.acc*dt);if(F){S.fuel=Math.max(0,S.fuel-H.burn*dt);S.burnAt=now;const rt=__K.heianTinRobotRuntime;if(rt)rt.flyThrustAt=now;
    if(now-S.puff>H.puff){S.puff=now;const A=heianSfxAudio();if(A?.on)heianSfxRocket(A,A.ctx.currentTime+.01);}}}
  else if(!S.emptyHold){S.emptyHold=true;S.empty++;setStatus(__K.heianLang==='en'?'Out of fuel. It refills when you let go of Space.':'燃料が切れた（Space を離すと少しずつ戻る）');const A=heianSfxAudio();if(A?.on)heianSfxRocketEmpty(A,A.ctx.currentTime+.01);}}
 if(maru&&!S.hold&&now-Math.max(S.burnAt||0,S.landAt||0)>R.delay)S.fuel=Math.min(1,S.fuel+R.charge*dt);{const F=maru?__K.heianWalk.flying:null,vy=F?F.vy:0;__K.heianSfx.floatState={want:F?(F.drift?.5:1):0,f:Math.round(THREE.MathUtils.clamp(190+vy*3.2,120,420)),vy:Math.round(vy)};}/* fix-t68 maru-fly2 F6: 浮いている間は鳴らし、上がる時は高く(最大420Hz)・降りる時は低く(最小120Hz)。縁から風船で降りる間は半分の音量 */ // 離していれば浮いていても戻る（2026-11-01）
 heianRocketGauge(maru);}
// 噴射の押し終わり（Space を離す・ボタンから指を離す・窓を離れる）。by＝押し始めた所（キーで押したのをマウスのクリックで止めない）
function heianRocketRelease(by){const S=__K.heianRocket;if(S.hold&&(!by||S.holdBy===by))S.hold=false;}
function heianRocketGauge(maru){const S=__K.heianRocket,show=maru&&(S.fuel<.999||(__K.heianWalk?.flying&&!__K.heianWalk.flying.drift))&&!__K.heianPhotoMode&&!__K.heianInterior;let el=S.el;if(!show&&!el)return;
 if(!el){const hud=document.getElementById('heianGameHud');if(!hud)return;el=S.el=document.createElement('div');el.className='heian-rocket-gauge';el.setAttribute('aria-hidden','true');
  el.style.cssText='position:absolute;left:0;top:0;width:8px;height:44px;border-radius:3px;background:rgba(24,18,12,.45);border:1px solid rgba(255,240,220,.75);overflow:hidden;pointer-events:none;transition:opacity .4s;z-index:4;opacity:0';
  const f=S.fill=document.createElement('div');f.style.cssText='position:absolute;left:0;right:0;bottom:0;height:100%;background:#ffb04a';el.appendChild(f);hud.appendChild(el);}
 el.style.opacity=show?'1':'0';if(!show)return;const rt=__K.heianTinRobotRuntime,hud=el.parentElement;
 if(rt&&hud){const v=new THREE.Vector3(rt.position.x,rt.position.y+14,rt.position.z).project(__K.camera),r=__K.renderer.domElement.getBoundingClientRect(),h=hud.getBoundingClientRect();
  el.style.transform='translate('+Math.round(r.left-h.left+(v.x*.5+.5)*r.width+46)+'px,'+Math.round(r.top-h.top+(.5-v.y*.5)*r.height-22)+'px)';}
 S.fill.style.height=Math.round(S.fuel*100)+'%';S.fill.style.background=S.fuel<__K.HEIAN_ROCKET.low?'#e35e31':'#ffb04a';}
// 噴射の音: 「シュボッ」（帯域の雑音が上へ掃く＋低い唸り）。切れたとき: 空の「プスッ」
function heianSfxRocket(A,t){heianSfxNoise(A,t,{type:'bandpass',q:.9,g:.12,d:.5,attack:.015,sweep:[380,1600]});heianSfxNoise(A,t,{type:'lowpass',q:.7,g:.08,d:.35,sweep:[900,200],attack:.005});heianSfxTone(A,t,{type:'triangle',f:95,glide:170,g:.04,d:.4,attack:.03});}
function heianSfxRocketEmpty(A,t){heianSfxNoise(A,t,{type:'bandpass',q:2,g:.04,d:.12,sweep:[900,500],attack:.005});heianSfxTone(A,t+.02,{type:'square',f:220,glide:160,g:.012,d:.1});}
function heianMaruFlySayTick(now){const S=__K.heianMaruFlySay,R=__K.HEIAN_MARU_FLY_SAY,W=__K.heianWalk,F=W?.active&&__K.heianRobotIsMaru()?W.flying:null;if(!F||F.drift){S.flying=false;return;}if(!S.flying){S.flying=true;S.said=0;S.next=now+.35;}if(S.said>=R.say||now<S.next)return;
 const p=W.position,gy=heianWalkGroundY(p.x,p.z);if(!Number.isFinite(gy)||p.y-gy<R.hi){S.next=now+.2;return;}const used=S.used||(S.used=new Map());
 const list=(__K.heianSpeech?.cands||[]).filter(c=>c.dist<R.r&&!c.char&&!__K.heianSpeechBusy(c.key,now)&&(used.get(c.key)||0)<now).sort((a,b)=>a.dist-b.dist);
 for(const c of list){const h=c.head?.();if(!h)continue;const scr=heianSpeechProject(h);if(!__K.heianSpeechFree(scr,120))continue;
  const kind=/^(童|牛飼童)$/.test(c.who)?'child':c.female||/^(北の方|姫君|女房|乳母|女|売り子|塩売り|介添えの女|母|洗い女|炊女|老女)$/.test(c.who)?'woman':'man',pool=__K.heianLang==='en'?R.en[kind]:R[kind],t=pool[(S.total+c.key.length)%pool.length];
  if(heianSpeechShow(c,t,now,{scr,talk:true})){used.set(c.key,now+R.cool);S.said++;S.total++;S.next=now+R.gap;S.last={key:c.key,who:c.who,text:t,dist:Math.round(c.dist)};heianSfxCount('maruFlySay');return;}}
 S.next=now+.3;}
// ---- 本体へ渡す（同じ名前で）
return {heianRocketCeilAt,heianMaruFloat,heianRocketBusy,heianRocketThrust,heianRocketFlyChange,heianRocketTick,heianRocketRelease,heianRocketGauge,heianSfxRocket,heianSfxRocketEmpty,heianMaruFlySayTick};};

// ==== 共通の歩きの本体（CadKit/index.html の createHeianWalkController）から移した、鞠の童だけの動き（2026-11-10 t70e 井内さん「共通の歩きの本体の分かれ道も分けて」）
//   E.名前＝歩きの本体の中の名前（getter/setter）。L.名前＝呼んだ所の名前（そのコマの向き・速さなど）。本体の分かれ道（どのロボか・どの状態か）は本体に残り、中身だけがここ
//   ここの関数の return {v:値} は「本体の update もそこで値を返して終わる」の意味（移す前の return と同じ）
window.HEIAN_WALK_MARU=function(E){'use strict';
function flyStep(dt){const t=E.terrain(),F=E.fly;if(!t){E.fly=null;E.host.onFlyChange?.(false,{vy:0});return;}const GA=(x,z,ref)=>E.host.groundAt?E.host.groundAt(x,z,ref):t.groundY(x,z);
  const GL=F.glide?E.host.flyGlide:null;if(GL){E.surge*=Math.exp(-dt*1.4);if(E.surge<.01)E.surge=0;F.vh=E.speed*E.hoverMultiplier*E.boostK();} /* surge（遠くを指した直後の一時の勢い）はホバーと同じく時間で抜く（Kiro 2026-11-03 24:00。滑空中は2266行で戻るので2294行の抜きが効かない）。2026-11-03 井内さん「鞠の童、ホバー中にジャンプしたら、移動速度はホバーの速度のまま。加速したらジャンプ中でも加速します」: 滑空の横の速さは、その時のホバーの速さ（加速の段・surge込み）のまま。drag で落とさない。boostK() は滑空中に遠くを指して boost が上がれば自動で速くなる。🚫 前は F.vh*=exp(-drag) で少しずつ落とし、噴くたびに遅くなり、滑空中に遠くを指しても速くならなかった */
  F.t+=dt;F.vy=Math.max(F.passed?-90:(GL?GL.fall:E.host.flyFall??-18),F.vy-(GL?GL.g:E.host.flyG??60)*(F.vy>0&&F.vy<20&&!F.passed?.45:1)*dt);/* fix-t68 maru-fly2 F3: 頂点の手前(上がる速さ2m/秒未満)は重力を半分弱に＝速く上がって頂点でふわっと止まる *//* 2026-11-08 (fix-k62 K2) 井内さん「なかなか降りてこない」: 地面の目的地を過ぎたら浮くのをやめ、ふつうに落ちる（落ちる速さの上限 1.8m/秒 -> 9m/秒）。浮いたままだと約16m 越えていた */let y=E.actorPosition.y+F.vy*dt,vx=0,vz=0;if(F.vy>0&&E.host.flyRoofHit?.(E.actorPosition.x,E.actorPosition.z,y)){y=E.actorPosition.y;F.vy=0;}/* fix-t67 maru-roof: 軒の下で噴いても、頭が軒に当たったらそれ以上は上がらない */
  const xAxis=(E.keys.has('KeyD')?1:0)-(E.keys.has('KeyA')?1:0),zAxis=(E.keys.has('KeyW')?1:0)-(E.keys.has('KeyS')?1:0);
  const maruAir=E.host.flyMaru?.();/* 2026-11-07 (fix-t62 maru-air) 飛ぶのはまるだけ（噴射・縁からの風船）なのでこの枝は実質まる専用 */
  if(maruAir&&xAxis){/* 2026-11-07 (fix-t62 maru-air) 井内さん「ジャンプ中に、蜘蛛と同じように左右にステアリングできると楽しそう」: 跳んでいる間 A/D で向きを空中らしくゆるやかに曲げ（A=左・D=右＝土蜘蛛の高速走行と同じ xAxis=D-A）、曲げた向きへ前の勢いも向ける。空中なので地上より小さく（約70度/秒）。自動走行中でも A/D が勝ち、離せば下の autoTarget 枝が目的地へ向け直す */F.steer=true;F.steerDir=-xAxis;if(F.roll){F.roll=null;F.rollA=0;}E.heading=Math.atan2(Math.sin(E.heading),Math.cos(E.heading))-xAxis*E.THREE.MathUtils.degToRad(70)*dt;/* 2026-11-09 (fix-t68 maru-ad) 井内さん「鞠の飛行中の左右旋回、AとDが逆じゃないか？」: 🚫 heading が増えると後ろのカメラから見て左へ回る(前 (sin h,cos h) の変化 (cos h,−sin h) がカメラの右 (−cos h,sin h) の逆向き)。前は +xAxis で D が左だった。⇒ −xAxis。測った: D で体の前が画面の右へ */E.travelHeading=E.heading;vx=Math.sin(E.heading);vz=Math.cos(E.heading);}
  else if(xAxis||zAxis){E.forward.set(-Math.sin(E.yaw),0,-Math.cos(E.yaw));E.right.set(Math.cos(E.yaw),0,-Math.sin(E.yaw));E.candidate.copy(E.forward).multiplyScalar(zAxis).addScaledVector(E.right,xAxis).normalize();vx=E.candidate.x;vz=E.candidate.z;}
  if(F.roll?.done){F.roll=null;F.rollA=0;}if(F.roll){const R=F.roll;R.t+=dt;const q=Math.min(1,R.t/R.dur);R.e=q<.5?2*q*q:1-2*(1-q)*(1-q);F.rollA=R.spin?-Math.sign(R.dv)*Math.PI*2*R.e:0;if(q>=1)R.done=true;}{const _dh=Math.atan2(Math.sin(E.heading-(F.hPrev??E.heading)),Math.cos(E.heading-(F.hPrev??E.heading)));F.hPrev=E.heading;const _om=dt>0?_dh/dt:0,_v=Math.max(E.speed*(E.host.flySpeed??1.4),F.vh||0),_tg=F.roll?.spin?0:E.THREE.MathUtils.clamp(-Math.atan(_om*_v/98)*.6,-.44,.44);F.bankA=(F.bankA||0)+(_tg-(F.bankA||0))*(1-Math.exp(-dt*6));}/* fix-t68 maru-fly2 F7: 曲がる時は曲がる側へ体を倒す。倒す角＝atan(曲がる速さ×横の速さ÷重力)×0.6・最大25°・なめらかに。1回転の間は回転を優先(倒さない) *//* 2026-11-09 (fix-t68 maru-roll) 井内さん「この動きは鞠の飛行中にも応用できるかも？」「鞠の童の空中の1回転も一緒に作って」: 1回転は時間で進める（跳ね返りなどで目的地が消えても、回り切って体がまっすぐに戻る）。回る向きは曲がる向きへ体を倒す向き */
  const vh=Math.max(E.speed*(E.host.flySpeed??1.4),F.vh||0);let rem=Infinity; // 横の速さ: ふだんは歩きの1.4倍・ホバー中に噴いたらホバーの速さ
  if(!(xAxis||zAxis)&&E.autoTarget){ // 道なりの経路は、飛んでいる間も角の手前で次の角へ（ホバーと同じ）。最後の角＝目的地の上では横に止まる
   while(E.route.length&&Math.hypot(E.autoTarget.x-E.actorPosition.x,E.autoTarget.z-E.actorPosition.z)<=Math.max(E.radius+1,Math.min(40,vh*.15))){const n=E.route.shift(),ny=t.groundY?.(n.x,n.z);E.routeRest=Math.max(0,E.routeRest-Math.hypot(n.x-E.autoTarget.x,n.z-E.autoTarget.z));E.autoTarget=new E.THREE.Vector3(n.x,Number.isFinite(ny)?ny:E.autoTarget.y,n.z);}
   const dx=E.autoTarget.x-E.actorPosition.x,dz=E.autoTarget.z-E.actorPosition.z,L=Math.hypot(dx,dz);const _gT=maruAir&&(()=>{const _tg=t.groundY?.(E.autoTarget.x,E.autoTarget.z);return !Number.isFinite(_tg)||E.autoTarget.y-_tg<=E.maxStep+8;})();/* 2026-11-08 (fix-k62 K1) 一度過ぎたら F.passed を立て、着地まで前の勢いのまま進む（向き直ると目的地の上で往復した）。着地後は歩き枝が戻る */if(_gT&&(F.passed||L<=E.radius+1)){F.passed=true;vx=Math.sin(E.travelHeading);vz=Math.cos(E.travelHeading);rem=vh*dt*.45;/* 噴射で横の勢いを半分ほどに抑える（越えるのは数m） */}else if(L>E.radius+1){vx=dx/L;vz=dz/L;rem=L-E.radius;if(maruAir){const aT=Math.atan2(dx,dz),wr=a=>Math.atan2(Math.sin(a),Math.cos(a));if(F.steerDir&&!F.roll){const sd=F.steerDir;F.steerDir=0;let dv=wr(aT-E.heading);if(Math.abs(dv)>.14&&Math.abs(dv)<Math.PI/2){F.roll={t:0,e:0,dur:E.THREE.MathUtils.clamp(.35+Math.abs(dv)*.4,.45,.9),from:E.heading,dv,spin:false};window.__heianMaruRollLog=(window.__heianMaruRollLog||[]).concat([{dev:Math.round(E.THREE.MathUtils.radToDeg(dv)),dur:+F.roll.dur.toFixed(2),spin:false}]).slice(-8);}/* fix-t68 maru-fly2 F8: 🚫 前はずれが90°より小さいと、次のコマで一度に向き直った(毎秒約540°)。⇒ 8°〜90°は0.45〜0.9秒の弧で向き直る(回らない) */else if(Math.abs(dv)>=Math.PI/2){if(Math.abs(dv)>2.97&&Math.sign(dv)!==sd)dv=sd*(Math.PI*2-Math.abs(dv));const gy=GA(E.actorPosition.x,E.actorPosition.z,E.actorPosition.y),hi=Number.isFinite(gy)?E.actorPosition.y-gy:0;F.roll={t:0,e:0,dur:E.THREE.MathUtils.clamp(.7+Math.abs(dv)*.2,.9,1.3),from:E.heading,dv,spin:F.vy>0||hi>25};window.__heianMaruRollLog=(window.__heianMaruRollLog||[]).concat([{dev:Math.round(E.THREE.MathUtils.radToDeg(dv)),dur:+F.roll.dur.toFixed(2),hi:Math.round(hi),spin:F.roll.spin}]).slice(-8);}}if(F.roll){const R=F.roll,h=R.from+(R.dv+wr(aT-(R.from+R.dv)))*R.e;vx=Math.sin(h);vz=Math.cos(h);}}}/* fix-t68 maru-roll M3: 🚫 前は A/D を離すと、次のコマで目的地の向きへ一度に向き直った。⇒ 離した時のずれが90°以上なら、0.9〜1.3秒かけて大きな弧を描いて目的地へ向き直り、その間に横へ1回転する(足もとから2.5m より低く落ちている時は回らずに弧だけ)。90°より小さければ今までどおり *//* 2026-11-07 (fix-t62 maru-air) 井内さん「空中で目的地についちゃうと、なかなか降りてこない。ジャンプしてたら通り過ぎて戻ってきてもいい」: 地面の目当なら空中で止めず前の勢いのまま飛び越え、着地後に歩いて戻る。屋根・縁の高い目当は止まって降りる（乗る所は壊さない） */}
  if(!(xAxis||zAxis)&&!E.autoTarget&&F.drift){vx=F.drift.ux;vz=F.drift.uz;rem=F.drift.v*dt;} /* 2026-11-04 井内さん「まっすぐではなく、その方向に進みながら徐々に降りる」: 縁から降りる風船は、WASD もクリックの目当ても無い間だけ、縁の向き（F.drift）へ歩きくらいで進む（操作すればそちらが優先） */
  if(F.bk){const b=F.bk;b.t+=dt;const kq=Math.min(1,b.t/b.dur),want=b.dist*(1-(1-kq)**3),stp=want-b.done;if(stp>.01){const bx=E.actorPosition.x+b.ux*stp,bz=E.actorPosition.z+b.uz*stp,bg=GA(bx,bz,y);if(Number.isFinite(bg)&&bg<=y+E.maxStep&&!E.host.isBlocked?.(bx,bz,E.radius,{feetY:y})&&!E.host.flyRoofHit?.(bx,bz,y)){E.actorPosition.x=bx;E.actorPosition.z=bz;b.done=want;}else b.dist=b.done;}if(kq>=1)F.bk=null;vx=0;vz=0;} /* 2026-11-04 宙で跳ね返る（井内さん「鞠の童、ホバージャンプで建物があったら跳ね返されるようにしよう」）: 浮いたまま来た向きの逆へ戻る（初め速く後ほどゆっくり）。その間は進まない */ if(vx||vz){const st=Math.min(vh*dt,rem),margin=E.radius+1,x=E.THREE.MathUtils.clamp(E.actorPosition.x+vx*st,t.bounds.minX+margin,t.bounds.maxX-margin),z=E.THREE.MathUtils.clamp(E.actorPosition.z+vz*st,t.bounds.minZ+margin,t.bounds.maxZ-margin),g=GA(x,z,y);
   if(Number.isFinite(g)&&g<=y+E.maxStep&&!E.host.isBlocked?.(x,z,E.radius,{feetY:y,boost:F.glide&&E.hover&&E.boost>0})&&!E.host.flyRoofHit?.(x+vx*E.radius,z+vz*E.radius,y)){/* fix-t67 maru-roof: 体の前の端(radius)が屋根の中に入るなら当たり＝下の跳ね返り(F.bk) */E.actorPosition.x=x;E.actorPosition.z=z;E.travelHeading=E.heading=Math.atan2(vx,vz);}else if(!F.bk&&E.thirdPerson){const B=E.host.bounceOn?.(vh,true);if(B){F.bk={t:0,dur:B.dur,ux:-vx,uz:-vz,dist:B.dist,done:0};E.clearAutoTarget();E.host.onBounce?.({speed:vh,crash:true,dist:B.dist,dur:B.dur,x:E.actorPosition.x,z:E.actorPosition.z,air:true});}}} // 足より高い塀・建物には横から入らない。2026-11-04 鞠の童は宙で跳ね返る（host.bounceOn がまるの時だけ返す）（その場で上下だけ）。2026-11-03 滑空中に加速していれば、歩きのホバー（line 2182）と同じく門の柱ほどの細い物を抜ける
  const gnd=GA(E.actorPosition.x,E.actorPosition.z,Math.max(y,E.actorPosition.y));
  if(Number.isFinite(gnd)&&y<=gnd){const v=F.vy;E.actorPosition.y=gnd;E.fly=null;E.host.onFlyChange?.(false,{vy:v});return;}
  E.actorPosition.y=y;}
function thrust(dv){if(!E.active||!E.thirdPerson||E.ledge||E.bounce||E.rideFn||E.followFn)return false;const t=E.terrain();if(!t)return false;
  if(!E.fly){const gl=E.hover&&!!E.autoTarget&&E.moving&&!!E.host.flyGlide; /* ホバー中に噴いた＝滑空（host.flyGlide） */
   E.fly={vy:0,t:0,thrustT:0,vh:E.moving?E.moveSpeed||0:0,glide:gl};if(gl)dv=E.host.flyGlide.dv;if(E.moving){E.moving=false;E.running=false;E.host.onMotionChange?.({moving:false,running:false});}E.host.onFlyChange?.(true,{glide:gl});} /* vh＝噴いた時の横の速さ。ホバー中に噴いたらその速さのまま飛ぶ（2026-11-01 井内さん「高速移動中に飛んだような感じで移動」） */
  const gy=t.groundY(E.actorPosition.x,E.actorPosition.z),over=Number.isFinite(gy)?E.actorPosition.y-gy:0,k=E.THREE.MathUtils.clamp(((E.host.flyCeilAt?.(E.actorPosition.x,E.actorPosition.z,gy)??E.host.flyCeil??95)-over)/30,0,1); /* 2026-11-04 門の縁のそばでは縁の上まで上がれる（host.flyCeilAt） */
  E.fly.vy=Math.min(E.host.flyVmax??75,Math.max(E.fly.vy,0)+dv*k);E.fly.thrustT=E.fly.t;E.syncActor();return true;}
return {flyStep,thrust};};
