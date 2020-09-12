<template>
  <div>
    <div class="container bg-white fill-right mt-5 tmkr3-shadow-lb slide-in-from-right">
      <div class="row">
        <div class="col-12 text-center mb-3">
          <img src="@/assets/img/logos/tmkr03_logo.png"
               alt="タマクラ3"
               class="img-fluid"/>
        </div>

        <div class="col-12 text-center">
          ── DJのタマゴ、躍如 ───
        </div>

        <div class="col-12 text-center">
          <h1 class="font-expletus text-strong tmkr3-shadow-lb-sm mb-0">
            Theme
          </h1>
          <h2 class="text-hi mt-0">
            主張 / 人生
          </h2>

          <h1 class="text-strong tmkr3-shadow-lb-sm mb-0">
            開催日時
          </h1>
          <h2 class="text-hi my-0">
            DAY 1: 9/11 22:00~
          </h2>
          <h2 class="text-hi my-0">
            DAY 2: 9/12 22:00~
          </h2>
          <h2 class="text-hi mt-0">
            DAY 3: 9/19 22:00~
          </h2>

          <h1 class="font-expletus text-strong tmkr3-shadow-lb-sm mb-0">
            会場
          </h1>
          <h2 class="text-hi my-0">
            DAY 1: <a href="https://www.twitch.tv/tamakura_hinakura" target="_blank">
            Twitch
            <fa :icon="fa.twitch"/>
          </a>
          </h2>
          <h2 class="text-hi my-0">
            DAY 2: <a href="https://www.twitch.tv/tamakura_hinakura" target="_blank">
            Twitch
            <fa :icon="fa.twitch"/>
          </a>
            & スタジオよもだ
          </h2>
          <h2 class="text-hi mt-0">
            DAY 3: スタジオよもだ
          </h2>

          <h1 class="font-expletus text-strong tmkr3-shadow-lb-sm mb-0">
            参加表明
          </h1>
          <h2 class="text-hi my-0">
            <a href="https://twipla.jp/events/451957" target="_blank">
              twipla
            </a>
          </h2>
          <p style="color: #f44336;">
            ※ オフライン会場へ参加される場合は必ずtwiplaで参加表明をお願い致します。<br>
            参加表明がなかった場合、ご入場をお断りする場合がございます。
          </p>

        </div>
      </div>
    </div>

    <div class="container bg-white fill-left mt-5 tmkr3-shadow-rb py-3 slide-in-from-right">
      <div class="row">
        <div class="col-12">
          <div class="text-center">
            <h1 class="font-expletus text-strong tmkr3-shadow-rb-sm">
              Members
            </h1>
          </div>

          <vertical-title-container class="mb-5">
            <template v-slot:title>
              DJs
            </template>
            <template v-slot:body>
              <div>
                <h1 class="font-expletus text-strong">
                  DAY 1
                </h1>
                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/tmkr03/d1_01.png"
                         alt="たっくん"
                         class="img-icon img-round"/>
                  </template>
                  <template v-slot:name>
                    たっくん
                  </template>
                  <template v-slot:social>
                    <a href="https://twitter.com/mikuta0407" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </template>
                  <template v-slot:poem>
                    アイマスP（特にAS）<br>
                    機材なしのAudacityでDJ初参加頑張ってみます。
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/tmkr03/d1_02.jpeg"
                         alt="スージー(Ⅱ世)"
                         class="img-icon img-round">
                  </template>
                  <template v-slot:name>
                    スージー（Ⅱ世）
                  </template>
                  <template v-slot:social>
                    <a href="https://twitter.com/su_ji_2nd" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </template>
                  <template v-slot:poem>
                    たぶん女子向け
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/tmkr03/d1_03.png"
                         alt="鮭とば"
                         class="img-icon img-round">
                  </template>
                  <template v-slot:name>
                    鮭とば
                  </template>
                  <template v-slot:social>
                    <a href="https://twitter.com/s__toba" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </template>
                  <template v-slot:poem>
                    ドライブ行きたいオタク<br>
                    ガソリン燃やしていけ
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/tmkr03/d1_04.jpg"
                         alt="Matter"
                         class="img-icon img-round">
                  </template>
                  <template v-slot:name>
                    Matter
                  </template>
                  <template v-slot:social>
                    <a href="https://twitter.com/Matter3_DJ" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </template>
                  <template v-slot:poem>
                    いにしえのオタク<br>
                    初心者イベって聞いてたんですがここはどこ
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/tmkr03/d1_05.png"
                         alt="塩ぱせり"
                         class="img-icon img-round">
                  </template>
                  <template v-slot:name>
                    塩パセリ
                  </template>
                  <template v-slot:social>
                    <a href="https://twitter.com/siopaseri" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </template>
                  <template v-slot:poem>
                    うぅ... オタク一億人呼びてぇ...
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/tmkr03/d1_06.jpg"
                         alt="NoN"
                         class="img-icon img-round">
                  </template>
                  <template v-slot:name>
                    NoN
                  </template>
                  <template v-slot:social>
                    <a href="https://twitter.com/NGNN_4334" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </template>
                  <template v-slot:poem>
                    アニソン、ゲーソンが中心のセトリになっています<br>
                    鳶沢みさきに最近敗北しました。
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/tmkr03/d1_07.jpg"
                         alt="TSURU"
                         class="img-icon img-round">
                  </template>
                  <template v-slot:name>
                    TSURU
                  </template>
                  <template v-slot:social>
                    <a href="https://twitter.com/Japan_crane0916" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </template>
                  <template v-slot:poem>
                    ROCKと「あの頃」<br>
                    「自分」をさらけ出します
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/tmkr03/d1_08.JPG"
                         alt="ぴろー"
                         class="img-icon img-round">
                  </template>
                  <template v-slot:name>
                    ぴろー
                  </template>
                  <template v-slot:social>
                    <a href="https://twitter.com/pirawwwwwww" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </template>
                  <template v-slot:poem>
                    よく交通機関を止める人<br>
                    テーマに最大限沿ったDJプレイってつまりこういうことだと思うんです
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/tmkr03/d1_09.png"
                         alt="しろもみじ"
                         class="img-icon img-round">
                  </template>
                  <template v-slot:name>
                    しろもみじ
                  </template>
                  <template v-slot:social>
                    <a href="https://twitter.com/siromomizi123" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </template>
                  <template v-slot:poem>
                    二次ドルもアニタイも声優ノンタイも全部聞きてぇオタク<br>
                    上に声優ノンタイって描いたけどプロフ提出次点のセトリだとあんま流れなさそう、ごめん
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/tmkr03/d1_10.jpg"
                         alt="Taka-ki"
                         class="img-icon img-round">
                  </template>
                  <template v-slot:name>
                    Taka-ki
                  </template>
                  <template v-slot:social>
                    <a href="https://twitter.com/15_taka_aki_" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </template>
                  <template v-slot:poem>
                    同世代の人にはうれしいかも...？<br>
                    画面の前で高まってもらえたら僕もうれしいです。
                  </template>
                </dj-profile>
              </div>
            </template>
          </vertical-title-container>

          <vertical-title-container class="mb-5">
            <template v-slot:title>
              DJs
            </template>
            <template v-slot:body>
              <h1 class="font-expletus text-strong">
                DAY 2
              </h1>
              <dj-profile class="mb-3">
                <template v-slot:icon>
                  <img src="@/assets/img/social_icons/tmkr03/d2_00.png"
                       alt="DAイチ"
                       class="img-icon img-round">
                </template>
                <template v-slot:name>
                  DAイチ
                </template>
                <template v-slot:social>
                  <a href="https://twitter.com/ddd_aaa_1" target="_blank">
                    <fa :icon="fa.twitter"/>
                  </a>
                </template>
                <template v-slot:poem>
                  アルコール中毒<br>
                  お酒ください
                </template>
              </dj-profile>

              <dj-profile class="mb-3">
                <template v-slot:icon>
                  <img src="@/assets/img/social_icons/tmkr03/d2_01.jpg"
                       alt="ケー"
                       class="img-icon img-round">
                </template>
                <template v-slot:name>
                  ケー
                </template>
                <template v-slot:social>
                  <a href="https://twitter.com/ke_odakyu9000" target="_blank">
                    <fa :icon="fa.twitter"/>
                  </a>
                </template>
                <template v-slot:poem>
                  まだ一度しかDJしたことないです<br>
                  オタクを多動させて泣かしたいと思います
                </template>
              </dj-profile>

              <dj-profile class="mb-3">
                <template v-slot:icon>
                  <img src="@/assets/img/social_icons/tmkr03/d2_02.jpg"
                       alt="specia"
                       class="img-icon img-round">
                </template>
                <template v-slot:name>
                  specia
                </template>
                <template v-slot:social>
                  <a href="https://twitter.com/Revaty0421" target="_blank">
                    <fa :icon="fa.twitter"/>
                  </a>
                </template>
                <template v-slot:poem>
                  日常系アニメとか<br>
                  オフラインで高まりてぇ(^ω^)ｖ
                </template>
              </dj-profile>

              <dj-profile class="mb-3">
                <template v-slot:icon>
                  <img src="@/assets/img/social_icons/tmkr03/d2_03.PNG"
                       alt="ゆるます"
                       class="img-icon img-round">
                </template>
                <template v-slot:name>
                  ゆるます
                </template>
                <template v-slot:social>
                  <a href="https://twitter.com/yrms_trinity" target="_blank">
                    <fa :icon="fa.twitter"/>
                  </a>
                </template>
                <template v-slot:poem>
                  いい曲が好きなオタク<br>
                  いい曲浴びながら酒を飲みましょう
                </template>
              </dj-profile>

              <dj-profile class="mb-3">
                <template v-slot:icon>
                  <img src="@/assets/img/social_icons/tmkr03/d2_04.png"
                       alt="わたあめ3号"
                       class="img-icon img-round">
                </template>
                <template v-slot:name>
                  わたあめ3号
                </template>
                <template v-slot:social>
                  <a href="https://twitter.com/wata_pa_chi" target="_blank">
                    <fa :icon="fa.twitter"/>
                  </a>
                </template>
                <template v-slot:poem>
                  古いオタク<br>
                  ふおおおお！
                </template>
              </dj-profile>

              <dj-profile class="mb-3">
                <template v-slot:icon>
                  <img src="@/assets/img/social_icons/tmkr03/d2_05.jpg"
                       alt="pwl32"
                       class="img-icon img-round">
                </template>
                <template v-slot:name>
                  pwl32
                </template>
                <template v-slot:social>
                  <a href="https://twitter.com/pwl32" target="_blank">
                    <fa :icon="fa.twitter"/>
                  </a>
                </template>
                <template v-slot:poem>
                  我こそはプロフカードをMB単位にふくらませて送り付ける者（5MB以内）
                </template>
              </dj-profile>

              <dj-profile class="mb-3">
                <template v-slot:icon>
                  <img src="@/assets/img/social_icons/tmkr03/d2_06.png"
                       alt="TMTMN"
                       class="img-icon img-round">
                </template>
                <template v-slot:name>
                  TMTMN
                </template>
                <template v-slot:social>
                  <a href="https://twitter.com/tomatoman714" target="_blank">
                    <fa :icon="fa.twitter"/>
                  </a>
                </template>
                <template v-slot:poem>
                  ユーロビートの音が好きなオタク<br>
                  今回は治安を乱さないように気をつけます
                </template>
              </dj-profile>

              <dj-profile class="mb-3">
                <template v-slot:icon>
                  <img src="@/assets/img/social_icons/tmkr03/d2_07.jpeg"
                       alt="雪女"
                       class="img-icon img-round">
                </template>
                <template v-slot:name>
                  雪女
                </template>
                <template v-slot:social>
                  <a href="https://twitter.com/10_wia_" target="_blank">
                    <fa :icon="fa.twitter"/>
                  </a>
                </template>
                <template v-slot:poem>
                  久しぶりに現地でぶっ壊れたDJやりたいですね...
                </template>
              </dj-profile>

              <dj-profile class="mb-3">
                <template v-slot:icon>
                  <img src="@/assets/img/social_icons/tmkr03/d2_08.JPG"
                       alt="こうやん"
                       class="img-icon img-round">
                </template>
                <template v-slot:name>
                  こうやん
                </template>
                <template v-slot:social>
                  <a href="https://twitter.com/Empty_F1fth" target="_blank">
                    <fa :icon="fa.twitter"/>
                  </a>
                </template>
                <template v-slot:poem>
                  ロキノンキッズとか<br>
                  3月にDJ始めたばかりの初心者です/// 優しくしてください...！
                </template>
              </dj-profile>

              <dj-profile>
                <template v-slot:icon>
                  <img src="@/assets/img/social_icons/tmkr03/d2_09.png"
                       alt="Shock_Pan"
                       class="img-icon img-round">
                </template>
                <template v-slot:name>
                  Shock_Pan
                </template>
                <template v-slot:social>
                  <a href="https://twitter.com/mgn_shock_pan" target="_blank">
                    <fa :icon="fa.twitter"/>
                  </a>
                </template>
                <template v-slot:poem>
                  ぼく！！（と好みが近いオタク）<br>
                  じんおわマンの"人生" #とは
                </template>
              </dj-profile>
            </template>
          </vertical-title-container>

          <vertical-title-container class="mb-5">
            <template v-slot:title>
              VJs
            </template>
            <template v-slot:body>
              <dj-profile class="mb-3">
                <template v-slot:icon>
                  <img src="@/assets/img/social_icons/tmkr03/d2_vj_01.png"
                       alt="Snow Girl"
                       class="img-icon img-round">
                </template>
                <template v-slot:name>
                  Snow Girl
                </template>
                <template v-slot:social>
                  <a href="https://twitter.com/10_wia_" target="_blank">
                    <fa :icon="fa.twitter"/>
                  </a>
                </template>
                <template v-slot:poem>
                  この野郎醤油瓶...！（半ギレ）
                </template>
              </dj-profile>

              <dj-profile class="mb-3">
                <template v-slot:icon>
                  <img src="@/assets/img/social_icons/tmkr03/d2_vj_02.png"
                       alt="Suicat"
                       class="img-icon img-round">
                </template>
                <template v-slot:name>
                  Suicat
                </template>
                <template v-slot:social>
                  <a href="https://twitter.com/Mr_S_21s" target="_blank">
                    <fa :icon="fa.twitter"/>
                  </a>
                </template>
                <template v-slot:poem>
                  というわけで、目標は高く矢向さんを超えていきたいと思います。
                </template>
              </dj-profile>

              <dj-profile>
                <template v-slot:icon>
                  <img src="@/assets/img/social_icons/tmkr03/d2_vj_03.png"
                       alt="aFLaC"
                       class="img-icon img-round">
                </template>
                <template v-slot:name>
                  aFLaC
                </template>
                <template v-slot:social>
                  <a href="https://twitter.com/aFLaC_mknynk" target="_blank">
                    <fa :icon="fa.twitter"/>
                  </a>
                </template>
              </dj-profile>
            </template>
          </vertical-title-container>

          <vertical-title-container class="mb-5">
            <template v-slot:title>
              DJs
            </template>
            <template v-slot:body>
              <h1 class="font-expletus text-strong">
                DAY 3
              </h1>

              <dj-profile class="mb-3">
                <template v-slot:icon>
                  <img src="@/assets/img/social_icons/tmkr03/d3_01.png"
                       alt="ルリトラ"
                       class="img-icon img-round">
                </template>
                <template v-slot:name>
                  ルリトラ
                </template>
                <template v-slot:social>
                  <a href="https://twitter.com/murabitoa3714" target="_blank">
                    <fa :icon="fa.twitter"/>
                  </a>
                </template>
                <template v-slot:poem>
                  なんでも許せる方向け<br>
                  初オフ参加で緊張してますがやっぱりやりたい放題します！
                </template>
              </dj-profile>

              <dj-profile class="mb-3">
                <template v-slot:icon>
                  <img src="@/assets/img/social_icons/tmkr03/d3_02.png"
                       alt="emuracool"
                       class="img-icon img-round">
                </template>
                <template v-slot:name>
                  emuracool
                </template>
                <template v-slot:social>
                  <a href="https://twitter.com/OrijinHeathaze" target="_blank">
                    <fa :icon="fa.twitter"/>
                  </a>
                </template>
                <template v-slot:poem>
                  アニメ、ボカロ、ゲーム、V、etc
                </template>
              </dj-profile>

              <dj-profile class="mb-3">
                <template v-slot:icon>
                  <img src="@/assets/img/social_icons/tmkr03/d3_03.jpeg"
                       alt="ツカタク"
                       class="img-icon img-round">
                </template>
                <template v-slot:name>
                  ツカタク
                </template>
                <template v-slot:social>
                  <a href="https://twitter.com/tsukataku_s" target="_blank">
                    <fa :icon="fa.twitter"/>
                  </a>
                </template>
                <template v-slot:poem>
                  アニメソングが好きなオタク<br>
                  今回もタマクラに出演させて頂き光栄です<br>
                  "デカタク"見せられるよう頑張ります！
                </template>
              </dj-profile>

              <dj-profile class="mb-3">
                <template v-slot:icon>
                  <img src="@/assets/img/social_icons/tmkr03/d3_04.jpg"
                       alt="甘納豆"
                       class="img-icon img-round">
                </template>
                <template v-slot:name>
                  甘納豆
                </template>
                <template v-slot:social>
                  <a href="https://twitter.com/AmaNato0" target="_blank">
                    <fa :icon="fa.twitter"/>
                  </a>
                </template>
                <template v-slot:poem>
                  私は犬はですが、あなたたちは？？？？？？？
                </template>
              </dj-profile>

              <dj-profile class="mb-3">
                <template v-slot:icon>
                  <img src="@/assets/img/social_icons/tmkr03/d3_05.jpg"
                       alt="John Smith"
                       class="img-icon img-round">
                </template>
                <template v-slot:name>
                  John Smith
                </template>
                <template v-slot:social>
                  <a href="https://twitter.com/_krym31" target="_blank">
                    <fa :icon="fa.twitter"/>
                  </a>
                </template>
                <template v-slot:poem>
                  ちぇるーん♪
                </template>
              </dj-profile>

              <dj-profile class="mb-3">
                <template v-slot:icon>
                  <img src="@/assets/img/social_icons/tmkr03/d3_06.jpg"
                       alt="鶴"
                       class="img-icon img-round">
                </template>
                <template v-slot:name>
                  鶴
                </template>
                <template v-slot:social>
                  <a href="https://twitter.com/AmaNato0" target="_blank">
                    <fa :icon="fa.twitter"/>
                  </a>
                </template>
                <template v-slot:poem>
                  アニメくん / 二次元女萌え萌えクラブ<br>
                  <small>インマー</small>
                </template>
              </dj-profile>

              <dj-profile class="mb-3">
                <template v-slot:icon>
                  <img src="@/assets/img/social_icons/tmkr03/d3_07.jpg"
                       alt="いとま"
                       class="img-icon img-round">
                </template>
                <template v-slot:name>
                  いとま
                </template>
                <template v-slot:social>
                  <a href="https://twitter.com/itoma425" target="_blank">
                    <fa :icon="fa.twitter"/>
                  </a>
                </template>
                <template v-slot:poem>
                  Stella-rimu er
                </template>
              </dj-profile>

              <dj-profile class="mb-3">
                <template v-slot:icon>
                  <img src="@/assets/img/social_icons/tmkr03/d3_08.jpg"
                       alt="ちゃい"
                       class="img-icon img-round">
                </template>
                <template v-slot:name>
                  ちゃい
                </template>
                <template v-slot:social>
                  <a href="https://twitter.com/drag_chai" target="_blank">
                    <fa :icon="fa.twitter"/>
                  </a>
                </template>
                <template v-slot:poem>
                  ほよ～～～～～～～<br>
                  主催にアニソン入れろって脅されています
                </template>
              </dj-profile>

              <dj-profile class="mb-3">
                <template v-slot:icon>
                  <img src="@/assets/img/social_icons/tmkr03/d3_09.jpg"
                       alt="xai"
                       class="img-icon img-round">
                </template>
                <template v-slot:name>
                  xai
                </template>
                <template v-slot:social>
                  <a href="https://twitter.com/xai_rakutan" target="_blank">
                    <fa :icon="fa.twitter"/>
                  </a>

                  <a href="https://soundcloud.com/z4ycenfvnkev/likes" target="_blank">
                    <fa :icon="fa.soundCloud"/>
                  </a>
                </template>
                <template v-slot:poem>
                  <a href="https://soundcloud.com/z4ycenfvnkev/likes" target="_blank">
                    音雲のLike欄大方気に入ってくれるかた
                  </a><br>
                  Remix多めです。色々流れると思います。
                </template>
              </dj-profile>

              <dj-profile class="mb-3">
                <template v-slot:icon>
                  <img src="@/assets/img/social_icons/tmkr03/d3_10.png"
                       alt="じっつ"
                       class="img-icon img-round">
                </template>
                <template v-slot:name>
                  じっつ
                </template>
                <template v-slot:social>
                  <a href="https://twitter.com/ji__1" target="_blank">
                    <fa :icon="fa.twitter"/>
                  </a>
                </template>
                <template v-slot:poem>
                  俺と同じ浅いオタク！！<br>
                  オタクだけどオタクに褒められたい
                </template>
              </dj-profile>
            </template>
          </vertical-title-container>
          <vertical-title-container class="mb-5">
            <template v-slot:title>
              VJs
            </template>
            <template v-slot:body>
              <dj-profile class="mb-3">
                <template v-slot:icon>
                  <img src="@/assets/img/social_icons/tmkr03/d3_vj_01.png"
                       alt="aFLaC"
                       class="img-icon img-round">
                </template>
                <template v-slot:name>
                  aFLaC
                </template>
                <template v-slot:social>
                  <a href="https://twitter.com/aFLaC_mknynk" target="_blank">
                    <fa :icon="fa.twitter"/>
                  </a>
                </template>
              </dj-profile>

              <dj-profile class="mb-3">
                <template v-slot:icon>
                  <img src="@/assets/img/social_icons/tmkr03/d3_vj_02.png"
                       alt="スターチス"
                       class="img-icon img-round">
                </template>
                <template v-slot:name>
                  スターチス
                </template>
                <template v-slot:social>
                  <a href="https://twitter.com/murabitoa3714" target="_blank">
                    <fa :icon="fa.twitter"/>
                  </a>
                </template>
              </dj-profile>

              <dj-profile class="mb-3">
                <template v-slot:icon>
                  <img src="@/assets/img/social_icons/tmkr03/d3_vj_03.png"
                       alt="crane_dentata"
                       class="img-icon img-round">
                </template>
                <template v-slot:name>
                  crane_dentata
                </template>
                <template v-slot:social>
                  <a href="https://twitter.com/crane_dantata" target="_blank">
                    <fa :icon="fa.twitter"/>
                  </a>
                </template>
                <template v-slot:poem>
                  卒業研究ダサい、アニメカッコいい<br>
                  DJもVJも98657823643824798325億年くらいやってないので不安です...
                </template>
              </dj-profile>
            </template>
          </vertical-title-container>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {faSoundcloud, faTwitch, faTwitter} from "@fortawesome/free-brands-svg-icons";
import VerticalTitleContainer from "../../components/layouts/VerticalTitleContainer";
import DjProfile from "../../components/layouts/DjProfile";
import DummyImage from "../../components/samples/DummyImage";
import {mapMutations} from "vuex";

export default {
  name: "tmkr03",
  components: {DummyImage, DjProfile, VerticalTitleContainer},
  mounted() {
    this.setBackgroundColor("#FBE9E7");
  },
  methods: {
    ...mapMutations({
      setBackgroundColor: 'setBackgroundColor'
    })
  },
  computed: {
    fa: function () {
      return {
        twitch: faTwitch,
        twitter: faTwitter,
        soundCloud: faSoundcloud
      }
    }
  },
  head:{
    title: 'タマクラ3'
  }
}
</script>

<style lang="scss">
@mixin shadow($offset_x: 0.5em, $offset_y: 0.5em, $blur:0, $color: #FF5722) {
  filter: drop-shadow($offset_x $offset_y $blur $color);
}

.tmkr3-shadow-rb {
  @include shadow;
}

.tmkr3-shadow-rb-sm {
  @include shadow(.0625em, .0625em, 0, #FFAB91);
}

.tmkr3-shadow-lb {
  @include shadow(-.5em);
}

.tmkr3-shadow-lb-sm {
  @include shadow(-.0625em, .0625em, 0, #FFAB91);
}
</style>