// 悲田院（右京 hideninUkyo・左京 hideninSakyo）の施設作業NPC台詞（2026-10-10）。
// life（wait 施しを待つ／sit 座って施しを受ける／sweep 掃く）を条件に使う。両院とも同じ一言を使う（at は配列）。
(function(){
  const L = window.HEIAN_LINES;
  if (!L) return;
  const AT = ['hideninUkyo', 'hideninSakyo'];

  L.say.push(
    { at: AT, who: '施しを待つ人', life: 'wait', t: '朝から待っている。今日は粥があるそうだ' },
    { at: AT, who: '施しを待つ人', life: 'wait', t: '病は治った。帰るところがない' },
    { at: AT, who: '施しを受ける人', life: 'sit', t: '昨日よりは歩ける' },
    { at: AT, who: '施しを受ける人', life: 'sit', t: 'どこから来たかって？……遠いところだ' },
    { at: AT, who: '下人', life: 'sweep', t: '人が多い日は、すぐ散らかる' },
    { at: AT, who: '下人', life: 'sweep', t: 'ここも毎日暮らす場所だからな' }
  );
})();
