/* 平安京：初心者向け頼みごと「泥にはまった牛車」 v1.1
 * ゲーム本体の既存の人物「犬丸」(char:inumaru) と会話DSLへ追加するパック。
 * このファイルだけでは牛車の配置・Rでの救出・笛の持ち物付与は実行できない。
 * それらは CART_MUD_KIRO_HANDOFF.md の本体接続で実装する。
 * D＝創作：泥濘・事件・兄の笛・個別台詞。人物背景は既存台帳に準拠。
 */
(function(){
  'use strict';
  const L=window.HEIAN_LINES;
  if(!L||!Array.isArray(L.people)||!Array.isArray(L.dialogs)||!L.quests)return;
  if(!L.people.some(p=>p&&p.id==='inumaru')){
    console.warn('[泥にはまった牛車] 既存の犬丸 (inumaru) が見つからず、登録を見送ります');
    return;
  }
  const ID='kuruma_nukarumi';
  if(L.quests[ID]){
    console.warn('[泥にはまった牛車] 同名の頼みごとがあるため、重複登録しません');
    return;
  }
  L.quests[ID]={ja:'泥にはまった牛車',en:'The Ox Cart in the Mud'};
  const d={char:'inumaru',at:'rajomon',title:'犬丸',start:'s',
    n:'D 創作（初心者の自然な操作体験）。犬丸はふだん朱雀門前で待つ牛飼童。この頼みごとでは羅城門を入ってすぐの所で車が泥にはまる（2026-10-31）。兄は竹丸。牛の名は黒麻呂。'};
  L.dialogs.push(
    {
      ...d,id:'kuruma-nukarumi-ask',if:'q:kuruma_nukarumi<1',
      nodes:{
        s:{t:'こら黒麻呂、動くな！ ……おお、鉄の童。車輪が泥にはまった。手を貸してくれんか？',
          c:[['手伝おう','yes'],['どうすればいい？','how'],['またあとで','$end']]},
        how:{t:'牛はわれが見ておく。お前は車の後ろから、沈んだ側を少し持ち上げてくれ。',
          c:[['やってみる','yes'],['またあとで','$end']]},
        yes:{t:'助かる！ 牛が落ち着くまで待ってな。後ろの車輪のところだぞ。',
          set:'kuruma_nukarumi=1',end:true}
      }
    },
    {
      ...d,id:'kuruma-nukarumi-wait',if:'q:kuruma_nukarumi=1',
      nodes:{s:{t:'車の後ろへ回れ。沈んだ輪の近くで「持ち上げる」だ。牛はわれが見ておる。',
        c:[['わかった','$end'],['もう少し教えて','detail']]},
        detail:{t:'車の前や牛のそばは危ない。後ろからゆっくり持ち上げてくれ。',end:true}}
    },
    {
      ...d,id:'kuruma-nukarumi-reward',if:'q:kuruma_nukarumi=2',
      nodes:{
        s:{t:'抜けた、抜けた！ 黒麻呂も無事だ。お前、力持ちだなあ。',
          c:[['よかった','thanks'],['またあとで','$end']]},
        thanks:{t:'兄の竹丸が作った笛が、もう一本ある。礼に持っていってくれんか。',
          c:[['笛を受け取る','gift'],['今はいい','later']]},
        later:{t:'そうか。気が向いたら声をかけてくれ。',end:true},
        gift:{t:'竹の横笛だ。音が出るか、吹いてみてくれよ。',
          set:'kuruma_nukarumi=9',end:true}
      }
    },
    {
      ...d,id:'kuruma-nukarumi-after',if:'q:kuruma_nukarumi>=9&chance:25',
      nodes:{
        s:{t:'おお、鉄の童。あの笛は鳴ったか？ 黒麻呂はこの頃、泥を避けて歩くぞ。',
          c:[['吹いてみるよ','$end'],['黒麻呂も元気そうだね','$end']]}
      }
    }
  );
  // インテグレーション向けの参照データ。演出や状態変更は本体側で行う。
  window.HEIAN_CART_MUD_CONFIG=Object.freeze({
    id:ID,version:3,person:'inumaru',place:'rajomon',
    onboarding:Object.freeze({entry:'rajomon-practice',nearPracticeExit:true,practiceFinal:'fue',softCue:true,acceptance:'optional'}),
    fluteUnlock:Object.freeze({newGameStartsWithoutFlute:true,unlockOnOwnedFlute:true,preserveLegacySaves:true}),
    states:Object.freeze({unmet:0,agreed:1,freed:2,received:9}),
    reward:Object.freeze({id:'inumaru_bamboo_flute',ja:'犬丸の竹笛',en:'Inumaru’s Bamboo Flute'}),
    contact:Object.freeze({distance:8,action:'lift',desktopKey:'R',fluteKey:'Y'}),
    hints:Object.freeze({
      spot:'羅城門をくぐった先で牛が鳴き、牛飼童が困っている',/* 2026-10-31 朱雀門から羅城門へ */
      lift:'沈んだ車輪の近くで「持ち上げる」',
      after:'持ち物に「犬丸の竹笛」が加わった。笛を吹いてみよう（Y）'
    })
  });
})();
// ---- 2026-10-29 Kiro 取り込み: 置き物と出来事（L.setpieces・CadKit/index.html の heianSp）で、牛車・牛・犬丸・ぬかるみを置き、
//  受けたあと（q=1）沈んだ輪の後ろで R（スマホは「動作」の同じボタン）→ 車が抜けて q=2、礼の会話で q=9 → 犬丸の竹笛を持ち物へ（笛が吹けるようになる）。
//  場所: 2026-10-31 から羅城門を入ってすぐの朱雀大路の東寄り（練習を羅城門で始める）。前は朱雀門の西、二条大路の南の路肩。区分 D 創作
(function(){
  const L = window.HEIAN_LINES;
  if (!L || !L.quests || !L.quests.kuruma_nukarumi) return;
  const S = L.setpieces = L.setpieces || {};
  const ID = 'kuruma_nukarumi';
  // 2026-10-31 井内さん「羅城門をくぐったら、泥にはまった牛車がいる」: 練習を羅城門で始めるので、羅城門を入ってすぐの朱雀大路の東寄り（九条大路の北の縁 z45068 の9m北）へ移した。
  //  rot 0＝車の前（牛）が北＝都の中へ向かう車。車の局所 +x＝東（路肩の側・沈んだ輪）。門から来ると車の後ろ（持ち上げる所）が手前に見える。
  //  旧は朱雀門の西 {x:-780, z:7345, rot:-Math.PI/2}（🚫 x−950 は路肩の柳の陰で、近づくとカメラが柳の枝に入った・撮影 cm1・cmc）
  S[ID] = {
    q: ID, at: {x:260, z:44980, rot:0}, near: 1200,
    parts: [
      {id:'cart', kind:'oxcart', coat:0},                        // 牛は黒（黒麻呂）
      {id:'mud', kind:'mud', dx:6, dz:8, r:30, rz:.75},           // 沈んだ南の輪のまわり。車の後ろ（西）へはみ出して見える
      {id:'mizu', kind:'puddle', dx:12, dz:20, r:9, rz:.6},       // 昨日の雨の水たまり（推定の演出）
      {id:'inumaru', kind:'person', who:'inumaru', whoKind:'牛飼童', name:'犬丸', hat:null, hair:true, robe:0x7d6a4c, dx:-40, dz:-140, rot:Math.PI} /* 2026-11-06 練習の作り直し（井内さん「少し羅城門を通り過ぎるように誘導、牛車の近くまで行って、先に犬丸と話す。牛車の方に行くために振り返させて、車輪を持ち上げる」）: 犬丸を牛の頭の先（牛車の14m北・4m西）に立たせる。門から来ると牛車の横を通り過ぎて犬丸と話し、沈んだ後ろの車輪は振り返った先になる。🚫 前は牛の横（dz-60）で、門から来ると手前で話せてしまい、車輪が前に見えたままだった */
    ],
    stages: {
      0: {cart:{tilt:[0,0,-.13], sink:1.6}},                    // 南の輪が泥に沈んで車が傾く
      1: '0',
      2: {cart:{dz:-38, tilt:[0,0,0], sink:0}, inumaru:{dx:-40, dz:-165}}, /* 2026-11-06 抜けた車が北へ3.8m動くので、犬丸も牛の頭の先へ下がる（前は dx-14・dz-96） */
      9: {hide:'away', give:'inumaru_bamboo_flute'}             // 目の前では消さない。離れたら片づけて、犬丸はふだんの車へ戻る
    },
    acts: [
      {at:'cart', off:[8,0,22], r:22, act:'lift', label:'車輪を持ち上げる', en:'Lift the wheel', q:1, set:2, sfx:['creak','moo'], lift:3,
       done:{say:{who:'inumaru', t:'抜けた、抜けた！', en:'It’s out! It’s out!'}}}
    ],
    cues: [
      {on:'lesson:bow', r:1200, q:[0], once:'save', sfx:['moo','creak'], say:{who:'inumaru', t:'こら黒麻呂、動くな！ ……そこの鉄の童！', en:'Easy, Kuromaro, don’t move! … You there, Iron Child!'}},
      {on:'near', r:320, q:[0], once:true, sfx:['moo'], say:{who:'inumaru', t:'おーい、鉄の童。ちょっと手を貸してくれんか', en:'Hey, Iron Child. Could you lend me a hand?'}},
      {on:'near', r:320, q:[0,1], every:70, sfx:['moo']},
      {on:'act:fue', r:350, q:[9], once:'save', say:{who:'inumaru', t:'おお、鳴った！ われより上手いではないか！', en:'You did it! That’s better than I can manage!'}}
    ],
    items: {
      inumaru_bamboo_flute: {name:'犬丸の竹笛', en:'Inumaru’s bamboo flute', unlock:['fue'],
        hint:'持ち物に「犬丸の竹笛」が加わった。笛を吹いてみよう（Y・スマホは「動作」の「笛を吹く」）', hintEn:'You received Inumaru’s bamboo flute. Try playing it (Y, or “Play the flute” under Actions).'}
    },
    en: {
      'こら黒麻呂、動くな！ ……おお、鉄の童。車輪が泥にはまった。手を貸してくれんか？':'Easy, Kuromaro! Don’t move! … Oh, Iron Child. The wheel’s sunk into the mud. Could you lend me a hand?',
      '牛はわれが見ておく。お前は車の後ろから、沈んだ側を少し持ち上げてくれ。':'I’ll keep the ox calm. Lift the sunken side of the cart just a little, from behind.',
      '助かる！ 牛が落ち着くまで待ってな。後ろの車輪のところだぞ。':'Thank you! Wait until he’s settled. Mind you, from behind the wheel!',
      '車の後ろへ回れ。沈んだ輪の近くで「持ち上げる」だ。牛はわれが見ておる。':'Go around behind the cart. Use Lift near the sunken wheel. I’ll look after the ox.',
      '車の前や牛のそばは危ない。後ろからゆっくり持ち上げてくれ。':'Keep clear of the ox and the front of the cart. Lift gently from behind.',
      '抜けた、抜けた！ 黒麻呂も無事だ。お前、力持ちだなあ。':'It’s free! And Kuromaro’s safe! You’re stronger than you look.',
      '兄の竹丸が作った笛が、もう一本ある。礼に持っていってくれんか。':'My brother Takemaru made me two bamboo flutes. Will you take the spare one as thanks?',
      'そうか。気が向いたら声をかけてくれ。':'All right. Ask me again if you change your mind.',
      '竹の横笛だ。音が出るか、吹いてみてくれよ。':'A little bamboo flute. Try it and see if you can make a sound.',
      'おお、鉄の童。あの笛は鳴ったか？ 黒麻呂はこの頃、泥を避けて歩くぞ。':'Iron Child! How does that flute sound? Kuromaro’s learned to keep clear of the mud.',
      '手伝おう':'I’ll help', 'どうすればいい？':'What should I do?', 'またあとで':'Perhaps later', 'やってみる':'I’ll try',
      'わかった':'All right', 'もう少し教えて':'Tell me more', 'よかった':'Glad you’re safe', '今はいい':'Not now',
      '笛を受け取る':'Accept the flute', '吹いてみるよ':'I’ll try playing it', '黒麻呂も元気そうだね':'Kuromaro looks well',
      '泥にはまった牛車':'The Ox Cart in the Mud'
    }
  };
})();
