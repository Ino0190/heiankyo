// 木工町（mokumachi）の施設作業NPC台詞（2026-10-10）。life（carry 荷運び／saw 木挽き）を条件に使う。
(function(){
  const L = window.HEIAN_LINES;
  if (!L) return;

  L.say.push(
    { at: 'mokumachi', who: '人夫', life: 'carry', t: 'この材はあっちだ。まだ乾かしている' },
    { at: 'mokumachi', who: '人夫', life: 'carry', t: '重い方を下にする。崩れたら全部やり直しだ' },
    { at: 'mokumachi', who: '人夫', life: 'saw', t: '木目に逆らうと刃が跳ねるぞ' },
    { at: 'mokumachi', who: '人夫', life: 'saw', t: '節のところだけは急ぐな' }
  );
})();
