// 施薬院（seyakuin）の施設作業NPC台詞（2026-10-10）。life（herb 薬草摘み／cook 薬を煎じる）を条件に使う。
(function(){
  const L = window.HEIAN_LINES;
  if (!L) return;

  L.say.push(
    { at: 'seyakuin', who: '下人', life: 'herb', t: 'これは煎じる分だ。踏むなよ' },
    { at: 'seyakuin', who: '下人', life: 'herb', t: '似ていても違う草がある' },
    { at: 'seyakuin', who: '炊女', life: 'cook', t: '煎じる火は強すぎても駄目だ' },
    { at: 'seyakuin', who: '炊女', life: 'cook', t: '薬は急かしても早くはできん' }
  );
})();
