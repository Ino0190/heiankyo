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
];
// 試験用。ゲームを ?devpacks=1 で開いたときだけ読む（本番の人は読まない）。データだけで追加できることの確認用
window.HEIAN_CONTENT_DEV_FILES=[
 'quests/test-data-driven.js',
];
