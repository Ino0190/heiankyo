// 台詞・頼みごとパックの一覧（2026-10-07）。ここに並べたファイルを、heian-lines.js を読んだあとに上から順に読む。
// 新しい頼みごと・人物連作・季節クエストは、このフォルダにファイルを足して、下の HEIAN_CONTENT_FILES に1行書くだけ。
// CadKit/index.html・会話エンジン・heian-lines.js は触らない。焼き込み（bake）も要らない。
// ・書き方は 平安京/会話データ_AI向け手引き.md の「新しい頼みごとの追加方法」と、heian-pages/README.md を見る
// ・ファイルは quests/〜.js の形だけ（.. や manifest.js 自身は不可）。同じファイルを2回書いても1回しか読まない
// ・パック同士は読む順に頼らない（各ファイルは window.HEIAN_LINES へ足すだけ）。別の頼みごとの q: を条件に使うのは自由
// ・1つが壊れても（無い・構文エラー・実行時エラー）そのパックの分だけ取り消して続ける。console に「どのファイルか」が出る
// ・検査: node 平安京/residents/lines_check.js（パックも含めて調べる）／ゲームを localhost や ?dev=1 で開くと console に件数と指摘が出る
window.HEIAN_CONTENT_FILES=[
 // 'quests/students.js',          // 学生連作（文麻呂・広人・学生同士の派生）
 // 'quests/iyo-guard.js',         // 真雄編・伊予の采女との関係・牛車関連
 // 'quests/ban-family.js',        // 伴吉継・伴真成・伴若成
 // 'quests/relationships.js',     // 人物横断（誰と誰が知り合いか）
 // 'quests/seasonal-autumn.js',   // 重陽・紅葉・初寒
 'quests/facilities-kamiyain.js',    // 紙屋院（paper・dry・carry）＋「乾かない一枚」（2026-10-10）
 'quests/facilities-mokumachi.js',   // 木工町（carry・saw）
 'quests/life-chain.js',             // 暮らしの連鎖 第1段（chop・stack・unload・ash・vend・cook・sweep）2026-10-14
 'quests/facilities-shurishiki.js',  // 修理職町（hammer・raft）
 'quests/facilities-seyakuin.js',    // 施薬院（herb・cook）
 'quests/facilities-hidenin.js',     // 悲田院（wait・sit・sweep）
 'quests/facilities-offices.js',     // 官司の戸口の間の勤務者（図書寮・木工寮・典薬寮・陰陽寮・神祇官・左京職）＋「紙が一束足りない」（2026-10-11）
 'quests/serial-makiwari.js',        // 日常連作「薪割りの男と隣の女」（L.serials・日付だけで4段に進む）2026-10-15
 'quests/npc-small-confidences.js',  // 小さな本音と数日後の余韻（既存人物4人・5話）2026-10-24 井内さん作・2026-10-25 取り込み
 'quests/serial-hirotari.js',        // 連作「お前の席」広足編（羅城門の下の流れ者・状態は heian-hirotari-v1）2026-10-27 井内さん作・2026-10-13 取り込み
 'quests/shop-life.js',             // 市の売り子の暮らし（店の者・運び手。身の上を聞くと話す。仕入れ先は将来の頼みごとの材料・index.html heianProfilePieces）2026-10-28
 'quests/tutorial-cart-mud.js',     // はじめての頼みごと「泥にはまった牛車」（犬丸・朱雀門の西・L.setpieces＝置き物と出来事の最初の例・礼に犬丸の竹笛＝笛が吹けるようになる）2026-10-29 井内さん作・取り込み
 'quests/tanomi-kurashi.js',         // 暮らしの頼みごと（ドブの石・部屋に飾る）。石・礼・飾り棚は index.html の heianTanomi 2026-10-13
 'quests/robot-maru.js',            // まる（鞠の童）が歩いているときだけ出る町の人の一言6行（条件 robotMaru＝index.html の heianSpeechCond）2026-10-30 井内さん承認
 'quests/rajo-loft.js',             // 羅城門の楼上を訪れる人（夜の老婆・昼の老人。場所タグ interior_yado_rajo。出る日・刻は index.html の heianLoft）2026-10-30 井内さんの改修指示書
 'quests/serial-waka-adventure.js',  // 連作「凧より遠くへ」若君編（居候先の凧揚げの若君・状態は heian-waka-adventure-v1・接続は index.html の heianWakaAdv）2026-10-27 井内さん作・2026-10-13 取り込み
 'quests/setsuwa-hojo.js',      // 放生の亀と蟹（霊異記 上7・中12）。蓮観→東市→鴨川→賢心 2026-11-06
 'quests/setsuwa-hida.js',      // 飛騨の工の語り草（今昔24-5）。国光の厨子 2026-11-06
 'quests/setsuwa-heichu.js',    // 平中の噂と返し文（大和103・今昔30-1）。平中本人は出さない 2026-11-06
 'quests/setsuwa-karaneko.js',  // 法皇の唐猫（寛平御記）。neko_na の後に小菊が聞きたがる 2026-11-06
 'quests/lesson-rajomon.js',     // 練習の作り直し（羅城門の南120m・竹丸が話しかける・歩く/撮る/手伝う/笛の4章）。本体 HEIAN_LESSON と一緒に 2026-11-07
 'quests/talk-more.js',         // 会話のもう1往復（相づち・問い返し・土蜘蛛の入口・逆に何か教えてくれ）。本体 heianTalkMore* と一緒に 2026-11-07
 'quests/ach-icons.js',         // 実績一覧のアイコン46個（window.HEIAN_ACH_ICONS）。本体 heianAchRender と一緒に 2026-11-07
 'quests/rei-gifts.js',       // 頼みごとの礼の品（L.reiGifts＝頼みごとid→{ja,en,from,note}）。本体 heianReiGift と一緒に 2026-11-07
];
// 試験用。ゲームを ?devpacks=1 で開いたときだけ読む（本番の人は読まない）。データだけで追加できることの確認用
window.HEIAN_CONTENT_DEV_FILES=[
 'quests/test-data-driven.js',
];
