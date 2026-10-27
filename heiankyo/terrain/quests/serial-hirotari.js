/* 平安京・連作「お前の席」 / Ver 1.0 2026-10-27
 * Data & independent state machine. Load after heian-lines.js via quests/manifest.js.
 * Integration hooks are described in HIROTARI_KIRO_HANDOFF.md.
 * History, personality and dialogue of Hirotari: D (fiction).
 * This module does not move actors, show UI, or alter any existing lodging data.
 */
(function(root){
 'use strict';
 const STORAGE='heian-hirotari-v1';
 const copy=o=>JSON.parse(JSON.stringify(o));
 const fresh=()=>({v:1,startDay:null,lastVisitDay:null,visitDays:[],nights:0,firstNightDay:null,
  rainReady:false,returnReady:false,hasName:false,nameDay:null,departedDay:null,
  read:[],rumors:[],lastStoryDay:null,roomNotice:false,nameDeferredAt:null});
 function load(){let s=fresh();try{const x=JSON.parse(root.localStorage.getItem(STORAGE)||'null');if(x&&x.v===1)Object.assign(s,x);}catch(e){}
  s.visitDays=Array.isArray(s.visitDays)?s.visitDays:[];s.read=Array.isArray(s.read)?s.read:[];s.rumors=Array.isArray(s.rumors)?s.rumors:[];
  return s;}
 let state=load();
 function dayOf(d){return Number.isFinite(+d)?Math.max(0,Math.floor(+d)):null;}
 function save(){try{root.localStorage.setItem(STORAGE,JSON.stringify(state));}catch(e){}}
 function touchStart(d){const n=dayOf(d);if(n===null)return; if(state.startDay===null){state.startDay=n;save();}}
 function uniqueDay(d){const n=dayOf(d);if(n===null)return;if(!state.visitDays.includes(n)){state.visitDays.push(n);state.visitDays=state.visitDays.slice(-64);}}
 const tx=(ja,en)=>({ja,en});
 const SCENES={
  winding:{title:tx('巻き加減','The winding key'),start:tx('昨日は、あれでよかったか。背中のねじを回すのは初めてでな。','Was it all right yesterday? I had never turned a key on someone’s back before.'),
   choices:[
    {id:'fine',label:tx('ちょうどよかった','Just right'),reply:tx('そうか。加減が分からんので、手探りじゃった。','Good. I was only guessing how far to turn it.')},
    {id:'strong',label:tx('少し強かった','A little too strong'),reply:tx('そうかそうか。今夜は少し控えよう。','I see. I’ll turn it more gently tonight.')},
    {id:'thanks',label:tx('ありがとう','Thank you'),reply:tx('礼はいらん。わしも妙なものを巻いて面白かった。','No need to thank me. It was something new to try.')}]},
  rain:{title:tx('雨の場所','A dry corner'),start:tx('あそこの雨漏りがひどくなってな。お前の座る所は、こっちへ寄せておいた。','The roof leaks worse over there. I moved your place a little, out of the wet.'),
   choices:[
    {id:'thanks',label:tx('ありがとう','Thank you'),reply:tx('濡れんに越したことはない。','Better to keep dry, all the same.')},
    {id:'fine',label:tx('濡れても平気だよ','I do not mind getting wet'),reply:tx('お前が平気でも、敷物は腐る。','You may not mind, but the mat would rot.')},
    {id:'hard',label:tx('大変だね','That sounds difficult'),reply:tx('昔からこうだ。門の屋根は広いが、穴も多い。','It’s always been like this. A wide roof, and plenty of holes.')}]},
  name:{title:tx('名を聞く','Asking a name'),start:tx('お前はいつも、わしを何と呼んどる？','What do you call me, then?'),
   choices:[
    {id:'ask',label:tx('名前を聞いてもいい？','May I ask your name?'),reply:tx('名か。……広足という。長いこと、そう呼ぶ者もおらんかった。お前は覚えておいてくれるか。','My name? …Hirotari. Nobody has called me that in a long while. Will you remember it?'),revealsName:true},
    {id:'later',label:tx('別に呼ばなくても困らないよ','I can manage without a name'),reply:tx('まあ、わしも困らんよ。','I suppose I can too.'),defer:true}]},
  seat:{title:tx('お前の席','Your place'),start:tx('おお、帰ったか。ずいぶん歩いておったようだな。','Ah, you’re back. You must have done a great deal of walking.'),
   choices:[
    {id:'stay',label:tx('まだここにいていい？','May I still stay here?'),reply:tx('構わん。あそこはお前の席だ。','Of course. That place is yours.')},
    {id:'town',label:tx('都を歩いていた','I was walking through the city'),reply:tx('そうか。都は広いからな。わしにはよう歩けん。','A vast city. These legs of mine won’t take me so far.')},
    {id:'home',label:tx('ただいま','I am home'),reply:tx('……おう。そこ、空けてあるぞ。','…Well then. I kept your place clear.')}]},
  south:{title:tx('南へ行く荷','Loads bound south'),start:tx('南へ下る荷があるそうだ。鳥羽の先へ行くという。','I hear there’s cargo heading south, past Toba.'),
   choices:[
    {id:'go',label:tx('広足も行くの？','Will you go too?'),reply:tx('さあな。昔はよく荷を担いだ。……まだ働けるかな。','Who knows? I used to carry loads myself. …I wonder if I still can.')},
    {id:'work',label:tx('昔は何をしていたの？','What did you do before?'),reply:tx('担げるものは何でもさ。人に言うほどのことでもない。','Whatever needed carrying. Nothing worth a story.')},
    {id:'bye',label:tx('気をつけて','Take care'),reply:tx('何の話だ。まだ行くと決めたわけではないぞ。','What’s this? I haven’t decided to go anywhere.')}]}
 };
 const RUMORS={
  gate:{title:tx('門の下の話','Word by the gate'),start:tx('門の下にいた男か。何日か前、南へ向かう荷車の者と話しておったぞ。一緒に行ったかは知らんな。','The man who sat beneath the gate? Some days ago he was talking with people on a southbound cart. Whether he went with them, I don’t know.'),
   choices:[{id:'ok',label:tx('そうなんだ','I see'),reply:tx('もう一度会えるといいな。……まあ、人の行き先は分からんものよ。','Perhaps you’ll meet again. …You never know where people go.')}]},
  porter:{title:tx('荷運びの噂','A porter’s rumor'),start:tx('そういや、羅城門にいた年寄りが荷のことを聞きに来た。昔、担ぎをしていたそうだな。','An older fellow from Rajomon came asking about porter work. Said he used to carry loads.'),
   choices:[{id:'ok',label:tx('どこへ行ったの？','Where did he go?'),reply:tx('そこまでは聞かなんだ。仕事を見つけたなら、どこぞで飯を食っとるだろう。','I didn’t ask. If he found work, perhaps he’s eating somewhere tonight.')}]},
  boat:{title:tx('鳥羽津の噂','A rumor at Toba'),start:tx('門の男？ 似た風体の者を見た気もするが、旅の男は皆、似て見える。','A man from the gate? I may have seen someone like that. Travellers often look alike to me.'),
   choices:[{id:'ok',label:tx('ありがとう','Thank you'),reply:tx('わしの話は当てにせんことだ。','Don’t put too much faith in my word.')}]}
 };
 function accept(day){touchStart(day);uniqueDay(day);save();return copy(state);}
 function enter(day,weather){touchStart(day);const n=dayOf(day);if(n===null)return null;
  if(state.lastVisitDay!==null&&n-state.lastVisitDay>=3&&!state.read.includes('seat'))state.returnReady=true;
  state.lastVisitDay=n;uniqueDay(n);
  if(weather==='rain'&&state.nights>0&&!state.read.includes('rain'))state.rainReady=true;
  const wasFirst=!state.roomNotice;state.roomNotice=true;save();return{roomStayed:true,first:wasFirst,empty:state.departedDay!==null};}
 function nightRest(day){touchStart(day);const n=dayOf(day);if(n===null)return copy(state);state.nights++;if(state.firstNightDay===null)state.firstNightDay=n;save();return copy(state);}
 function talk(day){const n=dayOf(day);if(n===null||state.startDay===null||state.departedDay!==null)return null;
  uniqueDay(n);save();if(state.lastStoryDay===n)return null;
  let next=null;
  if(state.nights>=1&&!state.read.includes('winding')&&n>=state.firstNightDay+1)next='winding';
  else if(state.rainReady&&!state.read.includes('rain'))next='rain';
  else if(!state.hasName&&state.visitDays.length>=3&&n>=state.startDay+4&&(state.nameDeferredAt===null||n-state.nameDeferredAt>=5))next='name';
  else if(state.returnReady&&!state.read.includes('seat'))next='seat';
  else if(n>=state.startDay+12&&!state.read.includes('south'))next='south';
  return next?{id:next,...copy(SCENES[next])}:null;}
 function answer(sceneId,choiceId,day){const n=dayOf(day),scene=SCENES[sceneId];if(!scene||n===null||state.departedDay!==null)return null;
  const c=scene.choices.find(q=>q.id===choiceId);if(!c)return null;state.lastStoryDay=n;
  if(!c.defer&&!state.read.includes(sceneId))state.read.push(sceneId);if(sceneId==='name'&&c.defer)state.nameDeferredAt=n;
  if(c.revealsName){state.hasName=true;state.nameDay=n;}
  save();return{reply:copy(c.reply),nameKnown:state.hasName,sceneRead:!c.defer};}
 function tick(day,opts){const n=dayOf(day),o=opts||{};
  if(n===null||state.startDay===null||state.departedDay!==null)return false;
  // A slow departure. Do not vanish before the player, inside the lodging, or while in dialogue.
  if(n<state.startDay+26)return false;
  if(o.nearGate||o.inRajoRoom||o.talking)return false;
  state.departedDay=n;save();return true;}
 function getRumor(day,key){const n=dayOf(day);if(n===null||state.departedDay===null||n<state.departedDay+2)return null;
  if(!Object.prototype.hasOwnProperty.call(RUMORS,key)||state.rumors.includes(key))return null;
  return{id:key,...copy(RUMORS[key])};}
 function heardRumor(key){if(!Object.prototype.hasOwnProperty.call(RUMORS,key))return false;if(!state.rumors.includes(key))state.rumors.push(key);save();return true;}
 function label(){return state.hasName?'広足':'流れ者';}
 function present(){return state.departedDay===null;}
 function status(){return copy(state);}
 function reset(){state=fresh();save();return status();}
 root.HEIAN_HIROTARI_STORY={version:1,STORAGE,SCENES,RUMORS,accept,enter,nightRest,talk,answer,tick,getRumor,heardRumor,label,present,status,reset};
})(typeof window!=='undefined'?window:globalThis);
