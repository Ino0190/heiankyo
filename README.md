# 平安京 3D散策

平安京（794年・延暦13年の造営期）を、国土地理院の数値標高モデルと現況河川データの上に推定復元し、
ブラウザだけで空から巡り、地上を歩けるコンテンツです。

公開ページ: https://ino0190.github.io/heiankyo/heiankyo/

## 内容

- 入口: `index.html`（`heiankyo/index.html` へリダイレクト）
- 3Dエンジン: `CadKit/index.html`（自作のブラウザCAD。three.js / manifold-3d / opencascade.js はCDNから取得）
- `heiankyo/terrain/heian-baked-assets*.js` は生成済み建築の焼き込みデータ（自動生成物・手で編集しない）

動作環境: WebGL2対応のブラウザ（PC・スマートフォン）。初回は40MB程度のデータを読み込みます。

## 出典・クレジット

### 地形

出典: 国土地理院「地理院タイル」dem_png（数値標高モデル）を加工して作成。
測量法に基づく国土地理院長承認は不要な範囲（コンテンツ利用規約に基づく出典明示による利用）です。
- 地理院タイル一覧: https://maps.gsi.go.jp/development/ichiran.html
- 国土地理院コンテンツ利用規約: https://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html

### 河川

© OpenStreetMap contributors。現況の河川データを加工して使用しています。
データはOpen Database License（ODbL）1.0で提供されています。
- https://www.openstreetmap.org/copyright
- ODbL 1.0: https://opendatacommons.org/licenses/odbl/1-0/

### 建築・街区の復元

史料・研究に基づく推定復元であり、学術的な確定案ではありません。
大内裏・内裏の配置は公開されている門名入り平面図や発掘調査の知見を参照した推定です。
現地の遺構・史跡の写真や図面をそのまま複製したものは含みません。

## 使用ライブラリ

いずれもCDNから読み込んでおり、本リポジトリにソースは同梱していません。

| ライブラリ | 用途 | ライセンス |
| --- | --- | --- |
| [three.js](https://threejs.org/) 0.160.0 | 3D描画 | MIT |
| [manifold-3d](https://github.com/elalish/manifold) 3.5.1 | 都市規模のソリッド演算 | Apache-2.0 |
| [opencascade.js](https://ocjs.org/) 2.0.0-beta | CAD形状カーネル（編集モードのみ） | LGPL-2.1（OCCTのライセンスに従う） |

## アクセス解析

ページビューの計測に [GoatCounter](https://www.goatcounter.com/) を使用しています。
Cookieを使わず、個人を特定する情報は収集しません。

## 本コンテンツの権利

3Dモデル・復元データ・コード（CadKitおよび生成スクリプト）の著作権は井内育生に帰属します。
閲覧・授業や勉強会での紹介は自由です。
データやコードの再配布・改変物の公開・商用利用を希望する場合はご相談ください。

上記は本コンテンツ独自の部分についての条件です。
国土地理院およびOpenStreetMapに由来するデータ、各ライブラリには、それぞれの提供元の条件が適用されます。
