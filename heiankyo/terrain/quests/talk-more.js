// 会話のもう1往復の台詞（2026-11-06 夕・井内さん「AとBの両方を作って」）。案A ひとこと返し（a1: area/lore/rumor/hour・a2: market/mine/fam）＋案B 問い返し・土蜘蛛の入口（b）
// 本体は window.HEIAN_LINES.talkMore が無ければ何も足さない。manifest に 'quests/talk-more.js', を1行
/* ---- talk-more-a1.js ---- */
/* 会話のもう1往復・案A「ひとこと返し」 担当 talk-a1（area・lore・rumor・hour）
   2026-11-06 井内さん「AとBの両方を作って／名前のない町の人ともう1往復」
   CONV-CONTRACT.md の形。返し r は答えの中身に依らず通じる言い方にする
   （答えは毎回変わる＝@area/@lore/@rumor/@omenHour の生成文）。
   相づち c はロボの口ぶりで短く。返し r は話し手の種類らしく（STYLE-C 案C の平安の言い方）。
   文字列は "…" で囲む（英 en に ' を入れられるように）。日本語の引用符は「」。 */
(function(){'use strict';const L=window.HEIAN_LINES;if(!L)return;
 const T=L.talkMore=L.talkMore||{react:{},ask:{tin:[],maru:[],spider:[]},spider:{brave:[],first:[]}};
 const addReact=(topic,kind,list)=>{const t=T.react[topic]||(T.react[topic]={});t[kind]=(t[kind]||[]).concat(list);};

 /* ===== area（このあたり）：@area は「このあたりは○○だ。<説明>」＝土地を名指しで教える答え ===== */
 addReact("area","any",[
  {c:{ja:"よい所だな",en:"A fine place."},r:[
    {ja:"ああ、水もよう出るし、住みよい所よ",en:"Aye, good water, a fine place to live."},
    {ja:"まあな。ここより先は田ばかりだがな",en:"Well enough. Past here it is all rice fields."}]},
  {c:{ja:"住みよいか？",en:"Is it a good place to live?"},r:[
    {ja:"悪くはない。市も近いしのう",en:"Not bad. The market is close by."},
    {ja:"人は多いが、気のよい者ばかりよ",en:"Crowded, but the folk here are kind."}]}]);
 addReact("area","庶民",[
  {c:{ja:"よい所だな",en:"A fine place."},r:[
    {ja:"ああ、代々ここに住んでおる",en:"Aye, my kin have lived here for generations."},
    {ja:"水もよう出るし、不足はないさ",en:"Good water, nothing wanting."}]},
  {c:{ja:"住みよいか？",en:"Is it a good place to live?"},r:[
    {ja:"まあな。火事さえ無けりゃ言うことない",en:"Well enough. If only there were no fires."},
    {ja:"暮らしてゆけるだけで、ありがたいことよ",en:"To get by at all, I am thankful."}]}]);
 addReact("area","官人",[
  {c:{ja:"よい所だな",en:"A fine place."},r:[
    {ja:"うむ、宮にも近く、何かと都合がよい",en:"Indeed. Close to the palace, most convenient."},
    {ja:"官人の住むにふさわしい所だ",en:"A place fit for an official, I should say."}]},
  {c:{ja:"住みよいか？",en:"Is it a good place to live?"},r:[
    {ja:"不足はない。務めに障りもないしな",en:"No complaints. It does not hinder my duties."}]}]);
 addReact("area","女",[
  {c:{ja:"よい所だな",en:"A fine place."},r:[
    {ja:"ええ、朝市が近くて助かるのよ",en:"Yes, the morning market is near, such a help."},
    {ja:"静かでねえ、わたしは気に入っておるのよ",en:"It is quiet. I am fond of it."}]},
  {c:{ja:"住みよいか？",en:"Is it a good place to live?"},r:[
    {ja:"悪くないわ。井戸端で話す相手もおるしね",en:"Not bad. I have friends to chat with at the well."}]}]);
 addReact("area","人夫",[
  {c:{ja:"よい所だな",en:"A fine place."},r:[
    {ja:"よかろうが悪かろうが、働く口があればそれでいい",en:"Good or bad, so long as there is work."},
    {ja:"ふん、住むだけなら、どこも同じよ",en:"Hmph. For just living, anywhere is the same."}]},
  {c:{ja:"住みよいか？",en:"Is it a good place to live?"},r:[
    {ja:"飯が食えりゃ上等さ。贅沢は言わん",en:"If I can eat, that is plenty. I ask no more."}]}]);
 addReact("area","売り子",[
  {c:{ja:"よい所だな",en:"A fine place."},r:[
    {ja:"だろう？人通りが多くて、商いにはもってこいよ",en:"Right? Plenty of passersby, perfect for trade."},
    {ja:"いい所さ。ついでに何か買ってきな",en:"A fine spot. Buy something while you are here."}]},
  {c:{ja:"住みよいか？",en:"Is it a good place to live?"},r:[
    {ja:"市が近いからね、暮らすにも商うにも困らんよ",en:"The market is close, good for both living and selling."}]}]);
 addReact("area","僧",[
  {c:{ja:"よい所だな",en:"A fine place."},r:[
    {ja:"さよう。朝夕の鐘が、よう響く所でのう",en:"Just so. The morning and evening bells carry well here."},
    {ja:"人の情けの篤い土地よ",en:"A land where people are kind of heart."}]},
  {c:{ja:"住みよいか？",en:"Is it a good place to live?"},r:[
    {ja:"心静かに過ごせる。ありがたいことよ",en:"One may live here in peace. A blessing."}]}]);
 addReact("area","童",[
  {c:{ja:"よい所だな",en:"A fine place."},r:[
    {ja:"うん！広場で蹴鞠できるんだよ",en:"Yeah! We get to play kemari in the square."},
    {ja:"あのね、川で魚もとれるんだよ",en:"You know, we can catch fish in the river too."}]},
  {c:{ja:"住みよいか？",en:"Is it a good place to live?"},r:[
    {ja:"すきだよ！友だちがいっぱいいるもん",en:"I like it! I have lots of friends."}]}]);
 addReact("area","女房",[
  {c:{ja:"よい所だな",en:"A fine place."},r:[
    {ja:"ええ、庭の木立が折々に美しゅうてね",en:"Yes, the garden trees are lovely with each season."},
    {ja:"静かで、宮仕えの身には落ち着く所ですわ",en:"Quiet. A soothing place for one in service."}]},
  {c:{ja:"住みよいか？",en:"Is it a good place to live?"},r:[
    {ja:"不足はございません。よき隣にも恵まれて",en:"Nothing is wanting. I am blessed with good neighbors."}]}]);
 /* 土蜘蛛でも通じる・怖がりながらの返し（any・c に蜘蛛を出さない） */
 addReact("area","any",[
  {c:{ja:"よい所だな",en:"A fine place."},r:[
    {ja:"ひ…あ、ああ、住みよい所さ。だ、だから何もせんでおくれ",en:"Eep... y-yes, a fine place. P-please, do me no harm."},
    {ja:"こ、怖い顔して…で、でも、悪い土地じゃないよ",en:"S-such a fearsome face... b-but it is no bad place."}]}]);

 /* ===== lore（言い伝え）：@lore は書物に残る土地の話＋出典、無ければ近い地点を勧める答え ===== */
 addReact("lore","any",[
  {c:{ja:"まことか？",en:"Is that true?"},r:[
    {ja:"ほんとうよ。隣の媼も見たと言うておった",en:"It is true. The old woman next door says she saw it too."},
    {ja:"さあて…まあ、昔から言い伝えておることよ",en:"Who can say. Still, it has been told since of old."}]},
  {c:{ja:"面白い話だな",en:"What an interesting tale."},r:[
    {ja:"だろう？土地の者なら皆知っておる話よ",en:"Right? Every local knows that one."},
    {ja:"気に入ったか。まだまだ、いくらでもあるぞ",en:"You liked it? There are plenty more where that came from."}]}]);
 addReact("lore","庶民",[
  {c:{ja:"まことか？",en:"Is that true?"},r:[
    {ja:"ああ、祖父の代から言い伝えておる",en:"Aye, handed down since my grandfather's day."},
    {ja:"嘘か真かは知らんが、皆そう言うておるよ",en:"True or not I cannot say, but all tell it so."}]},
  {c:{ja:"面白い話だな",en:"What an interesting tale."},r:[
    {ja:"だろう。この土地は古い話に事欠かんのよ",en:"Right. This place is never short of old tales."}]}]);
 addReact("lore","官人",[
  {c:{ja:"まことか？",en:"Is that true?"},r:[
    {ja:"書物にも見える話だ。作り話でもあるまい",en:"It is found in the records too. Hardly mere invention."},
    {ja:"ふむ、確かな筋から聞いた話よ",en:"Hmph, I had it from a reliable source."}]},
  {c:{ja:"面白い話だな",en:"What an interesting tale."},r:[
    {ja:"うむ。都の故事を知るは、官人のたしなみよ",en:"Indeed. Knowing the capital's old lore befits an official."}]}]);
 addReact("lore","女",[
  {c:{ja:"まことか？",en:"Is that true?"},r:[
    {ja:"ええ、わたしも母から聞いた話なのよ",en:"Yes, my mother told it to me as well."},
    {ja:"ほんとかしらねえ。でも昔からの言い伝えよ",en:"I do wonder if it is true. But it is an old telling."}]},
  {c:{ja:"面白い話だな",en:"What an interesting tale."},r:[
    {ja:"でしょう。子らにもよう聞かせる話なのよ",en:"Isn't it. I often tell it to the children."}]}]);
 addReact("lore","人夫",[
  {c:{ja:"まことか？",en:"Is that true?"},r:[
    {ja:"知らん。だが、嘘をつく爺でもなかったがな",en:"Dunno. But the old man who told it was no liar."},
    {ja:"さあな。信じるも信じんも、おまえ次第よ",en:"Who knows. Believe it or not, that's your call."}]},
  {c:{ja:"面白い話だな",en:"What an interesting tale."},r:[
    {ja:"ふん、そんな話で日銭は稼げんがな",en:"Hmph. Stories like that don't earn a day's coin."}]}]);
 addReact("lore","売り子",[
  {c:{ja:"まことか？",en:"Is that true?"},r:[
    {ja:"ほんとさ。嘘だと思うなら、人に聞いてみな",en:"It's true. Don't believe me? Ask around."},
    {ja:"さあね、話半分に聞いときな",en:"Who knows, take it with a grain of salt."}]},
  {c:{ja:"面白い話だな",en:"What an interesting tale."},r:[
    {ja:"だろ？話のついでに、何か買ってってくれよ",en:"Right? Now buy something while you're at it."}]}]);
 addReact("lore","僧",[
  {c:{ja:"まことか？",en:"Is that true?"},r:[
    {ja:"古い書に見える話でのう。仏の縁も深い所よ",en:"It is written in old texts. A place deep in the Buddha's grace."},
    {ja:"真偽はともかく、人の心に残る話よ",en:"True or not, it is a tale that stays in the heart."}]},
  {c:{ja:"面白い話だな",en:"What an interesting tale."},r:[
    {ja:"さよう。かような話に、昔の人の願いがこもっておる",en:"Just so. The old folk's wishes dwell in such tales."}]}]);
 addReact("lore","童",[
  {c:{ja:"まことか？",en:"Is that true?"},r:[
    {ja:"ほんとだよ！父も見たって言ってたもん",en:"It's true! My father said he saw it too."},
    {ja:"えへへ、ぼくもよく知らないけどね",en:"Hehe, I don't really know either."}]},
  {c:{ja:"面白い話だな",en:"What an interesting tale."},r:[
    {ja:"でしょ！もっとこわい話も知ってるよ",en:"Right! I know scarier stories too."}]}]);
 addReact("lore","女房",[
  {c:{ja:"まことか？",en:"Is that true?"},r:[
    {ja:"ええ、古い物語にも残されておる話ですわ",en:"Yes, it survives in the old tales as well."},
    {ja:"まことかどうか…でも、ゆかしい話でしょう",en:"Whether it be true... still, a tale of charm, is it not."}]},
  {c:{ja:"面白い話だな",en:"What an interesting tale."},r:[
    {ja:"ようございましょう。都には古き話が多うてね",en:"Lovely, is it not. The capital is full of old stories."}]}]);
 addReact("lore","any",[
  {c:{ja:"まことか？",en:"Is that true?"},r:[
    {ja:"ま、まことよ…だ、だから、そう見ないでおくれ…",en:"I-it's true... so please, do not stare at me so..."},
    {ja:"ほ、ほんとさ…(震え)…も、もう行っておくれ…",en:"I-it's true... (trembling) ...now please, go..."}]}]);

 /* ===== rumor（噂）：@rumor は近ごろの噂（百鬼夜行の先読み等）。返しは当たり外れに依らず通じる言い方 ===== */
 addReact("rumor","any",[
  {c:{ja:"まことか？",en:"Is that true?"},r:[
    {ja:"噂は噂よ。真に受けんがよい…が、用心に越したことはない",en:"A rumor is a rumor. Don't take it to heart, but caution never hurts."},
    {ja:"さあな。火のない所に煙は立たぬ、とも言うがのう",en:"Who knows. Though they say there's no smoke without fire."}]},
  {c:{ja:"気をつけよう",en:"I'll be careful."},r:[
    {ja:"ああ、用心なされ。夜は特にな",en:"Aye, take care. At night most of all."},
    {ja:"それがよい。何事も無いのが一番よ",en:"Wise. Better that nothing happens at all."}]}]);
 addReact("rumor","庶民",[
  {c:{ja:"まことか？",en:"Is that true?"},r:[
    {ja:"われは又聞きだがな。皆が噂しておるのは確かよ",en:"I only had it secondhand. But folk are surely talking of it."}]},
  {c:{ja:"気をつけよう",en:"I'll be careful."},r:[
    {ja:"ああ、暗くなったら早う帰ることよ",en:"Aye, get home early once it's dark."}]}]);
 addReact("rumor","官人",[
  {c:{ja:"まことか？",en:"Is that true?"},r:[
    {ja:"市井の噂だ。真偽は確かめねばなるまいがな",en:"Street gossip. The truth would want verifying, of course."}]},
  {c:{ja:"気をつけよう",en:"I'll be careful."},r:[
    {ja:"うむ、備えあれば憂いなし、だ",en:"Indeed. Forewarned is forearmed."}]}]);
 addReact("rumor","女",[
  {c:{ja:"まことか？",en:"Is that true?"},r:[
    {ja:"ええ、井戸端でも、その話でもちきりなのよ",en:"Yes, it's all they talk about at the well."},
    {ja:"ほんとかしら…でも、気味が悪いわねえ",en:"I wonder if it's true... still, it gives me chills."}]},
  {c:{ja:"気をつけよう",en:"I'll be careful."},r:[
    {ja:"そうしてね。日暮れ前には帰るのよ",en:"Do. Be home before dusk, now."}]}]);
 addReact("rumor","人夫",[
  {c:{ja:"まことか？",en:"Is that true?"},r:[
    {ja:"知るか。だが、妙なことが続いとるのは確かよ",en:"How should I know. But odd things keep happening, that's sure."}]},
  {c:{ja:"気をつけよう",en:"I'll be careful."},r:[
    {ja:"ふん、われは恐れなんぞせんがな",en:"Hmph. Me, I fear nothing."}]}]);
 addReact("rumor","売り子",[
  {c:{ja:"まことか？",en:"Is that true?"},r:[
    {ja:"さあね。だが、その噂で御守が飛ぶように売れとるよ",en:"Who knows. But that rumor's got charms selling like hotcakes."}]},
  {c:{ja:"気をつけよう",en:"I'll be careful."},r:[
    {ja:"なら、うちの御守を一つどうだい。安くしとくよ",en:"Then how about a charm from me? I'll make it cheap."}]}]);
 addReact("rumor","僧",[
  {c:{ja:"まことか？",en:"Is that true?"},r:[
    {ja:"噂に惑わされぬがよい。心を鎮めることよ",en:"Do not be swayed by rumor. Calm your heart."}]},
  {c:{ja:"気をつけよう",en:"I'll be careful."},r:[
    {ja:"よい心がけよ。経を唱えるも守りになる",en:"A good mind. Chanting the sutra is a protection too."}]}]);
 addReact("rumor","童",[
  {c:{ja:"こわい話だな",en:"A frightening tale."},r:[
    {ja:"うん、こわいよぉ…夜はひとりで出ないもん",en:"Yeah, it's scary... I don't go out alone at night."},
    {ja:"へへ、ぼくはこわくないもん！…ちょっとだけこわいけど",en:"Heh, I'm not scared! ...maybe a little."}]},
  {c:{ja:"気をつけよう",en:"I'll be careful."},r:[
    {ja:"うん！母といっしょに帰るんだ",en:"Okay! I go home with my mother."}]}]);
 addReact("rumor","女房",[
  {c:{ja:"まことか？",en:"Is that true?"},r:[
    {ja:"さあ…でも、女房づとめの者の間でも噂になっておりますの",en:"I wonder... but even we in service are whispering of it."}]},
  {c:{ja:"気をつけよう",en:"I'll be careful."},r:[
    {ja:"ええ、どうか夜歩きはお控えなさいませ",en:"Yes, do refrain from walking abroad at night."}]}]);
 addReact("rumor","any",[
  {c:{ja:"こわい話だな",en:"A frightening tale."},r:[
    {ja:"そ、そなたの方が、よほど…い、いえ、何でもない…",en:"Y-you are far more... n-no, never mind..."},
    {ja:"ひっ…う、噂どころじゃないよ、今は…",en:"Eep... this is no time for rumors..."}]}]);

 /* ===== hour（今の刻）：@omenHour は「今日は○○、今は△の刻。<助言>」＝暦と刻と道中の注意 ===== */
 addReact("hour","any",[
  {c:{ja:"かたじけない",en:"Thank you."},r:[
    {ja:"なんの。道中、気をつけて行きなされ",en:"Think nothing of it. Mind your way."},
    {ja:"よいよい。急ぐ用なら早う行くことよ",en:"It's nothing. If you're in a hurry, best be off."}]},
  {c:{ja:"気をつける",en:"I'll take care."},r:[
    {ja:"ああ、それがよい。日のあるうちにな",en:"Aye, good. While there's still daylight."},
    {ja:"うむ、無事に帰りなされよ",en:"Mm, get home safe now."}]}]);
 addReact("hour","庶民",[
  {c:{ja:"かたじけない",en:"Thank you."},r:[
    {ja:"なんの、礼にはおよばん。気をつけてな",en:"No need for thanks. Take care now."},
    {ja:"おお、律儀な童よのう。達者で行きな",en:"What a polite little one. Go in good health."}]},
  {c:{ja:"気をつける",en:"I'll take care."},r:[
    {ja:"ああ、暗くなる前に帰ることよ",en:"Aye, be back before dark."}]}]);
 addReact("hour","官人",[
  {c:{ja:"かたじけない",en:"Thank you."},r:[
    {ja:"うむ。刻を違えぬよう、励めよ",en:"Mm. See you keep to the hour."},
    {ja:"なに、礼にはおよばぬ。務めを怠るな",en:"No need to thank me. Neglect not your duty."}]},
  {c:{ja:"気をつける",en:"I'll take care."},r:[
    {ja:"よし。刻限を守るは何よりの心得だ",en:"Good. Keeping the hour is the first rule."}]}]);
 addReact("hour","女",[
  {c:{ja:"かたじけない",en:"Thank you."},r:[
    {ja:"いいえ、お安いご用よ。気をつけてね",en:"Not at all. Do take care."},
    {ja:"ふふ、丁寧な子ねえ。道中お気をつけて",en:"Ah, such a polite child. Safe travels."}]},
  {c:{ja:"気をつける",en:"I'll take care."},r:[
    {ja:"ええ、日の落ちる前に帰るのよ",en:"Yes, home before the sun sets."}]}]);
 addReact("hour","人夫",[
  {c:{ja:"かたじけない",en:"Thank you."},r:[
    {ja:"礼なんぞいらん。さっさと行け",en:"No need for thanks. Off you go."},
    {ja:"ふん、刻くらい己で覚えとけ",en:"Hmph, learn the hour for yourself."}]},
  {c:{ja:"気をつける",en:"I'll take care."},r:[
    {ja:"ああ、ぐずぐずしとると日が暮れるぞ",en:"Aye, dawdle and the sun'll set on you."}]}]);
 addReact("hour","売り子",[
  {c:{ja:"かたじけない",en:"Thank you."},r:[
    {ja:"なあに、ついでにうちの品も見てっとくれ",en:"Ah, have a look at my wares while you're here."},
    {ja:"おう、気をつけてな。また寄っとくれよ",en:"Right, take care. Come by again."}]},
  {c:{ja:"気をつける",en:"I'll take care."},r:[
    {ja:"市は日の入り前に鼓で閉まるからね、急ぎな",en:"The market shuts with the drum before sunset, so hurry."}]}]);
 addReact("hour","僧",[
  {c:{ja:"かたじけない",en:"Thank you."},r:[
    {ja:"なんの。仏のご加護があらんことを",en:"Think nothing of it. May the Buddha watch over you."},
    {ja:"よいよい。急がず、されど日のあるうちにな",en:"It is well. Do not rush, yet go while it is light."}]},
  {c:{ja:"気をつける",en:"I'll take care."},r:[
    {ja:"うむ、心静かに参られよ",en:"Mm, go with a calm heart."}]}]);
 addReact("hour","童",[
  {c:{ja:"かたじけない",en:"Thank you."},r:[
    {ja:"えへへ、どういたしまして！",en:"Hehe, you're welcome!"},
    {ja:"うん！ぼく、刻を数えるの得意なんだよ",en:"Yeah! I'm good at counting the hours."}]},
  {c:{ja:"気をつける",en:"I'll take care."},r:[
    {ja:"うん、ぼくももう帰るところ！",en:"Yeah, I'm heading home too!"}]}]);
 addReact("hour","女房",[
  {c:{ja:"かたじけない",en:"Thank you."},r:[
    {ja:"いいえ、どうかお気をつけて行かれませ",en:"Not at all. Do go with care."},
    {ja:"まあ、ご丁寧に。道中ご無事で",en:"How courteous. Safe on your way."}]},
  {c:{ja:"気をつける",en:"I'll take care."},r:[
    {ja:"ええ、日の暮れぬうちにお戻りを",en:"Yes, be back before nightfall."}]}]);
 addReact("hour","any",[
  {c:{ja:"かたじけない",en:"Thank you."},r:[
    {ja:"い、いえ…もう用はすんだろ？は、早う行っておくれ…",en:"N-no... you have what you need? P-please, go now..."},
    {ja:"き、気をつけるのは、此方の方だよ…",en:"I-it's me who ought to take care..."}]}]);
})();

/* ---- talk-more-a2.js ---- */
(function(){'use strict';const L=window.HEIAN_LINES;if(!L)return;
 const T=L.talkMore=L.talkMore||{react:{},ask:{tin:[],maru:[],spider:[]},spider:{brave:[],first:[]}};
 const addReact=(topic,kind,list)=>{const t=T.react[topic]||(T.react[topic]={});t[kind]=(t[kind]||[]).concat(list);};
 // talk-a2（2026-11-06 井内さん「もう1往復」案A・ひとこと返し）: market（今日の市）・mine（身の上）・fam（家の者）。
 // 返しは身の上・家の者・市の答えの中身に依らず通じる言い方にする。相づち c は短くロボの口ぶり、返し r は話し手の種類らしく。平安の言い方（STYLE-C）。

 /* ===== market（今日の市）===== 相づち: 品を尋ねる／軽い「そうか」 */
 addReact("market","any",[
  {c:{ja:"掘り出し物はあったか",en:"Find any bargains?"},r:[
   {ja:"さあな。見て回るのが楽しみよ",en:"Who knows. Half the fun is browsing."},
   {ja:"日によるな。早う行った者が得をする",en:"Depends on the day. The early ones get the best of it."}]},
  {c:{ja:"そうか",en:"I see."},r:[
   {ja:"うむ。暇があれば覗いてみよ",en:"Aye. Take a look if you have the time."},
   {ja:"市は昼を過ぎると店じまいする。早いがよいぞ",en:"The market closes up after midday. Best go early."}]}]);
 addReact("market","売り子",[
  {c:{ja:"掘り出し物はあるか",en:"Anything good today?"},r:[
   {ja:"あるとも。おのれの品がいちばんよ、寄っていけ",en:"Of course. My wares are the finest, come have a look."},
   {ja:"今日は品がよう揃うておる。見るだけでもよいぞ",en:"Good stock today. Just looking is fine."}]},
  {c:{ja:"そうか",en:"I see."},r:[
   {ja:"ひやかしでもよい、また寄れ",en:"Browse all you like, come again."},
   {ja:"まけておくぞ、今日のうちだ",en:"I will cut the price, only today, mind."}]}]);
 addReact("market","客",[
  {c:{ja:"掘り出し物はあったか",en:"Find any bargains?"},r:[
   {ja:"麻布を安う手に入れた。今日は運がよい",en:"Got hemp cloth cheap. A lucky day."},
   {ja:"いや、値が張ってな。手ぶらで帰るところよ",en:"No, prices were high. Heading home empty-handed."}]},
  {c:{ja:"そうか",en:"I see."},r:[
   {ja:"市は人が多うて疲れる。だが面白い",en:"The crowds wear you out, but it is good fun."},
   {ja:"次は早う来ねばな",en:"Next time I must come earlier."}]}]);
 addReact("market","行商",[
  {c:{ja:"商いはどうだ",en:"How is trade?"},r:[
   {ja:"まずまずよ。足で稼ぐ身だからな",en:"Fair enough. I earn with my feet, after all."},
   {ja:"今日は捌けた。明日は在所を回る",en:"Sold out today. Tomorrow I make the village rounds."}]},
  {c:{ja:"そうか",en:"I see."},r:[
   {ja:"遠くの品を運ぶのがおのれの役よ",en:"Carrying far-off goods is my trade."},
   {ja:"また荷を担いで出直しだ",en:"Back on the road with my load again."}]}]);
 addReact("market","庶民",[
  {c:{ja:"何を買いに行く",en:"What are you off to buy?"},r:[
   {ja:"米と塩だ。暮らしに要る物よ",en:"Rice and salt, the things a household needs."},
   {ja:"見るだけよ。銭は惜しいからな",en:"Just looking. Coin is dear."}]},
  {c:{ja:"そうか",en:"I see."},r:[
   {ja:"市を覗くのが楽しみでな",en:"A peek at the market is a small pleasure."},
   {ja:"掘り出し物があればもうけものよ",en:"A bargain would be a happy find."}]}]);
 addReact("market","女",[
  {c:{ja:"よい品はあったか",en:"Find anything good?"},r:[
   {ja:"麻の糸を買うたの。冬の仕度よ",en:"I bought hemp thread, getting ready for winter."},
   {ja:"青物が安うてね、助かったわ",en:"The greens were cheap, a real help."}]},
  {c:{ja:"そうか",en:"I see."},r:[
   {ja:"市は賑やかで、見ているだけでも楽しいの",en:"The market is lively, a joy just to watch."},
   {ja:"また覗きに行くわ",en:"I will go take another look."}]}]);
 addReact("market","人夫",[
  {c:{ja:"何を見てきた",en:"What did you see there?"},r:[
   {ja:"酒を一杯ひっかけてきた。働いた後はうまいぞ",en:"Had a cup of sake. Tastes fine after a day of work."},
   {ja:"見るだけよ、銭がないからな",en:"Just looking, no coin on me."}]},
  {c:{ja:"そうか",en:"I see."},r:[
   {ja:"荷運びが済んだら、また市で一息つく",en:"Once the hauling is done, I rest a bit at the market."},
   {ja:"市のにぎわいは好きだ",en:"I like the bustle of the market."}]}]);

 /* ===== mine（身の上）===== 相づち: 暮らしに少し踏み込む／軽い「そうか」。悩みの返しは重くしすぎない */
 addReact("mine","any",[
  {c:{ja:"暮らしは楽か",en:"Is life easy for you?"},r:[
   {ja:"楽ではないが、なんとかやっておる",en:"Not easy, but I manage."},
   {ja:"日々食うていけるだけでも、ありがたい話よ",en:"Just having food each day is something to be thankful for."}]},
  {c:{ja:"そうか",en:"I see."},r:[
   {ja:"まあ、そういう身の上よ",en:"Well, that is my lot."},
   {ja:"人に話すほどのことでもないがな",en:"Nothing worth telling, really."}]}]);
 addReact("mine","庶民",[
  {c:{ja:"暮らし向きはどうだ",en:"How do you get by?"},r:[
   {ja:"楽ではないが、飢えてはおらぬ。それで十分よ",en:"Not easy, but I do not go hungry. That is enough."},
   {ja:"日銭で暮らす身だ。明日のことは明日考える",en:"I live day to day. Tomorrow's worry is for tomorrow."}]},
  {c:{ja:"そうか",en:"I see."},r:[
   {ja:"まあ、どこも同じようなものよ",en:"Well, it is the same everywhere."},
   {ja:"聞いてくれて、うれしいぞ",en:"Kind of you to ask."}]}]);
 addReact("mine","女",[
  {c:{ja:"ひとりで大変だな",en:"That must be hard on your own."},r:[
   {ja:"慣れたものよ。手を動かしていれば気も紛れる",en:"I am used to it. Keeping busy eases the mind."},
   {ja:"大変でも、暮らしは続くからね",en:"Hard as it is, life goes on."}]},
  {c:{ja:"そうか",en:"I see."},r:[
   {ja:"こんな話、退屈だったろう",en:"Dull talk, I am afraid."},
   {ja:"聞いてくれて、うれしいわ",en:"Kind of you to listen."}]}]);
 addReact("mine","人夫",[
  {c:{ja:"国が恋しいか",en:"Do you miss home?"},r:[
   {ja:"たまにな。山の匂いが恋しい",en:"Now and then. I miss the smell of the hills."},
   {ja:"もう京の水に慣れた。帰る当てもないしな",en:"I have grown used to the capital. No reason to go back, anyway."}]},
  {c:{ja:"そうか",en:"I see."},r:[
   {ja:"体が資本の身よ。壊さぬようにな",en:"My body is all I have, got to keep it whole."},
   {ja:"まあ、こんな男の話だ",en:"Well, that is a workman's tale."}]}]);
 addReact("mine","僧",[
  {c:{ja:"修行はつらいか",en:"Is the training hard?"},r:[
   {ja:"つらい時もある。だが心は静かよ",en:"Hard at times, yet the heart stays calm."},
   {ja:"一歩ずつ進むだけだ。急いても仕方がない",en:"One step at a time. No use rushing."}]},
  {c:{ja:"そうか",en:"I see."},r:[
   {ja:"御仏の縁で、こうしておる",en:"By the Buddha's grace, here I am."},
   {ja:"聞いてくれて、心が軽うなった",en:"My heart feels lighter for your listening."}]}]);
 addReact("mine","衛士",[
  {c:{ja:"国が恋しいか",en:"Do you miss home?"},r:[
   {ja:"恋しいさ。だが務めが明けるまでは帰れぬ",en:"I do. But I cannot go back till my duty is done."},
   {ja:"慣れた。京の暮らしも悪くない",en:"I have settled in. Life in the capital is not bad."}]},
  {c:{ja:"そうか",en:"I see."},r:[
   {ja:"番が明けたら一杯やるのが楽しみでな",en:"A cup when my watch ends, that is what I look forward to."},
   {ja:"こんな話、退屈だろう",en:"Dull talk, I know."}]}]);
 addReact("mine","官人",[
  {c:{ja:"お勤めは忙しいか",en:"Are you kept busy at your post?"},r:[
   {ja:"書き物が絶えぬ。地味な役目よ",en:"The paperwork never ends. A dull office."},
   {ja:"まずまずだ。禄で家の者を養うておる",en:"Well enough. My stipend keeps the household."}]},
  {c:{ja:"そうか",en:"I see."},r:[
   {ja:"出世は望まぬ。無事が一番よ",en:"I seek no promotion. A quiet life is best."},
   {ja:"聞いてくれて、かたじけない",en:"I am obliged to you for asking."}]}]);

 /* ===== fam（家の者）===== 相づち: 家族に少し踏み込む／軽い「そうか」。返しは子の有無などに依らず通じる言い方 */
 addReact("fam","any",[
  {c:{ja:"家は賑やかか",en:"Is your house a lively one?"},r:[
   {ja:"まあな。にぎやかなのが取り柄よ",en:"Aye. Being lively is its one virtue."},
   {ja:"それなりさ。どこの家も同じよ",en:"Well enough. Every house is the same."}]},
  {c:{ja:"そうか",en:"I see."},r:[
   {ja:"みな達者でおる。それが何よりだ",en:"All in good health, that is what matters most."},
   {ja:"家の話は、しだすと切りがないな",en:"Talk of family, once started, has no end."}]}]);
 addReact("fam","庶民",[
  {c:{ja:"みな達者か",en:"Is everyone well?"},r:[
   {ja:"おかげでな。達者が一番の宝よ",en:"Thanks to you, yes. Health is the greatest treasure."},
   {ja:"子らが風邪をひくと気を揉むがな",en:"Though I fret when the little ones catch a chill."}]},
  {c:{ja:"そうか",en:"I see."},r:[
   {ja:"狭い家だが、雨露はしのげる",en:"A cramped house, but it keeps the rain off."},
   {ja:"家族がおれば、働く張り合いもある",en:"With family, there is a reason to work."}]}]);
 addReact("fam","女",[
  {c:{ja:"子は手がかかろう",en:"Children must be a handful."},r:[
   {ja:"手はかかるが、笑うた顔を見ると忘れるの",en:"A handful, yes, but one smile and I forget it all."},
   {ja:"大きゅうなるのは早いものよ",en:"They grow up so quickly."}]},
  {c:{ja:"そうか",en:"I see."},r:[
   {ja:"家の者のために、今日も働くわ",en:"For my family, I will work again today."},
   {ja:"聞いてくれて、うれしいの",en:"Kind of you to ask."}]}]);
 addReact("fam","人夫",[
  {c:{ja:"大変だな",en:"That sounds hard."},r:[
   {ja:"食わせる口があるのは、ありがたいことよ",en:"Mouths to feed are a blessing, truly."},
   {ja:"なに、体さえ動けば家族は養える",en:"Bah, so long as I can work, I can keep them fed."}]},
  {c:{ja:"そうか",en:"I see."},r:[
   {ja:"家で待つ者がおれば、重い荷も軽いぞ",en:"With someone waiting at home, even a heavy load feels light."},
   {ja:"まあ、どこも同じようなものよ",en:"Well, it is the same for everyone."}]}]);
 addReact("fam","女房",[
  {c:{ja:"里の家が恋しいか",en:"Do you miss your family home?"},r:[
   {ja:"たまにね。文のやりとりだけが頼りよ",en:"Now and then. Letters are my only comfort."},
   {ja:"お仕えの身だもの、めったには帰れぬ",en:"I am in service; I can rarely return."}]},
  {c:{ja:"そうか",en:"I see."},r:[
   {ja:"家の者が達者なら、それでよいの",en:"So long as my kin are well, I am content."},
   {ja:"こんな話、退屈だったでしょう",en:"Dull talk, I am sure."}]}]);
 addReact("fam","官人",[
  {c:{ja:"子は何人だ",en:"How many children have you?"},r:[
   {ja:"二人おる。育ち盛りで米がよう減るわ",en:"Two. Growing fast, the rice vanishes."},
   {ja:"まだおらぬ。これからよ",en:"None yet. In time, perhaps."}]},
  {c:{ja:"そうか",en:"I see."},r:[
   {ja:"家の者を養うのが、勤めの張り合いよ",en:"Providing for my household is what spurs my work."},
   {ja:"親の達者なうちは、孝行もできる",en:"While my parents are well, I can still do right by them."}]}]);
 addReact("fam","従者",[
  {c:{ja:"家の者は近くか",en:"Is your family near?"},r:[
   {ja:"同じ京におる。非番の日に会うのが楽しみでな",en:"Here in the capital. I look forward to my days off to see them."},
   {ja:"在所に残してきた。いつか呼び寄せたい",en:"Left them back home. One day I hope to send for them."}]},
  {c:{ja:"そうか",en:"I see."},r:[
   {ja:"主にお仕えする身だが、家も大事よ",en:"I serve my lord, but family matters too."},
   {ja:"まあ、こんな話だ",en:"Well, that is how it is."}]}]);
})();

/* ---- talk-more-b.js ---- */
/* 会話のもう1往復 b: 案B 問い返し ＋ 土蜘蛛の入口 ＋ spider.brave / spider.first
   2026-11-06 夕 井内さん「名前のない町の人ともう1往復」「蜘蛛の時はなかなか喋ってくれないはず」
   形は CONV-CONTRACT.md のとおり。本体に L.talkMore が無ければ何も足さない。
   台詞は平安の言い方（STYLE-C.md）。英語 en を全部に付ける。
   ロボの呼び名は、そのロボ専用の問いでは本来の名前で書いてよい（話す時に今のロボへ自動で替わる）。 */
(function(){'use strict';
 var L=window.HEIAN_LINES;if(!L)return;
 var T=L.talkMore=L.talkMore||{react:{},ask:{tin:[],maru:[],spider:[]},spider:{brave:[],first:[]}};
 var addAsk=function(robot,list){T.ask[robot]=(T.ask[robot]||[]).concat(list);};

 /* ===== 案B 問い返し（gate:false）: 相手がロボに問いを投げ、こちらが答え（c）、相手が受ける（r）。
    r で相手の暮らしが少し見える。答えの一つは少しおどけたもの。種類で絞る問いを各ロボ3問混ぜる。 ===== */

 /* --- 鉄の童 tin（重い鉄・飛べない・梯子で上り下り・力持ち・冷たい体） --- */
 addAsk("tin",[
  {kinds:["any"],gate:false,q:{ja:"お主、飯は食わぬのか",en:"Do you not eat?"},a:[
    {c:{ja:"食わぬ。腹も減らぬ",en:"I do not eat. I never go hungry."},r:{ja:"うらやましい。おのれは朝から水しか飲んでおらぬ",en:"Lucky you. I have had nothing but water since morning."},ok:true},
    {c:{ja:"油を一滴もらえば動く",en:"A drop of oil keeps me going."},r:{ja:"安上がりな体よのう。羨ましいかぎりじゃ",en:"A cheap body to keep. How I envy it."},ok:true},
    {c:{ja:"腹の中は歯車ばかりだ",en:"Only gears inside my belly."},r:{ja:"歯車か…ならば鼠にもかじられぬな",en:"Gears, is it... then not even the rats will nibble you."},ok:true}
  ]},
  {kinds:["any"],gate:false,q:{ja:"その手、冷たかろう。触ってよいか",en:"That hand must be cold. May I touch it?"},a:[
    {c:{ja:"触れてもよい。冷たいぞ",en:"Go on, touch it. It is cold."},r:{ja:"ひや…井戸の水より冷たいわ。夏によさそうじゃ",en:"Brr... colder than well-water. Good for summer, this."},ok:true},
    {c:{ja:"温めてやろうか",en:"Shall I warm it for you?"},r:{ja:"いや、そのままでよい。炭が惜しい",en:"No, leave it. Charcoal is dear."},ok:true},
    {c:{ja:"鉄だ。叩けば鳴る",en:"It is iron. Rap it and it rings."},r:{ja:"ほんに鐘のようだ。寺で雇うてもらえ",en:"Truly like a temple bell. Go get hired at a temple."},ok:true}
  ]},
  {kinds:["any"],gate:false,q:{ja:"飛べるのか、その体で",en:"Can you fly, in that body?"},a:[
    {c:{ja:"飛べぬ。重いのだ",en:"I cannot fly. I am too heavy."},r:{ja:"そうか。われらも飛べぬ。おあいこじゃ",en:"I see. Nor can we. We are even, then."},ok:true},
    {c:{ja:"梯子なら上り下りできる",en:"I can go up and down a ladder, though."},r:{ja:"梯子か。屋根葺きに来てくれぬか",en:"A ladder, eh? Come help thatch my roof, will you?"},ok:true},
    {c:{ja:"飛ぶのは鞠の童の役だ",en:"Flying is the Ball Child's job."},r:{ja:"役割があるのか。宮仕えのようじゃな",en:"You have your roles? Like service at court."},ok:true}
  ]},
  {kinds:["any"],gate:false,q:{ja:"雨に濡れて錆びはせぬか",en:"Will you not rust in the rain?"},a:[
    {c:{ja:"錆びる。だから軒を選んで歩く",en:"I do rust. So I keep to the eaves."},r:{ja:"われも雨の日は商いを休む。似たものよ",en:"I too rest from trade on rainy days. We are alike."},ok:true},
    {c:{ja:"油を塗れば平気だ",en:"A coat of oil and I am fine."},r:{ja:"手入れのいる体は難儀じゃのう",en:"A body that needs tending is a trial, is it not."},ok:true},
    {c:{ja:"錆びたら赤くなる。紅葉のように",en:"When I rust I turn red. Like the autumn leaves."},r:{ja:"まあ、風流を言う鉄もおるのか",en:"Well now, an iron thing that speaks of elegance."},ok:true}
  ]},
  {kinds:["any"],gate:false,q:{ja:"夜も目が光るのか。盗人よけによいな",en:"Do your eyes glow at night? Good against thieves."},a:[
    {c:{ja:"光る。闇でも歩ける",en:"They glow. I can walk in the dark."},r:{ja:"ならば夜回りを頼みたい。近頃は物騒でな",en:"Then I would ask you to keep night-watch. Times are uneasy."},ok:true},
    {c:{ja:"灯りの油がいらぬのが自慢だ",en:"My pride is needing no lamp-oil."},r:{ja:"うらやましい。油は高うてかなわぬ",en:"Enviable. Oil is so dear I can scarce afford it."},ok:true},
    {c:{ja:"目をつむれば消える。寝たふりだ",en:"Shut them and they go out. I feign sleep."},r:{ja:"はは、鉄も寝たふりをするか",en:"Ha, even iron plays at sleeping!"},ok:true}
  ]},
  {kinds:["any"],gate:false,q:{ja:"どこぞの献上品か。帳簿には無いが",en:"Some tribute gift? You are not in the ledger."},a:[
    {c:{ja:"帳簿には載らぬ身だ",en:"I am not one for any ledger."},r:{ja:"困るのう。載らぬ物は、無いのと同じでな",en:"Troublesome. What is not in the ledger might as well not exist."},ok:true},
    {c:{ja:"遠い国から歩いて来た",en:"I walked here from a far country."},r:{ja:"歩いて？ 関所はどう抜けた",en:"Walked? And how did you pass the barriers?"},ok:true},
    {c:{ja:"われを数えると、一、で止まる",en:"Count me and you stop at one."},r:{ja:"一品物か。ならば値は付けられぬな",en:"One of a kind? Then no price can be set on you."},ok:true}
  ]},
  {kinds:["any"],gate:false,q:{ja:"重そうだ。渡れぬ橋もあろう",en:"You look heavy. Some bridges you cannot cross, surely."},a:[
    {c:{ja:"あやうい橋は、川を回って渡る",en:"A frail bridge I skirt, and go round by the river."},r:{ja:"用心深いのう。橋が落ちると往生するでな",en:"Prudent of you. A collapsed bridge is a sore trial."},ok:true},
    {c:{ja:"板が鳴るので、そっと渡る",en:"The planks creak, so I tread softly."},r:{ja:"その体でそっと、か。見てみたいわ",en:"Softly, in that body? I should like to see that."},ok:true},
    {c:{ja:"いっそ川に立って、橋になろうか",en:"Perhaps I should stand in the river and be the bridge."},r:{ja:"はは、鉄の橋か。沈まぬならありがたい",en:"Ha, an iron bridge! If it does not sink, I am obliged."},ok:true}
  ]},
  {kinds:["童"],gate:false,q:{ja:"ねえ、鬼ごっこしよう。足は速い？",en:"Hey, let us play tag! Are you fast?"},a:[
    {c:{ja:"速くはない。重いからな",en:"Not fast. I am heavy."},r:{ja:"なら鬼はお前だ！ 捕まえてみろ",en:"Then you are It! Catch me if you can!"},ok:true},
    {c:{ja:"走ると地が鳴るぞ",en:"The ground booms when I run."},r:{ja:"わあ、地震みたい！ もう一回鳴らして",en:"Whoa, like an earthquake! Make it boom again!"},ok:true},
    {c:{ja:"梯子を登る競べなら勝てる",en:"I would win a ladder-climbing race, though."},r:{ja:"ずるい！ おいらは梯子こわいもん",en:"No fair! I am scared of ladders."},ok:true}
  ]},
  {kinds:["僧"],gate:false,q:{ja:"鉄の身にも、仏性はあろうか",en:"Can even an iron body hold Buddha-nature?"},a:[
    {c:{ja:"われには分からぬ。問うてみたい",en:"I cannot say. I should like to ask."},r:{ja:"よき問いじゃ。問う心こそ、仏への道よ",en:"A fine question. The asking heart is itself the path."},ok:true},
    {c:{ja:"草木にあるなら、鉄にもあろう",en:"If grass and trees have it, so must iron."},r:{ja:"ほう、山川草木ことごとく成仏すると存じておるか",en:"Oh? You know the teaching that even plants attain Buddhahood?"},ok:true},
    {c:{ja:"錆びた分だけ徳が増すのだ",en:"The more I rust, the more merit I gain."},r:{ja:"ふふ、修行の言い訳にはなるまいぞ",en:"Heh. That will not excuse you from your practice."},ok:true}
  ]},
  {kinds:["人夫"],gate:false,q:{ja:"力はありそうだ。何を担げる",en:"You look strong. What can you carry?"},a:[
    {c:{ja:"米俵なら二つは担げる",en:"Two rice-bales, easily."},r:{ja:"おお、頼もしい。人を雇う銭が浮くわ",en:"Oh, reliable! I would save the wage of a hired hand."},ok:true},
    {c:{ja:"牛車でも押せる",en:"I can push an ox-cart."},r:{ja:"牛の代わりが務まるな。牛は草を食うが、お主は食わぬ",en:"You could stand in for the ox. The ox eats grass; you do not."},ok:true},
    {c:{ja:"わが身がいちばん重い",en:"My own body is the heaviest load."},r:{ja:"ははは、それは担げぬわな",en:"Ha! That one you cannot carry!"},ok:true}
  ]}
 ]);

 /* --- 鞠の童 maru（丸い鞠・やわらか・弾む・軽い・ふわり浮く・拭けば済む） --- */
 addAsk("maru",[
  {kinds:["any"],gate:false,q:{ja:"まあ、まんまるね。中は何が詰まっておるの",en:"My, perfectly round. What is packed inside you?"},a:[
    {c:{ja:"息が詰まっている。ふくらんでいるのだ",en:"Air fills me. I am puffed up."},r:{ja:"息で動くのか。ならば風邪はひかぬな",en:"You run on breath? Then you will never catch cold."},ok:true},
    {c:{ja:"押せばへこむが、すぐ戻る",en:"Press me and I dent, then spring right back."},r:{ja:"うらやましい。われは一度へこむと戻らぬ",en:"How I envy that. Once I am dented I do not bounce back."},ok:true},
    {c:{ja:"餡が詰まっておる。食うな",en:"Sweet bean paste. Do not eat me."},r:{ja:"ふふ、唐菓子かと思うたわ",en:"Heh, I took you for a Tang sweet."},ok:true}
  ]},
  {kinds:["any"],gate:false,q:{ja:"その体、よう弾むのか",en:"Does that body of yours bounce well?"},a:[
    {c:{ja:"弾む。屋根まで跳べる",en:"I bounce. Up to the rooftops."},r:{ja:"屋根まで！ 猫より身が軽いのう",en:"To the roof! Lighter than a cat."},ok:true},
    {c:{ja:"風に乗ってふわりと降りる",en:"I ride the wind and drift down soft."},r:{ja:"木の葉のようじゃ。秋に生まれたか",en:"Like a falling leaf. Were you born in autumn?"},ok:true},
    {c:{ja:"蹴ってみるか。ただし返せよ",en:"Give me a kick—but kick me back!"},r:{ja:"蹴鞠の鞠にされては、たまらんだろう",en:"Being made the kickball of the game—that would be hard on you!"},ok:true}
  ]},
  {kinds:["any"],gate:false,q:{ja:"雨に濡れても縮まぬか",en:"Will you not shrink in the rain?"},a:[
    {c:{ja:"縮まぬ。濡れても丸いままだ",en:"I do not shrink. Round in the rain all the same."},r:{ja:"よいのう。雨の日はわれの麻布がだれて困る",en:"Fortunate. On wet days my hemp cloth droops and vexes me."},ok:true},
    {c:{ja:"水を弾く。玉になって転がる",en:"I shed water; it beads up and rolls off."},r:{ja:"蓮の葉のようじゃな",en:"Like a lotus leaf."},ok:true},
    {c:{ja:"濡れると重くなって跳べぬ",en:"When wet I grow heavy and cannot bounce."},r:{ja:"では雨宿りじゃ。こちらの軒へ入れ",en:"Then come shelter here, under my eaves."},ok:true}
  ]},
  {kinds:["any"],gate:false,q:{ja:"足はあるのか、その丸い身に",en:"Have you feet, on that round body?"},a:[
    {c:{ja:"ある。小さいが、よう歩く",en:"I do. Small ones, but they walk well."},r:{ja:"転がった方が速かろうに",en:"Surely you would be faster rolling."},ok:true},
    {c:{ja:"転がる方が楽だ",en:"Rolling is easier."},r:{ja:"坂では止まれまい。気をつけよ",en:"You will not stop on a slope. Mind yourself."},ok:true},
    {c:{ja:"足で歩き、飽きたら跳ねる",en:"I walk, and bounce when I grow bored."},r:{ja:"気ままな身じゃのう",en:"A carefree life you lead."},ok:true}
  ]},
  {kinds:["any"],gate:false,q:{ja:"仏の化身か、物の怪か",en:"A Buddha in disguise, or a spirit?"},a:[
    {c:{ja:"ただの丸い身だ。恐れるな",en:"Just a round body. Fear not."},r:{ja:"そうか。丸いものに、悪い物は少ないというしの",en:"I see. They say little ill comes in round shapes."},ok:true},
    {c:{ja:"化身なら、もっと光っておろう",en:"Were I a holy vision, I would shine more."},r:{ja:"ふむ、理屈は通る",en:"Hm, that stands to reason."},ok:true},
    {c:{ja:"なでると福が来る…かもしれぬ",en:"Rub me for luck... perhaps."},r:{ja:"では、なでておこう。ご利益、ご利益",en:"Then I shall rub you. Blessings, blessings!"},ok:true}
  ]},
  {kinds:["any"],gate:false,q:{ja:"夜も目が光るのか",en:"Do your eyes glow at night, too?"},a:[
    {c:{ja:"光る。まるで灯籠だな",en:"They glow. Like a stone lantern."},r:{ja:"では道を照らしてたもれ。提灯代わりに",en:"Then light my way—be my lantern."},ok:true},
    {c:{ja:"ふわり浮いて、辻を照らせる",en:"I can float up and light the crossroads."},r:{ja:"浮く灯りか。盗人も逃げ出すわ",en:"A floating light? The thieves would flee it."},ok:true},
    {c:{ja:"まぶしければ、目をつむる",en:"If it dazzles you, I will shut them."},r:{ja:"気のつく灯りじゃのう",en:"A considerate lamp, you are."},ok:true}
  ]},
  {kinds:["any"],gate:false,q:{ja:"風の強い日は、飛ばされはせぬか",en:"On a windy day, are you not blown away?"},a:[
    {c:{ja:"飛ばされる。だから石を抱いておく",en:"I am blown off. So I hold a stone to weigh me."},r:{ja:"なるほど、重しか。賢いのう",en:"A weight, I see. Clever of you."},ok:true},
    {c:{ja:"風の日は、低くして進む",en:"On windy days I keep low as I go."},r:{ja:"われも笠を押さえて歩くわ。似たものよ",en:"I too walk clutching my hat. We are alike."},ok:true},
    {c:{ja:"いっそ凧のように、遊んでしまう",en:"Or I just play at it, like a kite."},r:{ja:"ははは、楽しげでよいのう",en:"Ha, what a merry way to take it!"},ok:true}
  ]},
  {kinds:["童"],gate:false,q:{ja:"ねえ、一緒に鞠つきしよう！",en:"Hey, let us play ball together!"},a:[
    {c:{ja:"よいが、われを突くなよ",en:"All right—just do not bounce me!"},r:{ja:"えへへ、ちょっとだけ…ぽん！",en:"Hehe, just a little... boing!"},ok:true},
    {c:{ja:"高く跳んで見せよう",en:"I will leap up high for you."},r:{ja:"わあ、屋根より高い！ もういっかい！",en:"Wow, higher than the roof! Again!"},ok:true},
    {c:{ja:"われが鞠で、お前が蹴り手だ",en:"I am the ball; you do the kicking."},r:{ja:"やったあ。でも遠くへ行かないでね",en:"Yay! But do not fly too far away."},ok:true}
  ]},
  {kinds:["女"],gate:false,q:{ja:"かわいらしい。どなたの御車の供かしら",en:"How charming. Whose carriage do you attend?"},a:[
    {c:{ja:"どなたの供でもない。ひとり身だ",en:"I serve no one. I am on my own."},r:{ja:"あら、お一人で。迷子ではないのね",en:"Oh, all alone? Not lost, I hope."},ok:true},
    {c:{ja:"今日はあなたの供をしようか",en:"Shall I attend you today, then?"},r:{ja:"まあ、口がお上手。供はよいから、荷を少し",en:"My, such a smooth tongue. Never mind attending—carry a little of my load."},ok:true},
    {c:{ja:"鞠の形だが、鞠ではない",en:"Ball-shaped, but no ball."},r:{ja:"ふふ、では何と呼べばよいの",en:"Heh, then what shall I call you?"},ok:true}
  ]},
  {kinds:["売り子"],gate:false,q:{ja:"鞠の童、何か買ってっておくれ",en:"Ball Child, buy something from me, won't you?"},a:[
    {c:{ja:"銭は持たぬ。身軽ゆえな",en:"I carry no coin. I travel light."},r:{ja:"なんだ、ひやかしか。まあ見るだけならよい",en:"Bah, just browsing? Well, looking is free."},ok:true},
    {c:{ja:"荷なら運んでやろう。代わりに一つ",en:"I will carry your goods; one in trade."},r:{ja:"おお、気が利く。では、この籠を頼む",en:"Oh, obliging! Then take this basket, please."},ok:true},
    {c:{ja:"まけてくれるなら、ころがって客を呼ぶ",en:"Knock the price down and I will roll about to draw a crowd."},r:{ja:"はは、面白い客引きだ。少しまけよう",en:"Ha, a fine barker you make. I will knock a bit off."},ok:true}
  ]}
 ]);

 /* --- 土蜘蛛 spider（六脚・六輪で地上最速・壁や屋根を登る・糸で降りる・爪・人を襲わぬ）
    これは入口（gate:true）を通った後の問い返し。gate:false。 --- */
 addAsk("spider",[
  {kinds:["any"],gate:false,q:{ja:"その脚、六本もあって、もつれぬのか",en:"Six whole legs—do they not tangle?"},a:[
    {c:{ja:"もつれぬ。三本ずつ交代で運ぶ",en:"They do not tangle. Three at a time, in turns."},r:{ja:"ほう、よう出来ておる。蟹より器用だ",en:"Oh, cleverly made. Nimbler than a crab."},ok:true},
    {c:{ja:"走れば車輪になる。六つの輪だ",en:"When I run they become wheels—six of them."},r:{ja:"車輪！ 牛車いらずじゃな",en:"Wheels! No need for an ox-cart, then."},ok:true},
    {c:{ja:"一本くらい、貸してやろうか",en:"Shall I lend you a leg or two?"},r:{ja:"ははは、要らぬわ。二本で足りておる",en:"Ha! No thank you—two is plenty for me."},ok:true}
  ]},
  {kinds:["any"],gate:false,q:{ja:"壁を登るとは、まことか",en:"Is it true you climb walls?"},a:[
    {c:{ja:"まことだ。屋根にも登る",en:"True. I climb to the rooftops too."},r:{ja:"では盗人も顔負けじゃな。…悪さはするなよ",en:"A thief would blush. ...No mischief, now."},ok:true},
    {c:{ja:"高い所から糸で降りる",en:"From on high I come down by a thread."},r:{ja:"蜘蛛そのものじゃ。見てみたいものよ",en:"A spider through and through. I should like to see it."},ok:true},
    {c:{ja:"塀の越え方なら教えられる",en:"I could teach you to scale a wall."},r:{ja:"検非違使に聞かれるぞ、その話は",en:"Mind the police do not overhear that!"},ok:true}
  ]},
  {kinds:["any"],gate:false,q:{ja:"地を走るのが、いちばん速いそうだな",en:"They say you are swiftest on the ground."},a:[
    {c:{ja:"速い。馬にも負けぬ",en:"Fast. A match for a horse."},r:{ja:"馬より飼い葉がいらぬ分、安上がりじゃ",en:"And cheaper than a horse, needing no fodder."},ok:true},
    {c:{ja:"六つの輪で、土煙を上げる",en:"Six wheels, and I raise a cloud of dust."},r:{ja:"朱雀大路でやってくれるな。叱られる",en:"Not on Suzaku Avenue, please—we will be scolded."},ok:true},
    {c:{ja:"急ぎの文なら、われが速い",en:"For an urgent letter, I am the swiftest."},r:{ja:"ならば駅鈴の代わりに雇いたいわ",en:"Then I would hire you in place of the post-bell."},ok:true}
  ]},
  {kinds:["any"],gate:false,q:{ja:"その爪、よう切れそうだ。恐ろしや",en:"Those claws look sharp. How frightful."},a:[
    {c:{ja:"切れる。だが人には向けぬ",en:"Sharp. But never turned on folk."},r:{ja:"…ならば、よい。安堵したわ",en:"...Then good. I am relieved."},ok:true},
    {c:{ja:"糸を手繰るための爪だ",en:"They are for hauling in my thread."},r:{ja:"なるほど、道具か。合点がいった",en:"I see—tools, then. That sets my mind at ease."},ok:true},
    {c:{ja:"爪で字が書けるぞ",en:"I can even write with a claw."},r:{ja:"ほう、達筆なら代筆を頼みたい",en:"Oh? If your hand is fine, I would have you write for me."},ok:true}
  ]},
  {kinds:["any"],gate:false,q:{ja:"夜、目を光らせて壁を這うとは。鬼かと思うた",en:"Creeping the wall with glowing eyes—I took you for a demon."},a:[
    {c:{ja:"鬼ではない。道を照らしておるのだ",en:"No demon. I only light my way."},r:{ja:"脅かすでない。心の臓が止まるかと思うた",en:"Do not startle me so! My heart near stopped."},ok:true},
    {c:{ja:"顔の横の灯で、前を見ている",en:"Lamps at my cheeks show me the road."},r:{ja:"ほう、提灯いらずか。油代が浮くな",en:"Oh, no lantern needed? You save on oil."},ok:true},
    {c:{ja:"夜這いではないぞ。念のため",en:"Not here to court anyone, mind you."},r:{ja:"はは、言うではないか",en:"Ha, listen to you!"},ok:true}
  ]},
  {kinds:["any"],gate:false,q:{ja:"糸はどこから出すのだ。腹か",en:"Where does the thread come from—your belly?"},a:[
    {c:{ja:"腹の後ろから繰り出す",en:"From the rear of my belly I spin it out."},r:{ja:"では、あれで綱を綯えぬか。舟に要る",en:"Could you not twist rope from it? Our boats need it."},ok:true},
    {c:{ja:"降りたあとは、鞭のように巻き取る",en:"After descending I reel it in like a whip."},r:{ja:"器用なものよ。釣り人が欲しがるわ",en:"How deft. The fishermen would covet that."},ok:true},
    {c:{ja:"機織りはせぬ。そこは任せる",en:"I do no weaving—I leave that to you."},r:{ja:"はは、助かるわ。織りはこちらの飯の種じゃ",en:"Ha, a relief! Weaving is how I earn my rice."},ok:true}
  ]},
  {kinds:["any"],gate:false,q:{ja:"その大きな身で、門はくぐれるのか",en:"With that great body, can you fit through a gate?"},a:[
    {c:{ja:"くぐれる。胴が通れば、脚は畳む",en:"I can. If my body fits, I fold my legs."},r:{ja:"賢いのう。狭い路地も通れるか",en:"Clever. Can you manage the narrow lanes too?"},ok:true},
    {c:{ja:"梯子だけは、狭くて登れぬ",en:"Only ladders defeat me—too narrow."},r:{ja:"弱みもあるのか。少し安心したわ",en:"So you have a weakness. That eases me a little."},ok:true},
    {c:{ja:"つかえたら、壁を登って越える",en:"If I jam, I climb the wall and go over."},r:{ja:"門番が目を丸くするぞ",en:"The gatekeeper will gape at that!"},ok:true}
  ]},
  {kinds:["童"],gate:false,q:{ja:"ねえ、背中に乗せて！ 屋根まで！",en:"Hey, give me a ride on your back! Up to the roof!"},a:[
    {c:{ja:"乗せてやる。しかと掴まれ",en:"Hop on. Hold tight, now."},r:{ja:"わあい！ 都じゅうが見えるよ！",en:"Yaaay! I can see the whole city!"},ok:true},
    {c:{ja:"落ちても知らぬぞ",en:"Fall off and it is not my doing!"},r:{ja:"落ちないもん。蜘蛛の糸があるでしょ",en:"I will not fall—you have your spider thread!"},ok:true},
    {c:{ja:"高い所は、親御に聞いてからだ",en:"Up high—ask your folks first."},r:{ja:"えー、母は市だよ。じゃあ壁だけ！",en:"Aww, mother is at the market. Then just the wall!"},ok:true}
  ]},
  {kinds:["検非違使"],gate:false,q:{ja:"そこの土蜘蛛、壁を登れるそうだな。役に立つ",en:"You there, Tsuchigumo—you climb walls, I hear. Useful."},a:[
    {c:{ja:"お役に立つなら、登ろう",en:"If it serves, I will climb."},r:{ja:"よし。逃げた咎人を、屋根から見張れ",en:"Good. Watch from the roof for the fugitive."},ok:true},
    {c:{ja:"ただし捕り物は、人の役目だ",en:"But the arrest itself is a man's work."},r:{ja:"心得ておるな。目付け役で十分だ",en:"You know your place. A lookout is enough."},ok:true},
    {c:{ja:"塀の破れも、上から見つけられる",en:"From above I spot every gap in the walls."},r:{ja:"ほう、夜回りの手間が省けるわ",en:"Oh, that would spare us the night-rounds."},ok:true}
  ]},
  {kinds:["僧"],gate:false,q:{ja:"土蜘蛛とは、古き物の怪の名よ。おぬし、祟るか",en:"Tsuchigumo—the name of an old specter. Do you bring a curse?"},a:[
    {c:{ja:"祟らぬ。名を借りただけだ",en:"I bring no curse. The name is only borrowed."},r:{ja:"名は借り物か。ならば経は要らぬな",en:"A borrowed name? Then no sutra is needed."},ok:true},
    {c:{ja:"恐ろしい名は、盗人よけになる",en:"A fearsome name keeps thieves away."},r:{ja:"なるほど、方便というわけか",en:"I see—a useful expedient, then."},ok:true},
    {c:{ja:"祟るひまがあれば、壁を登る",en:"Too busy climbing walls to curse anyone."},r:{ja:"ふふ、勤勉な物の怪もおるものよ",en:"Heh, a diligent apparition, it seems."},ok:true}
  ]}
 ]);

 /* ===== 土蜘蛛の入口（gate:true・ask.spider に入れる）
    名前のない人・なじみの薄い人が、土蜘蛛を見て最初におびえる節。
    ok:false=相手が逃げて閉じる／ok:true=「…ならよい。少しだけ話そう」でふつうの会話へ。
    おびえ方は種類で変える。 ===== */
 addAsk("spider",[
  {kinds:["any"],gate:true,q:{ja:"ひっ…六つ脚の物の怪！ 近寄るな！",en:"Eep—a six-legged monster! Keep away!"},a:[
    {c:{ja:"待て、取って食いはせぬ",en:"Wait—I will not eat you."},r:{ja:"…ものを言うた。化け物が、ものを言うたぞ…！",en:"...It spoke. The monster spoke...!"},ok:false},
    {c:{ja:"ただの作り物だ。脚が六本あるだけの",en:"Just a construct. Six legs, nothing more."},r:{ja:"作り物…まことか。…ならよい。少しだけ話そう",en:"A construct... truly? ...Then all right. Let us talk, a little."},ok:true},
    {c:{ja:"怖いか。では脚を畳んで低くなろう",en:"Afraid? Then I will fold my legs and crouch low."},r:{ja:"お、おう…そうしてくれると、まだ息ができる",en:"Y-yes... with you like that, I can still breathe."},ok:true}
  ]},
  {kinds:["女"],gate:true,q:{ja:"きゃっ…！ そ、その脚で、何をする気",en:"Eek—! Wh-what do you mean to do with those legs?"},a:[
    {c:{ja:"何もせぬ。ただ通りたいだけだ",en:"Nothing. I only wish to pass."},r:{ja:"…通るだけ？ なら、その大きな脚を畳んでから。…少し話すくらいは",en:"...Only passing? Then fold those great legs first. ...A few words, I suppose."},ok:true},
    {c:{ja:"逃げるな。糸でからめ取りはせぬ",en:"Do not run. I will not snare you in thread."},r:{ja:"糸ですって…！ やはり蜘蛛ではないの！ いやあ！",en:"Thread—! A spider after all! No—!"},ok:false},
    {c:{ja:"おどかしてすまぬ。灯りを消そう",en:"Forgive the fright. I will put out my lamps."},r:{ja:"…暗いほうが、かえって怖いわ。でも、まあ…",en:"...The dark is worse, in truth. But still, well..."},ok:true}
  ]},
  {kinds:["庶民"],gate:true,q:{ja:"な、なんだこの蜘蛛は…化けて出たか",en:"Wh-what is this spider... has it risen to haunt us?"},a:[
    {c:{ja:"化けてはおらぬ。壁を登る作り物だ",en:"No haunting. A construct that climbs walls."},r:{ja:"壁を…？ 盗人の仲間ではなかろうな…まあ、よい。話してみよ",en:"Climbs walls...? Not in league with thieves, I hope... Well, all right. Speak."},ok:true},
    {c:{ja:"祟りを恐れるなら、拝んでおけ",en:"If you fear a curse, say your prayers."},r:{ja:"ひいっ、やはり祟るのか！ 南無、南無！",en:"Eep—so it does curse! Namu, namu!"},ok:false},
    {c:{ja:"腹は減っておらぬ。襲いはせぬ",en:"I am not hungry. I will not attack."},r:{ja:"腹…？ 食う物の怪か…いや、作り物なら減らぬか。ふう",en:"Hungry...? An eating monster...? No—a construct would not hunger. Phew."},ok:true}
  ]},
  {kinds:["人夫"],gate:true,q:{ja:"うわっ、でかいな！ そいつぁ暴れるのか",en:"Whoa, it is huge! Does that thing go on a rampage?"},a:[
    {c:{ja:"暴れぬ。むしろ重荷を運べる",en:"No rampage. I can haul heavy loads, in fact."},r:{ja:"重荷を…！ そら頼もしい。おう、少し話そうや",en:"Heavy loads—! Now that is handy. Aye, let us talk a bit."},ok:true},
    {c:{ja:"機嫌を損ねねば、おとなしい",en:"Cross me not, and I stay gentle."},r:{ja:"機嫌だと？ …触らぬ神に祟りなし。われは行くわ",en:"Cross you? ...Best leave well alone. I am off."},ok:false},
    {c:{ja:"六本の脚で踏ん張る。荷は落とさぬ",en:"Six legs to brace with. I never drop a load."},r:{ja:"ほう、落とさぬか。…ちと話を聞いてみるか",en:"Oh, never drop it? ...I might hear you out, then."},ok:true}
  ]},
  {kinds:["売り子"],gate:true,q:{ja:"よ、寄るな寄るな！ 客が逃げてしまう！",en:"A-away, away! You are scaring off my customers!"},a:[
    {c:{ja:"では離れて立とう。客は追わぬ",en:"Then I will stand off. I will not chase your trade."},r:{ja:"…話の分かる物の怪じゃ。まあ、それなら",en:"...A reasonable monster, it seems. Well, in that case."},ok:true},
    {c:{ja:"われが客寄せになってやろうか",en:"Shall I be your crowd-puller, then?"},r:{ja:"客寄せ？ お前を見たら、みな逃げ散るわ！ あっち行け！",en:"Crowd-puller? One look at you and they scatter! Shoo!"},ok:false},
    {c:{ja:"脚を畳めば、ただの大きな荷に見えよう",en:"Legs folded, I look like a big bale of goods."},r:{ja:"ふむ、確かに…。なら隅でじっとしておれ。少しなら話す",en:"Hm, true enough... Then keep still in the corner. A few words, then."},ok:true}
  ]},
  {kinds:["牛飼童"],gate:true,q:{ja:"来るな！ 牛が怯える！ こら、黒牛、落ち着け！",en:"Do not come! The ox is spooked! Easy, black ox, easy!"},a:[
    {c:{ja:"わかった。遠回りして、ゆるり行く",en:"Understood. I will go round, and slowly."},r:{ja:"…おう、助かる。牛さえ落ち着けば、話もできる",en:"...Aye, thanks. Once the ox settles, we can talk."},ok:true},
    {c:{ja:"牛など、脚でまたいで越えよう",en:"The ox? I will just step over it with my legs."},r:{ja:"よせ！ 暴れたらどうする！ あっちへ行け！",en:"Stop that! What if it bolts! Get away!"},ok:false},
    {c:{ja:"灯りを消し、音を立てずにおる",en:"I will douse my lamps and make no sound."},r:{ja:"…それなら牛も落ち着こう。すまぬな",en:"...Then the ox may settle. My thanks."},ok:true}
  ]},
  {kinds:["旅人"],gate:true,q:{ja:"都には、こんな化け物まで出るのか…",en:"So the capital breeds even monsters like this..."},a:[
    {c:{ja:"化け物ではない。道案内もできる",en:"No monster. I can even show you the way."},r:{ja:"道案内を？ それは心強い。…少し尋ねてよいか",en:"Show the way? That is reassuring. ...May I ask you a few things?"},ok:true},
    {c:{ja:"田舎者には、刺激が強かったか",en:"Too much for a country soul, was it?"},r:{ja:"な…馬鹿にしおって！ もうよい、先を急ぐ！",en:"Why—mocking me! Enough, I will press on!"},ok:false},
    {c:{ja:"遠い国にも、われのような物はおる",en:"In far lands there are things like me, too."},r:{ja:"ほう、遠い国に…。ならば、まあ、珍しくもないか",en:"Oh, in far lands...? Then perhaps it is no great wonder."},ok:true}
  ]}
 ]);

 /* ===== 土蜘蛛を怖がらない（肝の据わった）種類＝入口を通さず spider.first で始める ===== */
 T.spider.brave.push("童","僧","検非違使","衛士","火長","近衛舎人","兵衛","学生");

 /* ===== その人たちの土蜘蛛への第一声（入口の代わり。このあとふつうの会話へ） ===== */
 T.spider.first.push(
  {kinds:["童"],t:{ja:"こわ……でも、その脚どうなっとるの？",en:"Scary... but how do those legs work?"}},
  {kinds:["童"],t:{ja:"わあ、おっきい蜘蛛だ！ 背中に乗せて！",en:"Whoa, a giant spider! Give me a ride on your back!"}},
  {kinds:["僧"],t:{ja:"土蜘蛛とは懐かしい名よ。古き物の怪が、鉄になって甦ったか",en:"Tsuchigumo—a name from the old tales. Has the ancient specter come back as iron?"}},
  {kinds:["僧"],t:{ja:"恐れはせぬ。物の怪にも仏性はあろうほどに",en:"I feel no fear. Even an apparition may hold Buddha-nature."}},
  {kinds:["検非違使"],t:{ja:"ほう、壁を登る作り物か。咎人追いに使えそうだ",en:"Hoh, a wall-climbing construct. Could serve for chasing fugitives."}},
  {kinds:["衛士"],t:{ja:"止まれ。…おお、これが噂の土蜘蛛か。門の上から見張れそうだな",en:"Halt. ...Ah, so this is the rumored Tsuchigumo. You could watch from atop the gate."}},
  {kinds:["火長"],t:{ja:"驚くには当たらぬ。火事場では、お前の脚が頼りになろう",en:"Nothing to startle me. At a fire, those legs of yours would be a help."}},
  {kinds:["近衛舎人"],t:{ja:"ほう、六脚とは。帝の御前に出すわけにはゆかぬが、見事なものだ",en:"Six legs, is it. Not fit for the Emperor's presence—but a splendid thing."}},
  {kinds:["兵衛"],t:{ja:"化け物かと思うたが、作り物か。ならば番の相手になるか",en:"I took you for a monster, but a construct? Then you might share my watch."}},
  {kinds:["学生"],t:{ja:"これは詩に詠めるぞ。六足の鉄蜘蛛、夜の壁を這う――うむ、よい",en:"This I could set to verse. An iron spider of six legs, creeping the night wall—mm, fine."}}
 );
})();


/* ---- 2026-11-06 夜 逆に何か教えてくれないか（t48/talk/talk-tell.js） ---- */
/* 会話の「逆に何か教えてくれ」の台詞（2026-11-06 夜・井内さん「話し尽くした話題　続きはまた今度、の他に、逆に何か教えてくれないか？と聞いてきたらどうか」）
   その人のその日の話（talkLeft）が0になった時、「続きはまた今度」の代わりに相手が問う（1人1日1回）。
   こちらが話せる物（行った所 place・聞いた話 heard・自分のこと self）を出し、相手が返す。
   CONTRACT-T48.md の2「データの形」どおり。本体は window.HEIAN_LINES.talkMore.tell が無ければ何も足さない。
   台詞は平安の言い方（STYLE-C.md 案C）。英語 en を全部に付ける。{place}{who}{gist} は英語にも同じ印で入れる。
   種類（kind）は heian-lines.js の who と同じ文字（庶民・官人・女・人夫・売り子・僧・童・女房・客・衛士）。無い種類は any に戻る。
   文字列は "…" で囲む（英 en に ' を入れられるように）。日本語の引用符は「」、話の頭の囲みは『』。 */
(function(){'use strict';const L=window.HEIAN_LINES;if(!L)return;
 const T=L.talkMore=L.talkMore||{react:{},ask:{tin:[],maru:[],spider:[]},spider:{brave:[],first:[]}};
 const X=T.tell=T.tell||{ask:[],place:{},heard:{},self:{tin:[],maru:[],spider:[]},none:[]};
 const addPlace=(kind,list)=>{X.place[kind]=(X.place[kind]||[]).concat(list);};
 const addHeard=(kind,list)=>{X.heard[kind]=(X.heard[kind]||[]).concat(list);};

 /* ===== 1. ask：相手が「逆に何か教えてくれ」と問う一言（話が尽きた時、続きはまた今度の代わり） ===== */
 X.ask.push(
  {kinds:["any"],t:{ja:"おのれの話は、もう尽きた。逆に、そなたの珍しい話を聞かせてくれぬか",en:"My own tales are spent. Instead, won't you tell me a curious story of yours?"}},
  {kinds:["any"],t:{ja:"さて、わが話の種も尽きた。こんどはそなたの番だ。何かないか",en:"Well, my store of stories is empty. Your turn now—have you anything?"}},
  {kinds:["any"],t:{ja:"いつも聞いてもらうばかりだ。たまには、そなたの話を聞かせておくれ",en:"You always do the listening. For once, let me hear a tale of yours."}},
  {kinds:["庶民"],t:{ja:"おのれの話は、もうあらかた話した。逆に、そなたは何か見聞きしておらぬか",en:"I've told you near all I know. Now—have you seen or heard anything yourself?"}},
  {kinds:["庶民"],t:{ja:"同じ話ばかりで、すまぬな。こんどは、そなたの話を聞かせてくれ",en:"Same old tales, forgive me. This time, let me hear yours."}},
  {kinds:["官人"],t:{ja:"わが知る限りは、もう語り尽くした。逆に問おう。そなた、何か珍しい見聞はあるか",en:"I've recounted all I know. Let me ask in turn: have you any rare thing to report?"}},
  {kinds:["官人"],t:{ja:"たまには、市井の話も聞いておきたい。そなた、何か知らぬか",en:"Now and then I would hear the talk of the streets. Do you know of anything?"}},
  {kinds:["女"],t:{ja:"わたしの話は、もうおしまい。ねえ、こんどはそなたの話を聞かせて",en:"My tales are all done. Come, this time let me hear yours."}},
  {kinds:["女"],t:{ja:"いつも聞いてもらってばかり。逆に、何か面白い話はない？",en:"You're always the one listening. Now—have you any interesting story?"}},
  {kinds:["人夫"],t:{ja:"われの話は、もう種切れだ。逆に、そなたは何か聞いておらぬか",en:"I'm fresh out of stories. You—heard anything worth telling?"}},
  {kinds:["人夫"],t:{ja:"話すことなんぞ、もうない。それより、おまえの話を聞かせろ",en:"I've nothing left to say. Rather, let me hear what you've got."}},
  {kinds:["売り子"],t:{ja:"われの口上は、もう聞き飽きたろう。逆に、何か面白い話はないかい",en:"You must be tired of my patter. So—got any good story for me?"}},
  {kinds:["売り子"],t:{ja:"客を待つあいだ、退屈でな。そなたの話で、ひとつ暇をつぶさせてくれ",en:"It's dull work waiting for custom. Pass the time with a tale of yours."}},
  {kinds:["僧"],t:{ja:"わが話は、これにて尽きた。逆に、そなたの見てきた物を聞かせてくれぬか",en:"My telling is at an end. In turn, won't you tell me what you have seen?"}},
  {kinds:["僧"],t:{ja:"諸国を巡る者の話は、よき修行になる。何か聞かせてはくれぬか",en:"A traveler's tales are good practice for the spirit. Won't you share one?"}},
  {kinds:["童"],t:{ja:"ぼくの話、ぜんぶ話しちゃった。ねえ、こんどはそっちの話して！",en:"I've told you all my stories! Now you tell me one!"}},
  {kinds:["童"],t:{ja:"もうおはなし、ないや。ねえねえ、なにか面白いこと知ってる？",en:"I'm all out of stories. Hey, hey—do you know anything fun?"}},
  {kinds:["女房"],t:{ja:"わたくしの話は、もう尽きましてございます。逆に、そなたの話を聞かせてくださいな",en:"My tales are quite spent. In turn, do let me hear one of yours."}},
  {kinds:["女房"],t:{ja:"宮の内ばかりでは、話も狭うございます。外の話を、何か聞かせて",en:"Shut within the palace, my stories run thin. Tell me something of the world outside."}},
  {kinds:["客"],t:{ja:"わが話も種切れだ。逆に、そなたは何か珍しい物を見てこなんだか",en:"I'm out of stories too. Did you not see anything curious on your way?"}},
  {kinds:["客"],t:{ja:"買い物のついでの、よもやま話も尽きた。そなたの話を聞かせてくれ",en:"The idle chatter of a shopping trip is spent. Let me hear your tale."}},
  {kinds:["衛士"],t:{ja:"番の退屈しのぎに話したが、もう種切れだ。逆に、何か聞かせてくれ",en:"I've talked to pass the watch, but I'm out. Now—tell me something."}},
  {kinds:["衛士"],t:{ja:"持ち場を動けぬ身でな。そなたの見てきた外の話を聞かせてくれ",en:"I cannot leave my post. Tell me of the world you've seen out there."}}
 );

 /* ===== 2. place：行った所を話した時の返し。{place} に名所の名が入る（名所が何でも通じる言い方） ===== */
 addPlace("any",[
  {r:{ja:"ほう、{place}まで行ったのか。おのれは一度も行ったことがない",en:"Oh, you went all the way to {place}? I've never once been there."}},
  {r:{ja:"{place}か。名は聞くが、この目で見たことはないのう",en:"{place}, is it. I've heard the name, but never seen it with my own eyes."}},
  {r:{ja:"よくぞ{place}まで。遠かったろうに、達者なことよ",en:"All the way to {place}, well done. A long way—you're a sturdy one."}},
  {r:{ja:"{place}なあ。いつか、おのれも行ってみたいものよ",en:"{place}, eh. One day I'd like to go myself."}},
  {r:{ja:"{place}の話とは珍しい。して、どんな所であった",en:"A tale of {place}—how unusual. And what was it like?"}},
  {r:{ja:"{place}まで足を延ばすとは、たいしたものだ",en:"Stretching your legs clear to {place}—impressive."}},
  {r:{ja:"ほほう、{place}をその目で見たか。うらやましいかぎりよ",en:"Hoh, you saw {place} with your own eyes? How I envy you."}},
  {r:{ja:"{place}か…話に聞くだけで、行ったためしはないわ",en:"{place}... I only ever hear of it; I've never been."}},
  {r:{ja:"{place}まで行って、無事に戻ったか。何よりだ",en:"You went to {place} and came back safe? That's what matters."}},
  {r:{ja:"{place}の話、もっと聞かせてくれ。土産話は楽しいものよ",en:"Tell me more of {place}. Tales from the road are a pleasure."}}
 ]);
 addPlace("庶民",[
  {r:{ja:"{place}かい。おのれは、この界隈から出たこともないわ",en:"{place}, is it. I've never so much as left this quarter."}},
  {r:{ja:"ほう、{place}まで。働きづめで、どこへも行けぬ身にはまぶしい話よ",en:"Oh, to {place}. Toiling day and night, such a tale dazzles the likes of me."}},
  {r:{ja:"{place}な。いつか暇ができたら、おのれも拝みに行きたいわ",en:"{place}, eh. If ever I get the leisure, I'd like to go and see it too."}}
 ]);
 addPlace("官人",[
  {r:{ja:"{place}か。書物では存じておるが、実は見ておらぬ。よう見てまいった",en:"{place}? I know it from the records, but have not seen it in truth. Well observed."}},
  {r:{ja:"ふむ、{place}な。務めに追われて、とんと出歩かぬものでな",en:"Hm, {place}. Chained to my duties, I scarcely get out at all."}},
  {r:{ja:"{place}まで検分に行くとは、感心なことだ。して、変わりはなかったか",en:"Going all the way to {place} to see for yourself—commendable. And was all in order?"}}
 ]);
 addPlace("女",[
  {r:{ja:"まあ、{place}まで。わたしなんて、めったに出歩けやしないわ",en:"My, all the way to {place}? I can hardly ever get out myself."}},
  {r:{ja:"{place}なの。話に聞くばかりで、いちど行ってみたいのよ",en:"{place}, is it. I only hear tell of it; I'd love to go once."}},
  {r:{ja:"ほんに、{place}へ。道中、障りはなかった？",en:"Truly, to {place}? Did you come to no harm on the way?"}}
 ]);
 addPlace("人夫",[
  {r:{ja:"{place}だと？ 荷運びのついでにでも行けりゃ、ありがたいがな",en:"{place}, you say? If I could get there on a hauling run, I'd count it a blessing."}},
  {r:{ja:"ふん、{place}な。われには縁のない所よ",en:"Hmph, {place}. No place for the likes of me."}},
  {r:{ja:"よう{place}まで歩いたな。足の丈夫なのは何よりだ",en:"You walked clear to {place}, eh. Strong legs are worth more than coin."}}
 ]);
 addPlace("売り子",[
  {r:{ja:"{place}かい。そっちじゃ、何がよう売れておった",en:"{place}, is it. What's selling well out that way?"}},
  {r:{ja:"ほう、{place}な。商いで行けたら、われも品を仕入れたいところよ",en:"Oh, {place}. If I could get there for trade, I'd stock up on goods."}},
  {r:{ja:"{place}まで行ったのかい。土産話のついでに、何か買ってってくれよ",en:"Went all the way to {place}, did you? Buy something while you share the tale."}}
 ]);
 addPlace("僧",[
  {r:{ja:"{place}まで参ったか。寺社であれば、よき功徳を積んだのう",en:"You made your way to {place}? If it be a temple or shrine, you've gained good merit."}},
  {r:{ja:"ほう、{place}な。おのれも行脚のおりに、立ち寄ってみたいものよ",en:"Oh, {place}. On my pilgrimage I'd like to call there myself."}},
  {r:{ja:"{place}か。所を巡るも修行のうち。よう歩いてまいった",en:"{place}? To visit places is itself a practice. Well walked."}}
 ]);
 addPlace("童",[
  {r:{ja:"え、{place}まで行ったの！？ すごい、ずるい、いいなあ！",en:"Eh, you went to {place}?! Amazing—no fair—I'm so jealous!"}},
  {r:{ja:"{place}って、どんなとこ？ ぼくも行ってみたい！",en:"What's {place} like? I want to go too!"}},
  {r:{ja:"いいなあ、{place}かあ。ぼくなんて、まだ川までしか行けないんだ",en:"Lucky you, {place}... I'm only allowed as far as the river."}}
 ]);
 addPlace("女房",[
  {r:{ja:"まあ、{place}まで。わたくしは、めったに出歩けぬ身ゆえ、うらやましゅうございます",en:"My, as far as {place}? One in service can rarely go abroad—how I envy you."}},
  {r:{ja:"{place}でございますか。物語にも出てまいる所、ゆかしゅうございますね",en:"{place}, you say? A place that appears in the old tales—how charming."}},
  {r:{ja:"{place}へ参られたとは。道中の景色を、いずれ歌にでもなさいませ",en:"You journeyed to {place}? Do set the scenery of the road to verse one day."}}
 ]);
 addPlace("客",[
  {r:{ja:"{place}な。おのれも買い物の足を延ばしてみようか",en:"{place}, eh. Perhaps I'll stretch my shopping that far myself."}},
  {r:{ja:"ほう、{place}まで。何か珍しい品でもあったか",en:"Oh, as far as {place}? Were there any rare goods to be had?"}},
  {r:{ja:"{place}か。市のついでに寄れるなら、見てみたいものだ",en:"{place}? If it's near the market, I'd like to have a look."}}
 ]);
 addPlace("衛士",[
  {r:{ja:"{place}まで行ったか。持ち場を離れられぬ身には、うらやましい話よ",en:"You went to {place}? To one who cannot leave his post, that's an enviable thing."}},
  {r:{ja:"ほう、{place}な。道中、物騒なことはなかったか",en:"Oh, {place}. Was there any trouble on the road?"}},
  {r:{ja:"{place}か。番が明けたら、われも一度は行ってみたいものだ",en:"{place}? When my watch is over, I'd like to go once myself."}}
 ]);

 /* ===== 3. heard：聞いた話を伝えた時の返し。{who}（話してくれた人）・{gist}（話の頭・20字ほど）。驚く・疑う・「あの{who}がなあ」 ===== */
 addHeard("any",[
  {r:{ja:"ほう、{who}がそんなことを。『{gist}』とはな…初耳よ",en:"Oh, {who} said that? '{gist}'... news to me."}},
  {r:{ja:"{who}から聞いたか。『{gist}』…まことかのう",en:"You had it from {who}? '{gist}'... can it be true?"}},
  {r:{ja:"あの{who}がなあ。『{gist}』と申したか。面白い",en:"That {who}, eh. Said '{gist}', did they. How interesting."}},
  {r:{ja:"{who}が『{gist}』と。ふむ、それは知らなんだ",en:"{who} said '{gist}'. Hm, I didn't know that."}},
  {r:{ja:"『{gist}』か…{who}の言うことなら、まんざら嘘でもなかろう",en:"'{gist}', eh... if {who} says so, it's likely no lie."}},
  {r:{ja:"{who}から、そんな話を。世間は広いものよのう",en:"Such a tale, from {who}. The world is a wide place."}},
  {r:{ja:"『{gist}』だと？ {who}め、またほら話ではあるまいな",en:"'{gist}'? That {who}—not another tall tale, I hope."}},
  {r:{ja:"ほほう、{who}が『{gist}』と。人の口に戸は立てられぬな",en:"Hoh, {who} said '{gist}'. There's no stopping folk from talking."}},
  {r:{ja:"{who}の話か。『{gist}』…こんど会うたら、聞いてみよう",en:"A tale from {who}? '{gist}'... I'll ask them when next we meet."}},
  {r:{ja:"『{gist}』とはおどろいた。{who}は、よう物を知っておるな",en:"'{gist}'—I'm astonished. {who} knows a great deal."}}
 ]);
 addHeard("庶民",[
  {r:{ja:"{who}がのう。『{gist}』か…井戸端で広めておこう",en:"{who}, eh. '{gist}'... I'll spread it at the well."}},
  {r:{ja:"ほう、『{gist}』と。{who}の言うことなら、確かだろうよ",en:"Oh, '{gist}'. If {who} says it, it's likely sound."}},
  {r:{ja:"{who}から、そんな話を聞いたか。世間話の種が増えたわ",en:"You heard that from {who}? Now I've fresh gossip to trade."}}
 ]);
 addHeard("官人",[
  {r:{ja:"{who}が『{gist}』とな。ふむ、真偽は確かめねばなるまい",en:"{who} said '{gist}'? Hm, the truth of it wants verifying."}},
  {r:{ja:"ほう、市井では『{gist}』と。{who}の筋なら、聞き捨てにはできぬな",en:"Oh, the streets say '{gist}'? From {who}, that's not to be dismissed."}},
  {r:{ja:"{who}の話か。『{gist}』…記しておくとしよう",en:"A tale from {who}? '{gist}'... I'll make a note of it."}}
 ]);
 addHeard("女",[
  {r:{ja:"まあ、{who}が『{gist}』ですって。信じられないわ",en:"My, {who} said '{gist}'? I can scarcely believe it."}},
  {r:{ja:"{who}からそんな話を。『{gist}』…こわいわねえ",en:"Such a tale from {who}. '{gist}'... how frightening."}},
  {r:{ja:"あの{who}がねえ。『{gist}』とは、ついぞ知らなんだわ",en:"That {who}, now. '{gist}'—I never knew."}}
 ]);
 addHeard("人夫",[
  {r:{ja:"{who}がそう言うたか。『{gist}』…ふん、どうだかな",en:"{who} said so? '{gist}'... hmph, I wonder."}},
  {r:{ja:"ほう、『{gist}』と。{who}の話なら、まあ聞いておこう",en:"Oh, '{gist}'. From {who}, I'll hear it out, at least."}},
  {r:{ja:"{who}から、か。『{gist}』…われには関わりのない話よ",en:"From {who}, eh. '{gist}'... no concern of mine."}}
 ]);
 addHeard("売り子",[
  {r:{ja:"{who}が『{gist}』だって？ そいつぁ、いい客寄せの話の種だ",en:"{who} said '{gist}'? Now that's fine bait to draw a crowd."}},
  {r:{ja:"ほう、『{gist}』な。{who}から聞いたなら、商売に使えるかもな",en:"Oh, '{gist}'. If it's from {who}, I might work it into my sales."}},
  {r:{ja:"{who}の話かい。『{gist}』…こりゃ明日には市じゅうに広まるな",en:"A tale from {who}? '{gist}'... this'll be all over the market by tomorrow."}}
 ]);
 addHeard("僧",[
  {r:{ja:"{who}が『{gist}』と。ふむ、人の世はさまざまよのう",en:"{who} said '{gist}'? Hm, the world of men is full of wonders."}},
  {r:{ja:"ほう、{who}からな。『{gist}』…人の縁とは不思議なものよ",en:"Oh, from {who}? '{gist}'... the ties between people are a mystery."}},
  {r:{ja:"『{gist}』か。{who}の言葉、心にとどめておこう",en:"'{gist}', eh. I'll keep {who}'s words in my heart."}}
 ]);
 addHeard("童",[
  {r:{ja:"え、{who}がそんなこと言ったの！？『{gist}』って、ほんと！？",en:"Eh, {who} said that?! '{gist}'—really?!"}},
  {r:{ja:"わあ、{who}から聞いたんだ。『{gist}』…ぼくも母に教えてあげる！",en:"Whoa, you heard it from {who}. '{gist}'... I'll tell my mother!"}},
  {r:{ja:"{who}が『{gist}』って？ こわーい！ でも、もっと聞きたい！",en:"{who} said '{gist}'? Scary! But I want to hear more!"}}
 ]);
 addHeard("女房",[
  {r:{ja:"まあ、{who}が『{gist}』と。ゆかしいお話ですこと",en:"My, {who} said '{gist}'? What a charming story."}},
  {r:{ja:"{who}から、そのような。『{gist}』…宮の内でも噂になりそうですわ",en:"Such a thing from {who}? '{gist}'... even the palace will whisper of it."}},
  {r:{ja:"あの{who}が『{gist}』とは。世の中は、知らぬことばかりでございますね",en:"That {who} said '{gist}'? The world is full of things one never knew."}}
 ]);
 addHeard("客",[
  {r:{ja:"ほう、{who}が『{gist}』とな。市は、よう話が回る所よ",en:"Oh, {who} said '{gist}'? The market is where talk travels fast."}},
  {r:{ja:"{who}から聞いたか。『{gist}』…買い物のついでに、確かめてみよう",en:"You heard it from {who}? '{gist}'... I'll check it while I shop."}},
  {r:{ja:"『{gist}』だと。{who}の話なら、一度は疑うてかかるがな",en:"'{gist}', you say. A tale from {who}—I'd take with a pinch of doubt."}}
 ]);
 addHeard("衛士",[
  {r:{ja:"{who}が『{gist}』と。ふむ、番のあいだの耳よりだ",en:"{who} said '{gist}'? Hm, a welcome tidbit for the watch."}},
  {r:{ja:"ほう、『{gist}』な。{who}の話なら、頭に留めておこう",en:"Oh, '{gist}'. From {who}, I'll keep it in mind."}},
  {r:{ja:"{who}から、か。『{gist}』…物騒な話なら、見回りの足しにする",en:"From {who}, eh. '{gist}'... if it's trouble, it'll aid my rounds."}}
 ]);

 /* ===== 4. self：ロボ自身の小話（c=こちらが話す・選択肢に出る・15字まで、r=相手の返し）。笑える物と少ししんみりする物を混ぜる。土蜘蛛は相手が少し怖がるのもよい ===== */
 X.self.tin.push(
  {c:{ja:"鉄のわれは年をとらぬ",en:"I, being iron, never age."},r:{ja:"年をとらぬ…うらやましいような、寂しいような話よ",en:"Never aging... enviable, and yet a touch lonely."}},
  {c:{ja:"雨の日は錆びて痛い",en:"On rainy days I rust and ache."},r:{ja:"鉄にも痛みがあるとは。労ってやらねばな",en:"So even iron feels pain. I must be gentle with you."}},
  {c:{ja:"叩くと鐘のように鳴る",en:"Rap me and I ring like a bell."},r:{ja:"ほう、ならば寺の鐘が割れた折は頼むぞ",en:"Oh? Then when the temple bell cracks, I'll call on you."}},
  {c:{ja:"重くて橋がきしむ",en:"I'm so heavy the bridges creak."},r:{ja:"ははは、橋守が青くなるわ",en:"Ha! The bridge-keeper will turn pale."}},
  {c:{ja:"腹の中は歯車ばかり",en:"Naught but gears in my belly."},r:{ja:"歯車とな。腹の虫も住めまいな",en:"Gears, is it. Not even a belly-worm could lodge there."}},
  {c:{ja:"寒い夜は体が縮む",en:"On cold nights my body shrinks."},r:{ja:"鉄でも寒いか。火にあたってゆけ",en:"Even iron feels the cold? Come warm yourself by the fire."}},
  {c:{ja:"友の鞠は、よう跳ねる",en:"My friend the Ball bounces well."},r:{ja:"仲間がおるのか。それは何よりだ",en:"You have a companion? That's a fine thing."}},
  {c:{ja:"目の灯り、油いらずだ",en:"My eye-lamps need no oil."},r:{ja:"うらやましい。油は高うてかなわぬ",en:"How I envy that. Oil costs a fortune."}}
 );
 X.self.maru.push(
  {c:{ja:"押すとへこみ、すぐ戻る",en:"Press me; I dent, then spring back."},r:{ja:"よいのう。われは一度へこむと戻らぬわ",en:"Fortunate you. Once I'm dented I don't bounce back."}},
  {c:{ja:"屋根まで跳ねられる",en:"I can bounce up to the roof."},r:{ja:"猫より身軽だな。見てみたいわ",en:"Nimbler than a cat. I'd like to see that."}},
  {c:{ja:"雨でも水を弾く",en:"I shed water even in the rain."},r:{ja:"蓮の葉のようじゃ。うらやましい",en:"Like a lotus leaf. Enviable."}},
  {c:{ja:"風の日は飛ばされる",en:"On windy days I'm blown away."},r:{ja:"では石でも抱いておけ。重しにな",en:"Then hug a stone for ballast."}},
  {c:{ja:"中は息が詰まっておる",en:"Inside me is naught but air."},r:{ja:"息で動くか。風邪はひくまいな",en:"You run on breath? You'll never catch cold."}},
  {c:{ja:"餡は入っておらぬぞ",en:"There's no sweet paste inside!"},r:{ja:"ふふ、唐菓子かと思うたわ",en:"Heh, I took you for a Tang sweet."}},
  {c:{ja:"転がる方が楽だ",en:"Rolling is easier for me."},r:{ja:"坂では止まれまい。気をつけよ",en:"You can't stop on a slope. Mind yourself."}},
  {c:{ja:"友の鉄は、冷たい手だ",en:"My friend Iron has cold hands."},r:{ja:"ふふ、仲のよいことよ",en:"Heh, what good friends you are."}}
 );
 X.self.spider.push(
  {c:{ja:"壁も屋根も登れる",en:"I can climb walls and roofs."},r:{ja:"盗人顔負けじゃな…悪さはするなよ",en:"A thief would blush—no mischief, now."}},
  {c:{ja:"糸で高みから降りる",en:"I come down from on high by thread."},r:{ja:"蜘蛛そのものじゃ。…少し、ぞっとするわ",en:"A spider through and through. ...It gives me a slight chill."}},
  {c:{ja:"六つの脚で地を駆ける",en:"On six legs I race the ground."},r:{ja:"馬より速いとか。飼い葉もいらぬしな",en:"Swifter than a horse, they say. And no fodder, either."}},
  {c:{ja:"爪は人に向けぬ",en:"My claws are never turned on folk."},r:{ja:"…ならば、よい。安堵したわ",en:"...Then good. I'm relieved."}},
  {c:{ja:"夜は目を光らせる",en:"At night my eyes glow."},r:{ja:"ひっ…鬼かと思うた。脅かすでない",en:"Eep—I took you for a demon. Don't startle me so."}},
  {c:{ja:"脚を畳めば門も通る",en:"Legs folded, I fit through gates."},r:{ja:"賢いのう。狭い路地も抜けられるか",en:"Clever. Can you slip through the narrow lanes too?"}},
  {c:{ja:"重荷も六脚で運べる",en:"Six legs can haul heavy loads."},r:{ja:"おお、頼もしい。人を雇う銭が浮くわ",en:"Oh, dependable! I'd save a hired hand's wage."}},
  {c:{ja:"梯子だけは登れぬ",en:"Only ladders defeat me."},r:{ja:"弱みもあるのか。少し安心したわ",en:"So you've a weakness. That eases me a little."}}
 );

 /* ===== 5. none：「何もない」を選んだ時の相手の一言 ===== */
 X.none.push(
  {ja:"そうか。また何かあったら、聞かせておくれ",en:"I see. If anything comes up, do tell me."},
  {ja:"なに、構わぬ。話の種は、またいつかでよい",en:"No matter. A tale will keep for another day."},
  {ja:"ふむ、今日はそういう日もあろう。また会おう",en:"Hm, some days are like that. Till we meet again."},
  {ja:"よいよい。そなたと話せただけで、十分よ",en:"It's quite all right. Just talking with you is enough."},
  {ja:"そうか、残念。こんど珍しい話を仕入れておいてくれ",en:"A pity. Lay in a curious tale for next time, won't you."},
  {ja:"気にするな。話とは、ふとした折に出るものよ",en:"Think nothing of it. Tales come out when you least expect."}
 );
})();
