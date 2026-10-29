// 市の売り子の暮らし（2026-10-28 井内さん「市の売り子が、夫婦だったり子連れだったり、近所に住んでたり、品物をどこかに仕入れに行ってたり、知り合いが運んでくるとか」）。
// 身の上を聞く（@mine）と、店の札の品の売り子だけ、名乗りのあとに「店の者」「運んでくる人」を話す（CadKit/index.html heianProfilePieces）。
// 仕入れ先（ware[品].src）は身の上では話さない。商売の元は滅多に人に言わない＝将来の頼みごと（仕入れについていく・荷を受け取りに行く等）の材料として置いておく（2026-10-29 井内さん）。
// 置き換え: {ichi}＝東市／西市・{tsuma}＝連れ合いの名・{ko}＝子の名・{kuni}＝生まれの国・{ani}＝国元の兄。条件: s:'m'|'f'（本人の性）・need:['tsuma']|['ko']・w＝重み
// 区分: 市人が市の近くの町に住み、品を近郊の村や諸国から運び込んだこと＝【史実・要留保】（一般的な理解）。人・言葉・仕入れ先の組み合わせはすべて創作（区分D）
(function(){
  const L = window.HEIAN_LINES;
  if (!L) return;
  const S = L.shopLife = L.shopLife || {home:[], crew:[], carry:[], ware:{}};
  S.home.push(
    {t:'{ichi}の西の小路の長屋に住んでおる。店まで百歩もない', en:'I live in a row house on the lane just west of {ichi}. It’s not a hundred steps to my stall.'},
    {t:'{ichi}のすぐ北の町に住んでおる。市の鼓が聞こえる所じゃ', en:'I live in the block just north of {ichi}, close enough to hear the market drum.'},
    {t:'七条の小路に住んでおる。市の者は、たいていこのあたりに住む', en:'I live on a lane off Shichijo. Most market folk live around here.'},
    {t:'堀川の向こうの町から、毎日通うておる', en:'I walk in every day from a block across the Horikawa.'},
    {t:'九条の村から、朝のうちに歩いて来る', w:.6, en:'I walk up from a village by Kujo every morning.'});
  S.crew.push(
    {t:'店は女房の{tsuma}と二人でやっておる。わしが売り声、{tsuma}が銭勘定じゃ', s:'m', need:['tsuma'], w:2, en:'My wife {tsuma} and I run the stall together. I do the calling out; {tsuma} counts the coins.'},
    {t:'店は亭主の{tsuma}と二人で。あの人は口べたでね、売るのはわたしの役目', s:'f', need:['tsuma'], w:2, en:'My husband {tsuma} and I run it together. He’s no talker, so the selling falls to me.'},
    {t:'子の{ko}を連れてきておる。家に置いておくと、何をしでかすか分からん', need:['ko'], w:1.5, en:'I bring my little one, {ko}, with me. Leave the child at home and who knows what happens.'},
    {t:'{ko}も、この頃は品を並べるのを手伝う。まだ値は言えんがの', need:['ko'], en:'These days {ko} helps set out the goods. Can’t name a price yet, though.'},
    {t:'亭主は今日は仕入れに出ておる。わたし一人で店番じゃ', s:'f', need:['tsuma'], en:'My husband’s off buying stock today, so I’m minding the stall alone.'},
    {t:'女房は家で品をこしらえておる。わしは売るだけじゃ', s:'m', need:['tsuma'], ware:['沓','餅','醤','染','糸','布','菓子'], en:'My wife makes the goods at home. I only sell them.'},
    {t:'一人でやっておる。隣の店の者が、ときどき見ていてくれる', en:'I run it alone. The folk at the next stall keep an eye on it now and then.'},
    {t:'親の代からこの店じゃ。わしで三代目になる', w:.7, en:'This stall has been in the family since my parents’ day. I’m the third to run it.'});
  S.carry.push(
    {t:'品は、知り合いの荷車引きが月に二度運んでくる', nw:['生魚','菜','餅','菓子','櫛','醤','染','太刀'], en:'A carter I know brings the goods in twice a month.'}, /* 「車借」は鎌倉より後の言葉なので使わない。傷む品（魚・青物・餅）と家でこしらえる品（櫛・醤・染・太刀の拵え）には使わない */
    {t:'淀の津に舟が着くと、兄の{ani}が荷を担いで持ってきてくれる', ware:['塩','綿','絹','布','香','油','紙'], en:'When boats come in at Yodo, my brother {ani} carries the goods up for me.'}, /* 舟で上る品だけ（若狭の干物・丹波の栗は山越え） */
    {t:'村の者が、何日か分をまとめて前の晩に届けてくれる', ware:['菓子','油','沓','土器','糸','墨','筆'], en:'Folk from the village bring several days’ worth in one go, the evening before.'}); /* 東市は月の前半・西市は後半に開く（ゲームの暦）ので「市の日」とは言わない */
})();
// 品ごと（店の札の品＝HEIAN_MARKET_GOODS）。job＝何を売るか・src＝どこから仕入れるか・carry＝運んでくる人（無ければ上の共通の carry）。仕入れ先はどれも推定
(function(){
  const S = window.HEIAN_LINES?.shopLife;
  if (!S) return;
  const W = (job, jobE, src, carry) => ({job:[{t:job, en:jobE}], src, carry});
  Object.assign(S.ware, {
    布: W('麻布を売っておる', 'I sell hemp cloth.', [
      {t:'布は近江や美濃のものじゃ。国の調の残りが、まわりまわって市へ来る', en:'The cloth comes from Omi and Mino. What’s left over from the provinces’ tax cloth finds its way to the market.'},
      {t:'{kuni}の村で織った布を、親類が送ってくれる', en:'My relatives send cloth woven in their village in {kuni}.'}]),
    絹: W('絹を売っておる', 'I sell silk.', [
      {t:'絹は諸国から上る調の絹の余りを、蔵の下役から分けてもらう', en:'I get the surplus tax silk from the provinces through an under-clerk at the storehouse.'}]),
    綾: W('綾を売っておる。西市でしか扱えん品じゃ', 'I sell twill silk — only the West Market may deal in it.', [
      {t:'綾は京の織手の家から買うてくる。織る音が一日じゅう止まん家じゃ', en:'I buy the twill from a weaving house in the capital. The looms there never stop.'}]),
    錦: W('錦を売っておる。西市だけの品じゃ', 'I sell brocade. Only the West Market sells it.', [
      {t:'錦は織手に前もって頼んでおく。ひと月かけて一反じゃ', en:'I order the brocade from the weavers ahead of time. A month for a single bolt.'}]),
    染: W('染めた布を売っておる', 'I sell dyed cloth.', [
      {t:'布を買うて、女房が家の裏で染める。紅花は高うてかなわん', s:'m', en:'I buy the cloth and my wife dyes it behind the house. Safflower costs a fortune.'},
      {t:'藍の葉は、九条の向こうの畑の者から分けてもらう', en:'I get indigo leaves from a farmer past Kujo.'}]),
    糸: W('糸を売っておる', 'I sell thread.', [
      {t:'糸は、蚕を飼う村の女たちが紡いだものを集めて来る', en:'I gather thread spun by the women of the silkworm villages.'}]),
    綿: W('真綿を売っておる', 'I sell silk floss.', [
      {t:'真綿は諸国から上ってくる。冬の前がいちばん売れる', en:'The floss comes up from the provinces. It sells best just before winter.'}]),
    櫛: W('櫛を売っておる', 'I sell combs.', [
      {t:'櫛は黄楊を削って、わしが自分でこしらえる', s:'m', en:'I carve the combs myself from boxwood.'},
      {t:'櫛は亭主が家で削る。わたしは売るだけ', s:'f', en:'My husband carves the combs at home. I just sell them.'}]),
    針: W('針を売っておる', 'I sell needles.', [
      {t:'針は鍛冶の家から買う。細い針ほど打つのに手間がかかる', en:'I buy needles from a smith’s house. The finer the needle, the more work it takes to forge.'}]),
    紙: W('紙を売っておる', 'I sell paper.', [
      {t:'紙は、紙屋院の漉き手の知り合いから分けてもらう。書き損じを漉き返した紙もある', en:'I get paper through a papermaker I know at the Kamiya-in. Some of it is old writing paper pulped and remade.'}]),
    筆: W('筆を売っておる', 'I sell brushes.', [
      {t:'筆の毛は、狸や兎の毛じゃ。山の猟師が持ってくる', en:'The bristles are badger and hare hair. Hunters bring it down from the hills.'}]),
    墨: W('墨を売っておる', 'I sell ink sticks.', [
      {t:'墨は松を燃やした煤を膠で練る。煤は北の山の者が運んでくる', en:'Ink is pine soot kneaded with glue. Folk from the northern hills bring the soot.'}]),
    薬: W('薬を売っておる', 'I sell medicines.', [
      {t:'薬草は、わしが山へ摘みに行く。足りん分は寺の薬園の下人から分けてもらう', en:'I go up into the hills to gather herbs. What I lack I get from a servant at a temple herb garden.'}]),
    油: W('灯の油を売っておる', 'I sell lamp oil.', [
      {t:'油は荏胡麻を搾る。搾るのは、南の村の知り合いの家じゃ', en:'The oil is pressed from perilla seed, at a house I know in a village to the south.'}]),
    米: W('米を売っておる', 'I sell rice.', [
      {t:'米は山城の村から、俵で運んでくる', en:'The rice comes in bales from villages in Yamashiro.'}],
      [{t:'淀の津から、知り合いの舟が堀川を上って運んでくる', en:'A boatman I know brings it up the Horikawa from the port at Yodo.'}]),
    塩: W('塩を売っておる', 'I sell salt.', [
      {t:'塩は難波や播磨の浜で焼いたものじゃ。淀の津まで舟で上る', en:'The salt is boiled on the beaches of Naniwa and Harima, and comes up by boat as far as Yodo.'}]),
    干魚: W('干物を売っておる', 'I sell dried fish.', [
      {t:'干物は若狭のものじゃ。山を越えて背負うて来る', en:'The dried fish is from Wakasa, carried on men’s backs over the mountains.'}]),
    生魚: W('魚を売っておる', 'I sell fresh fish.', [
      {t:'魚は桂川や鴨川の漁師から、朝のうちに買う。昼を過ぎたら売り切らんと', en:'I buy fish from the Katsura and Kamo river fishermen in the morning. It has to be gone by afternoon.'}]),
    海藻: W('海藻を売っておる', 'I sell seaweed.', [
      {t:'海藻は若狭や丹後から、干物と一緒に背負うて来る', en:'The seaweed comes from Wakasa and Tango, carried in with the dried fish.'}]),
    菜: W('青物を売っておる', 'I sell vegetables.', [
      {t:'青物は、家の裏の畑と、九条の向こうの畑で作っておる', en:'I grow the vegetables in the patch behind my house and in a field past Kujo.'}],
      [{t:'朝のうちに、子らと籠を背負うて持ってくる', en:'In the morning the children and I carry it all in baskets on our backs.'}]),
    菓子: W('木の実や干した柿を売っておる', 'I sell nuts and dried persimmons.', [
      {t:'栗や柿は、丹波や北山の村の者が運んでくる', en:'Folk from villages in Tamba and the northern hills bring the chestnuts and persimmons.'}]),
    餅: W('餅を売っておる', 'I sell rice cakes.', [
      {t:'餅は夜明け前に、家で搗く。隣の者も手伝うてくれる', en:'I pound the rice cakes at home before dawn. The neighbors help.'}]),
    沓: W('沓や草鞋を売っておる', 'I sell shoes and straw sandals.', [
      {t:'草鞋は家で編む。革の沓は、革を作る家から買う', en:'I weave the straw sandals at home. The leather shoes I buy from a tanner’s house.'}]),
    香: W('香を売っておる', 'I sell incense.', [
      {t:'香は唐の品じゃ。大宰府から上ってくるのを、待つしかない', en:'Incense is a Tang import. I can only wait for it to come up from Dazaifu.'}]),
    太刀: W('太刀を売っておる', 'I sell swords.', [
      {t:'太刀は鍛冶に打たせて、鞘と柄はわしが付ける', en:'I have a smith forge the blades; I fit the scabbards and hilts myself.'}]),
    鞍: W('鞍を売っておる。西市だけの品じゃ', 'I sell saddles. Only the West Market sells them.', [
      {t:'鞍は木地を彫る者と、漆を塗る者と、革を張る者の三人がかりじゃ', en:'A saddle takes three: one to carve the wood, one to lacquer it, one to fit the leather.'}]),
    土器: W('土器を売っておる', 'I sell earthenware.', [
      {t:'土器は深草の焼き手から買う。荷車で運ぶと、いくつかは割れる', en:'I buy the earthenware from the potters at Fukakusa. Bring it by cart and a few always break.'}]),
    醤: W('醤を売っておる', 'I sell hishio paste.', [
      {t:'醤は家の甕で寝かせる。一年待たんと売り物にならん', en:'I let the hishio age in jars at home. It needs a full year before it can be sold.'}]),
    '*': W('{ichi}で商いをしておる', 'I trade at {ichi}.', [
      {t:'品は近くの村から仕入れてくる', en:'I get my goods from villages nearby.'}])
  });
})();
