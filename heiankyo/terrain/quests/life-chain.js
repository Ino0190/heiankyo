// 暮らしの連鎖 第1段の台詞パック（2026-10-14）。物が運ばれ、誰かが手を動かし、次の人の仕事につながる場の一言と掛け合い。
// 条件の life は CadKit/index.html の暮らしの営み（chop 薪割り／stack 薪を積む／unload 荷降ろし／ash 灰出し／vend 薪炭の商い／cook 炊事／well 水汲み／sweep 掃除／talk 立ち話）。
// n の確度: A＝一次史料に近い／B＝通説／C＝推定／D＝創作（開発の仮置き）。報酬・謎解きは付けない。
// 坊長・坊令・保長は別の役。保＝条坊の「4町」の保と、899年の保長（結保帳・五家相保）は同一視しない。台詞では坊長の名と届けだけを出す。
// 参照: 平安京/heiankyo_900_life_research_20261014.md
(function(){
  const L = window.HEIAN_LINES;
  if (!L) return;
  L.say.push(
    // L01 寺の裏で薪割り
    { at: ['toji', 'saiji', 'commoners'], who: '庶民', life: 'chop', when: ['dawn', 'morning'], t: '朝のうちに割っておく。昼は暑うて斧が重い', n: 'D 創作' },
    { at: ['toji', 'saiji', 'commoners'], who: '庶民', life: 'chop', t: '木目を見て割れ。節に当てると斧が跳ねる', n: 'D 創作' },
    { at: ['toji', 'saiji'], who: '庶民', life: 'chop', t: '寺の台所は薪をよう食う。割っても割っても足りん', n: 'C 推定（寺は炊事と湯の薪を多く使った）' },
    // L02 門前で薪の荷降ろし
    { at: ['street', 'nobles'], who: '人夫', life: 'unload', t: '山から牛で引いてきた。降ろしたら、あとは台所の者に渡す', n: 'C 推定（薪炭は京周辺の山から運ばれた＝通説）' },
    { at: ['street', 'nobles'], who: '人夫', life: 'unload', t: '束の数を言うぞ。一、二、三…帳面と合わせてくれ', n: 'D 創作' },
    { at: 'street', who: '人夫', life: 'unload', if: 'rain', t: '濡らすと薪が泣く。軒下へ急げ', n: 'D 創作' },
    // L04 井戸端の朝の水汲み（炊事とつなぐ）
    { at: ['commoners', 'street'], who: '女', life: 'well', when: ['dawn', 'morning'], t: '水を汲んだら、竈に火を入れる。薪は昨日割ったのが乾いとる', n: 'D 創作（薪割りと炊事をつなぐ）' },
    { at: ['commoners', 'street'], who: '女', life: 'well', t: '井戸の水は甕にためて、炊事場へ運ぶのよ', n: 'D 創作' },
    // L07 庶民宅の竈
    { at: 'commoners', who: '女', life: 'cook', when: ['dawn', 'morning'], t: '朝餉の粥を炊く。薪は隣の割った分を分けてもらった', n: 'D 創作' },
    { at: 'commoners', who: '女', life: 'cook', t: '竈の火を絶やすと、また火打ちからやり直しよ', n: 'D 創作' },
    { at: 'commoners', who: '女', life: 'cook', when: 'dusk', t: '煙が横に流れとる。明日は風が出るかもしれん', n: 'D 創作' },
    // L08 灰出し
    { at: 'commoners', who: '女', life: 'ash', t: '灰は捨てずに壺へ。畑にまくか、洗い物に使うのよ', n: 'C 推定（草木灰は洗いや肥に使われた）' },
    { at: 'commoners', who: '女', life: 'ash', when: ['dawn', 'morning'], t: '灰の下に火種が残っとる。水をかけてから出さんと', n: 'D 創作' },
    // L11 雨の小路で薪を軒下へ
    { at: 'commoners', who: '庶民', life: 'stack', if: 'rain', t: '雨が来る。薪を軒下へ入れんと、明日の飯が炊けん', n: 'D 創作' },
    { at: 'commoners', who: '庶民', life: 'stack', t: '薪は風が通るように積むもんだ。詰めると乾かん', n: 'D 創作' }
  );
})();

// 薪炭の商い・門前掃除・坊の下役と邸の家司（L09・L10）。第2の IIFE。
(function(){
  const L = window.HEIAN_LINES;
  if (!L) return;
  L.say.push(
    // 薪炭を荷車で売る商人（vend）。荷車売りの確度は低い（C〜D）。炭は冬の物
    { at: 'street', who: '行商', life: 'vend', t: '炭は大原から、薪は東の山から。牛に引かせてきた', n: 'C 推定（炭薪の産地は北山・東山などと言われる。荷車売りはD）' },
    { at: 'street', who: '行商', life: 'vend', t: '束で一つ、俵で一つ。米や布でも替えるよ', n: 'D 創作（物々交換が多かった＝通説）' },
    { at: 'street', who: '行商', life: 'vend', if: 'summer', t: '夏は炭が売れん。柴ばかり持ってきた', n: 'D 創作' },
    { at: 'street', who: '行商', life: 'vend', t: '牛が疲れるでな、日が高くなる前に売り切りたい', n: 'D 創作' },
    // 門前掃除（sweep）。邸・寺・官司の門の前
    { at: ['nobles', 'toji', 'saiji', 'daidairi'], who: '下人', life: 'sweep', when: ['dawn', 'morning'], t: '門の前が汚れていては、主の恥になる', n: 'C 推定（門前の掃除は下人の朝の務め）' },
    { at: ['nobles', 'toji', 'saiji'], who: '下人', life: 'sweep', t: '落ち葉は掃いても掃いても降ってくる', n: 'D 創作' },
    { at: 'commoners', who: '庶民', life: 'sweep', when: ['dawn', 'morning'], t: '家の前は自分で掃く。隣の分までは知らん', n: 'C 推定（側溝は沿いの家が掃除した＝推定）' },
    { at: 'commoners', who: '庶民', life: 'sweep', t: '鶏が散らかした。掃いたそばから落とすのよ', n: 'D 創作' },
    // L09 坊の辻で帳面を持つ下役が家を尋ねる（左京職の「人数が帳面と合わない」とつなぐ）
    { at: 'commoners', who: '官人', t: 'この坊の戸数を改めておる。籍の数と家の数が合わんのでな', n: 'C 推定（京職は籍と戸を扱った＝通説）。坊長の名は出さず、届けの話だけ' },
    { at: 'commoners', who: '官人', t: 'この長屋は、どの家が誰の名で出ておる？ 坊長どのに聞くか', n: 'D 創作。坊長は坊の者を把握した（通説）。保長は別の役で、名は出さない' },
    // L10 邸宅門前で家司が出入りを確かめる
    { at: 'nobles', who: '家司', t: '薪も炭も、門を通すときに数を書き留める。台所の費えは主の財布ゆえ', n: 'D 創作（家司は家政を取り仕切った＝通説）' },
    { at: 'nobles', who: '家司', t: '今日の荷は薪三十束。名を言え、どこの者だ', n: 'D 創作' }
  );
  L.talk.push(
    // 炭売りと客の立ち話（vend＋talk）
    { at: 'street', who: ['行商', '庶民'], lines: [[1, '炭はいくらだ。去年より高かろう'], [0, '雨が続いて山の道が悪い。運ぶ牛も足りん'], [1, '足りんのは銭だ。布で払えんか'], [0, '…布の目が詰んでいれば、考える']] },
    { at: 'street', who: ['行商', '女'], lines: [[1, '薪を二束。隣と半分ずつにしよう'], [0, '束が細いと言うなよ、山が遠いんだ'], [1, '遠いのはお互いさま。煙も遠くから見えるわ']] },
    // 薪割りと隣人（chop＋cook を一つの流れで）
    { at: 'commoners', who: ['庶民', '女'], lines: [[0, '割った分、置いておくぞ'], [1, 'ありがとう、ちょうど火を起こすところ'], [0, '灰は壺に溜めておけ。畑にまくから'], [1, 'はいはい。あなたの畑のためにね']] }
  );
})();

// 洗濯・掃除の人の台詞（2026-10-14 井内さん「掃除の人、洗濯の人はそれっぽいセリフを言うように」）。
// 洗濯(wash)と掃除(sweep)は雨の日は出ない（CadKit/index.html の RAIN_OFF）ので、雨の台詞は書かない。僧の門前掃除（東寺・西寺）は who:'僧'。
(function(){
  const L = window.HEIAN_LINES;
  if (!L) return;
  L.say.push(
    // 洗濯（wash）。川・堀・井戸端。洗い物は朝のうちに済ませ、干すのは日のあるうち
    { at: ['street', 'commoners', 'horikawa', 'kamo'], who: '女', life: 'wash', when: ['dawn', 'morning'], t: '朝のうちに洗って干す。昼を過ぎると乾かんのよ', n: 'C 推定（洗濯は川・堀・井戸端でした）' },
    { at: ['street', 'commoners', 'horikawa', 'kamo'], who: '女', life: 'wash', t: '灰を溶かした水でこすると、油の汚れが落ちる', n: 'C 推定（草木灰は洗いに使われた）' },
    { at: ['street', 'commoners', 'horikawa', 'kamo'], who: '女', life: 'wash', t: '麻の布は洗うほど柔らかくなる。絹はそうはいかん', n: 'D 創作' },
    { at: ['street', 'commoners', 'horikawa', 'kamo'], who: '女', life: 'wash', t: '堀の水は冷たい。手が赤うなる', n: 'D 創作' },
    { at: ['street', 'commoners', 'horikawa', 'kamo'], who: '女', life: 'wash', if: 'summer', t: '夏は洗ってすぐ乾く。冬は凍えて手が痛うて', n: 'D 創作' },
    { at: ['street', 'commoners', 'horikawa', 'kamo'], who: '女', life: 'wash', t: '主の衣は、しわを伸ばして干さんと叱られる', n: 'D 創作（邸の洗い女）' },
    { at: ['street', 'commoners', 'horikawa', 'kamo'], who: '女', life: 'wash', when: ['afternoon', 'dusk'], t: '日が傾く前に取り込まんと。夜露で湿ってしまう', n: 'D 創作' },
    // 僧の門前掃除（東寺・西寺）
    { at: ['toji', 'saiji'], who: '僧', life: 'sweep', when: ['dawn', 'morning'], t: '朝の務めの前に、門前を掃く。これも行のうち', n: 'C 推定（掃除は寺の日課）' },
    { at: ['toji', 'saiji'], who: '僧', life: 'sweep', t: '塵ひとつ無いのがよい、というわけでもない。掃く心が大事', n: 'D 創作' },
    // 路地・門前を掃く人の追加
    { at: 'commoners', who: '庶民', life: 'sweep', t: '朝いちばんに掃く。人が通ると、また土が舞う', n: 'D 創作' },
    { at: 'commoners', who: '庶民', life: 'sweep', t: '灰と落ち葉は壺へ。畑の肥やしになる', n: 'C 推定（草木灰は肥に使われた）' },
    { at: ['nobles', 'daidairi'], who: '下人', life: 'sweep', t: '雨の降らん日は、掃きがいがある', n: 'D 創作' }
  );
})();
// 小市の露店の売り子（life:'stall'・2026-10-15）。東市と同じ形の露店が庶民街区の小市に2〜3軒ある。品は暮らしの品（米・塩・干魚・海藻・油・菓子・櫛・針・布・薬・紙・沓）。
// 市での取引は物々交換が多かった＝通説。小さな近所の市の売り子の話しぶりは創作（D）。
(function(){
  const L = window.HEIAN_LINES;
  if (!L) return;
  L.say.push(
    { at: 'commoners', who: '売り子', life: 'stall', t: '米も塩も、今朝入ったばかりだよ。見ていきなされ', n: 'D 創作' },
    { at: 'commoners', who: '売り子', life: 'stall', t: '銭より米や布で払う人のほうが多い。それでもええ', n: 'B 通説（市の取引は物々交換が多かった）' },
    { at: 'commoners', who: '売り子', life: 'stall', t: '沓の鼻緒が切れたか。そこへ座れ、直してやろう', n: 'D 創作' },
    { at: 'commoners', who: '売り子', life: 'stall', when: ['morning', 'noon'], t: '干魚はまだ新しい。日が高うなると匂うでな、早めにな', n: 'D 創作' },
    { at: 'commoners', who: '売り子', life: 'stall', when: ['afternoon', 'dusk'], t: 'そろそろ店じまいの支度だ。残りは安くしておく', n: 'D 創作' },
    { at: 'commoners', who: '売り子', life: 'stall', if: 'rain', t: '雨でも屋根の下なら商いは続く。濡れずに見ていきなされ', n: 'D 創作' },
    { at: 'commoners', who: '売り子', life: 'stall', t: '東の市まで行かんでも、ここで足りる。顔なじみがおるから食うていける', n: 'D 創作' }
  );
})();
