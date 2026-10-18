// 木工町（mokumachi）の施設作業NPC台詞（2026-10-10）。life（carry 荷運び／saw 材を割る人）を条件に使う。
// 2026-10-17 本の考証A2: saw は大鋸の木挽きから「楔で材を割る人」に改めた（縦挽きの大鋸は室町時代から）。台詞も割る仕事に
(function(){
  const L = window.HEIAN_LINES;
  if (!L) return;

  L.say.push(
    { at: 'mokumachi', who: '人夫', life: 'carry', t: 'この材はあっちだ。まだ乾かしている' },
    { at: 'mokumachi', who: '人夫', life: 'carry', t: '重い方を下にする。崩れたら全部やり直しだ' },
    { at: 'mokumachi', who: '人夫', life: 'saw', t: '木目に沿って楔を打てば、素直に割れる' },
    { at: 'mokumachi', who: '人夫', life: 'saw', t: '節のところだけは急ぐな。楔が噛む' }
  );
})();
