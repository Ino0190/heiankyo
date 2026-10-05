# HakoniwaKit 平安京

[English follows the Japanese.](#english)

昌泰三年（900）の平安京を、国土地理院の数値標高モデルと現況の河川データの上に推定復元し、ブラウザだけで歩けるようにしたものです。
造営から約百年。右大臣・菅原道真が左遷される前の年の都を、ブリキのロボ「鉄の童」になって空から巡り、地上を歩き、町の人と話せます。

公開ページ: https://ino0190.github.io/heiankyo/heiankyo/（英語版は末尾に `?lang=en`）

## はじめに

1. 起動画面で「読み込みを開始」を押す（初回は約110MB。1〜3分）
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

### しぐさと町の人の返し
- Space ジャンプ（速いほど遠く高く）・Q 踊る・B お辞儀・F 祈る（社殿・堂の前では参拝）・G 手を振る
- お辞儀や手振りには近くの人が返す。竜尾壇の上でお辞儀すると、並んでいる官人が皆お辞儀を返す
- 続けて踊ると、3回目あたりから周りの人がまばらに加わり、踊り方は3通り。興が乗ると龍笛と笙の囃子方が出て、ロボが止まってもしばらく踊り続ける。踊りの輪の中では、町の人の話も踊りのことになる
- 夜はロボの目が光る

### 都の人と話す
- 近くの人の吹き出しに台詞が出る（一言約1,300・掛け合い約160）。場所・刻・季節・市の日・天気・月齢で出る話が変わる
- E で話しかけると、身の上・近ごろ見たもの・望み・知り合いのこと・土地の言い伝えを聞ける。選択肢は一度に4つまで
- 名前のある住人は100人あまり。それぞれに一日の居場所と仕事があり、身分・仕える家・右大臣方/左大臣方の立場で話し方が変わる
- 聞き込み: 「〇〇のこと、知ってる？」と話題を振ると、人によって知っている深さ（噂・事情・真相）が違い、知らない人は知っていそうな人を教える。紹介された人へはそのまま歩いて会いに行ける。聞いた深さは手元に記録される
- 聞き書き帳（N・上の「聞き書き帳」）: 誰が・いつ・どこで・何と言ったかが自動で残る。語で探すと同じ話題の別の人の話が並び、食い違いが見える。人物・場所ごとにも見られ、📌で留められる。頼みごとの一覧や進み具合は出さない
- 日録（聞き書き帳の「日録」）: 一日ごとに、天気・歩いた所・会った人・聞いた話・夜の月を短い文で書く。撮影モードで撮った絵もその日に並ぶ
- たどる（T・上の「たどる」）: 遷都（794）から延長（926）までの都の年表。いま（昌泰三年）に印があり、これより後の出来事は「これから先」として薄く出る。「くわしく」で解説を読み、場所のある出来事はそこへ移れる
- 眺める（上の「眺める」）: ドローンツアー・俯瞰・撮影モードと、5つの定位置（南から・北から・左京上空・右京上空・真上）
- 地図: 歩いている間は、行った所と話で聞いた所だけが出る（最初は羅城門・朱雀大路・東市・西市）。ツアーと俯瞰では全部
- 言い伝えや出来事の語（浄蔵・御霊会・応天門の変など）が出たら「〇〇とは？」で解説を読み、話の地点へ歩いて行ける。史実に寄せた話には出典を添える
- 頼みごと: 迷子・恋文・闇市・紅の値・干物盗人・塩の買い付け・西寺の屋根・常夏の文・恋敵の足止め・夜行の知らせ・夜の女車の供・来ない魚売り・右京の夜番・羅城門の柱・鞠の会・西市の立て直し・帰るか残るか など。済ませた数に応じて、次の頼みが出てくる
- 門籍: 頼みごとを済ませると、内裏・後宮の廊・貴族の邸の中へ入れるようになる

### 暦・時刻・空
- 昌泰三年の暦（二月二十五日から）。1日は実時間24分。閉じている間も日付は進み、続きから始まる
- 東市と西市は半月交替で開き、午の刻に開いて日の入り前に閉まる
- 季節で太陽の道・日の出日の入り・星空が変わり、草木は梅・桜・若葉・紅葉・枯れ木と移る。月は満ち欠けし、星官（中国式の星座）の線と名前も出せる
- 天気（晴・曇・雨）。夜は篝火と灯明、牛車の供の松明だけが明るい。忌夜行日の丑の刻には、二条大宮の辻にまれに百鬼夜行が出る

### 都の姿
- 朱雀大路（幅約84m）と条坊の街路、坊城と坊門、堀川・西堀川、側溝と柳の並木
- 大内裏: 朝堂院（大極殿・竜尾壇・十二堂・応天門・翔鸞楼・栖鳳楼・白虎楼・蒼龍楼）、豊楽院、内裏（紫宸殿・清涼殿・後宮）、曹司40区画、馬寮、宴の松原
- 東寺・西寺（五重塔・金堂・講堂）、東西の鴻臚館、神泉苑、朱雀院、河原院、貴族の寝殿造（車宿・厩つき）、官人の家、庶民の家と市の露店
- 郊外: 寺社22か所、鴨川・桂川の河原、都の外の条里の田（長地・半折・棚田・藪・林・葦原）、巨椋池、地形から比定した京への街道（東海道は逢坂へ）
- 屋根は三手先・垂木・隅反り・熨斗瓦の棟・鬼瓦まで作り込み、遠景は軽くしてある

### 暮らし
- 公卿の牛車は時刻表どおりに車宿を出て門から出仕し、夕方に帰る。都の口や市から旅の牛車・荷車・検非違使の騎馬・行商が出入りする
- 市の売り子と客、洗い物・炊事・水汲み・庭掃き・厩の世話・子どもの遊び・世間話、東寺・西寺の僧、宮城門の門衛、蹴鞠、後宮の女官、竜尾壇の旗
- 牛・馬・犬・猫、空を飛ぶ鳶・烏・燕、池の鷺、庶民の家の鶏と雀

### そのほか
- 撮影モード（画面の飾りを消して PNG を保存）と録画（R）
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
| 1.14〜1.29 | 五重塔・重層門・楼閣・寺の堂を三手先・垂木・隅反りで作り直す。光と影（太陽の影） |
| 1.30〜1.45 | 夜の暗さと篝火、柳・松・広葉樹・下草。町の人の吹き出しと台詞データ。屋内の前段 |
| 1.46〜1.57 | 住民台帳を正本に人物をまとめる。屋内（中納言家・大極殿）、言い伝えの深掘り、頼みごと3本と門籍、馬・犬・猫・牛車の作り直し |
| 1.58〜1.66 | 年代を昌泰三年（900）へ。ロボの動作・聞き込み・紅の値、身分・立場の軸、天気、瓦の凹凸 |
| 1.67〜1.77 | 屋根の様式（軒瓦・妻飾り・熨斗の棟・鬼瓦）、雲、竜尾壇の旗、会話の第一弾と物語5本、暮らしの営み |
| 1.78〜1.84 | 暦の芯（昌泰三年・続きから再開）、季節で巡る空と草木、馬寮と厩、牛車の時刻表と旅、百鬼夜行、都の外の田と南の田、紙屋川 |
| 1.85〜1.87 | 歩く気持ちよさ（速さ4段・坂・よける・足音・ざわめき）、しぐさと返し（踊りの輪・笛と笙・手を振り返す）、対話の選び方と選択肢4つまで、頼みごと8本 |
| 1.88 | 英語化（台詞の英訳・基礎の解説・README 英語版） |
| 1.89 | 翔鸞楼・栖鳳楼の上屋根を東西棟に戻し、後ろの身屋を一重の入母屋に。日ごとの天気 |
| 1.90 | 聞き書き帳（N）、歩いている間の地図は行った所・聞いた所だけ、最初の声かけ、メニューを ☰ に整理 |
| 1.91 | 朱雀門を羅城門と同じ寸法に。翔鸞楼・栖鳳楼の後ろの屋根を薄く。上の操作を ☰ の横へ |
| 1.92 | 日録（一日ごとの短い記録と撮った絵） |
| 1.93 | 上の帯を 歩く・眺める・たどる・聞き書き帳 に。眺める（ツアー・俯瞰・撮影・定位置）、たどる（都の年表・T） |

## 内容

- 入口: `index.html`（`heiankyo/index.html` へリダイレクト）
- 3Dエンジン: `CadKit/index.html`（公開散策ではThree.jsと生成済みデータを使用）
- `heiankyo/terrain/heian-baked-assets*.js` は生成済み建築の焼き込みデータ（自動生成物・手で編集しない）
- `heiankyo/terrain/heian-lines.js` は台詞・対話・住人・解説・頼みごとのデータ（住人の部分は住民台帳からの生成物）
- `heiankyo/terrain/heian-lines-en.js` は台詞の英訳（英語表示のときだけ読み込む・自動生成物）
- `heiankyo/terrain/heian-terrain-data.js`・`heian-water-data.js` は地形と水系

動作環境: WebGL2対応のブラウザ（PC・スマートフォン）。初回は約110MBのデータを読み込みます。

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

ページビューの計測に [GoatCounter](https://www.goatcounter.com/) を使用しています。
また、表示完了・操作種別・可視時間帯などの匿名利用イベントをCloudflare Analytics Engineへ送信します。
アプリから座標、自由記述、Cookie、localStorage、User-Agent、referrerは送信しません。
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

Live page: https://ino0190.github.io/heiankyo/heiankyo/?lang=en

## A little background

- **Heian-kyo is today's Kyoto.** Emperor Kanmu founded it in 794, and it stayed the seat of the Emperor and the court for more than a thousand years.
- **The city was a grid.** Suzaku Avenue, about 84 m wide, ran north from Rajomon Gate to the Palace Precinct (Daidairi), where the Emperor lived and the government offices stood. Numbered east–west avenues (First Avenue to Ninth Avenue) crossed it.
- **The year is 900.** Nobles run the court; the two most powerful men are the Minister of the Left, Fujiwara no Tokihira, and the Minister of the Right, Sugawara no Michizane. In the first month of the next year Michizane will be exiled. Nobody in the game knows that yet.
- **Daily life.** Nobles travel in ox carts. Townspeople trade at the state-run East and West Markets, which open in alternate halves of the month. Court diviners (onmyoji) read the calendar for lucky and unlucky days and directions, and people detour or stay home to avoid bad luck.

## Getting started

1. Press "Start loading" (about 110 MB on the first visit; one to three minutes).
2. After the opening flight, choose "Walk the city" or "Drone tour" at the top.
3. While walking, click the ground. When someone near you speaks, press E to talk.

The calendar moves on with the days you play, and you continue where you left off. Each visit, the season, the market day, the moon, the weather and what people talk about are a little different.

## What you can do

- **Fly**: a continuous drone tour of 19 sites, and an overview you can tilt from street level to straight above, with cloud shadows drifting over the ground.
- **Walk**: start from any of 50 places. Four speeds: walk, long strides, hover, and boosts when you keep clicking far away — each with its own sound. Slopes slow you down, people step aside, and you step aside for ox carts. Footsteps change with sand, grass, wood, stone and water; crowds murmur, and the palace grows quieter toward the Emperor's residence. Walk inside a noble's mansion and the Great Hall of State (press F at the entrance).
- **Gestures**: Space jump, Q dance, B bow, F pray, G wave. People bow and wave back; on the great terrace, the whole line of officials bows in return. Keep dancing and people join in, a flute and a sho mouth organ start up, and the crowd keeps dancing for a while after you stop.
- **Talk**: about 1,300 one-liners and 160 short exchanges that change with place, hour, season, market day, weather and moon. More than 100 named residents, each with a daily routine, a rank, a household and a side in court politics. Ask "Do you know about …?" — some know only the rumor, some the truth, and some will send you to someone else. Read "What is …?" notes on people, events and basic Heian life, with sources where lines are based on history.
- **Notebook (N)**: who said what, when and where is noted automatically. Search a word to see different people's versions side by side — and where they disagree. Browse by person or place, and pin what matters. There is no quest list or progress counter.
- **Timeline (T)**: the capital's history from its founding in 794 to 926. The present year (900) is marked; later events are shown faded as "yet to come", since nobody here knows them yet. Open "More" for a short explanation, or jump to the place where it happened.
- **View**: the drone tour, the overview, photo mode and five fixed views (from the south, from the north, over the east and west halves, and straight down).
- **Diary**: a tab in the notebook. Each day gets a few short sentences — the weather, where you walked, whom you met, what you heard, the moon that night — together with the pictures you took in photo mode.
- **Map**: while walking, the map shows only places you have visited or heard about (at first: Rajomon Gate, Suzaku Avenue and the two markets). The tour and overview show everything.
- **Errands**: a lost boy, love letters, a black market, the rising price of rouge, a dried-fish thief, a night watch, a kickball party, reviving the West Market and more. Finishing errands opens new ones and gets your name on the gate lists of the palace and the mansions.
- **Calendar and sky**: the reconstructed calendar of the year 900 (a day lasts 24 minutes). Plum, cherry, new leaves, autumn colors and bare trees follow the months; the moon waxes and wanes; Chinese constellations can be shown. Sun, clouds and rain; at night only bonfires, lamps and torches light the streets, and on rare unlucky nights a parade of spirits crosses the Nijo–Omiya crossroads.
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
- **Analytics**: page views via GoatCounter, and anonymous usage events (load completed, kind of action, time band) via Cloudflare Analytics Engine. The app sends no coordinates, free text, cookies, localStorage, User-Agent or referrer. The date, what you have heard, your errands and your diary (with small copies of your photos) are stored only in your browser's localStorage.

## Rights

The 3D models, reconstruction data, lines and code (CadKit and its scripts) are © Ikuo Inouchi. Viewing and introducing the work in classes and study groups is free. Please ask before redistributing data or code, publishing modified versions, or using it commercially. Data from GSI and OpenStreetMap and each library remain under their own terms.
