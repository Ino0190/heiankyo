/* 平安京／若君編「凧より遠くへ」 v1.0 — 独立した物語状態・会話リソース
 * GAME INTEGRATION REQUIRED: このファイル単独ではNPCの移動、肩車、舟、会話UIは動かない。
 * CadKit の現行実装に合うよう Kiro がイベントを接続する。D＝創作。
 */
(function (root) {
  'use strict';
  const KEY = 'heian-waka-adventure-v1';
  const VERSION = 1;
  const SCENES = {
    family: {
      title: '同じ家の子',
      lines: [
        ['従兄', 'また凧か。兄君は書を習っておられるぞ。'],
        ['若君', '兄上は兄上じゃ。わしは今日、風を見るのだ。'],
        ['従兄', 'わしも来月、父上に弓を習う。'],
        ['若君', '……わしも、いつか習う。']
      ],
      note: '従兄は悪役ではない。兄や従兄を意識する子の、ごく普通の日常。'
    },
    invitation: {
      title: '門の外へ',
      lines: [
        ['若君', 'お前は羅城門まで歩いたことがあるか。五重塔にも？'],
        ['若君', '兄上は、使いについて都を歩いたことがあるそうだ。'],
        ['若君', '……わしは、まだこの庭の外をよう知らぬ。'],
        ['若君', '今日だけ連れていってくれぬか。いや、わしが先に行く。お前はついて参れ。']
      ],
      choices: [['一緒に行こう', 'begin'], ['また今度', 'postpone']],
      note: '親しい状態でだけ出る任意イベント。断っても再挑戦可能。'
    },
    market: {
      title: '市の声',
      lines: [
        ['若君', '何じゃ、この声は！ 誰も彼も勝手に喋っておる。'],
        ['売り子', '坊ちゃん、何か買っていくかい。'],
        ['若君', '坊ちゃんではない。客じゃ！'],
        ['売り子', 'はいはい、お客さん。さて、何を探す？'],
        ['若君', 'あの童も、わしと同じほどの年か。'],
        ['荷運びの童', '話は後にしておくれ。俵を運ばんと。'],
        ['若君', '……働いておるのか。']
      ],
      note: '身分差の講義にはしない。同年代の子が働いている事実だけを見せる。'
    },
    temple: {
      title: '塔の上まで',
      lines: [
        ['若君', 'これは……いったい何層ある？'],
        ['鉄の童', '五つ。'],
        ['若君', '五つも！ 凧をこの上まで揚げたら見えるかな。'],
        ['若君', '……従兄の凧より、ずっと高く。'],
        ['若君', 'いや、今のは忘れよ。']
      ],
      note: '塔の史実・900年時点の建物は現行の建築考証を優先する。'
    },
    gate: {
      title: '都の終わる所',
      lines: [
        ['若君', 'これが、都の門か。屋敷の門よりも、ずっと大きい。'],
        ['若君', 'この外にも人が住み、道が続くのだな。'],
        ['若君', 'わしは都のことを何も知らぬな。'],
        ['若君', '……さあ、戻ろう。父上がお帰りになる前に。']
      ],
      note: '広足が現存するセーブなら任意の短い掛け合いを挿入可。連作広足への依存禁止。'
    },
    tired: {
      title: '足が痛い',
      lines: [
        ['若君', '……少し待て。もう足が痛む。'],
        ['若君', '邸の庭は、こんなに長くなかった。'],
        ['若君', 'お前が考えよ。……いや、すまぬ。腹を立てることではなかった。'],
        ['若君', 'もう少しだけ休ませてくれ。']
      ],
      note: '移動失敗にしない。地面に座り、水・木陰・草鞋の話。本人が自分で謝る。'
    },
    shoulder: {
      title: '肩の上から',
      lines: [
        ['若君', 'わ、わしを持ち上げるのか？'],
        ['若君', 'おお！ 高い！ こんな眺めは初めてじゃ。'],
        ['若君', 'あの人夫も、こうして見れば小さく見えるのう。'],
        ['若君', '……重くはないか？ 無理なら降ろしてくれ。']
      ],
      note: '既存「持ち上げる」の人物専用派生。肩に座り、両手で頭や肩を支える。'
    },
    pier: {
      title: '舟を見つける',
      lines: [
        ['舟頭', 'おや。ずいぶん草臥れたお客だな。'],
        ['若君', 'わしは草臥れてなどおらぬ。……少しだけじゃ。'],
        ['舟頭', '家司どのから話は聞いておるよ。短い間なら乗せて行こう。'],
        ['若君', '家司が？ ……いや、何でもない。']
      ],
      note: '合流地点は実在のゲーム内河岸・船着場で確定。舟は都を飛び越えない。'
    },
    boat: {
      title: '水の上の都',
      lines: [
        ['若君', '揺れた！ 鉄の童、そちらに寄るな！'],
        ['舟頭', '動かぬでくだされ。本当に傾きますぞ。'],
        ['若君', '……なあ、今日のこと、覚えておるか。'],
        ['若君', 'わしは毎日、兄上に比べられてばかりじゃ。'],
        ['若君', 'だがお前は、わしが次男でも、少しも気にせぬな。'],
        ['若君', '……うむ。それでよい。']
      ],
      note: '本音の一言は親密度で任意。必須本筋の舟会話は短くしてよい。'
    },
    return: {
      title: '近所で凧を',
      lines: [
        ['家司', 'お帰りなさいませ。若君、今日は何をして遊ばれましたか。'],
        ['若君', '凧じゃ。近くの庭でずっと揚げておった。'],
        ['家司', 'さようでございますか。よい風でしたな。'],
        ['若君', 'う、うむ。じつによい風じゃった。'],
        ['家司', '……鉄の童。船頭から知らせが届いております。'],
        ['家司', 'あの方があれほど機嫌よく戻られたのは、久しぶりです。'],
        ['家司', '次にお連れするときは、私にひと言ください。']
      ],
      note: '家司は怒っていないわけではない。安全を気に掛け、二人の秘密を守る。'
    },
    after: {
      title: '風のない日にも',
      lines: [
        ['若君', '今日は凧を持ってこなかった。'],
        ['若君', '……あの日の市には、また人が集まっておるかな。'],
        ['若君', 'いや、今日はここにおろう。別に、何でもよい。']
      ],
      note: '冒険を再実行しない。以降は普通の会話に混ぜる。'
    },
    steward: {
      title: '家司の頼み',
      lines: [
        ['家司', '先日の舟頭に礼を伝えていただけますかな。急ぐことはありません。'],
        ['家司', '若君に必要な紙を見繕いたい。紙屋院の者をご存じなら、話を聞いてみてください。'],
        ['家司', 'この頃、若君は歩く話ばかりなさる。悪いことではありますまい。']
      ],
      note: '３つの後日談の種。強制依頼にせず、ほかのパックへ任意で接続可能。'
    }
  };
  const ORDER = ['market','toji','rajomon','tired','shoulder','pier','boat','home'];
  const STAGE = {
    idle:'invitation', market:'market', toji:'temple', rajomon:'gate',
    tired:'tired', shoulder:'shoulder', pier:'pier', boat:'boat', home:'return', completed:'after'
  };
  const newState = () => ({v:VERSION,phase:'idle',startDay:null,completedDay:null,stewardTrust:false,seen:{},once:0,returnMode:null});
  function load() {
    try {const v=JSON.parse(root.localStorage?.getItem(KEY)||'null');
      if(v&&v.v===VERSION&&typeof v.phase==='string'&&Object.prototype.hasOwnProperty.call(STAGE,v.phase))
        return {...newState(),...v,seen:{...(v.seen||{})}};
    } catch (e) {}
    return newState();
  }
  let s=load();
  const save=()=>{try{root.localStorage?.setItem(KEY,JSON.stringify(s));}catch(e){}};
  function status(){return JSON.parse(JSON.stringify(s));}
  function begin(day){if(s.phase!=='idle')return false;s.phase='market';s.startDay=Number(day);s.once=1;save();return true;}
  // Coreから「該当する場所に実際に到達した」イベントだけを渡す。
  // tired は羅城門後の任意の休憩地点。shoulder は持ち上げ成功時。boat は乗船時。
  function event(key,day){
    // 明示的な遷移表を使い、不正キーや二度目の発火を無視する。
    if(s.phase==='shoulder'&&key==='walk'){s.returnMode='walk';s.phase='pier';save();return true;}
    const transitions={market:['market','toji'],toji:['toji','rajomon'],rajomon:['rajomon','tired'],
      tired:['tired','shoulder'],shoulder:['shoulder','pier'],pier:['pier','boat'],boat:['boat','home'],home:['home','completed']};
    const t=transitions[s.phase];if(!t||key!==t[0])return false;
    if(s.phase==='shoulder'&&key==='shoulder')s.returnMode='shoulder';
    s.phase=t[1];if(s.phase==='completed'){s.completedDay=Number(day);s.stewardTrust=true;}save();return true;}
  function scene(name){const id=name||STAGE[s.phase];return SCENES[id]||null;}
  function markSeen(id){if(!SCENES[id])return false;s.seen[id]=true;save();return true;}
  function canStart(){return s.phase==='idle';}
  function hasFinished(){return s.phase==='completed';}
  function stewardAvailable(){return s.stewardTrust;}
  function behavior(){if(s.phase==='idle'||s.phase==='completed')return 'none';
    if(['market','toji','rajomon'].includes(s.phase))return 'follow-wakagimi';
    if(s.phase==='tired')return 'waiting-rest';
    if(s.phase==='shoulder')return 'offer-shoulder-or-walk';
    if(s.phase==='pier')return s.returnMode==='walk'?'walk-together':'carry-wakagimi';
    if(s.phase==='boat')return 'boat-passenger';
    if(s.phase==='home')return 'return-home';return 'none';}
  // Debug/test only. Production UI must never expose.
  function reset(){s=newState();save();return status();}
  root.HEIAN_WAKA_ADVENTURE={VERSION,KEY,SCENES,ORDER,status,begin,event,scene,markSeen,canStart,hasFinished,stewardAvailable,behavior,reset};
})(typeof window!=='undefined'?window:globalThis);
