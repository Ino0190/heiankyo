/* 平安京：まる（鞠の童）が歩いているときだけ出る、町の人の一言。2026-10-30 井内さん承認（「決まってないことOKです」の3案の3つ目）。
 * 条件 robotMaru＝いま出ているロボがまる（heianTinRobotRuntime.robotId が maru-*）で、人のそばに寄っているとき。index.html の heianSpeechCond が判定する。
 * 初代の行（if:'robot'）は変えない。まるの丸さ・ふくらみ・弾みに触れる短い一言だけ（6行）。重みは数が少ないぶん×6（heianSpeechSayLine の wLine）。
 * 日本語の言い換え（鉄の童→鞠の童、錆・四角など）は heianTrText の HEIAN_ROBOT_SWAP が受け持つ。ここは「まるにだけ言う」行。D＝創作 */
(function(){
  'use strict';
  const L=window.HEIAN_LINES;
  if(!L||!Array.isArray(L.say))return;
  L.say.push(
    {at:['street','commoners'],who:'庶民',if:'robotMaru',t:'おや、丸いのう。…風を詰めた袋か？',n:'D 創作'},
    {at:['street','commoners'],who:'庶民',if:'robotMaru',t:'ぷにぷにしておるのう。…つついてよいか？',n:'D 創作'},
    {at:['street','commoners'],who:'庶民',if:'robotMaru',t:'針の先には気をつけなされよ。…その体にはな',n:'D 創作'},
    {at:['street','commoners','kamo'],who:'庶民',if:'robotMaru',t:'雨が降ったら、しぼんでしまわんか心配じゃ',n:'D 創作'},
    {at:['street','commoners','kamo'],who:'童',if:'robotMaru',t:'ねえ、蹴ったら跳ねる？ 鞠みたいだ',n:'D 創作'},
    {at:['street','commoners'],who:'童',if:'robotMaru',t:'この子、ふわふわしてる！ 一緒に蹴鞠しよう',n:'D 創作'}
  );
})();
