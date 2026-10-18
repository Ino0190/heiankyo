// 日常連作「薪割りの男と隣の女」（2026-10-15）。プレイヤーが何もしなくても、日を追って二人の暮らしが変わる。
// 1日目 男が薪を割り、隣の女が音にぼやく／2日目 男は腰を痛めて休み、割りかけの薪と斧が台に残る／
// 3日目 隣の女が薪を拾って積む（文句を言いながら男を気遣う）／4日目から 男が仕事に戻り、いつものやり取り。
// 進み方は日付だけ（会話・頼みごとに依らない）。起点は庶民の街区のこの家の裏へ歩いて初めて着いた日（start:'arrive'）。
// 報酬・知らせ・目印・強制会話は付けない。関係を説明する語りは入れず、しぐさ・置き物・台詞だけで見せる。
// 仕組みは CadKit/index.html の「日常連作」（L.serials）。書き方:
//  spot  … 置き場の種類と、その近くの点（いちばん近い置き場を家の裏の原点にする）。
//          原点の座標は「lx＝薪の山のある側が＋・lz＝家の裏壁の側が＋」。割る台は (0,7)、薪の山は lx 7〜29・lz 6〜14 にある
//  cast  … 出る人（char＝L.people の id。bind:{serial:'makiwari'} の人は、この連作の体にだけ載る）
//  stages… day＝起点から何日目（0始まり）。actors＝その日の役と場所（at が埋まっていたら alt を順に試す）。
//          props＝置き物（box: p 位置・s 大きさ・ry 向き・rx/rz 傾き・c 色）。seen＝近くで見たとき聞き書き帳に残す文（1段に1回）。
//          talk＝二人がそろって近くにいるときの掛け合い。recent＝その段の「近ごろ見たもの」
// n の確度: D 創作（開発の仮置き）。薪割り・薪積み・炊事のしぐさは暮らしの連鎖（life-chain.js）の役を使い回す
(function(){
  const L = window.HEIAN_LINES;
  if (!L) return;
  const add = p => { if (!L.people.some(q => q.id === p.id)) L.people.push(p); };
  add({id:'makiwari_otoko', name:'黒麻呂', who:'庶民', age:46, model:'庶民の街区の長屋の裏で、毎朝薪を割る男',
    bind:{serial:'makiwari'}, from:'山城国', home:'庶民の街区の長屋（裏に薪置場）', work:'薪を割って隣近所へ分ける。ほかは日雇い',
    family:'妻は先に死んだ。娘は西の京へ嫁いだ', story:'若いころは山から薪を担いで下ろしていた。いまは長屋の裏で割るだけだが、朝の斧の音だけは昔のまま',
    recent:['朝の薪は乾いとる。よう割れる'], wants:'腰が続くうちは、自分の薪は自分で割ること',
    day:[[6,17,'commoners','薪割り','serial:makiwari=0'],[6,17,'commoners','腰','serial:makiwari=1'],[6,17,'commoners','見張り','serial:makiwari=2'],[6,17,'commoners','また薪割り','serial:makiwari>=3'],[17,6,'commoners','家']],
    lines:{
      '薪割り':['木目を見りゃ、斧は勝手に落ちる','朝のうちに割っておかんと、昼は斧が重い','節に当てると跳ねる。…ほらな'],
      '腰':['…動かすな、と言われた','斧はそのままにしとけ。抜くと腰に来る','今日は、座っとるのが仕事だ'],
      '見張り':['積み方が逆だ。…いや、ええ','座っとると、薪の割れ目ばかり目に入る','礼は、治ってからまとめて言う'],
      'また薪割り':['腰はもう平気だ。…たぶんな','今日は小さく割る。音もいくらか小さい','積んである薪が、よう乾いとる'],
      '家':['日が暮れたら斧は持たん。手が狂う']},
    intro:['黒麻呂だ。この裏で薪を割っとる','若いころは山から薪を担いで下ろしとった','割った薪は、隣近所にも分けとる'],
    knows:{makiwari_tonari:'隣のは、口は悪いが手は早い'},
    kb:{dom:{'工':1},lens:'実直',src:[]}, axis:{mibun:'町の者',house:null,tachiba:'中立',chusei:null}, n:'D 創作（日常連作 薪割り）'});
  add({id:'makiwari_tonari', name:'常女', who:'女', age:39, model:'黒麻呂の隣に住む女。朝餉の支度をしながら、斧の音にぼやく',
    bind:{serial:'makiwari'}, from:'山城国', home:'庶民の街区の長屋（黒麻呂の隣）', work:'洗い物と縫い物の手間仕事',
    family:'夫は東市の荷運び。子が二人', story:'隣の黒麻呂とは、この長屋に来てからの付き合い。朝の斧の音には毎日文句を言うが、竈の薪は隣から分けてもらっている',
    recent:['隣の斧の音で、今朝も目が覚めた'], wants:'朝くらい、静かに起きたい',
    day:[[5,11,'commoners','朝餉','serial:makiwari=0'],[5,11,'commoners','静かな朝','serial:makiwari=1'],[5,17,'commoners','片付け','serial:makiwari=2'],[5,11,'commoners','いつもの朝','serial:makiwari>=3'],[11,19,'commoners','夕餉'],[19,5,'commoners','家']],
    lines:{
      '朝餉':['朝から斧の音。頭に響く','あの音で目が覚めるのよ、毎朝','薪は隣から分けてもらっとる。…文句は言うけど'],
      '静かな朝':['今朝は斧の音がせん','静かなのはいいけど、…なんだか落ち着かん','火の起こりが悪い。薪が湿っとる'],
      '片付け':['放っといたら雨で濡れる。それだけよ','積むだけ。割るのはあの人の仕事','座ってなさいと言うたのに、外に出とる'],
      'いつもの朝':['また始まった。…まあ、元気な音だこと','うちの竈の薪は、隣のよ','音がすると、ああ朝だと思う'],
      '夕餉':['夕餉の支度。子が腹をすかせとる','竈の火は、隣の薪で起こす'],
      '家':['子が寝たら、やっと静か']},
    intro:['常女よ。隣の黒麻呂さんとは、長い付き合い','夫は東市で荷を運んどる','朝は斧の音で起こされるの'],
    knows:{makiwari_otoko:'黒麻呂さん？ 朝がうるさいのよ。…悪い人ではないけど'},
    kb:{dom:{'市':1},lens:'皮肉',src:[]}, axis:{mibun:'町の者',house:null,tachiba:'中立',chusei:null}, n:'D 創作（日常連作 薪割り）'});
  // 置き物の部品（原点の座標。y は地面からの高さ）。割る台の天面は高さ約5.4
  const WOOD = 0xb08a58, ROUND = 0x8a6a44, IRON = 0x3a3836, HAFT = 0x7a5c3e;
  const log = (x, z, ry, y = .7) => ({k:'box', p:[x, y, z], s:[1.6, 1.4, 6], ry, c:WOOD});
  const round = (x, z) => ({k:'box', p:[x, 1.8, z], s:[3.2, 3.6, 3.2], ry:.3, c:ROUND});
  const axeInBlock = [{k:'box', p:[0, 8.6, 5.3], s:[.6, 7, .6], rx:-.45, c:HAFT}, {k:'box', p:[0, 5.9, 7.1], s:[.5, 1.4, 2.6], c:IRON}];
  const axeLeaning = [{k:'box', p:[4.4, 3.6, 7.1], s:[.6, 7, .6], rz:.28, c:HAFT}, {k:'box', p:[5.4, .5, 7.1], s:[.5, 1, 2.6], c:IRON}];
  const stackRow = (n, layer) => Array.from({length:n}, (_, i) => ({k:'box', p:[11.2 + i * 1.9, .7 + layer * 1.4, 3], s:[1.6, 1.4, 6], c:WOOD}));
  const neatStack = [...stackRow(5, 0), ...stackRow(4, 1), ...stackRow(3, 2)];
  const scattered = [log(-5, 2, .4), log(4, 1, -.7), log(6, 10, 1.2), log(-6, 10, -.2), log(3, -3, .9), log(-3, -2, -1.1), log(8, 4, .1), round(-8, 6), round(9, -1)];
  // 隣の女の竈の場所（隣の家の裏）。家と重なる・竈の前が塞がる所は飛ばして次を試す
  const NEIGHBOR = {at:[-56, -2], alt:[[-62, 3], [-48, -6], [-70, 0], [-44, 2], [56, -8]]};
  const SIT = {at:[-10, 13], alt:[[-12, 9], [-14, 4], [10, -6], [-6, -8]], face:Math.PI};
  L.serials = L.serials || [];
  L.serials.push({
    id:'makiwari', title:'薪割りの男と隣の女',
    spot:{role:'chop', near:[3945, 26512]}, area:{r:900}, start:'arrive', seeR:320,
    cast:{
      otoko:{char:'makiwari_otoko', who:'庶民', female:false, color:0x6f6a5e},
      tonari:{char:'makiwari_tonari', who:'女', female:true, color:0x7a5a45}},
    stages:[
      {day:0, n:'1日目 男が薪を割り、隣の女がぼやく',
        actors:{otoko:{role:'chop', at:[0, 0], hours:[[6.5, 11], [14, 16.5]]}, tonari:{role:'cook', ...NEIGHBOR, hours:[[6, 11], [15, 18.5]]}},
        props:[log(6, 9, 1.1), log(-4, 3, .5)],
        seen:'長屋の裏で、男が薪を割っていた。隣では女が炊事をしている',
        talk:[{cast:['otoko', 'tonari'], lines:[[1, '朝っぱらから、よう響くこと'], [0, '割らんと飯が炊けんぞ'], [1, 'うちの飯は、うちの薪で炊いとるわ'], [0, 'その薪、誰が割った']]}]},
      {day:1, n:'2日目 男は腰を痛めて休む。割りかけの薪と斧が台に残る',
        actors:{otoko:{role:'sit', ...SIT, hours:[[7, 11.5], [14, 16.5]]}, tonari:{role:'cook', ...NEIGHBOR, hours:[[6, 11], [15, 18.5]]}},
        props:[...axeInBlock, ...scattered],
        seen:'長屋の裏の割る台に、斧が刺さったままになっていた。割りかけの薪が散らばっている', seenWith:[],
        talk:[{cast:['otoko', 'tonari'], lines:[[1, '今朝は斧の音がせんね'], [0, '…腰をやった'], [1, 'あらまあ。年を考えなさい'], [0, '年の話はするな']]}],
        recent:{otoko:['斧を振り下ろしたところで、腰がぐきっといった'], tonari:['隣の斧の音がせん朝は、妙に落ち着かん']}},
      {day:2, n:'3日目 隣の女が薪を拾って積む。男は座って見ている',
        actors:{otoko:{role:'sit', ...SIT, hours:[[7, 16.5]]}, tonari:{role:'stack', at:[8, 1], alt:[[7, -2]], face:Math.PI / 2, hours:[[7.5, 11.5], [13.5, 16]]}},
        props:[...axeLeaning, log(-5, 2, .4), log(-6, 10, -.2), round(-8, 6), ...stackRow(5, 0), ...stackRow(2, 1)],
        seen:'隣の女が、薪割りの男の家の裏で、散らばった薪を拾い集めて積んでいた。男は壁ぎわに座っていた',
        talk:[{cast:['otoko', 'tonari'], lines:[[1, '寝とればいいのに、なんで外に出とるの'], [0, '見とるだけだ'], [1, '見とるなら、どこに積むか言いなさい'], [0, '…壁の際だ。風が通るように']]}],
        recent:{otoko:['隣のが薪を拾うてくれとる。礼はまだ言うとらん'], tonari:['隣の薪を拾うて積んだ。あの人、礼も言わん']}},
      {day:3, n:'4日目から 男が仕事に戻り、いつものやり取り',
        actors:{otoko:{role:'chop', at:[0, 0], hours:[[6.5, 11], [14, 16.5]]}, tonari:{role:'cook', ...NEIGHBOR, hours:[[6, 11], [15, 18.5]]}},
        props:[...neatStack, log(-4, 3, .5)],
        seen:'薪割りの男が、また斧を振っていた。台のわきに、きちんと積んだ薪の山がある', seenWith:['otoko'],
        talk:[{cast:['otoko', 'tonari'], lines:[[1, 'また始まった'], [0, '今日は小さく割っとる'], [1, '音は同じよ'], [0, '…腰には優しい']]},
          {cast:['otoko', 'tonari'], lines:[[0, '積んでくれた薪、よう乾いとった'], [1, '何の話？ 知らんわ'], [0, '…そうか']]}],
        recent:{otoko:['積んであった薪が、よう乾いとる'], tonari:['また朝から斧の音。…まあ、ええわ']}}
    ]
  });
})();
