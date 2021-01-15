<template>
  <div>
    <div class="container bg-white fill-right mt-5 tmkr4-shadow-lb slide-in-from-right">
      <div class="row">
        <div class="col-12 text-center mb-3 mt-3">
          <img src="/img/logos/tmkr04_logo.png"
               alt="タマクラ4"
               class="img-fluid"/>
        </div>

        <div class="col-12 text-center">
          <p>
            ── DJのタマゴ、出陣 ───
          </p>
          <p>
            「またチームバトルってやつしませんか？」<br>
            という名目でオタクたちが大暴れ！<br>
            <br>
            アニクラってなに？って人にオススメの<br>
            初心者向けノンレギュイベント！<br>
            <a href="https://twipla.jp/events/447454" target="_blank">#ヒナクラ</a> に参加するオタクが練習をする配信だよ<br>
            アニクラ初見？大丈夫！DJもほぼ初心者！<br>
            ただし、熱意とセトリは"本物"<br>
          </p>
        </div>

        <div class="col-12 text-center">
          <h1 class="text-strong tmkr4-shadow-lb-sm mb-0">
            開催日時
          </h1>
          <h2 class="text-hi my-0">
            DAY 1: 1/15 21:30~
          </h2>
          <h2 class="text-hi my-0">
            DAY 2: 1/16 21:30~
          </h2>
          <h2 class="text-hi my-0">
            DAY 3: 1/23 21:30~
          </h2>

          <h1 class="font-expletus text-strong tmkr4-shadow-lb-sm mb-0">
            会場
          </h1>
          <h2 class="text-hi my-0">
            DAY 1 / DAY 2 / DAY 3 ともに<br>
            <a href="https://www.twitch.tv/tamakura_hinakura" target="_blank">
              Twitch
              <fa :icon="fa.twitch"/>
            </a>
          </h2>

          <h1 class="font-expletus text-strong tmkr4-shadow-lb-sm mb-0">
            詳細
          </h1>
          <h2 class="text-hi mt-0">
            <a href="https://twipla.jp/events/462973" target="_blank">
              twipla
            </a>
          </h2>
        </div>
      </div>
    </div>

    <div class="container bg-white fill-left mt-5 tmkr4-shadow-rb py-3 slide-in-from-right">
      <div class="row">
        <div class="col-12">
          <div class="text-center">
            <h1 class="font-expletus text-strong tmkr4-shadow-rb-sm">
              Members
            </h1>
          </div>
        </div>
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
                <img src="@/assets/img/social_icons/tmkr04/DAY1/4d11.jpeg"
                     alt="堀川 進"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                堀川 進
              </template>
              <template v-slot:social>
                <div class="d-flex align-items-center">
                  <team-tag red class="mr-1"/>
                  <div>
                    <a href="https://twitter.com/susumu_horikawa" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </div>
                </div>
              </template>
              <template v-slot:poem>
                1/21誕生日なの
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/tmkr04/DAY1/4d12.JPG"
                     alt="specia"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                specia
              </template>
              <template v-slot:social>
                <div class="d-flex align-items-center">
                  <team-tag blue class="mr-1"/>
                  <div>
                    <a href="https://twitter.com/Revaty0421" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </div>
                </div>
              </template>
              <template v-slot:poem>
                今更自己紹介をします('ω')ノ
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/tmkr04/DAY1/4d13.png"
                     alt="たっくん"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                たっくん
              </template>
              <template v-slot:social>
                <div class="d-flex align-items-center">
                  <team-tag blue class="mr-1"/>
                  <div>
                    <a href="https://twitter.com/mikuta0407" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </div>
                </div>
              </template>
              <template v-slot:poem>
                いつのまにかさむくなっていて、<br/>
                とてもさむいです。
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/tmkr04/DAY1/4d14.jpg"
                     alt="TSURU"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                TSURU
              </template>
              <template v-slot:social>
                <div class="d-flex align-items-center">
                  <team-tag red class="mr-1"/>
                  <div>
                    <a href="https://twitter.com/Japan_crane0916" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </div>
                </div>
              </template>
              <template v-slot:poem>
                🚍や🚙で聴いてくれると嬉しい✌
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/tmkr04/DAY1/4d15.jpg"
                     alt="ぴろー"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                ぴろー
              </template>
              <template v-slot:social>
                <div class="d-flex align-items-center">
                  <team-tag blue class="mr-1"/>
                  <div>
                    <a href="https://twitter.com/pirawwwwwww" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </div>
                </div>
              </template>
              <template v-slot:poem>
                推しメン、すきだよ...
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/tmkr04/DAY1/4d16.jpg"
                     alt="ガイエン"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                ガイエン
              </template>
              <template v-slot:social>
                <div class="d-flex align-items-center">
                  <team-tag blue class="mr-1"/>
                  <div>
                    <a href="https://twitter.com/gaien_daigaku" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </div>
                </div>
              </template>
              <template v-slot:poem>
                今回は僕のヲタク人生を流します
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/tmkr04/DAY1/4d17.PNG"
                     alt="Wizary"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                Wizary
              </template>
              <template v-slot:social>
                <div class="d-flex align-items-center">
                  <team-tag red class="mr-1"/>
                  <div>
                    <a href="https://twitter.com/wizary_rnd" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </div>
                </div>
              </template>
              <template v-slot:poem>
                2020を生き延びた皆へおめでとうございます！
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/tmkr04/DAY1/4d18.jpg"
                     alt="Cream Soda"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                Cream Soda
              </template>
              <template v-slot:social>
                <div class="d-flex align-items-center">
                  <team-tag red class="mr-1"/>
                  <div>
                    <a href="https://twitter.com/sCream_Sodapop" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </div>
                </div>
              </template>
              <template v-slot:poem>
                敬語を使ってくれるタイプの女の子キャラって...いいですよね
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/tmkr04/DAY1/4d19.png"
                     alt="塩パセリ"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                塩パセリ
              </template>
              <template v-slot:social>
                <div class="d-flex align-items-center">
                  <team-tag blue class="mr-1"/>
                  <div>
                    <a href="https://twitter.com/siopaseri" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </div>
                </div>
              </template>
              <template v-slot:poem>
                タマクラファイナルシーズン開幕！<br/>
                最後まで盛り上がりましょう！
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
          <div>
            <h1 class="font-expletus text-strong">
              DAY 2
            </h1>
            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/tmkr04/DAY2/4d21.png"
                     alt="John Smith"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                John Smith
              </template>
              <template v-slot:social>
                <div class="d-flex align-items-center">
                  <team-tag blue class="mr-1"/>
                  <div>
                    <a href="https://twitter.com/_krym31" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </div>
                </div>
              </template>
              <template v-slot:poem>
                Pとある魔術の禁書目録おすすめです
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/tmkr04/DAY2/4d22.jpg"
                     alt="ちゃい"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                ちゃい
              </template>
              <template v-slot:social>
                <div class="d-flex align-items-center">
                  <team-tag red class="mr-1"/>
                  <div>
                    <a href="https://twitter.com/drag_chai" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </div>
                </div>
              </template>
              <template v-slot:poem>
                イベントまで生きてるといいね
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/tmkr04/DAY2/4d23.jpg"
                     alt="ルリトラ"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                ルリトラ
              </template>
              <template v-slot:social>
                <div class="d-flex align-items-center">
                  <team-tag red class="mr-1"/>
                  <div>
                    <a href="https://twitter.com/murabitoA3714" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </div>
                </div>
              </template>
              <template v-slot:poem>
                ねたぎれ
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/tmkr04/DAY2/4d24.jpg"
                     alt="DJ GOKUDO"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                DJ GOKUDO
              </template>
              <template v-slot:social>
                <div class="d-flex align-items-center">
                  <team-tag blue class="mr-1"/>
                  <div>
                    <a href="https://twitter.com/maag2nd" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </div>
                </div>
              </template>
              <template v-slot:poem>
                次回、ボーナス確定
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/tmkr04/DAY2/4d25.png"
                     alt="TMTMN"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                TMTMN
              </template>
              <template v-slot:social>
                <div class="d-flex align-items-center">
                  <team-tag red class="mr-1"/>
                  <div>
                    <a href="https://twitter.com/tomatoman714" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </div>
                </div>
              </template>
              <template v-slot:poem>
                DDJ-800に機種変更しました♡
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/tmkr04/DAY2/4d26.png"
                     alt="OKAZ"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                OKAZ
              </template>
              <template v-slot:social>
                <div class="d-flex align-items-center">
                  <team-tag red class="mr-1"/>
                  <div>
                    <a href="https://twitter.com/Not_Eat_Okaz" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </div>
                </div>
              </template>
              <template v-slot:poem>
                何しようか考えてます。ワクワク。
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/tmkr04/DAY2/4d27.jpg"
                     alt="甘納豆"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                甘納豆
              </template>
              <template v-slot:social>
                <div class="d-flex align-items-center">
                  <team-tag red class="mr-1"/>
                  <div>
                    <a href="https://twitter.com/AmaNato0" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </div>
                </div>
              </template>
              <template v-slot:poem>
                アゲるプレイングしかしたくないです。
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/tmkr04/DAY2/4d28.jpg"
                     alt="DJ SunShine"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                DJ SunShine
              </template>
              <template v-slot:social>
                <div class="d-flex align-items-center">
                  <team-tag blue class="mr-1"/>
                  <div>
                    <a href="https://twitter.com/DJ_SS_3015" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </div>
                </div>
              </template>
              <template v-slot:poem>
                一緒に暴れ狂いましょう
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/tmkr04/DAY2/4d29.JPG"
                     alt="DAイチ"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                DAイチ
              </template>
              <template v-slot:social>
                <div class="d-flex align-items-center">
                  <team-tag blue class="mr-1"/>
                  <div>
                    <a href="https://twitter.com/ddd_aaa_1" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </div>
                </div>
              </template>
              <template v-slot:poem>
                お酒
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
          <div>
            <h1 class="font-expletus text-strong">
              DAY 3
            </h1>
            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/tmkr04/DAY3/4d31.png"
                     alt="さけとば"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                さけとば
              </template>
              <template v-slot:social>
                <div class="d-flex align-items-center">
                  <team-tag red class="mr-1"/>
                  <div>
                    <a href="https://twitter.com/s__toba" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </div>
                </div>
              </template>
              <template v-slot:poem>
                日常系はいいぞ
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/tmkr04/DAY3/4d32.JPG"
                     alt="Shock_Pan"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                Shock_Pan
              </template>
              <template v-slot:social>
                <div class="d-flex align-items-center">
                  <team-tag red class="mr-1"/>
                  <div>
                    <a href="https://twitter.com/mgn_shock_pan" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </div>
                </div>
              </template>
              <template v-slot:poem>
                "でもタマクラってなんだ...?<br>
                タマオフリベンジ、がんばります。"
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/tmkr04/DAY3/4d33.jpeg"
                     alt="こうやん"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                こうやん
              </template>
              <template v-slot:social>
                <div class="d-flex align-items-center">
                  <team-tag red class="mr-1"/>
                  <div>
                    <a href="https://twitter.com/Empty_F1fth" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </div>
                </div>
              </template>
              <template v-slot:poem>
                ギターぎゅいーん
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/tmkr04/DAY3/4d34.jpg"
                     alt="じっつ"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                じっつ
              </template>
              <template v-slot:social>
                <div class="d-flex align-items-center">
                  <team-tag blue class="mr-1"/>
                  <div>
                    <a href="https://twitter.com/jt__1" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </div>
                </div>
              </template>
              <template v-slot:poem>
                え、開催される頃には虹終わってるんですか？
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/tmkr04/DAY3/4d35.jpg"
                     alt="Web担当"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                Web担当
              </template>
              <template v-slot:social>
                <div class="d-flex align-items-center">
                  <team-tag blue class="mr-1"/>
                </div>
              </template>
              <template v-slot:poem>
                この場を借りてのお願いです。<br>
                強いお酒をロックで啜りながら聴くやつなので対応お願いします。
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/tmkr04/DAY3/4d36.png"
                     alt="謎のアニソンDJ"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                謎のアニソンDJ
              </template>
              <template v-slot:social>
                <div class="d-flex align-items-center">
                  <team-tag red class="mr-1"/>
                </div>
              </template>
              <template v-slot:poem>
                アニソンDJ...できん...ｗｗ
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/tmkr04/DAY3/4d37.jpeg"
                     alt="ツカタク"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                ツカタク
              </template>
              <template v-slot:social>
                <div class="d-flex align-items-center">
                  <team-tag blue class="mr-1"/>
                  <div>
                    <a href="https://twitter.com/tsukataku_s" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </div>
                </div>
              </template>
              <template v-slot:poem>
                デカDJ兼神絵師目指してます
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/tmkr04/DAY3/4d38.jpg"
                     alt="いとま"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                いとま
              </template>
              <template v-slot:social>
                <div class="d-flex align-items-center">
                  <team-tag red class="mr-1"/>
                  <div>
                    <a href="https://twitter.com/itoma425" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </div>
                </div>
              </template>
              <template v-slot:poem>
                完全にネタが尽きました。
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/tmkr04/DAY3/4d39.png"
                     alt="EMURACOOL"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                EMURACOOL
              </template>
              <template v-slot:social>
                <div class="d-flex align-items-center">
                  <team-tag blue class="mr-1"/>
                  <div>
                    <a href="https://twitter.com/OrijinHeathaze" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </div>
                </div>
              </template>
              <template v-slot:poem>
                you may pay 1 life and exile a blue card from your rather pay this spell's mana cost. Counter target
                spell.
              </template>
            </dj-profile>
          </div>
        </template>
      </vertical-title-container>

    </div>
  </div>
</template>

<script>
import {mapMutations} from "vuex";
import {faSoundcloud, faTwitch, faTwitter} from "@fortawesome/free-brands-svg-icons";
import VerticalTitleContainer from "../../components/layouts/VerticalTitleContainer";
import DjProfile from "../../components/layouts/DjProfile";
import TeamTag from "../../components/tag/TeamTag";

export default {
  name: "tmkr04",
  components: {TeamTag, DjProfile, VerticalTitleContainer},
  mounted() {
    this.setBackgroundColor("#E3F2FD");
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
  head() {
    return {
      title: 'タマクラ4',
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: 'タマクラ4 | ヒナクラ'
        },
        {
          hid: 'description',
          name: 'description',
          content: '── DJのタマゴ、出陣 ─── 「またチームバトルってやつしませんか？」という名目で' +
              'オタクたちが大暴れ！アニクラってなに？って人にオススメの' +
              '初心者向けノンレギュイベント！#ヒナクラ に参加するオタクが練習をする配信だよ' +
              'アニクラ初見？大丈夫！DJもほぼ初心者！ただし、熱意とセトリは"本物"'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `${process.env.BASE_URL / this.$route.fullPath}`,
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'タマクラ4',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${process.env.BASE_URL}/img/logos/tmkr04_logo.png`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: '── DJのヒナ、出陣 ───',
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@mixin shadow($offset_x: 0.5em, $offset_y: 0.5em, $blur:0, $color: #26C6DA) {
  filter: drop-shadow($offset_x $offset_y $blur $color);
}

.tmkr4-shadow-rb {
  @include shadow;
}

.tmkr4-shadow-rb-sm {
  @include shadow(.0625em, .0625em, 0, #E3F2FD);
}

.tmkr4-shadow-lb {
  @include shadow(-.5em);
}

.tmkr4-shadow-lb-sm {
  @include shadow(-.0625em, .0625em, 0, #E3F2FD);
}
</style>