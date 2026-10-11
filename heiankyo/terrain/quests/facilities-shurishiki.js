// 修理職町（shurishikimachi）の施設作業NPC台詞（2026-10-10）。life（hammer 大工／raft 筏師）を条件に使う。
(function(){
  const L = window.HEIAN_LINES;
  if (!L) return;

  L.say.push(
    { at: 'shurishikimachi', who: '人夫', life: 'hammer', t: '今日は門の戸に使う材だ' },
    { at: 'shurishikimachi', who: '人夫', life: 'hammer', t: '直すだけでも、新しく作るより手間がかかることがある' },
    { at: 'shurishikimachi', who: '人夫', life: 'raft', t: '上流から来た材は、ここで一度ほどく' },
    { at: 'shurishikimachi', who: '人夫', life: 'raft', t: '流れが強い日は、筏を寄せるだけで一仕事だ' }
  );
})();
