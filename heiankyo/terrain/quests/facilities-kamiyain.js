// 紙屋院（kamiyain）の施設作業NPC台詞＋クエスト「乾かない一枚」（2026-10-10）
// life（作業役: paper 紙漉き／dry 紙干し／carry 荷運び）を条件に使う汎用会話システムの最初の実装。
// 流れ: 紙を干している作業者（dry）に話す→紙麻呂（kamiya）に聞く→写経生 真継（shakyosei）に確認→紙麻呂へ戻る→解決
(function(){
  const L = window.HEIAN_LINES;
  if (!L) return;

  L.quests.kamiyain_kawaranai = { ja: '乾かない一枚', en: 'The Sheet That Won\'t Dry' };

  // ---- 通常の一言（life で絞る。専用台詞があれば、その役の人は無関係な一般台詞を話さない）
  L.say.push(
    { at: 'kamiyain', who: '人夫', life: 'paper', t: '簀を傾けすぎると、厚みが偏るぞ' },
    { at: 'kamiyain', who: '人夫', life: 'paper', t: '水の中では、まだ紙には見えんだろ' },
    { at: 'kamiyain', who: '人夫', life: 'paper', t: '同じように漉いても、一枚ずつ違う' },
    { at: 'kamiyain', who: '人夫', life: 'paper', t: '手を止めると、繊維が沈むぞ' },
    { at: 'kamiyain', who: '人夫', life: 'dry', if: 'q:kamiyain_kawaranai<1', t: 'まだ触るな。指の跡が残る' },
    { at: 'kamiyain', who: '人夫', life: 'dry', if: 'q:kamiyain_kawaranai<1', t: '端が浮いた。もう一度貼り直しだ' },
    { at: 'kamiyain', who: '人夫', life: 'dry', if: 'q:kamiyain_kawaranai<1', t: '今日は風がある。乾くのは早そうだ' },
    { at: 'kamiyain', who: '人夫', life: 'dry', if: 'q:kamiyain_kawaranai<1', t: '雨が来る前に、この列だけでも乾けばな' },
    { at: 'kamiyain', who: '人夫', life: 'carry', t: '濡らすなよ。紙は米俵より気を遣う' },
    { at: 'kamiyain', who: '人夫', life: 'carry', t: 'こっちは漉く前、あっちは漉いた後だ' },
    { at: 'kamiyain', who: '人夫', life: 'carry', t: '蔵へ運ぶ。数は帳面と合わせてある' }
  );
})();

(function(){
  const L = window.HEIAN_LINES;
  if (!L) return;

  // ---- クエスト「乾かない一枚」
  // 1: 紙を干している作業者（dry）に話しかける→今日は乾きが遅いと聞く
  // 2: 紙麻呂（kamiya）に聞く→急ぎの紙があると分かる
  // 3: 写経生 真継（shakyosei）に確認→「今日でなくてもよい」と分かる
  // 9: 紙麻呂へ戻り、解決
  L.dialogs.push(
    {
      id: 'kamiyain-kawaranai-dry',
      who: ['人夫'], at: ['kamiyain'], life: ['dry'],
      if: 'q:kamiyain_kawaranai<1',
      title: '紙干しの人夫', start: 's',
      nodes: {
        s: {
          t: '今日は乾きが遅い。……急ぎの紙があるのに、困ったものだ',
          c: [['急ぎの紙とは？', 'q'], ['また今度', '$end']]
        },
        q: {
          t: '紙麻呂さんに聞いてくれ。あの人が受けた注文だ',
          set: 'kamiyain_kawaranai=1',
          end: true
        }
      }
    },
    {
      id: 'kamiyain-kawaranai-kamiya1',
      char: 'kamiya',
      if: 'q:kamiyain_kawaranai=1',
      title: '紙麻呂', start: 's',
      nodes: {
        s: {
          t: 'ああ、急ぎの紙か。写経生の真継さんに頼まれた分だが……今日は乾きが遅くてな',
          c: [['真継さんに聞いてみる', 'q'], ['また今度', '$end']]
        },
        q: {
          t: '東寺にいるはずだ。すまんが、聞いてきてくれんか',
          set: 'kamiyain_kawaranai=2',
          end: true
        }
      }
    },
    {
      id: 'kamiyain-kawaranai-shakyosei',
      char: 'shakyosei',
      if: 'q:kamiyain_kawaranai=2',
      title: '秦真継', start: 's',
      nodes: {
        s: {
          t: '紙麻呂さんの紙？ ……急いでいたのは少し前の話です。今日でなくても構いません',
          c: [['紙麻呂さんに伝える', 'q'], ['また今度', '$end']]
        },
        q: {
          t: '写し終えた経はまだ先にあります。慌てさせてしまったなら、すみません',
          set: 'kamiyain_kawaranai=3',
          end: true
        }
      }
    },
    {
      id: 'kamiyain-kawaranai-kamiya2',
      char: 'kamiya',
      if: 'q:kamiyain_kawaranai=3',
      title: '紙麻呂', start: 's',
      nodes: {
        s: {
          t: 'そうか。急いでいたのは、こっちだけか',
          end: true,
          set: 'kamiyain_kawaranai=9'
        }
      }
    }
  );

  // ---- クエスト解決後の変化（町の日常への痕跡。消えるのではなく一言が変わる）
  // people.kamiya.lines は if を見ないので、ここでは say に一本化する（紙屋院の dry の作業者の一言が変わる）
  L.say.push(
    { at: 'kamiyain', who: '人夫', life: 'dry', if: 'q:kamiyain_kawaranai>=9', t: '昨日の紙なら、もう乾いた' }
  );
})();
