// 小さな本音・余韻（試作） 2026-10-24
// 既存の人物と会話DSLのみを利用。頼みごと・報酬・目的地・好感度表示は作らない。
// 1回目：日常の小話 → 数日後：ぽろりと本音 → さらに数日後：短い余韻。
// 状態キー hh_* は私的な会話履歴。L.quests に登録してクエスト化しない。
// 既存の贈答エンジンにはまだ接続しない（魚を贈った場合の特別な返答は次段階）。
// すべての個別の感情・事情は D（創作）。900年の固有史実として扱わない。
(function(){
  'use strict';
  const L = window.HEIAN_LINES;
  if (!L || !Array.isArray(L.people) || !Array.isArray(L.dialogs)) return;

  // 既存の人物設定と矛盾しない小さな本音から始める。追加人物・移動スケジュールは作らない。
  const episodes = [
    {
      id:'fish', char:'makiwari_tonari', title:'常女',
      opener:'薪を積み直したら、今度は夕餉の支度よ。座る暇もありゃしない',
      invitation:'今日の夕餉は何にするの？',
      neutral:'子らは腹が減ったと騒ぐばかり。何を出しても早く食べてしまうわ',
      secret:'このところ芋の煮たものばかり。たまには魚も欲しいけど、夫の稼ぎを思うと言えなくてね',
      reaction:'まあ、聞いてもらっただけでよいの。あの人も毎日よく働いとるから',
      later:'今日は芋の話はよしておくわ。……でも市の魚の匂いは、ちょっと気になるね',
      note:'常女の夫は東市の荷運び。家には子が二人。魚を要求する依頼にはしない。'
    },
    {
      id:'daughter', char:'makiwari_otoko', title:'黒麻呂',
      opener:'割った薪は、家の軒で乾かす。濡れたら火がつかん',
      invitation:'家では誰と暮らしているの？',
      neutral:'今は一人だ。娘は西の京へ嫁いでいった',
      secret:'娘のところへ顔を出してやりたいが、何の用もなく行くのは照れくさくてな',
      reaction:'元気なら、それでいいんだ。……いや、やっぱり一度くらい会いたいか',
      later:'娘のところか。まだ行っとらんよ。薪を片づけたら考えるさ',
      note:'既存設定：妻は死去、娘は京の西へ嫁いだ。再会を義務イベントにしない。'
    },
    {
      id:'brag', char:'kamiya', title:'紙麻呂',
      opener:'紙を漉く手は慣れたが、乾くまでの風ばかりは言うことを聞かん',
      invitation:'何か面白いことはあった？',
      neutral:'面白いことなら、鉄の童がこうして歩いておることだろう',
      secret:'知り合いにお前の話をしたいな。鉄の童が紙漉きを見ていたなど、誰も信じまい',
      reaction:'見たものをそのまま話すだけなのに、嘘つきにされそうだ',
      later:'お前の話をしてみたぞ。笑われた。……今度は連れてこいと言われたよ',
      note:'既存の紙漉きの職能に合わせた、鉄の童への小さな興味。'
    },
    {
      id:'grandma', char:'shakyosei', title:'秦真継',
      opener:'この経を写し終えたら、里へ文を出そうと思っています',
      invitation:'誰かに便りを出すの？',
      neutral:'昔世話になった祖母に。まだ元気でいてくれればよいのですが',
      secret:'里の祖母に会いに行きたいのです。歩いて一日の所なのに、写経を休めなくて。もう年ですから……',
      reaction:'休めぬのは分かっています。こうして口にすると、少し気が晴れます',
      later:'祖母への文は、まだ書き終わりません。何を書けばよいのか、かえって迷います',
      note:'架空の身内設定。台帳（2026-10）は「山城国の出・母が一人・東寺の近くの長屋」＝祖母は山城の里にいて、京から歩いて一日（国元の遠国にしない）。台帳の話しぶり（です・ます）に合わせた（2026-10-25 Kiro）。帰郷や祖母の生死は確定させない。'
    },
    {
      id:'whale', char:'shakyosei', title:'秦真継',
      opener:'海の生き物の話が載った書を読んで、つい筆が止まってしまいました',
      invitation:'何が書かれていたの？',
      neutral:'鯨という大きな生き物の話です。海へ行ったこともないのに',
      secret:'鯨の肉はどんな味なのでしょう。一度食べてみたい、などと考えてしまいました',
      reaction:'そんな物が京で手に入るはずもありません。ただの空想です',
      later:'鯨の味ですか？ まだ知りません。……知ってしまうより、考えている方が楽しいのかもしれません',
      note:'鯨肉を東西市で普通に販売している設定は作らない。食文化の細部は要考証。'
    }
  ];

  const known = new Set(L.people.map(p => p && p.id));
  for (const e of episodes) {
    if (!known.has(e.char)) continue;
    const flag = 'hh_' + e.id;
    const common = {char:e.char, title:e.title, start:'s', n:'D 創作（小さな本音・余韻）。'+e.note};

    // 最初は普通の雑談。話を続けたときだけ小さな履歴が残る。
    // 2026-10-25 Kiro: chance:N（その日・その人で N%）を付けた。本体は「名前の無い q: の条件の対話」を進行中の節目として最優先で出すので、
    //  付けないと話しかけるたびに毎回この話になり、その人のふだんの話（台帳の lines・intro）が出なくなる。打ち明け・余韻もときどき
    L.dialogs.push({
      ...common, id:'small-heart-'+e.id+'-hello', if:'q:'+flag+'<1&chance:35',
      nodes:{
        s:{t:e.opener, c:[[e.invitation,'chat'],['また今度','$end']]},
        chat:{t:e.neutral, set:flag+'=1', end:true}
      }
    });

    // 少し間をおいて、本人がぽろりと本音を漏らす。解決や依頼は発生しない。
    L.dialogs.push({
      ...common, id:'small-heart-'+e.id+'-confide', if:'q:'+flag+'=1&days:'+flag+'>=2&chance:10', /* 2026-10-25 井内さん「打ち明けは滅多に出ないくらいでいい」60→10（その日・その人で1割） */
      nodes:{
        s:{t:e.secret, c:[['そうだったのか','listen'],['また今度','$end']]},
        listen:{t:e.reaction, set:flag+'=2', end:true}
      }
    });

    // 数日後の一言。話が大きく進展しないエピソードもある。
    L.dialogs.push({
      ...common, id:'small-heart-'+e.id+'-later', if:'q:'+flag+'=2&days:'+flag+'>=3&chance:50',
      nodes:{s:{t:e.later, set:flag+'=3', end:true}}
    });
  }
})();
