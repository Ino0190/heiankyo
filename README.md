# HakoniwaKit 平安京

[English follows the Japanese.](#english)

昌泰三年（900）の平安京を、国土地理院の数値標高モデルと現況の河川データの上に推定復元し、ブラウザだけで歩けるようにしたものです。造営から約百年。右大臣・菅原道真が左遷される前の年の都を、ブリキのロボ「鉄の童」になって空から巡り、地上を歩き、町の人と話せます。

公開ページ: https://ino0190.github.io/heiankyo/

## はじめに

1. 起動画面で「読み込みを開始」を押す（初回は約120MB・通信は圧縮されて約25MB。1〜3分）
2. オープニングの飛行のあと、上のボタンから「市内を歩く」か「ドローンツアー」を選ぶ
3. 歩いているときは地面をクリック。近くの人に吹き出しが出たら E で話しかける

日付は遊んだ日数に合わせて進み、続きから再開できます。来るたびに季節・市の日・月・天気・町の人の話が少しずつ変わります。

## できること

### 空から巡る
- ドローンツアー: 羅城門から朱雀大路・大内裏・東寺など19か所を連続した飛行で巡る。オープニングの飛行つき
- 俯瞰: 地表すれすれから真上まで、ドラッグとホイールで都の全景を見る。雲の影が地面を流れる

### 歩く
- 50の地点から歩き始める。地面をクリックで目的地、WASD でも動く
- 速さは4段: 近くは歩く・少し遠いと大股・遠いと浮いて走る（ホバー）・遠くを続けてクリックすると加速。段ごとに音が違う
- 坂では登りが遅く下りが速い。町の人はよけ、牛車はロボのほうがよける
- 足音は砂・草・板・石・水で変わる。人の多い所はざわめき、大内裏は静かで、内裏に近いほど静か
- 屋内: 中納言家（寝殿・北の対・西の対）と大極殿の中を歩ける。入口で F
- 居候: 羅城門の二階・市の人夫小屋・貴族の邸の下働きの長屋に寝泊まりできる（話しかけた人が貸してくれる）。人夫小屋に住むと河岸の荷揚げ、長屋に住むと若君の凧揚げ・なぞなぞの相手を手伝える。夜は部屋で Z（朝まで休む）: 座って止まったロボのゼンマイを同居の人が巻き、朝6時に起きる

### しぐさと町の人の返し
- Space ジャンプ（速いほど遠く高く）・Q 踊る・B お辞儀・F 祈る（社殿・堂の前では参拝）・G 手を振る
- お辞儀や手振りには近くの人が返す。竜尾壇の上でお辞儀すると、並んでいる官人が皆お辞儀を返す
- 続けて踊ると、3回目あたりから周りの人がまばらに加わり、踊り方は3通り。興が乗ると龍笛と笙の囃子方が出て、ロボが止まってもしばらく踊り続ける。踊りの輪の中では、町の人の話も踊りのことになる
- 夜はロボの目が光る

### 都の人と話す
- 近くの人の吹き出しに台詞が出る（一言約1,300・掛け合い約160）。場所・刻・季節・市の日・天気・月齢で出る話が変わる
- E で話しかけると、身の上・近ごろ見たもの・望み・知り合いのこと・土地の言い伝えを聞ける。選択肢は一度に4つまで
- 身の上を聞く: 名前の無い町の人も、生まれた国・国元の家族・昔の暮らし・いまの悩みを話す。近所に住む人どうしは同じ家の者として話がつながる
- 名前のある住人は約140人。それぞれに一日の居場所と仕事があり、身分・仕える家・右大臣方/左大臣方の立場で話し方が変わる
- 聞き込み: 「〇〇のこと、知ってる？」と話題を振ると、人によって知っている深さ（噂・事情・真相）が違い、知らない人は知っていそうな人を教える。紹介された人へはそのまま歩いて会いに行ける。聞いた深さは手元に記録される
- 聞き書き帳（N・上の「聞き書き帳」）: 誰が・いつ・どこで・何と言ったかが自動で残る。語で探すと同じ話題の別の人の話が並び、食い違いが見える。人物・場所ごとにも見られ、📌で留められる。頼みごとの一覧や進み具合は出さない
- 日録（聞き書き帳の「日録」）: 一日ごとに、天気・歩いた所・会った人・聞いた話・夜の月を短い文で書く。撮影モードで撮った絵もその日に並ぶ
- たどる（T・上の「たどる」）: 遷都（794）から延長（926）までの都の年表。いま（昌泰三年）に印があり、これより後の出来事は「これから先」として薄く出る。「くわしく」で解説を読み、場所のある出来事はそこへ移れる
- 眺める（上の「眺める」）: ドローンツアー・俯瞰・撮影モードと、5つの定位置（南から・北から・左京上空・右京上空・真上）
- 地図: 歩いている間は、行った所と話で聞いた所だけが出る（最初は羅城門・朱雀大路・東市・西市）。聞いただけの所は薄い印。現在地の扇が見ている向き。ツアーと俯瞰では全部
- 発見: 歩いて着いた所で「発見」の札が出る（51か所）。数は聞き書き帳の「場所」「日録」で見られる。ドローンや一瞬の移動では発見にならない
- 町の人: 1人から1日に聞ける話には限りがあり、通って顔なじみになるほど多く話す。人ごとに知っている話題が違い、よその土地の言い伝えは「行って聞け」と勧め、詳しい解説は僧や学のある人が話す。散策に入ると「今日の都」で天気と市を迎える
- 言い伝えや出来事の語（浄蔵・御霊会・応天門の変など）が出たら「〇〇とは？」で解説を読み、話の地点へ歩いて行ける。史実に寄せた話には出典を添える
- 頼みごと: 迷子・恋文・闇市・紅の値・干物盗人・塩の買い付け・西寺の屋根・常夏の文・恋敵の足止め・夜行の知らせ・夜の女車の供・来ない魚売り・右京の夜番・羅城門の柱・鞠の会・西市の立て直し・帰るか残るか など。済ませた数に応じて、次の頼みが出てくる
- 門籍: 頼みごとを済ませると、内裏・後宮の廊・貴族の邸の中へ入れるようになる

### 暦・時刻・空
- 本当の暦（大の月・小の月・閏月）で、昌泰三年二月二十五日から延喜二十二年（922）まで進む。1日は実時間24分（歩いている間は48分）。進むのは遊んでいる間だけで、閉じると続きから始まる
- 「たどる」から節目の日（七夕・冬のはじめ・大晦日・昌泰の変の前の日・改元の日・時平が亡くなる日）へ時を進められる（戻れない）。改元などは暦が進めばその日に自動で起き、札で知らせる
- 時代の段: 昌泰の変（901年正月二十五日）のあとは、町の人の話・居場所・頼みごとが替わる（道真の車は出ない、藤次は待つお方のいない石に座る など）。早蕨のように、あとの年に都へ来る人もいる
- 東市と西市は半月交替で開き、午の刻に開いて日の入り前に閉まる
- 季節で太陽の道・日の出日の入り・星空が変わり、草木は梅・桜・若葉・紅葉・枯れ木と移る。月は満ち欠けし、星官（中国式の星座）の線と名前も出せる
- 天気（晴・曇・雨）は日ごとに変わる。雨の日は細い雨の筋・濡れていく道・水たまりの波紋。通りの人は走って帰り、立っている人は軒下や門の下で雨宿りする。市の売り子は屋根の奥へ下がり、客は店の軒下へ寄る
- 夜は篝火と灯明、牛車の供の松明だけが明るい。忌夜行日の丑の刻には、二条大宮の辻にまれに百鬼夜行が出る

### 都の姿
- 朱雀大路（幅約84m）と条坊の街路、坊城と坊門、堀川・西堀川、側溝と柳の並木
- 大内裏: 朝堂院（大極殿・竜尾壇・十二堂・応天門・翔鸞楼・栖鳳楼・白虎楼・蒼龍楼）、豊楽院、内裏（紫宸殿・清涼殿・後宮）、曹司40区画、馬寮、宴の松原
- 東寺・西寺（五重塔・金堂・講堂）、東西の鴻臚館、神泉苑、朱雀院、河原院、貴族の寝殿造（車宿・厩つき）、官人の家、庶民の家と市の露店
- 庶民の街区: 長屋の壁は、下から石の土台・縦板の下見板・土壁で、柱と貫が通る。民間の小市には東市と同じ露店が2〜3軒並び、荷車が添う。空き地には菜園の畝がある。小市は歩いて回れる
- 郊外: 寺社22か所、鴨川・桂川の河原、都の外の条里の田（長地・半折・棚田・藪・林・葦原）、巨椋池、地形から比定した京への街道（東海道は逢坂へ）
- 屋根は三手先・垂木・隅反り・熨斗瓦の棟・鬼瓦まで作り込み、遠景は軽くしてある

### 暮らし
- 公卿の牛車は時刻表どおりに車宿を出て門から出仕し、夕方に帰る。都の口や市から旅の牛車・荷車・検非違使の騎馬・行商が出入りする
- 市と小市の売り子と客、菜園の世話、洗い物・炊事・水汲み・庭掃き・厩の世話・子どもの遊び・世間話、東寺・西寺の僧、宮城門の門衛、蹴鞠、後宮の女官、竜尾壇の旗
- 牛・馬・犬・猫、空を飛ぶ鳶・烏・燕、池の鷺、庶民の家の鶏と雀
- 日常の移ろい: 庶民の長屋の裏で、薪割りの男と隣の女の暮らしが、初めて歩いて着いた日から数日かけて変わる（斧の音・腰を痛めて休む・隣が薪を片付ける・また割り始める）。頼みごとや知らせは出ない。見たこと・聞いたことだけが聞き書き帳と日録に残る

### そのほか
- 撮影モード（画面の飾りを消して PNG を保存）と録画（R）。撮影モードの「ロボを消す」でロボを写さずに撮れる
- 劇画（☰ の「劇画にする」）: 白黒の墨線・網点（スクリーントーン）・濃い陰影で劇画のように見せる。光と影の上に掛ける。撮影の写真も劇画で残る。右上の「劇画の調整」で線の太さ・トーン（網点・線・砂目）・トーンの細かさ・明暗の強さを変えられる（ブラウザに覚える）
- 光と影 ⇔ 線画、音楽と効果音の ON/OFF（効果音は WebAudio で合成）、台詞の ON/OFF
- 日本語 ⇔ 英語。英語では台詞もすべて英訳で出し、海外の人向けの基礎の解説（大内裏・牛車・陰陽師など）を足す。ロゴは英語でも「HakoniwaKit 平安京」
- スマートフォンでも操作できる（ドラッグで見回し・地面をタップで移動）

## 操作

| 操作 | PC | スマートフォン |
| --- | --- | --- |
| 歩く・目的地を変える | 地面をクリック／WASD | 地面をタップ |
| 見回す | 左ドラッグ | ドラッグ |
| 話しかける・選ぶ | E／1〜4／Esc で閉じる | 人をタップ |
| ジャンプ・踊る・お辞儀・祈る・手を振る | Space・Q・B・F・G | 右下の動作ボタン |
| 屋内に入る・参拝 | F | 動作ボタン |
| スキップ（速く進む） | Shift | — |
| 歩行をやめる | Esc | 上の歩くボタン |
| 聞き書き帳 | N | 上の「聞き書き帳」 |
| たどる（年表） | T | 上の「たどる」 |
| 録画 | R | — |

## 版の歩み（主なもの）

| 版 | 中身 |
| --- | --- |
| 1.166 | 暮らしの頼みごと3本: ドブの石（長屋の常女に頼まれ、家の前の側溝に落ちた石を持ち上げてどける・礼に撫子）、同居人の使い（居候の部屋で朝まで休んだ朝、流れ者・人夫・家司が届け物を頼む）、部屋に飾る（居候の部屋の棚・台に、持ち物の花・貝・土器・櫛・布などを飾れる） |
| 1.165 | 連作「凧より遠くへ」若君編: 居候先の若君と東市（西市）・東寺・羅城門を歩き、疲れた若君を肩に乗せ（並んで歩くこともできる）、九条から荷舟で帰る。家司の出迎えのあとは若君の言葉が変わり、家司の頼みを聞ける。道端に夏草の茂み・塵の山・牛の糞（ごみを厚く・石を暗く）。「ついていく」の間隔を8mに。中下級官人の家と屋敷庭の塀を下見板の色の板塀にして1.8〜2.0mに。洗い物は辻の側溝をやめ、長屋の共同井戸の脇と堀川の岸に（井戸で水を汲む人も）。笛のあとにお辞儀をすると、集まった人がお辞儀を返してから散る |
| 1.164 | 居候: 住む所のないロボに寝床を貸す人が3か所に（羅城門の流れ者＝門の二階・市司／西市の刀禰＝市の人夫小屋・凧揚げを手伝った邸の家司＝下働きの長屋）。部屋はロボに合わせて大きめの箱庭仕立てで、外の景色が見える（羅城門の二階は崩れた壁の向こうに都の街並み）。入口で F。人夫小屋に住むと河岸の荷揚げを手伝える（俵を岸の荷置き場まで運ぶ・1日3俵で米2つ）。長屋に住むと若君の相手ができる（凧を一緒に揚げる・なぞなぞ。1日1回、家司から唐菓子）。朝まで休む（Z）: ロボは背中のゼンマイで横になれないので、夜に居候の部屋で座って止まり、同居の人（旅人・人夫・朝に来る若君）がゼンマイを巻いてくれて卯の刻に起きる（昼は日暮れまで休める）。部屋の外に隣の小屋・荷車・井戸・物干し・築地と、その向こうに都の写真（窓からも見える・刻に合わせて夕焼けと夜の暗さ）。部屋の葛籠に持ち物を預けられる。居候先は左上の地図に ⌂ の印（押すと歩いて行く）。身の上: 町の人に「身の上を聞く」と、生まれた国・国元の家族・昔の暮らし（郡司・防人・飛鳥の豪族の末など）・いまの悩みを話し、近所の人は同じ家の者として話がつながる。凧を揚げる童と話せる。季節の台詞を暦と体感の季節で選ぶ（蝉・蚊は夏だけ）。貴族の庭に山桜。右京北の築地と門の崩れ。宜秋門・陰明門をまっすぐ通れるように。衛府の稽古の手直し。「今日できること」を開け閉めできる。起動画面の写真を23枚に（PCは幅1920・スマートフォンは写真を読まない） |
| 1.163 | 鳥羽津を行き先・発見の地点に。津に荷車溜まり（荷車8台と牛・蔵から俵を運ぶ人・荷台に積む人・出番を待つ荷車引き・水路の板橋）。鳥羽作道などの街道を田より少し高い盛り土に（両脇に草の法面・ところどころ松並木。川を渡る所は盛らずに浅瀬を歩いて渡る）。道の縁の雑草を倍に、雑草に季節の野の花（春の野・初夏・夏・秋の七草・晩秋）。並木の高さをまちまちに（ときどき若木）。川・水路・池の水面に流れる筋と空の映り込み・きらめき。豊楽院の6堂に朝堂院と同じ扉と階段。表に無い牛車は出仕（朝）と退出（昼）の刻に多く、その間は少なく。検非違使は貴族の邸に入らない。牛車と検非違使の隊が同じ筋で重ならない（後ろが待つ）。屋敷の庭で鳥の形の凧（紙鳶）を揚げる童と見上げる近所の人（3軒）。官人に袴（束帯は白の表袴・衣冠は指貫）。扁額の文字を毛筆に（旧字体）。竜尾壇の旗竿を細く・旗が竿を突き抜けない。基壇・船着場の石をざらざらに。人が蹴鞠を蹴る音も聞こえるように。PC の動作の帯のしぐさを「動作」にまとめた。サイトのトップに「平安京を歩く（音が出ます）」と「はじめての操作」 |
| 1.162 | 起動画面に「平安京を歩く（音が出ます）」のボタンと操作の手引き。押すとオープニングから音楽が鳴る（読み込みが先に終わったら押すまで待つ）。官人の通い: 名前のある官人20人が朝は京の家から宮城門をくぐって役所へ、昼過ぎ（史生は夕方）に家へ歩いて帰る（歩いている間も話せる・家の前に家族）。名前の無い官人30人も朝は門へ、昼過ぎは京へ。寮13か所に宿直所・厨・井戸・雑舎（人手の多い寮は食堂と仕丁の長屋も）と、炊く人・水を汲む人・昼に食べる人。衛府の太刀・矛の稽古を8人の列にし、一人ずつ木の人形を相手に（稽古の刻の外は武具を立てて休む）。大内裏の曹司の木を倍、曹司の塀沿いに道の木。楓（秋に紅く・冬に散る）を都じゅうに。神泉苑の門を押小路・三条坊門小路の突き当たりへ、切り欠きだった所に小門。朱雀院の北・南・西にも門。堀川・西堀川の船着場8か所を、岸の道を掘り下げた石敷きの荷揚げ場に（石段・石垣・舟2艘・荷を揚げる人夫）。「歩いて行く」は歩くだけに。小さな本音（町の人がときどき本音をこぼす・数日後に余韻）。宙に浮いていた童を地面へ。動きを軽く（遠くの牛を描かない・楓と庭木を遠くで間引く） |
| 1.161 | 時が最初から流れる（1時間＝現実の20分・話している間は止まる）。町に銭（寛平大宝）・蛤の貝・桜貝・子安貝が落ちていて、ときどきピカッと光る（拾って市で使える・人にあげられる）。おまかせで塀や坊城を通り抜けないように。大内裏の暮らし: 大炊寮から大膳職へ米を運ぶ人、郁芳門の外から米を運び入れる荷車、造酒司の甑と甕、織部町から縫殿寮へ布を届ける使い、内匠寮の器作り。衛府の稽古と食堂・厨・井戸・雑蔵、2つ目の小門。朱雀門の前に衛士の詰所。上東門は元の幅に戻し、檳榔毛の車はそこを通って中で待つ。弓の的の絵。小安殿を低く。曹司の分かれた区画に小門。大木と、ときどき倍の高さの木。大宮大路などの並木と繋いだ牛。鳥羽津。北の諸司厨町21町。お辞儀の音を大きく。竜尾壇で笛を吹くと一緒に吹く人が壇上に並ぶ |
| 1.160 | 音を足した: 官人が鞠を蹴る「ポン」と落ちた音、うまく蹴った・十続いた・弓が黒星に中ったときの「おお！」というどよめき、大極殿などでお辞儀を返す人ごとの衣擦れ（大勢だと重なって厚くなる）、荷舟の棹の「ギーッ」「コッ」、牛車・荷車の車輪のゴロゴロとときどきのガタッ（牛車は車軸のきしみも）、駆け寄る童の足音、火長の夜回りの足音、弓を引く間のきしみと放った矢の「ビュッ」。蹴鞠: 輪に入った後は「入れてやるぞ」と言わず、「なかなかうまいではないか」「鞠が落ちてきたところで蹴るのじゃ」など蹴り方の助言とほめ言葉。早く蹴りすぎて落としたら「落ちてくるのを待て」。独楽: 札に2つの独楽の大写し（縞が流れて回る・弱るとふらつく・倒れると寝る）、鉄の童が柄と紐の鞭を手に持ち、体ごと振りかぶって叩く（当たるのは振り下ろした瞬間）、童の鞭も紐がしなる形に、勝負の間はカメラを少し上から。庶民街の家の前に材木の山・立てかけた板・背負い籠・笊・藁束・薪束・塵の山・欠けた甕を置いた。建物に重なっていた木を横へずらした。街区の牛舎が家の前に建つようになり（それまで1つも建っていなかった）、近くの牛（牛舎・薪炭の荷車の牛）が動く: 草を食む・首を振る・反芻する・囲いの中を数歩あるく・脚を畳んで寝る。尾はいつも振っている。庶民街: 家の前の壁際に物の寄せ集め（立てかけた板・材木・筵の前に桶・甕・箱・藁束・薪束、その上に笊・籠、足もとに屑）、植え込み、壁に立てかけた材木の束。家の角の木箱に腰掛ける人、家の前で盥の洗濯、路地で輪になって走り回る童と鬼。物干しは家の前へ移し、半分ほどは着物を T 字に広げて干す。町の小鍛冶（差し掛けの下の炉・鞴・金床・炭俵、槌を打つ人と鞴を押す人、近くで「カーン」・推定）。猫と犬を2倍ほどに。おまかせはホバーをやめ、遠い道中は大股（スキップ）、着く手前はぶらぶら歩き |
| 1.159 | 荷舟に乗れる: 堀川・西堀川の船着場（二条・四条・東市／西市・九条）の船頭に話しかけて「（荷舟に乗せてもらう）」で行き先を選ぶ（5〜19時）。堀川の舟は九条から南の田の村・鳥羽津まで下る。橋の下では鉄の童が座って膝を抱え、体を縮めて身を屈める（船頭も）。「急ぐ」で速く、「ここで降りる」で岸へ。船賃は米1つ（無ければただ）。持ち物（I・「持ち物」）: 届け物・弓（2本以上）・蹴鞠（10続く）・独楽の勝ち・釣り人・船頭から米・布・栗・魚（鮎・鮒・ハヤ）がもらえる。市の店で米・布と品を替え、魚屋や邸の厨は魚を米と替える（値は推定）。人に贈ることもできる（1人1日1回）。笛の構えを直した: 両手を口もとへ寄せ、腕を伸ばして横笛を顔の前から右へ構える |
| 1.158 | 独楽（こまつぐり）: 庶民街区の小路・東市の北門の前・六角堂の前で童が鞭で独楽を回している（8〜17時）。話しかけると勝負。叩くと回りが強くなるが、叩き続けると腕が疲れる。打たれた独楽は滑って、強く打つと遠くへ飛ぶので追いかける。倒れかけに叩くと縁に当たって倒すことも。長く回したほうが勝ち。笛を吹く（Y・「動作」）: 吹き続けると町の人が集まり、笙・篳篥・打ち物が順に加わって合奏になる。曲は3つ（ゆるやかな曲・はずむ曲・夜の静かな曲）が替わり、揃うと見物の人が踊り出す。弓: 射場の的を5つにして、的まで約41mに。射手は的ごとに1人。☰ を「はじめに・見え方・音と言葉・操作」に整理し、光と影・劇画を「絵：線画／光と影／劇画」の1つにまとめた。練習の見回しの段に「向きが逆に感じたら ☰ の見回しの向き」の一言 |
| 1.157 | 蹴鞠に加われる: 朝堂院で蹴っている官人に話しかけ「（蹴鞠の輪に入れてもらう）」で輪の7人目に。鞠が来たら Space か「蹴る」で蹴り返す（「来るぞ」「今！」の合図）。落とさずに続いた数と最高を出す。落とすと転がって、近い官人が拾って蹴り直す。大内裏の中なら昼のあいだ K（「動作」の「鞠を出す」）で鞠を出すと、近くの官人が4人集まって輪ができる。輪を出ると官人は帰っていく |
| 1.156 | 荷車: 鳥羽津（羅城門）・逢坂の関・北街道・丹波の口から入り、市や邸の門の前で一服して、来た口へ帰る。荷車にも「ついていく」ができる。火長の夜回りに道筋（開始の陣→経由→終わり、輪か片道）。陣へ戻ると「よし、今日も異常なしだ」。ときどき怪しい者を見とがめて追いかけ、問いただす。松明が地面を照らし、炎が揺れて火の粉が立つ。夜回りの数を減らした。練習: 行き先の地面が光って矢印と「ここをクリックして、ここまで移動してみて」、見回しは手の絵で「ここを掴んで右に回してみて」。「持ち上げる」は荷のそばでだけ出る。頼まれごとの会話で「（そばの石を持ち上げる）」を選べる。帰り着いた牛車は牛と牛飼童が車宿の奥へ寝に行く。通いの牛車をもう1台。夜の今日できること（笛を聞く・百鬼夜行・星を見る）。蹴鞠は順番でなく相手を選んで蹴る。庶民の長屋を背中合わせ・戸口を大路側に。朱雀院まわりの道と敷地の食い違いを直した。子どもが道に沈まない。2回目以降の歩き終わりでホバーの音が残っていたのを直した |
| 1.155 | はじめての散策（朱雀門から）: 朱雀門の前に立ち、①門をくぐる ②遠くを押してホバー ③見回す ④俯瞰へ上がる ⑤地図で行きたい所を選んで「自分で歩く」 ⑥お辞儀 を、1つやるまで待つ案内で一通り試せる。空撮の画面のボタンと、☰「あそびかた」の「朱雀門から練習する」から始める。スマホの見回しを指で景色をつかむ向きに（右へなぞると景色も右へ）。☰「見回しの向き：ふつう／逆」で逆にできる。あそびかたに「視点を変える」を足した |
| 1.154 | 弓: 構えるときにカメラが真後ろへ回らず、好きな向きから見られる。矢に黒い矢羽を付け、飛ぶ間は白い軌跡が出て少しずつ消える。的や垜に当たった矢は刺さったまま残る（12本まで）。射場の舎人・兵衛の弓を和弓らしく長く、握りを下寄りにして、引くとしなる（反りの形は推定）。道: 路面に土の色の斑・道の縁の暗がり・近くの砂利の粒を足し、道端の草・石を増やして藁くず・木っ端・土器のかけら・布切れを散らした（推定）。牛車のお供に目を付けた。撮影中も踊れる（Q・「踊る」）＝まわりを巻き込んで踊るところを撮れる。今日できることを4件まで（盤双六が入る）。おまかせは遠い行き先へは低く飛んで向かう。SNSの共有のリンクを紹介ページに（英語は英語の紹介ページ）。射場の後ろの建物をなくした |
| 1.153 | スマホ横持ちで盤双六の窓の「代わって打つ」「賽を振る」が画面の下に切れていたのを、右の列へ移した。窓（盤双六・弓・今日できること・会話）を開いている間は初回の案内を出さない（スマホで「戻る」に重なっていた） |
| 1.152 | 盤双六に加われるようにした: 「盤双六を見る」の窓で「代わって打つ」を押すと、町の人の打ちかけの盤を途中から白で打てる（「ちょっと代わってくれんか」）。自分の番は「賽を振る」→ 光った石を押す → 金の点（行き先）を押す、で目ごとに1手（「この石を下ろす」もある）。黒は町の人が打つ。ロボは盤の前に座り、代わった町の人は盤の脇で見物する。「盤を返す」で町の人に戻り、勝負はそのまま続く。勝負がつけば聞き書き帳に残る。盤双六・射場の前と「今日できること」を選んでいる間は、町の人から話しかけてこない（話しかけられて札が隠れていた）。スマホの行き方の札のボタンを指で押せる高さに |
| 1.151 | 弓を射るところをアップで見せる: 「引く」でロボが打起しから引き分けを始め、満で止まって待つ（前は「放つ」を押してから構えていた）。引いている間はカメラがロボの肩越しに寄り、手前にロボ・奥の真ん中に的。放つと矢が弦を離れ、カメラは後ろへ戻って矢の飛ぶのを見せる。満のまま長く持つと腕とカメラが少し震える。射場の30m以内では、舎人・兵衛の稽古の矢も小さな的の絵に出る（3Dで刺さった所と同じ・直近4本） |
| 1.150 | 盤双六を見物できるようにした。町で打っている組の近くで「盤双六を見る」（盤をタップしても開く）と、盤面が大きな絵で出る: 白黒15個ずつの石、賽の目、どちらの番か、動いた石（元の点は点線・行き先は金の縁）、切った石・下ろした石、打ち手や見物の一言。対局は本式の決まり（並べ方はバックギャモンと同じ・一荷・切る・手石・下ろす）で、3Dの盤と2Dの窓は同じ対局を映す（閉じても勝負は続き、勝てば勝った方が両手を上げる）。おまかせ散歩が双六の前で立ち止まると、窓が開いて20〜30秒見物する。スマホの案内の札から「F：」を外した |
| 1.149 | スマホで画質を「軽量」にすると絵がぼけて分からなくなっていたのを直した（描画の細かさを画面の約半分まで落としていた。細かさはほぼ保ち、人の動かし方・植栽・遠くの部品で軽くする。スマホ相当の測りで軽量 7→8fps）。「標準」も自動で下げる下限を上げた。知らせは1度に1枚: 初回の案内・弓・今日できること・行き方の札が出ている間は、新しい吹き出しを出さず、「今日の都」「発見」などの札は会話や案内が終わってから出す |
| 1.148 | 「今日できること」を足した（上の帯・スマホは ☰ と「地図・移動」の中）。今の刻に開いている営みを3つまで: 今日開く方の市、いちばん近い射場の弓の稽古、朝堂院の蹴鞠（眺めるだけ）、近くの辻の盤双六（見るだけ）。開いていなければ始まる刻を添える。押すと「歩いて行く／すぐ移る」を選べ、空から見ている間なら散策に入ってその場へ移る。射場へは射る所の少し前に着き、そのまま「弓を射させてもらう」が出る。1.147 で PC の下の帯にスマホ用のボタン（地図・移動・動作など）が並んでいたのを直した。横持ちで会話中に「今日の都」が選択肢へ重ならない |
| 1.147 | スマホを軽く・押しやすくした。☰ に「画質」（軽量・標準・高画質。スマホは標準・PC は高画質から。重いと軽量を一度だけ勧める）。歩く間は遠くで小さく写る建物の部品と遠い植栽を描かない（スマホの東市で描画 3829→2286 回）。スマホの下の操作は「おまかせ」「地図・移動」「動作」の3つにまとめ、押すと中身が開く（地図を見る・行き先を選ぶ・ついていく／しぐさ7つ）。空から眺めている間は「自分で歩く」「鉄の童におまかせ」が出る。指の見回しとタップを取り違えにくくし、人を指で選ぶ範囲を広げた。横持ちの弓の窓が画面に収まり「放つ」「やめる」を押せる。横持ちの起動画面で開始ボタンが見える。スマホの案内は「クリック」「Space」「E」をタップ・ボタンの言葉に。地図の印からも「歩いて行く／すぐ移る」を選べる。あそびかたに 移動・おまかせ・弓・盤双六（眺める）・蹴鞠（眺める）を足した。射る前後もロボの左肩が的を向く。踊る・ぶつかるの胴のひねりが効くようになった |
| 1.146 | 弓の左右を直した（ロボも舎人・兵衛も、的が体の左・弓は左手・右手で引く。前は右手に弓を持っていた）。弦が引き手まで V 字に引かれ、矢を番えて放ち、放った後は弦が震える。ロボの弓は背より長い和弓の寸法にし、握りを中央より下に。引き分けでロボは顔を少し的の方へ向ける |
| 1.145 | 東市・西市の堀川側の塀が堀川沿いの道へはみ出していたのを、道の縁へ戻した（道幅を8丈に広げたときに塀だけ取り残されていた）。射場の埒に、射る所の横から出入りできる切れ目を開けた（囲いの中に入れない・出られなかった）。弓は体を横向きにし、左手で弓を押して右手で引き分けて放つ（ロボと舎人・兵衛） |
| 1.144 | 射場の舎人・兵衛に話しかけて「射させてもらえる？」で弓を射れる（「どこを狙うの？」で狙い方を教わる）。弓は2段に: 的の絵で照準を決め（矢は落ちるので黒星の少し上、風は一本ごとに変わるので風上へ）、Space で引いて満ちたところで放つ。早いと手前に落ち、長く持つと腕が震える。外れたら理由（風に流された・引きが足りない）が出る |
| 1.143 | 左右の近衛府・兵衛府の射場で、舎人と兵衛が交代で的に向かって弓を射る（矢が飛び、的か垜に刺さる）。射る所の近くで「F：弓を射させてもらう」を押すと、ロボも三本射れる（揺れる針が真ん中の黒星に来たところで放つ）。射手が一言かけ、聞き書き帳に残る。左右の兵衛府も門を内裏の側で向かい合わせた |
| 1.142 | おまかせ散歩はゆっくり歩き、道の真ん中や端をふらつき、牛車・双六・蹴鞠などを見つけると立ち止まって眺める。行き先は都のどこへでも（遠くても）選び、左上の地図に朱の菱形で出す。町の辻・市の外・邸の井戸の脇で盤双六を打つ人と見物（29組・話しかけると遊び方を教える）。六壬の式盤を大きく毛筆の字・和紙の地にし、「この盤で読むこと」（初伝・中伝・末伝の意味と課の型）と盤の見方を添えた。左右の近衛府は門を内裏の側で向かい合わせ、中を鏡写しに（庁・脇舎・射場・宿所・兵具倉）。貴族の邸の屋根に檜皮葺の絵。経路は塀から少し離れて通る。ロボに集まる子供が重ならない |
| 1.141 | 鉄の童におまかせ（O・下の帯のボタン）。近くの行ったことのない所を選んで道なりに歩き、着いたらひと休みしてお辞儀や手を振る。立ち寄った所と聞こえた一言は聞き書き帳に「鉄の童が見たもの」として残る。何かキーか地面のクリックで終わる。話しかけ・頼みごとは自分から始めない |
| 1.140 | 「歩いて行く」「すぐ移る」が押せるように。大内裏の中（龍尾壇など）は段や塀を回り込む道を探して歩く。道が見つからないときは「歩いて行く」を押せなくする。行く手がふさがったら目を回さずに止まる |
| 1.139 | 歩いて行くときは道の上で止まる（門前・市の前まで。市の中や敷地を斜めに突っ切らない）。歩くとき、カメラとロボの間にある柱・壁・屋根を網目に透かしてロボを見せる |
| 1.138 | 歩いている間に左上の地点を選ぶと「歩いて行く／すぐ移る」を選べる。歩いて行くと、条坊の道を曲がりながら道なりに向かう（距離・かかる時間・都で過ぎる時間を先に出す） |
| 1.137 | オープニングの飛行がカタカタしない（建物の輪郭線は別のスレッドで計算・飛行中は後回しの仕事を止める）。歩いて動いている間は、進んだ距離で時が進む（約4kmで1時間。前は都を縦に歩くと日が暮れた）。遠くへ向かうとき、距離とかかる時間を出す |
| 1.136 | 起動を軽く（続き）: 草の敷きの縁の当たりと、川・桂川までの距離の計算を速くした（形は前と同じ） |
| 1.135 | 起動を軽く（続き）: 東市・西市の人の輪郭線と屋根に止まる烏を、読み込みの後に少しずつ作る |
| 1.134 | 起動を軽く: 起動画面の写真は今の1枚と次の1枚だけ読む（前は20枚を最初に全部）。建築データ13分割を1本ずつでなく同時に読む |
| 1.133 | 堀川小路・西堀川小路を8丈に（川の両脇に約8mの道）。竜尾壇を北の回廊まで広げて地面まで下ろし、大極殿から左右へ回廊。楼門と大堂の額に名前。門のすぐ内の建物を離し、曹司の門の屋根と冠木をつなぐ。貴族の邸の敷地を坂に沿わせ、門と道の段差をなくす。二条大路の人通り・牛車・荷車・行商。急ブレーキに周りが驚き、踊る人は踊りの話、牛・猫・犬も拍に乗る。是行の「わたしの世の今日」と六壬の式盤（寺・神社でも今日を占う）。門前の説明役は役所の話から。頭の形が5通りに。材を楔で割る人（大鋸の木挽きを改めた）。星「帝」の説明を直した。楼門の二階を柱・板扉・連子窓・廻縁で組み直した。入口ページ（検索から来る人向け・設定資料集）を置き、そこからゲームへ。起動画面の写真を20枚に撮り直し（季節・雨・夜空と星座・劇画・市の会話など）、画像に重ねていた暗い幕を外した。空から見るオープニングで霞をかけない |
| 1.132 | 読み込みの間に別のタブへ移っても、「散策の準備中 92%」で止まらずに始まる。終わり近くの「まもなく、空から平安京へ降ります」は5秒だけ。自己検査が通ったときも自動でオープニングに入る |
| 1.131 | 最初の3回の散策で、歩き方・遊び方・頼みごとのヒントを1枚ずつ出す（スキップ可・☰「あそびかた」で見返せる）。内裏の門で止められたら次の一歩を示す。庶民街の街区ごとに角の大木・牛舎と子牛・のぞく窓・芋粥売り・外壁の色の混ざり、家の前の甕や桶・夕顔の垣・丸太の腰掛けと立ち話。戸口の人はロボを見つめ、子供は寄ってくる。東市・西市の塀と門を道に合わせた |
| 1.130 | 読み込みが終わると、そのままオープニングが始まる。ロボが座る（C）。腰の曲がった人は腰から上を曲げる。男は老人も烏帽子、髪は後頭部まで。薪炭の荷車の牛を牛車の牛と同じ形に。貴族の邸の築地塀の角と笠をつなぐ。京の外縁に林とまばらな木。鴨川の西岸に堤 |
| 1.129 | ドローンツアーが応天門から大極殿へまっすぐ入り、そのまま左回りへ移る。オープニングの上昇で画角を1度に寄せる。右京の湿地・藪では側溝が途中で途切れる。堀川の洗い女を橋の上から岸へ。堀川などの護岸を大小の石の乱積みに |
| 1.128 | 劇画の調整の窓を閉じられる（☰ から また出せる）、撮影モードでロボを消せる、段差の上を押すと段差の上へ歩く |
| 1.127 | 劇画の調整（線の太さ・トーンの種類・細かさ・明暗の強さ）と白黒の画面の飾り、堀川・西堀川・大宮川の石積みの護岸、道の真ん中に出ていた側溝を直す、木工の作業場の屋根を切妻に・中を歩ける |
| 1.126 | 日常の移ろい（薪割りの男と隣の女。日付だけで4段に進み、再訪で人の様子と薪の置き方が変わる） |
| 1.124〜1.125 | 劇画（☰ の「劇画にする」・白黒の墨線と網点）。墨線を細くし、瓦の目が見えるように |
| 1.118〜1.123 | 道の側溝、ついていく（V）、官司ごとの勤務者、暮らしの連鎖（炊事場・薪置場・鶏小屋など）、ホバーの急ブレーキ、庶民街区の小市と売り子、長屋の壁 |
| 1.100〜1.101 | 市の人が両足を揃えて跳ねずに歩く（脚を振る）・雨で帰る人が見えているうちに消えない／軒下の人が瞬間移動しない、止まっているとき牛車に道を譲って勝手に歩かない、ホバーで壁にぶつかるとドシンと鳴って頭の上を星が回りくらくらする、東西の市司の前に高札（「F：品書きを見る」で専売品と両市の品を読める） |
| 1.099 | 夜の火長の見回りが「火の用心」を言うように（朱雀大路で「宮城の門」と言う誤りを修正）・松明のまわりが明るく、ロボの頭の灯りが半径6mほど地面を照らす、ジャンプで足がビヨーンと伸びる、桜の花のかたまりが約2倍、羅城門の脇の壁が1.5倍、踊りの約1割がロボと同じ動き、陰陽寮の人に星のことを聞ける（晴れた夜は空に見えている星から・昼や雨は別の返事）、軽い頼まれごと6本（餅・夕日・田舎・古い話・約束・雨宿り） |
| 1.098 | 眺めるに低い定位置3つ（市のにぎわい・朝堂院の庭・朱雀門の前。人の高さに近い位置から眺め、音楽ONなら曲が流れる）、「祈る」ボタンでそのまま参拝、桜はボリュームのある丸い笠に・梅は枝が四方へ伸びて花が点々と、柳の遠目が塊にならないよう修正 |
| 1.097 | 日々の届け物（毎日3件・預かって届けるとなじみが増す）、火長の夜回り（松明を持った3人の組）、京職・坊長と頼みごと「籍をたずねる」、市井の暮らし（米・銭・布・出挙の一言と頼みごと2本）、頼みごと「辛酉の書状」、朱雀門を歩く地点に、ジャンプ（しゃがんでビヨーン・跳ぶ音）、ホバーの腕の揺れとアンテナのしなり、ホバーの音をキーンに |
| 1.096 | 時代の段（昌泰の変・延喜の世などで町の人の話・居場所・頼みごとが替わる）、節目の日の知らせ、たどるから延喜二十二年までの節目へ進める、歩く所で地図を京域／郊外に切り替え、夜の雨の波紋 |
| 1.095 | 雨（筋・道が濡れる・波紋・走って帰る人・軒下と門の下の雨宿り）、市の人もしぐさに応える、本当の暦（大の月・小の月・閏月・延喜二十二年まで）と節目の日へ進む、会話の追加（物売り・学生・唐物の商人など） |
| 1.094 | 発見（歩いて着いた所・○／44か所）と地図の見ている向き、今日の都、なじみ度、1人が話す量と知っている話を絞る |
| 1.093 | 上の帯を 歩く・眺める・たどる・聞き書き帳 に。眺める（ツアー・俯瞰・撮影・定位置）、たどる（都の年表・T） |
| 1.092 | 日録（一日ごとの短い記録と撮った絵） |
| 1.091 | 朱雀門を羅城門と同じ寸法に。翔鸞楼・栖鳳楼の後ろの屋根を薄く。上の操作を ☰ の横へ |
| 1.090 | 聞き書き帳（N）、歩いている間の地図は行った所・聞いた所だけ、最初の声かけ、メニューを ☰ に整理 |
| 1.089 | 翔鸞楼・栖鳳楼の上屋根を東西棟に戻し、後ろの身屋を一重の入母屋に。日ごとの天気 |
| 1.088 | 英語化（台詞の英訳・基礎の解説・README 英語版） |
| 1.085〜1.087 | 歩く気持ちよさ（速さ4段・坂・よける・足音・ざわめき）、しぐさと返し（踊りの輪・笛と笙・手を振り返す）、対話の選び方と選択肢4つまで、頼みごと8本 |
| 1.078〜1.084 | 暦の芯（昌泰三年・続きから再開）、季節で巡る空と草木、馬寮と厩、牛車の時刻表と旅、百鬼夜行、都の外の田と南の田、紙屋川 |
| 1.067〜1.077 | 屋根の様式（軒瓦・妻飾り・熨斗の棟・鬼瓦）、雲、竜尾壇の旗、会話の第一弾と物語5本、暮らしの営み |
| 1.058〜1.066 | 年代を昌泰三年（900）へ。ロボの動作・聞き込み・紅の値、身分・立場の軸、天気、瓦の凹凸 |
| 1.046〜1.057 | 住民台帳を正本に人物をまとめる。屋内（中納言家・大極殿）、言い伝えの深掘り、頼みごと3本と門籍、馬・犬・猫・牛車の作り直し |
| 1.030〜1.045 | 夜の暗さと篝火、柳・松・広葉樹・下草。町の人の吹き出しと台詞データ。屋内の前段 |
| 1.014〜1.029 | 五重塔・重層門・楼閣・寺の堂を三手先・垂木・隅反りで作り直す。光と影（太陽の影） |

## 内容

- 入口: `index.html`（入口ページ。ゲーム `heiankyo/`・設定資料集 `research/`・wiki `wiki/` へは別のタブで開く）
- `wiki/` は平安京wiki（試作・人・場所・頼みごと・ことば・年表の事典）。ゲームのデータから `平安京/wiki/build-wiki.js --pack` が組む（自動生成物・手で編集しない）。全ページの本文は `wiki-pages.js` に入っていて、`index.html#/ページ名` で開く（ファイル数約80）
- 3Dエンジン: `CadKit/index.html`（公開散策ではThree.jsと生成済みデータを使用）
- `heiankyo/terrain/heian-baked-assets*.js` は生成済み建築の焼き込みデータ（自動生成物・手で編集しない）
- `heiankyo/terrain/heian-lines.js` は台詞・対話・住人・解説・頼みごとのデータ（住人の部分は住民台帳からの生成物）
- `heiankyo/terrain/heian-lines-en.js` は台詞の英訳（英語表示のときだけ読み込む・自動生成物）
- `heiankyo/terrain/quests/` は台詞・頼みごとのパック（人物連作・派生クエスト・季節クエスト）。`manifest.js` に並べたものを読み込む。`heiankyo/terrain/heian-content.js` が読み込みと検査をする
- `heiankyo/terrain/heian-terrain-data.js`・`heian-water-data.js` は地形と水系

動作環境: WebGL2対応のブラウザ（PC・スマートフォン）。初回は約120MBのデータを読み込みます（通信は圧縮されて約25MB）。

## 新しい頼みごとの追加方法（作り手向け）

`CadKit/index.html`・会話エンジン・`heian-lines.js` を触らずに、ファイルを足すだけでゲームへ入ります（焼き込みも不要）。

1. パックを作る: `terrain/quests/名前.js`（1つの人物連作／テーマ／季節ごとに1ファイル）。形は `(function(){ const L=window.HEIAN_LINES; if(!L) return; … })();`
2. 頼みごとの名前を登録する: `L.quests.kuruma_oto={ja:'車のきしみ',en:'The Creaking Cart'};`（入口・札・聞き書き帳の名前になる。途中の印は登録しない）
3. 会話・一言を足す: `L.dialogs.push({…})`・`L.say.push({…})`（`L.talk`・`L.terms`・`L.chores` も同じ）。形は `平安京/会話データ_AI向け手引き.md` の3章
4. `terrain/quests/manifest.js` の `HEIAN_CONTENT_FILES` に `'quests/名前.js'` を1行足す（試験用は `HEIAN_CONTENT_DEV_FILES`。`?devpacks=1` のときだけ読む）
5. 検査する: `node 平安京/residents/lines_check.js --packs`（パックも含めて調べる。NG は直す）。ゲームを localhost か `?dev=1` で開くと、console に件数と指摘が出る

```
Loaded quest packs: 6      ← 読めたパックの数
Quests: 52  Dialogs: 920  Say: 1650
Warnings:                  ← [ファイル名] 場所: 内容（重複 id・存在しない char/at/who・行き先の無い選択肢・条件の書き方・頼みごと名の未登録 など）
```

- 1つのパックが壊れても（無い・構文エラー・実行時エラー）、そのパックの分だけ取り消して続ける。console に壊れたファイルが出る
- パックの順番に頼らない（各ファイルは足すだけ）。別の頼みごとの `q:` を条件に使うのは自由
- データに関数・`eval`・`script` を入れない（入れても取り除く）。足りない動きは本体に名前付きの処理を足してもらい、`@名前`・`set`・`gate` のようにデータから名前で呼ぶ
- 英語表示は `heian-lines-en.js` に原文→訳を足す（無い文は日本語のまま出る）

使える条件（`if`。`&` でつなぐ。スペースは入れない）:

| 書き方 | 意味 |
|---|---|
| `q:名前>=数`（`<=` `=` `<` `>` も可） | 頼みごとの状態（0未・1受けた・2〜手がかり・9済み）。`!q:` は使えない |
| `gate:名前` / `!gate:名前` | 門籍が開いた／開いていない |
| `done>=数` | 済ませた（9まで進めた）名前のある頼みごとの数 |
| `days:名前>=数` | その頼みごとの状態を上げて数日のち |
| `era` `from` `until` | 時代の段・日付（陰暦）で絞る |
| `marketDay` `rain` `night` `spring` など | 場・天気・時刻・季節の条件（語彙は手引きの4章） |

## 公開時の注意

`heian-pages/`は生成済みの公開一式です。入口、CadKit本体、地形、水系、台詞、焼き込み分割データを必ず同じcommitで一括更新してください。
一部だけを更新するとrelease keyが混在して起動できません。`BAKED_KEY.txt`は公開ファイルの世代確認に使います。

## 出典・クレジット

### 地形

出典: 国土地理院「地理院タイル」dem_png（数値標高モデル）を加工して作成。
測量法に基づく国土地理院長承認は不要な範囲（コンテンツ利用規約に基づく出典明示による利用）です。
- 地理院タイル一覧: https://maps.gsi.go.jp/development/ichiran.html
- 国土地理院コンテンツ利用規約: https://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html

### 河川

© OpenStreetMap contributors。現況の河川データを加工して使用しています（紙屋川など一部は当時の流れを推定して曲げています）。
データはOpen Database License（ODbL）1.0で提供されています。
- https://www.openstreetmap.org/copyright
- ODbL 1.0: https://opendatacommons.org/licenses/odbl/1-0/

### 建築・街区・暮らしの復元

史料・研究に基づく推定復元であり、学術的な確定案ではありません。
大内裏・内裏の配置は公開されている門名入り平面図や発掘調査の知見を参照した推定です。
牛車の屋形は『延喜式』の寸法、生きものの姿と毛色は『枕草子』『寛平御記』などの記述と在来種の実測をもとにした推定です。
京への街道は、地形の勾配から通れる道を解いて比定しました（史料の道筋とは別に求め、東海道は逢坂に一致）。
暦は昌泰三年の暦日（干支・大小の月）を天文計算で復元したものです。
人物と台詞の多くは創作で、史実に寄せた台詞には根拠を注記しています。英訳もこの区分を保っています。
現地の遺構・史跡の写真や図面をそのまま複製したものは含みません。

## 使用ライブラリ

いずれもCDNから読み込んでおり、本リポジトリにソースは同梱していません。

| ライブラリ | 用途 | ライセンス |
| --- | --- | --- |
| [three.js](https://threejs.org/) 0.160.0 | 3D描画 | MIT |
| [manifold-3d](https://github.com/elalish/manifold) 3.5.1 | 都市規模のソリッド演算 | Apache-2.0 |
| [opencascade.js](https://ocjs.org/) 2.0.0-beta | CAD形状カーネル（編集モードのみ） | LGPL-2.1（OCCTのライセンスに従う） |

木の葉・網代・檳榔毛・瓦などの模様、音楽と効果音はすべてプログラムで生成しており、外部の画像・音源は使っていません。

## アクセス解析

ページビューの計測に [GoatCounter](https://www.goatcounter.com/) を使用しています。GoatCounterは、同じ訪問の判定と国の推定のためにIPアドレスとUser-Agentを一時的に使いますが、それ自体は保存せず、ブラウザ・OS・国・言語・画面幅などの集計値を保存します（Cookieは使いません）。個人を特定する情報は保存していません。
また、表示完了・操作種別・可視時間帯などの匿名利用イベントをCloudflare Analytics Engineへ送信します。
Cloudflareへ送るイベントには、座標、自由記述、Cookie、localStorage、User-Agent、referrerを含めません（ランダムなセッションIDと滞在時間帯は含みます）。
Cloudflare側の蓄積データを公開ページから取得する機能はなく、閲覧には管理アカウントの権限が必要です。
日付・聞いた話・頼みごとの進み具合・日録と日録に並べる小さな絵は、閲覧しているブラウザの localStorage にだけ保存し、送信しません。

## 本コンテンツの権利

3Dモデル・復元データ・台詞・コード（CadKitおよび生成スクリプト）の著作権は井内育生に帰属します。
閲覧・授業や勉強会での紹介は自由です。
データやコードの再配布・改変物の公開・商用利用を希望する場合はご相談ください。

上記は本コンテンツ独自の部分についての条件です。
国土地理院およびOpenStreetMapに由来するデータ、各ライブラリには、それぞれの提供元の条件が適用されます。

---

<a id="english"></a>
# HakoniwaKit 平安京 (Heian-kyo)

A browser-based reconstruction of Heian-kyo as it may have looked in the year 900. You play a small tin robot that the townspeople call "the Iron Child": fly over the capital, walk its streets, and talk with the people who live there.

Live page: https://ino0190.github.io/heiankyo/en/

## A little background

- **Heian-kyo is today's Kyoto.** Emperor Kanmu founded it in 794, and it stayed the seat of the Emperor and the court for more than a thousand years.
- **The city was a grid.** Suzaku Avenue, about 84 m wide, ran north from Rajomon Gate to the Palace Precinct (Daidairi), where the Emperor lived and the government offices stood. Numbered east–west avenues (First Avenue to Ninth Avenue) crossed it.
- **The year is 900.** Nobles run the court; the two most powerful men are the Minister of the Left, Fujiwara no Tokihira, and the Minister of the Right, Sugawara no Michizane. In the first month of the next year Michizane will be exiled. Nobody in the game knows that yet.
- **Daily life.** Nobles travel in ox carts. Townspeople trade at the state-run East and West Markets, which open in alternate halves of the month. Court diviners (onmyoji) read the calendar for lucky and unlucky days and directions, and people detour or stay home to avoid bad luck.

## Getting started

1. Press "Start loading" (about 120 MB on the first visit, about 25 MB over the network; one to three minutes).
2. After the opening flight, choose "Walk the city" or "Drone tour" at the top.
3. While walking, click the ground. When someone near you speaks, press E to talk.

The calendar moves on with the days you play, and you continue where you left off. Each visit, the season, the market day, the moon, the weather and what people talk about are a little different.

## What you can do

- **Fly**: a continuous drone tour of 19 sites, and an overview you can tilt from street level to straight above, with cloud shadows drifting over the ground.
- **Walk**: start from any of 50 places. Four speeds: walk, long strides, hover, and boosts when you keep clicking far away — each with its own sound. Slopes slow you down, people step aside, and you step aside for ox carts. Footsteps change with sand, grass, wood, stone and water; crowds murmur, and the palace grows quieter toward the Emperor's residence. Walk inside a noble's mansion and the Great Hall of State (press F at the entrance).
- **A place to stay**: people lend the homeless robot a bed: the upper floor of Rajomon Gate, the porters' hut at the market, or a servants' row house in a noble mansion. Living at the hut, you can help unload bales at the riverbank; living at the row house, you can fly kites and trade riddles with the young lord. The robot's wind-up key keeps it from lying down, so at night press Z in your room: it sits still, a roommate winds it up, and it wakes at six.
- **Gestures**: Space jump, Q dance, B bow, F pray, G wave. People bow and wave back; on the great terrace, the whole line of officials bows in return. Keep dancing and people join in, a flute and a sho mouth organ start up, and the crowd keeps dancing for a while after you stop.
- **Talk**: about 1,300 one-liners and 160 short exchanges that change with place, hour, season, market day, weather and moon. Ask anyone about their life: their home province, the family back there, how they used to live and what worries them now; neighbours speak as one household. About 140 named residents, each with a daily routine, a rank, a household and a side in court politics. Ask "Do you know about …?" — some know only the rumor, some the truth, and some will send you to someone else. Read "What is …?" notes on people, events and basic Heian life, with sources where lines are based on history.
- **Notebook (N)**: who said what, when and where is noted automatically. Search a word to see different people's versions side by side — and where they disagree. Browse by person or place, and pin what matters. There is no quest list or progress counter.
- **Timeline (T)**: the capital's history from its founding in 794 to 926. The present year (900) is marked; later events are shown faded as "yet to come", since nobody here knows them yet. Open "More" for a short explanation, or jump to the place where it happened.
- **View**: the drone tour, the overview, photo mode and five fixed views (from the south, from the north, over the east and west halves, and straight down).
- **Discoveries**: walk up to a place to discover it (51 in all); the count is in the notebook's Places and Diary tabs. The drone and quick travel don't count. Places you have only heard of are faded on the map, and a fan on your marker shows which way you are looking.
- **Townspeople**: each person tells only so much a day, and more as you become familiar. Everyone knows different things; they send you elsewhere for tales of other places, and monks and learned people give the fuller explanations. "The city today" greets you with the weather and the market.
- **Days that change**: behind a row house, a woodcutter and his neighbour live through a few days that start when you first walk there — he chops, hurts his back and rests, she tidies his logs, he goes back to work. No errands or notices; only what you saw or heard goes into the notebook and diary.
- **Diary**: a tab in the notebook. Each day gets a few short sentences — the weather, where you walked, whom you met, what you heard, the moon that night — together with the pictures you took in photo mode.
- **Map**: while walking, the map shows only places you have visited or heard about (at first: Rajomon Gate, Suzaku Avenue and the two markets). The tour and overview show everything.
- **Errands**: a lost boy, love letters, a black market, the rising price of rouge, a dried-fish thief, a night watch, a kickball party, reviving the West Market and more. Finishing errands opens new ones and gets your name on the gate lists of the palace and the mansions.
- **Calendar and sky**: the real lunar calendar (long and short months, leap months) runs from 900 to 922; a day lasts 24 minutes (48 while walking), and time passes only while you play. From the Timeline you can move ahead to turning points (Tanabata, early winter, New Year's Eve, the eve of the Shotai Incident, the change of era, Tokihira's death). After the Shotai Incident of 901 the townspeople's talk, whereabouts and errands change with the times, and newcomers arrive in later years.
- **Rain**: thin streaks, roads that slowly darken, ripples in puddles; people run home or shelter under eaves and gates, market sellers step back under their roofs. Plum, cherry, new leaves, autumn colors and bare trees follow the months; the moon waxes and wanes; Chinese constellations can be shown. Sun, clouds and rain; at night only bonfires, lamps and torches light the streets, and on rare unlucky nights a parade of spirits crosses the Nijo–Omiya crossroads.
- **The city**: Suzaku Avenue and the street grid, the Palace Precinct (the Hall of State with Otenmon Gate and its towers, the Banquet Hall, the Inner Palace, 40 office compounds, the stables), the temples Toji and Saiji with their pagodas, the Korokan guesthouses, the Shinsen-en garden, nobles' mansions with cart sheds and stables, townhouses and market stalls; outside the city, 22 shrines and temples, river beds, rice fields laid out on the old land grid, Ogura Pond, and the roads to the capital traced from the terrain.
- **City life**: nobles' ox carts leave their sheds on a timetable, travelers and carts come and go at the city gates, and people wash, cook, draw water, sweep and gossip. Oxen, horses, dogs, cats and birds.
- Photo mode and video recording (R), light-and-shadow or line drawing, music and sound effects on/off, speech on/off, Japanese/English (all lines are translated in English mode, with extra background notes), and touch controls on phones.

## Controls

| Action | PC | Phone |
| --- | --- | --- |
| Walk / change destination | Click the ground / WASD | Tap the ground |
| Look around | Left-drag | Drag |
| Talk / choose / close | E / 1–4 / Esc | Tap a person |
| Jump, dance, bow, pray, wave | Space, Q, B, F, G | Action buttons, bottom right |
| Enter a building / worship | F | Action button |
| Skip ahead | Shift | — |
| Stop walking | Esc | The walk button at the top |
| Notebook | N | "Notebook" at the top |
| Timeline | T | "Timeline" at the top |
| Record video | R | — |

Requirements: a WebGL2 browser on PC or smartphone.

## Sources and credits

- **Terrain**: processed from the Geospatial Information Authority of Japan (GSI) elevation tiles (dem_png). https://maps.gsi.go.jp/development/ichiran.html
- **Rivers**: © OpenStreetMap contributors, Open Database License (ODbL) 1.0. https://www.openstreetmap.org/copyright. Some streams are bent to an estimated older course.
- **Buildings, blocks and daily life**: an estimated reconstruction based on historical sources and research, not a settled academic model. The palace layout follows published plans and excavation findings; the roads to the capital were solved from terrain slopes (the Tokaido came out through the Osaka pass, as in history); the calendar of the year 900 was reconstructed by astronomical calculation. Most characters and lines are fictional; lines based on history carry a note on their source, and the English translation keeps that distinction.
- **Libraries** (loaded from CDNs): three.js 0.160.0 (MIT), manifold-3d 3.5.1 (Apache-2.0), opencascade.js 2.0.0-beta (LGPL-2.1, editor mode only). All textures, music and sound effects are generated by code.
- **Analytics**: page views via GoatCounter (it briefly uses your IP address and User-Agent to tell visits apart and estimate your country, does not store them, and keeps only aggregate browser/OS/country/language/screen-width counts; no cookies), and anonymous usage events (load completed, kind of action, time band, a random session ID) via Cloudflare Analytics Engine. Those events contain no coordinates, free text, cookies, localStorage, User-Agent or referrer. No personally identifying information is stored. The date, what you have heard, your errands and your diary (with small copies of your photos) are stored only in your browser's localStorage.

## Rights

The 3D models, reconstruction data, lines and code (CadKit and its scripts) are © Ikuo Inouchi. Viewing and introducing the work in classes and study groups is free. Please ask before redistributing data or code, publishing modified versions, or using it commercially. Data from GSI and OpenStreetMap and each library remain under their own terms.
