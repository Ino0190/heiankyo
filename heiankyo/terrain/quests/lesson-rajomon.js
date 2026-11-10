/* 平安京：練習の作り直し「羅城門の手ほどき」v1（data 担当・2026-11-06）
 * tutorial-cart-mud.js と同じ形の台詞パック。window.HEIAN_LINES へ足すだけ。
 * ゲーム本体・会話エンジン・heian-lines.js・焼き込みには一切触らない。
 *
 * 役割分担（CONTRACT.md）:
 *  - data（このファイル）: 竹丸と、笛で集まる3人の台詞・置き物を作る。段 lesson_rajomon を 1 と 9 に上げる。
 *  - logic（別担当）: 段5を heianQuestSet で上げる・出来事 lesson:start / lesson:fue を鳴らす・影の値で実績を残す。
 *
 * 人物 takemaru（竹丸）は既に人物台帳（residents.json→people）に居る（犬丸の兄・小野の里の炭焼き・行商）。
 *  → 新しく作らず、その id を char:'takemaru' で使う。竹笛を削った件は tutorial-cart-mud.js の犬丸の台詞
 *    「兄の竹丸が作った笛」と既にそろっている。生い立ち・住まい・仕事は台帳のまま（矛盾なし）。区分 D 創作。
 *
 * 段（CONTRACT.md）:
 *  0 練習の始め（竹丸が羅城門の南に立つ） / 1 竹丸と話し終えた（data が set） /
 *  5 笛が鳴った（logic が heianQuestSet で上げる＝竹丸が犬丸のそばへ移り、都の童と女が出る） /
 *  9 集まった誰かと話し終えた（data が set）
 */
(function(){
  'use strict';
  const L=window.HEIAN_LINES;
  if(!L||!Array.isArray(L.people)||!Array.isArray(L.dialogs)||!L.quests)return;
  if(!L.people.some(p=>p&&p.id==='takemaru')){
    console.warn('[羅城門の手ほどき] 竹丸 (takemaru) が人物台帳に見つからず、登録を見送ります');
    return;
  }
  const ID='lesson_rajomon';
  if(L.quests[ID]){
    console.warn('[羅城門の手ほどき] 同名の頼みごとがあるため、重複登録しません');
    return;
  }
  L.quests[ID]={ja:'羅城門の手ほどき',en:'First Steps at Rajōmon'};

  const tk={char:'takemaru',title:'竹丸',start:'s',
    n:'D 創作（練習の手ほどき役）。竹丸は犬丸の兄で、犬丸の竹笛を削った人（tutorial-cart-mud.js の犬丸の台詞と整合）。人物背景は既存台帳に準拠。'};

  L.dialogs.push(
    // 段1 ＝ 向こうから話しかけてくる（auto）。どの道を選んでも最後に lesson_rajomon=1。
    {
      ...tk,id:'lesson-rajomon-start',if:'q:lesson_rajomon<1',auto:true,
      nodes:{
        s:{t:'おお、見慣れぬ鉄の童だな。あれが羅城門だ。行きたい方を指し示せば（そちらをクリック）、足がそちらへ向くぞ。',
          c:[['門へ行ってみる','go'],['速く歩くには？','fast'],['お前は誰だ','who']]},
        go:{t:'門の方を指せば、まっすぐ歩いていける。わしの弟の犬丸が、門の内で牛車を引いておる。会うてやれ。',
          set:'lesson_rajomon=1',end:true},
        // 2026-11-07 ユーザーテスト（body-fix）: 🚫 「速く歩くには？」を押すと答えが出ずに窓が閉じ、そのまま次の段（歩く）へ進んでしまった（UXデザイナー fix-ui#1）。答えを見せて「門へ行ってみる」だけで段を進めるように（段を上げるのは go だけ）。
        fast:{t:'同じ方を続けて指せば、足が速くなる。急ぐ時はそうせよ。弟の犬丸が、門の内で牛車を引いておるぞ。',
          c:[['門へ行ってみる','go']]},
        // 2026-11-07 ユーザーテスト（body-fix）: 🚫 「お前は誰だ」も同じく答えが出ずに窓が閉じ、次の段へ進んでしまった（UXデザイナー fix-ui#1）。答えを見せて「門へ行ってみる」だけで進む。
        who:{t:'わしは竹丸。小野の里から炭を担いで来た者よ。弟の犬丸が門の内で牛車を引いておる。会うてやれ。',
          c:[['門へ行ってみる','go']]}
      }
    },
    // 段5 ＝ 笛のあと。竹丸が笛に気づく。「さっきの鉄の童か」で前に会ったことを覚えている。どちらを選んでも lesson_rajomon=9。
    {
      ...tk,id:'lesson-rajomon-takemaru-fue',if:'q:lesson_rajomon=5',
      nodes:{
        s:{t:'さっきの鉄の童か。もう笛まで吹けるのか。…おお、それはわしが削った竹笛だ。弟が礼にやったのだな。',
          c:[['よい音が出た','ok'],['かたじけない','thanks']]},
        ok:{t:'そうか、鳴ったか。節の詰まりようで音が変わる。大事に吹いてやれよ。',
          set:'lesson_rajomon=9',end:true},
        thanks:{t:'なに、弟の助けになったのだろう。礼はいらぬ。…よい音だった。',
          set:'lesson_rajomon=9',end:true}
      }
    },
    // 段5 ＝ 都の童（g_child）。無名の作業NPCではなく置き物の童。who:'童' で置き物の童に当たる。lesson_rajomon=9。
    {
      id:'lesson-rajomon-child',who:'童',if:'q:lesson_rajomon=5',title:'都の童',start:'s',
      n:'D 創作（練習で笛に集まる童）。置き物 lesson_rajomon の g_child に当てる。',
      nodes:{
        s:{t:'いまの笛、もう一度吹いて！ ねえ、もう一度！',
          c:[['吹いてみせる','again'],['あとでな','bye']]},
        again:{t:'わあ、鳴った！ もう一度、もう一度！',
          set:'lesson_rajomon=9',end:true},
        bye:{t:'けち。…でも、いい音だったよ',
          set:'lesson_rajomon=9',end:true}
      }
    },
    // 段5 ＝ 市へ向かう女（g_woman）。最後にお辞儀の場面（地の文）。市が東か西かは言わず中立に。lesson_rajomon=9。
    {
      id:'lesson-rajomon-woman',who:'女',if:'q:lesson_rajomon=5',title:'市へ向かう女',start:'s',
      n:'D 創作（練習で笛に集まる女）。置き物 lesson_rajomon の g_woman に当てる。市の東西は日で変わるので中立の文。',
      nodes:{
        s:{t:'よい音ね。笛の音を聞くと、今日という日が始まる心地がする。今日は市の立つ日。何か見ていくとよい。',
          c:[['市へ行ってみる','bow'],['かたじけない','bow']]},
        bow:{t:'（女は衣を直し、丁寧に頭を下げた）鉄の童にも、よい一日を。',
          set:'lesson_rajomon=9',end:true}
      }
    },
    // 段9 以降 ＝ 竹丸の「その後」。chance 付き（tutorial の after と同じ）。
    {
      ...tk,id:'lesson-rajomon-after',if:'q:lesson_rajomon>=9&chance:25',
      nodes:{
        s:{t:'おお、また会うたな。あの笛、里の母にも聞かせてやりたいものだ。',
          c:[['きっと聞かせるよ','$end'],['炭はいるか','$end']]}
      }
    }
  );

  // ---- 置き物と出来事（L.setpieces）。tutorial-cart-mud.js と同じ形。
  // at ＝ 練習の始まり（羅城門の南）と笛で集まる所（牛車の西）の中ほど。rot 0＝車の前（北・都の中）向き。
  //  段0・1: 竹丸だけ（始まりのそば）。段5・9: 竹丸が犬丸のそばへ移り、都の童と女が出る。
  //  ※ 歩ける所・ちょうどよい位置は logic が確かめて at / dx / dz を直してよい（直したら CONTRACT と REPORT を合わせる）。
  const S=L.setpieces=L.setpieces||{};
  S[ID]={
    q:ID, at:{x:120, z:45800, rot:0}, near:1600,
    parts:[
      {id:'takemaru', kind:'person', who:'takemaru', whoKind:'行商', name:'竹丸', hat:'eboshi', hair:true, robe:0x6b5536, dx:-80, dz:800, rot:Math.PI},
      {id:'g_child',  kind:'person', whoKind:'童', name:'童', hat:null, hair:true, robe:0x9aa15e, scale:0.80, dx:30, dz:-900, rot:Math.PI},
      {id:'g_woman',  kind:'person', whoKind:'女', name:'女', hat:null, hair:true, robe:0xa6587a, dx:5, dz:-865, rot:Math.PI}
    ],
    stages:{
      0:{takemaru:{dx:-80, dz:800, rot:Math.PI}, g_child:{hide:true}, g_woman:{hide:true}}, // 竹丸だけ：始まりの東4m・北3m（ロボの右前）
      1:'0',
      // 2026-11-06 まとめ役: 集まる所を牛車の西へ移した。🚫 前は牛車のすぐ横（x225〜255）で、車輪が抜けて北へ動いた牛車に女が重なった
      5:{takemaru:{dx:70, dz:-935, rot:Math.PI*.85},                   // 竹丸が犬丸のそばへ移る（犬丸の5m西）
         g_child:{dx:30, dz:-900, rot:Math.PI*.75, hide:false},        // 都の童が出る（牛車の11m西）
         g_woman:{dx:5, dz:-865, rot:Math.PI*.7, hide:false}},         // 市へ向かう女が出る（牛車の13m西）
      9:'5'                                                            // 3人はそのまま（離れたら本体が片づける）
    },
    cues:[
      // 竹丸が移る前の一言（段1を出した時に logic が heianSpEvent('lesson:start') を鳴らす）。
      //  ※ 練習の間、置き物の合図は「その段が cart:true」のときだけ鳴る（本体 heianSpFire）。logic 側で段1を cart 扱いにする必要あり（REPORT 参照）。
      {on:'lesson:start', q:[0], r:1600, once:'save',
        say:{who:'takemaru', t:'おーい、そこの鉄の童。ちと尋ねたい', en:'Hey there, Iron Child! A word with you.'}},
      // 笛が鳴った時（logic が heianSpEvent('lesson:fue') を鳴らす）。竹丸がすぐ気づく一言。
      {on:'lesson:fue', q:[5], r:1600, once:'save',
        say:{who:'takemaru', t:'おお、その音…わしの削った笛だ！', en:'That sound… that’s the flute I carved!'}}
    ],
    // 英語（tutorial-cart-mud.js と同じく、原文→英訳を置き物の en に書く。本体が heianJE で辞書へ入れる）。
    en:{
      'おお、見慣れぬ鉄の童だな。あれが羅城門だ。行きたい方を指し示せば（そちらをクリック）、足がそちらへ向くぞ。':'Well now, an Iron Child I’ve not seen before. That there is the Rajōmon. Point to where you’d go (click there) and your feet will carry you.',
      '門へ行ってみる':'Head for the gate',
      '速く歩くには？':'How do I walk faster?',
      'お前は誰だ':'Who are you?',
      '門の方を指せば、まっすぐ歩いていける。わしの弟の犬丸が、門の内で牛車を引いておる。会うてやれ。':'Point toward the gate and you’ll walk straight to it. My younger brother Inumaru tends an ox-cart just inside. Go and meet him.',
      '同じ方を続けて指せば、足が速くなる。急ぐ時はそうせよ。弟の犬丸が、門の内で牛車を引いておるぞ。':'Keep pointing the same way and your feet quicken. Do that when you’re in a hurry. My brother Inumaru tends an ox-cart inside the gate.',
      'わしは竹丸。小野の里から炭を担いで来た者よ。弟の犬丸が門の内で牛車を引いておる。会うてやれ。':'I’m Takemaru, come from Ono village with charcoal on my back. My younger brother Inumaru tends an ox-cart inside the gate. Go and meet him.',
      'さっきの鉄の童か。もう笛まで吹けるのか。…おお、それはわしが削った竹笛だ。弟が礼にやったのだな。':'The Iron Child from before! Playing a flute already? …Why, that’s the bamboo flute I carved. My brother gave it to you as thanks, did he.',
      'よい音が出た':'It made a fine sound',
      'かたじけない':'My thanks',
      'そうか、鳴ったか。節の詰まりようで音が変わる。大事に吹いてやれよ。':'So it sang for you. The sound shifts with how tight the nodes sit. Play it with care.',
      'なに、弟の助けになったのだろう。礼はいらぬ。…よい音だった。':'Think nothing of it — you helped my brother, surely. No thanks needed. …That was a fine sound.',
      'いまの笛、もう一度吹いて！ ねえ、もう一度！':'That flute just now — play it again! Please, once more!',
      '吹いてみせる':'I’ll play it again',
      'あとでな':'Maybe later',
      'わあ、鳴った！ もう一度、もう一度！':'Wow, it sang! Again, again!',
      'けち。…でも、いい音だったよ':'Meanie. …But it was a lovely sound.',
      'よい音ね。笛の音を聞くと、今日という日が始まる心地がする。今日は市の立つ日。何か見ていくとよい。':'What a sweet sound. A flute makes it feel as though the day is truly beginning. The market opens today — do go and have a look.',
      '市へ行ってみる':'I’ll visit the market',
      '（女は衣を直し、丁寧に頭を下げた）鉄の童にも、よい一日を。':'(She smooths her robe and bows politely.) A good day to you too, Iron Child.',
      'おお、また会うたな。あの笛、里の母にも聞かせてやりたいものだ。':'Ah, we meet again. I’d dearly love to let our mother back in the village hear that flute.',
      'きっと聞かせるよ':'I’ll be sure she hears it',
      '炭はいるか':'Need any charcoal?',
      '羅城門の手ほどき':'First Steps at Rajōmon'
    }
  };
})();
