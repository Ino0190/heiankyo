// 平安京の施設・敷地・移動地点の配置manifest（schema 1）。値だけを持ち、関数は入れない。
// x/zとanchorは配置。w/d・門・kigi等は建築形状にも関わり、component manifestのsiteShapeで照合する。
window.HEIAN_SITES={
  "schemaVersion": 1,
  "landmarks": {
    "daidairi": {
      "name": "大内裏",
      "x": 0,
      "z": 0,
      "w": 11271.6,
      "d": 13800,
      "grade": "slope"
    },
    "toji": {
      "name": "東寺",
      "x": 4363.2,
      "z": 42504.7,
      "w": 2545.2,
      "d": 5127
    },
    "saiji": {
      "name": "西寺",
      "x": -4363.2,
      "z": 42504.7,
      "w": 2545.2,
      "d": 5127
    },
    "rajomon": {
      "name": "羅城門",
      "x": 0,
      "z": 45431.8,
      "w": 420,
      "d": 180
    },
    "shinsenen": {
      "name": "神泉苑",
      "x": 4363.2,
      "z": 9281.53,
      "w": 2545.2,
      "d": 3732.86
    },
    "daigakuryo": {
      "name": "大学寮",
      "x": 1696.8,
      "z": 8639.4,
      "w": 2545.2,
      "d": 2448.6,
      "gateSide": "S"
    },
    "kokuso": {
      "name": "穀倉院",
      "x": -1696.8,
      "z": 8639.4,
      "w": 2545.2,
      "d": 2448.6,
      "gateSide": "E"
    },
    "ukyoShiki": {
      "name": "右京職",
      "x": -1030.2,
      "z": 10565.85,
      "w": 1212,
      "d": 1164.3,
      "gateSide": "E"
    },
    "sakyoShiki": {
      "name": "左京職",
      "x": 1030.2,
      "z": 10565.85,
      "w": 1212,
      "d": 1164.3,
      "gateSide": "W"
    },
    "kobunin": {
      "name": "弘文院",
      "x": 2363.4,
      "z": 10565.85,
      "w": 1212,
      "d": 1164.3,
      "gateSide": "S"
    },
    "shogakuin": {
      "name": "奨学院",
      "x": 1030.2,
      "z": 11850.15,
      "w": 1212,
      "d": 1164.3,
      "gateSide": "S"
    },
    "kangakuin": {
      "name": "勧学院",
      "x": 2363.4,
      "z": 11850.15,
      "w": 1212,
      "d": 1164.3,
      "gateSide": "S"
    },
    "kamiyain": {
      "name": "紙屋院",
      "x": -9317.4,
      "z": -663,
      "w": 1181.7,
      "d": 1215,
      "gateX": 330,
      "gateSide": "S",
      "riverGates": [
        [
          -430,
          60,
          "gate"
        ],
        [
          -170,
          26,
          "water"
        ],
        [
          250,
          60,
          "gate"
        ],
        [
          470,
          60,
          "gate"
        ]
      ],
      "certainty": "所在は確かでない。一町を塀で囲み、川側（東）に大内裏の内膳司の建物を写し、西を干し場と蔵にした推定"
    },
    "seyakuin": {
      "name": "施薬院",
      "x": 12060,
      "z": 43156,
      "w": 1213,
      "d": 1195,
      "gateSide": "S",
      "certainty": "左京九条三坊の辺りは推定。一町を塀で囲み、中央に大内裏の中和院の建物を写し、西に薬草園、東に蔵を置いた推定"
    },
    "hideninUkyo": {
      "name": "悲田院（右京）",
      "x": -12059.85,
      "z": 44470.85,
      "w": 1212.9,
      "d": 1192,
      "gateSide": "S",
      "certainty": "右京九条の辺りは推定。一町を塀で囲み、西寺の倉垣院（堂1・倉3）をそのまま写した推定"
    },
    "hideninSakyo": {
      "name": "悲田院（左京）",
      "x": 12059.85,
      "z": 44470.85,
      "w": 1212.9,
      "d": 1192,
      "gateSide": "S",
      "certainty": "左京九条の辺りは推定（右京の悲田院のほぼ鏡映し）。一町を塀で囲み、西寺の倉垣院（堂1・倉3）をそのまま写した推定"
    },
    "eastKorokan": {
      "name": "東鴻臚館",
      "x": 1030.2,
      "z": 32994,
      "w": 1212,
      "d": 2503.5,
      "gateSide": "S",
      "certainty": "七条・朱雀両側は確定、1町×南北2町と南向き左右対称平面は推定"
    },
    "westKorokan": {
      "name": "西鴻臚館",
      "x": -1030.2,
      "z": 32994,
      "w": 1212,
      "d": 2503.5,
      "gateSide": "S",
      "certainty": "七条・朱雀両側は確定、1町×南北2町と南向き左右対称平面は推定"
    },
    "eastMarket": {
      "name": "東市",
      "x": 7284.6,
      "z": 32994,
      "w": 2400,
      "d": 2400
    },
    "westMarket": {
      "name": "西市",
      "x": -7284.6,
      "z": 32994,
      "w": 2400,
      "d": 2400
    },
    "daishogun": {
      "name": "大将軍堂",
      "x": -6606,
      "z": -6740,
      "w": 500,
      "d": 500
    },
    "gojoTenjin": {
      "name": "五條天神",
      "x": 10773,
      "z": 22924,
      "w": 860,
      "d": 860,
      "kigi": 5
    },
    "ichihime": {
      "name": "市比賣社",
      "x": 8314.6,
      "z": 31994,
      "w": 280,
      "d": 300,
      "kigi": 4,
      "market": "eastMarket"
    },
    "yodotsu": {
      "name": "淀津",
      "x": -700,
      "z": 101500,
      "w": 700,
      "d": 520
    },
    "suzakuin": {
      "name": "朱雀院",
      "x": -1696.8,
      "z": 15320.2,
      "w": 2545.2,
      "d": 5199.4,
      "certainty": "位置と8町規模は史料準拠、殿舎平面・池形・門位置は推定"
    },
    "tobatsu": {
      "name": "鳥羽津",
      "x": 1280,
      "z": 72300,
      "w": 800,
      "d": 560
    }
  },
  "officialCompoundIds": [
    "daigakuryo",
    "kokuso",
    "ukyoShiki",
    "sakyoShiki",
    "kobunin",
    "shogakuin",
    "kangakuin",
    "kamiyain",
    "seyakuin",
    "hideninUkyo",
    "hideninSakyo"
  ],
  "estates": [
    {
      "id": "reizeiin",
      "locationId": "reizeiin",
      "name": "冷然院",
      "cx": 7272,
      "cz": 5627,
      "choX": 2,
      "choZ": 2,
      "layout": [
        {
          "v": 1,
          "dx": -0.25,
          "dz": 0.06
        },
        {
          "v": 2,
          "dx": 0.25,
          "dz": -0.03
        }
      ],
      "resolved": {
        "x": 7241.7,
        "z": 5674.25,
        "w": 2484.6,
        "d": 2451.5
      }
    },
    {
      "id": "kayanoin",
      "locationId": "kayanoin",
      "name": "賀陽院",
      "cx": 9272,
      "cz": 2961,
      "choX": 1,
      "choZ": 2,
      "v": 2,
      "resolved": {
        "x": 9317.55,
        "z": 2864,
        "w": 1182.3,
        "d": 2563
      }
    },
    {
      "id": "yozeiin",
      "locationId": "yozeiin",
      "name": "陽成院",
      "cx": 9272,
      "cz": 6294,
      "choX": 1,
      "choZ": 1,
      "v": 2,
      "resolved": {
        "x": 9317.55,
        "z": 6317.125,
        "w": 1182.3,
        "d": 1165.75
      }
    },
    {
      "id": "machijiri",
      "locationId": "machijiri",
      "name": "町尻殿",
      "cx": 10605,
      "cz": 6294,
      "choX": 1,
      "choZ": 1,
      "v": 2,
      "resolved": {
        "x": 10619.85,
        "z": 6317.125,
        "w": 1182.3,
        "d": 1165.75
      }
    },
    {
      "id": "horikawain",
      "locationId": "horikawain",
      "name": "堀河院",
      "cx": 9272,
      "cz": 8688,
      "choX": 1,
      "choZ": 2,
      "v": 1,
      "resolved": {
        "x": 9317.55,
        "z": 8650.857142857143,
        "w": 1182.3,
        "d": 2471.5142857142855
      }
    },
    {
      "id": "kanin",
      "locationId": "kanin",
      "name": "閑院",
      "cx": 10605,
      "cz": 8688,
      "choX": 1,
      "choZ": 2,
      "v": 2,
      "resolved": {
        "x": 10619.85,
        "z": 8650.857142857143,
        "w": 1182.3,
        "d": 2471.5142857142855
      }
    },
    {
      "id": "nijoKyu",
      "locationId": "nijoKyu",
      "name": "二条宮",
      "cx": 12059,
      "cz": 8021,
      "choX": 1,
      "choZ": 1,
      "v": 1,
      "resolved": {
        "x": 12059.85,
        "z": 8002.978571428572,
        "w": 1212.9,
        "d": 1175.7571428571428
      }
    },
    {
      "id": "higashiSanjo",
      "locationId": "higashiSanjo",
      "name": "東三条殿",
      "cx": 12059,
      "cz": 9354,
      "choX": 1,
      "choZ": 1,
      "v": 2,
      "resolved": {
        "x": 12059.85,
        "z": 9298.735714285714,
        "w": 1212.9,
        "d": 1175.7571428571428
      }
    },
    {
      "id": "koNijoin",
      "locationId": "koNijoin",
      "name": "小二条院",
      "cx": 14726,
      "cz": 8021,
      "choX": 1,
      "choZ": 1,
      "v": 1,
      "resolved": {
        "x": 14725.65,
        "z": 8002.978571428572,
        "w": 1212.9,
        "d": 1175.7571428571428
      }
    },
    {
      "id": "yamabuki",
      "locationId": "yamabuki",
      "name": "山吹殿",
      "cx": 16059,
      "cz": 9354,
      "choX": 1,
      "choZ": 1,
      "v": 1,
      "resolved": {
        "x": 16058.55,
        "z": 9298.735714285714,
        "w": 1212.9,
        "d": 1175.7571428571428
      }
    },
    {
      "id": "sugawaraIn",
      "locationId": "sugawaraIn",
      "name": "菅原院（菅原道真旧宅）",
      "cx": 14726,
      "cz": 2961,
      "choX": 1,
      "choZ": 1,
      "v": 1,
      "person": "菅原道真",
      "certainty": "○",
      "resolved": {
        "x": 14725.65,
        "z": 3534.75,
        "w": 1212.9,
        "d": 1221.5
      }
    },
    {
      "id": "kobaiden",
      "locationId": "kobaiden",
      "name": "紅梅殿（菅原家邸・伝承）",
      "cx": 14726,
      "cz": 20097,
      "choX": 1,
      "choZ": 1,
      "v": 1,
      "person": "菅原道真",
      "certainty": "○",
      "resolved": {
        "x": 14725.65,
        "z": 20097.074107142853,
        "w": 1212.9,
        "d": 1209.8446428571406
      }
    },
    {
      "id": "hakubaiden",
      "locationId": "hakubaiden",
      "name": "白梅殿（菅原道真旧宅・伝承）",
      "cx": 14726,
      "cz": 21427,
      "choX": 1,
      "choZ": 1,
      "v": 2,
      "person": "菅原道真",
      "certainty": "○",
      "resolved": {
        "x": 14725.65,
        "z": 21426.918749999997,
        "w": 1212.9,
        "d": 1209.8446428571406
      }
    },
    {
      "id": "teijiin",
      "locationId": "teijiin",
      "name": "亭子院（宇多法皇）",
      "cx": 9938,
      "cz": 39082,
      "choX": 2,
      "choZ": 1,
      "person": "宇多法皇",
      "certainty": "◎",
      "layout": [
        {
          "v": 1,
          "dx": -0.25,
          "dz": 0
        },
        {
          "v": 2,
          "dx": 0.25,
          "dz": 0
        }
      ],
      "resolved": {
        "x": 9968.7,
        "z": 39082.09910714286,
        "w": 2484.6,
        "d": 1209.8446428571478
      }
    },
    {
      "id": "kawaranoin",
      "locationId": "kawaranoin",
      "name": "六条河原院",
      "cx": 20725,
      "cz": 27575,
      "choX": 2,
      "choZ": 2,
      "gourdPond": true,
      "layout": [
        {
          "v": 1,
          "dx": -0.24,
          "dz": -0.2
        },
        {
          "v": 2,
          "dx": 0.26,
          "dz": -0.2
        }
      ],
      "resolved": {
        "x": 20846.1,
        "z": 27533.619642857142,
        "w": 2545.8,
        "d": 2539.689285714285
      }
    },
    {
      "id": "suzakuin",
      "locationId": "suzakuin",
      "name": "朱雀院",
      "cx": -1060,
      "cz": 15320,
      "choX": 2,
      "choZ": 4,
      "custom": "suzakuin",
      "resolved": {
        "x": -1697.1,
        "z": 15320.217857142856,
        "w": 2545.8,
        "d": 5199.37857142857
      }
    }
  ],
  "hallTemples": [
    {
      "id": "rokakudo",
      "locationId": "rokakudo",
      "name": "六角堂",
      "cx": 16059,
      "cz": 13325,
      "hex": true,
      "resolved": {
        "x": 16361.775,
        "z": 13627.912053571426,
        "w": 606.45,
        "d": 604.9223214285712
      }
    },
    {
      "id": "inabado",
      "locationId": "inabado",
      "name": "因幡堂",
      "cx": 16059,
      "cz": 22200,
      "hex": false,
      "resolved": {
        "x": 15755.325,
        "z": 23059.22455357143,
        "w": 606.45,
        "d": 604.9223214285712
      }
    }
  ],
  "hallAnchors": {
    "rokakudo": {
      "at": [0, -30],
      "viewCenter": [0, -30],
      "look": [0, -30],
      "spawn": [0, 382.4611607142856]
    },
    "inabado": {
      "at": [0, -30],
      "viewCenter": [0, -30],
      "look": [0, -30],
      "spawn": [0, 382.4611607142856]
    }
  },
  "gameAnchors": {
    "rajomon": {
      "site": "rajomon",
      "at": [
        0,
        0
      ],
      "spawn": [
        0,
        400
      ],
      "look": [
        0,
        0
      ]
    },
    "daidairi": {
      "site": "daidairi",
      "at": [
        0,
        0
      ],
      "spawn": [
        0,
        7600
      ],
      "look": [
        0,
        6800
      ]
    },
    "toji": {
      "site": "toji",
      "at": [
        0,
        0
      ],
      "viewCenter": [
        0,
        1650
      ],
      "spawn": [
        0,
        2845.3
      ],
      "look": [
        0,
        1565.3
      ]
    },
    "saiji": {
      "site": "saiji",
      "at": [
        0,
        0
      ],
      "viewCenter": [
        0,
        1650
      ],
      "spawn": [
        0,
        2845.3
      ],
      "look": [
        0,
        1565.3
      ]
    },
    "eastMarket": {
      "site": "eastMarket",
      "at": [
        -142.6,
        0
      ],
      "spawn": [
        -1284.6,
        0
      ],
      "look": [
        -284.6,
        0
      ]
    },
    "westMarket": {
      "site": "westMarket",
      "at": [
        142.6,
        0
      ],
      "spawn": [
        1284.6,
        0
      ],
      "look": [
        284.6,
        0
      ]
    },
    "shinsenen": {
      "site": "shinsenen",
      "at": [
        -43.2,
        0
      ],
      "spawn": [
        -1163.2,
        -0.53
      ],
      "look": [
        -163.2,
        -0.53
      ]
    },
    "gojoTenjinWalk": {
      "site": "gojoTenjin",
      "at": [
        0,
        0
      ],
      "spawn": [
        0,
        556
      ],
      "look": [
        0,
        66
      ]
    },
    "ichihimeWalk": {
      "site": "ichihime",
      "at": [
        0,
        0
      ],
      "spawn": [
        0,
        266
      ],
      "look": [
        0,
        -14
      ]
    },
    "daishogunWalk": {
      "site": "daishogun",
      "at": [
        0,
        0
      ],
      "spawn": [
        0,
        350
      ],
      "look": [
        0,
        -30
      ]
    },
    "kamiyain": {
      "site": "kamiyain",
      "at": [
        375.4,
        0
      ],
      "spawn": [
        375.4,
        673
      ],
      "look": [
        375.4,
        0
      ]
    },
    "seyakuin": {
      "site": "seyakuin",
      "at": [
        0,
        0
      ],
      "spawn": [
        0,
        674
      ],
      "look": [
        0,
        0
      ]
    },
    "suzakuin": {
      "site": "suzakuin",
      "at": [
        0,
        0
      ],
      "spawn": [
        0,
        2793.8
      ],
      "look": [
        0,
        -940.2
      ]
    },
    "eastKorokan": {
      "site": "eastKorokan",
      "at": [
        -48.2,
        0
      ],
      "spawn": [
        -48.2,
        1402
      ],
      "look": [
        -48.2,
        386
      ]
    },
    "westKorokan": {
      "site": "westKorokan",
      "at": [
        42.2,
        0
      ],
      "spawn": [
        42.2,
        1402
      ],
      "look": [
        42.2,
        386
      ]
    },
    "tobatsu": {
      "site": "tobatsu",
      "at": [
        0,
        0
      ],
      "spawn": [
        -800,
        -60
      ],
      "look": [
        -130,
        0
      ]
    }
  },
  "droneAnchors": {
    "rajomon": {
      "site": "rajomon",
      "at": [
        0,
        0
      ]
    },
    "toji": {
      "site": "toji",
      "at": [
        0,
        1650
      ],
      "crowd": [
        0,
        1945.3
      ]
    },
    "eastKorokan": {
      "site": "eastKorokan",
      "at": [
        -48.2,
        0
      ]
    },
    "eastMarket": {
      "site": "eastMarket",
      "at": [
        -142.6,
        0
      ],
      "crowd": [
        -172.6,
        0
      ]
    },
    "suzakuin": {
      "site": "suzakuin",
      "at": [
        0,
        -940
      ]
    },
    "shinsenen": {
      "site": "shinsenen",
      "at": [
        0,
        -1130
      ],
      "crowd": [
        0,
        -951.53
      ]
    },
    "kokuso": {
      "site": "kokuso",
      "at": [
        0,
        0
      ]
    }
  },
  "estateAnchors": {
    "reizeiin": {
      "at": [
        30.3,
        -0.25
      ],
      "spawn": [
        30.3,
        1285.75
      ],
      "look": [
        30.3,
        -0.25
      ]
    },
    "yamabuki": {
      "at": [
        0.45,
        0.264286
      ],
      "spawn": [
        0.45,
        648.264286
      ],
      "look": [
        0.45,
        0.264286
      ]
    },
    "kawaranoin": {
      "at": [
        -121.1,
        41.380357
      ],
      "spawn": [
        -1516.1,
        41.380357
      ],
      "look": [
        -746.1,
        41.380357
      ]
    },
    "teijiin": {
      "at": [
        -30.7,
        -0.099107
      ],
      "spawn": [
        -30.7,
        664.900893
      ],
      "look": [
        -30.7,
        -0.099107
      ]
    },
    "sugawaraIn": {
      "at": [
        0.35,
        0.25
      ],
      "spawn": [
        0.35,
        671.25
      ],
      "look": [
        0.35,
        0.25
      ]
    },
    "kobaiden": {
      "at": [
        0.35,
        -0.074107
      ],
      "spawn": [
        0.35,
        664.925893
      ],
      "look": [
        0.35,
        -0.074107
      ]
    },
    "hakubaiden": {
      "at": [
        0.35,
        0.08125
      ],
      "spawn": [
        0.35,
        665.08125
      ],
      "look": [
        0.35,
        0.08125
      ]
    },
    "higashiSanjo": {
      "at": [
        0.15,
        0.264286
      ],
      "spawn": [
        0.15,
        648.264286
      ],
      "look": [
        0.15,
        0.264286
      ]
    },
    "horikawain": {
      "at": [
        -45.55,
        0.142857
      ],
      "spawn": [
        -45.55,
        1296.142857
      ],
      "look": [
        -45.55,
        0.142857
      ]
    },
    "kanin": {
      "at": [
        -14.85,
        0.142857
      ],
      "spawn": [
        -14.85,
        1296.142857
      ],
      "look": [
        -14.85,
        0.142857
      ]
    },
    "yozeiin": {
      "at": [
        -45.55,
        -0.125
      ],
      "spawn": [
        -45.55,
        642.875
      ],
      "look": [
        -45.55,
        -0.125
      ]
    },
    "kayanoin": {
      "at": [
        -45.55,
        0
      ],
      "spawn": [
        -45.55,
        1342
      ],
      "look": [
        -45.55,
        0
      ]
    },
    "nijoKyu": {
      "at": [
        0.15,
        0.021429
      ],
      "spawn": [
        0.15,
        648.021429
      ],
      "look": [
        0.15,
        0.021429
      ]
    },
    "koNijoin": {
      "at": [
        0.35,
        0.021429
      ],
      "spawn": [
        0.35,
        648.021429
      ],
      "look": [
        0.35,
        0.021429
      ]
    },
    "machijiri": {
      "at": [
        -14.85,
        -0.125
      ],
      "spawn": [
        -14.85,
        642.875
      ],
      "look": [
        -14.85,
        -0.125
      ]
    },
    "suzakuin": {
      "at": [
        0.3,
        -0.017857
      ],
      "spawn": [
        0.3,
        2793.782143
      ],
      "look": [
        0.3,
        -940.217857
      ]
    }
  },
  "fluteEstateIds": [
    "reizeiin",
    "yamabuki",
    "kawaranoin",
    "teijiin",
    "suzakuin"
  ]
};
