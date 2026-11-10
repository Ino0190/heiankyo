// 平安京のロボごとの数の表（2026-11-10 t70a 井内さん「ロボごとに動きを別々に直せる仕組み」）。
// 速さ・跳ぶ高さ・よじ登る高さ・曲がり方・体の倒し方は、ここだけ直す。CadKit/index.html は起動の時にこの表を読む。
// 反映: 手元はこのファイルを直してブラウザを読み込み直す。公開は python3 CadKit/heian-pages.py で作り直す。
//       CadKit/index.html も焼き込み（bake）も触らない（形ではなく動きの数なので）。
// 1単位＝10cm。速さは「単位/秒」（20単位/秒＝2m/秒＝7.2km/時）。倍率は 1＝土台の速さのまま。
// 決まり: 値は数だけ（関数は入れない）。キーを消したり名前を変えたりすると、起動の時に「ロボの数の表が不正」で止まる（黙って別の値で動かない）。
// 確かめ: bash 平安京/QA/robot-check/robot-check.sh（ロボごとに、この表の数どおりに動くかを測って PASS/FAIL を出す）
window.HEIAN_ROBOT_TUNE={
  version:1,

  // ---- 3体に共通の歩きの土台 ----
  base:{
    walk:20,          // 歩く速さ（単位/秒）。下の各ロボの speed を掛ける
    run:2.6,          // 2回押した時（大股）＝歩き×2.6
    hover:5.4,        // 3回押した時（鉄の童・鞠の童のホバー）＝歩き×5.4（2026-09-28 3→4.5倍、2026-10-17 →5.4倍）
    hoverBrake:108,   // ホバーで目的地の何単位手前から減速するか（10.8m）
    steerAssist:34    // 自動で走っている間に A/D を押した時、今の向きから何度先へ向かい続けるか（土蜘蛛の走行・鞠の童のホバー。2026-11-09 t68）
  },

  // ---- 鉄の童（ブリキロボ）。飛べない・梯子で上り下り ----
  tin:{
    speed:1.3         // 歩き・大股・ホバーの速さの倍率（2026-11-04「鉄が3割速い」）
  },

  // ---- 鞠の童（風船ロボ）。噴射で飛べる ----
  maru:{
    speed:1,          // 速さの倍率
    // 歩く時の体の動き（揺れ・沈み・腕の振り・伸び・首・スキップの高さと各段の長さ・ぷるん）
    gait:{sway:.5,sink:.3,armK:1.2,stretch:1.1,neck:.8,skipLift:1.6,skipDur:{跳躍:.3,蹴る:.08,踏み切り:.11,着地:.1},jellyStep:2},
    // 浮いている時の上下（2026-10-31 横から撮って 0.17〜0.31m では浮いて見えにくかった ⇒ 0.19〜0.41m）
    float:{h:3,amp:1.1,w:1.7,roll:.025,delay:.25,up:.8,down:.2},
    // 噴射（Space）と滑空。dv＝1回の噴射で上へ足す速さ・g＝重力・fall＝落ちる速さの上限・vmax＝上がる速さの上限・speed＝飛んでいる間の横の速さ（歩きの何倍）・ceil＝上がれる高さ
    rocket:{dv:72,air:.75,g:60,fall:-18,vmax:80,/* 2026-11-09 (fix-t68 maru-fly2) 井内さん「鞠が上昇してる感じがあんましない」「鞠のジャンプ中、浮いてる音を出したい」「浮上中に方向転換する場合、体をリーンして曲がるべき」「ずれが小さい時も弧で向き直る」: 1回の噴射で上がる高さ 約1.9m→約4.3m（dv 50→72・上がる速さの上限 6→8m/秒） */speed:1.4,ceil:70,cost:.1,charge:.16,delay:.6,low:.22,hold:{after:.12,acc:120,burn:.3,puff:.42},
      // ホバー中の噴射＝滑空（2026-11-01 井内さん「ホバーしながらジャンプしたら、結構な距離を飛び上がったまま移動して徐々に降りていく感じ」）:
      //  ホバーの速さのまま、dv で約4.5m 上がり、重力 g・落ちる速さの上限 fall（0.7m/秒）でゆっくり降りる＝約8秒・ホバーの全速（10.8m/秒）で約80m。横の速さは drag/秒で少しずつ落ちる
      glide:{dv:78,g:42,fall:-7,drag:.05}/* fix-t68 maru-fly2: ホバー中の噴射 約4.6m→約7.2m */}
  },

  // ---- 土蜘蛛（六脚ロボ）。六輪で地上最速・壁や屋根を登れる ----
  spider:{
    speed:1.6,        // 歩きの速さの倍率
    run:4.5,          // 3回押した時（六輪で走る）＝歩き×4.5（×speed）
    sprint:8,         // 4回押した時（全速）＝歩き×8（×speed）＝256単位/秒＝約92km/時
    // よじ登り・降り。up＝よじ登れる高さ・down＝降りられる落差・threadDrop＝これより高い所からは糸で降りる・climbCost/hopCost＝道を探す時の手間（登るより回る方が近ければ回る）
    climb:{up:58,down:900,threadDrop:80,climbCost:35,hopCost:25},
    // 屋根へ跳ぶ。rise＝跳び上がれる高さ・span＝跳べる横の長さ・apex＝着地点より上へ許す高さ（2026-11-06 井内さん「2,3m」）・arcMin＝最小の弧
    roofJump:{rise:58,span:85,wallClear:11,edgeInset:8,footPad:38,arc:28,apex:25,arcMin:14},
    // 六輪で走る時の体。stopLean＝止まる時の前傾・turnLean＝曲がる時の傾き・cruiseLean/surgeLean＝走る・加速の前傾・steerMax＝前輪の切れ角・rearSteer＝後輪の逆位相・middleSteer＝中輪
    drive:{legUp:7,knee:10,sus:1.1,suspResponse:13,suspFast:3,stopDur:.62,stopLean:6,balanceResponse:7,turnDecay:2.6,turnLean:1.6,legBalance:1.2,bodyCounter:-2.8,bodyYaw:4.5,bellyCounter:8,cruiseLean:1.4,surgeLean:2.2,bellyPitch:3.5,sway:1.1,legSway:.5,steerMax:30,rearSteer:.72,middleSteer:.15}
  },

  // ---- 鉄の童と鞠の童の跳び（Space）・よじ登り（土蜘蛛は spider.climb を使う） ----
  // lift＝跳ぶ高さ・liftBySpeed/liftMax＝走っている時に高くなる分・air＝踏み切り〜着地（1.97 の段に合わせた）・leap＝跳んでいる間の速さの倍率
  jump:{lift:1.6,liftBySpeed:200,liftMax:.8,timeBySpeed:160,timeMax:.7,air:[.32,.82],leap:1.5},
  // hopMax＝飛び降りられる落差（8m）・autoJump＝自動で歩く時に自分で跳んで足す高さ・ball/hand＝アンテナの球・手の分・grabFrom＝しがみつける跳びの時刻
  ledge:{hopMax:80,autoJump:15,ball:1,hand:5,grabFrom:.2}
};
