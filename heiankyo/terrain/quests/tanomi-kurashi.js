// 暮らしの頼みごと（2026-10-13 井内さん「ドブにある石をどかしてほしい」「もらった何かを部屋に飾る」）。D＝創作（人・言葉・出来事）。
// ・ドブの石（dobu_ishi）: 長屋の常女（連作「薪割りの男と隣の女」の隣の女）が、家の前の側溝に落ちた石を頼む。
//   1＝受けた（石が溝に現れる・CadKit/index.html の heianTanomiTick）→ 2＝石を持ち上げた（本体が上げる）→ 9＝礼に撫子（節の文 @tanomiDobu・本体が持ち物に足す）
// ・部屋に飾る（kazari）: 撫子をもらうと 1。居候の部屋の棚・台のそばで F「飾る」→ 何か1つ飾ると 9（本体）
// 側溝の石と幅は推定（区分D）。子らが石を投げ込んだのも創作
(function(){
  const L = window.HEIAN_LINES;
  if (!L || !Array.isArray(L.dialogs)) return;
  L.quests = L.quests || {};
  L.quests.dobu_ishi = {ja:'ドブの石', en:'The Stone in the Ditch'};
  L.quests.kazari = {ja:'部屋に飾る', en:'Something for the Room'};
  const T = '常女', n = 'D 創作（暮らしの頼みごと・ドブの石）。';
  L.dialogs.push({id:'dobu-ask', char:'makiwari_tonari', title:T, start:'s', if:'q:dobu_ishi<1&chance:45', n,
    nodes:{
      s:{t:'家の前のドブに、大きな石が落ちとるのよ。水があふれて、裏まで泥だらけ', c:[['どうして石が？','why'],['どかしてみよう','ok'],['また今度','$end']]},
      why:{t:'うちの子らが投げて遊んだらしいの。叱ったけど、石は重うて誰も持ち上げられん', c:[['どかしてみよう','ok'],['また今度','$end']]},
      ok:{t:'ほんと？ 家の前の溝よ。あの人の腰じゃ無理だから、助かるわ', set:'dobu_ishi=1', end:true}}});
  L.dialogs.push({id:'dobu-wait', char:'makiwari_tonari', title:T, start:'s', if:'q:dobu_ishi=1', n,
    nodes:{s:{t:'石は家の前の溝よ。持ち上げて（R）、道の端にでも置いとくれ', c:[['見てくる','$end']]}}});
  L.dialogs.push({id:'dobu-thanks', char:'makiwari_tonari', title:T, start:'s', if:'q:dobu_ishi=2', n,
    nodes:{s:{t:'水が流れるようになった！ 鉄の童、ありがとう。……礼といっても、こんな物しかないけど', c:[['（受け取る）','gift']]},
      gift:{t:'@tanomiDobu', set:'dobu_ishi=9', end:true}}}); /* @tanomiDobu＝本体が撫子を持ち物に足し、部屋に飾る（kazari=1）を始めて、礼の言葉を返す */
  L.dialogs.push({id:'dobu-after', char:'makiwari_tonari', title:T, start:'s', if:'q:dobu_ishi>=9&q:kazari=1&chance:40', n,
    nodes:{s:{t:'あの撫子、飾ってくれた？ 子らが、鉄の童の家に咲いとるか見に行くって言うのよ', c:[['まだ','$end'],['飾るよ','$end']]}}});
})();
