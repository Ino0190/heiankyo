// 試験用パック「データだけで頼みごとを足せる」の確認（2026-10-07）。?devpacks=1 のときだけ読まれる（manifest.js の HEIAN_CONTENT_DEV_FILES）。
// 流れ: 小菊に話しかける（q:test_data=1）→ 菊女に話しかける（q:test_data=9）→ 東市の売り子の一言が出る。
// CadKit/index.html・会話エンジン・heian-lines.js は一切触っていない。架空の頼みごと。
(function(){
  const L = window.HEIAN_LINES;
  if (!L) return;

  L.quests.test_data = {
    ja: '試験の頼みごと（データ駆動）',
    en: 'Test Quest (Data-Driven)'
  };

  L.dialogs.push(
    {
      id: 'test-data-start',
      char: 'kogiku',
      if: 'q:test_data<1',
      title: '小菊',
      start: 's',
      nodes: {
        s: {
          t: '（試験）菊女さんに、くろのことを伝えてきてほしいの',
          c: [['伝えてくる', 'ok'], ['また今度', '$end']]
        },
        ok: {
          t: '東市の菊女さん。お願いね',
          set: 'test_data=1',
          end: true
        }
      },
      n: '試験用。架空の頼みごと'
    },
    {
      id: 'test-data-mid',
      char: 'kikume',
      if: 'q:test_data=1',
      title: '菊女',
      start: 's',
      nodes: {
        s: {
          t: '（試験）小菊からかい。くろなら、うちの軒で寝ているよ',
          set: 'test_data=9',
          end: true
        }
      },
      n: '試験用。架空の頼みごと'
    }
  );

  L.say.push(
    {
      at: 'eastMarket',
      who: '売り子',
      if: 'q:test_data>=9',
      t: '（試験）小菊のくろは、菊女の軒で寝ているそうだ',
      n: '試験用。架空'
    }
  );
})();
