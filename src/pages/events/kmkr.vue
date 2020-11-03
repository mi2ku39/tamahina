<template>
  <div>
    <div class="container bg-white fill-right mt-5 kmkr-shadow-lb slide-in-from-right">
      <div class="row">
        <div class="col-12 text-center my-3">
          <img src="@/assets/img/logos/kmkr.png"
               alt="カメクラ"
               class="img-fluid"/>
        </div>

        <div class="col-12 text-center">
          <p>
            ── DJのタマゴ、仮装 ───
          </p>
          <p>
            「お面被ってアニクラしたら面白くね？」という名目で<br>
            オタクたちが大暴れ！<br>
            <br>
            アニクラってなに？って人にオススメの<br>
            初心者向けノンレギュイベント！<br>
            <a href="https://twipla.jp/events/447454" target="_blank">#ヒナクラ</a> に参加するオタクが練習をする配信だよ<br>
            アニクラ初見？大丈夫！DJもほぼ初心者！<br>
            ただし、熱意とセトリは"本物"<br>
          </p>
        </div>

        <div class="col-12 text-center">
          <h1 class="text-strong kmkr-shadow-lb-sm mb-0">
            開催日時
          </h1>
          <h2 class="text-hi my-0">
            11/7 22:00~
          </h2>

          <h1 class="font-expletus text-strong kmkr-shadow-lb-sm mb-0">
            会場
          </h1>
          <h2 class="text-hi my-0">
            <a href="https://www.twitch.tv/tamakura_hinakura" target="_blank">
              Twitch
              <fa :icon="fa.twitch"/>
            </a>
            & スタジオよもだ
          </h2>

          <h1 class="font-expletus text-strong kmkr-shadow-lb-sm mb-0">
            参加表明
          </h1>
          <h2 class="text-hi my-0">
            <a href="https://twipla.jp/events/460799" target="_blank">
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

    <div class="container bg-white fill-left mt-5 kmkr-shadow-rb py-3 slide-in-from-right">
      <div class="row">
        <div class="col-12">
          <div class="text-center">
            <h1 class="font-expletus text-strong kmkr-shadow-rb-sm">
              Members
            </h1>
          </div>

          <vertical-title-container class="mb-5">
            <template v-slot:title>
              DJs
            </template>
            <template v-slot:body>
              <div>
                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/kmkr/DJ0_SZKZAOB.png"
                         alt="SZKZAOB"
                         class="img-icon img-round"/>
                  </template>
                  <template v-slot:name>
                    SZKZ_AOB
                  </template>
                  <template v-slot:social>
                    <a href="https://twitter.com/DJ_AOB_ZOY" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </template>
                  <template v-slot:poem>
                    会社に最近の活動とアカウントばれた・・・
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/kmkr/DJ1_webcreator.jpg"
                         alt="Web担当"
                         class="img-icon img-round">
                  </template>
                  <template v-slot:name>
                    Web担当
                  </template>
                  <template v-slot:poem>
                    ヒナクラ/タマクラのWebサイト作った人です。<br>
                    DJはじめてです。
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/kmkr/DJ2_John_Smith.png"
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
                    Pハイスクールフリートをよろしくお願いします。
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/kmkr/DJ3_TMTMN.png"
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
                    ゲイヴ・ニューウェルを讃えよ
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/kmkr/DJ4_OKAZ.jpeg"
                         alt="OKAZ"
                         class="img-icon img-round">
                  </template>
                  <template v-slot:name>
                    OKAZ
                  </template>
                  <template v-slot:social>
                    <a href="https://twitter.com/OKAZ_DJ_Wing3" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </template>
                  <template v-slot:poem>
                    飛ぶ準備だけしてきてください
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/kmkr/DJ5_SunShine.jpg"
                         alt="DJ SunShine"
                         class="img-icon img-round">
                  </template>
                  <template v-slot:name>
                    DJ SunShine
                  </template>
                  <template v-slot:social>
                    <a href="https://twitter.com/DJ__SunShine" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </template>
                  <template v-slot:poem>
                    テンションをぶっ壊す☆
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/kmkr/DJ6_DJ_H_Fujioka.png"
                         alt="DJ_H_Fuzioka"
                         class="img-icon img-round">
                  </template>
                  <template v-slot:name>
                    DJ_H_Fuzioka
                  </template>
                  <template v-slot:poem>
                    指が折れるまで！！
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/kmkr/DJ7_DJkokona_shinonome.jpeg"
                         alt="DJ東雲心菜"
                         class="img-icon img-round">
                  </template>
                  <template v-slot:name>
                    DJ東雲心菜
                  </template>
                  <template v-slot:social>
                    <a href="https://twitter.com/DJ_kokona" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </template>
                  <template v-slot:poem>
                    双子アイドルユニット「ここなつ」の1人で夏陽の妹。
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/kmkr/DJ8_KASUMI_N.png"
                         alt="KASUMI_N"
                         class="img-icon img-round">
                  </template>
                  <template v-slot:name>
                    KASUMI_N
                  </template>
                  <template v-slot:social>
                    <a href="https://twitter.com/KASUMI______N" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </template>
                  <template v-slot:poem>
                    わわ！！私は中須かすみじゃありません！
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/kmkr/DJ9_DJ_Julia.jpeg"
                         alt="DJ Julia"
                         class="img-icon img-round">
                  </template>
                  <template v-slot:name>
                    DJ Julia
                  </template>
                  <template v-slot:social>
                    <a href="https://twitter.com/Empty_F1fth" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </template>
                  <template v-slot:poem>
                    空を彩る星に乗ってあたしは未来へ願い事をたくさん詰めた鞄を握りしめ
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/kmkr/DJ10_DJ_Anna_Mochiduki.JPG"
                         alt="DJ Anna Mochiduki"
                         class="img-icon img-round">
                  </template>
                  <template v-slot:name>
                    DJ Anna Mochiduki
                  </template>
                  <template v-slot:social>
                    <a href="https://twitter.com/DJ_V2RB" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </template>
                  <template v-slot:poem>
                    杏奈、頑張ります…♪
                  </template>
                </dj-profile>
              </div>
            </template>
          </vertical-title-container>

          <vertical-title-container class="mb-5">
            <template v-slot:title>
              VJs
            </template>
            <template v-slot:body>
              <div>
                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/kmkr/vj_01.png"
                         alt="Snow_Girl"
                         class="img-icon img-round"/>
                  </template>
                  <template v-slot:name>
                    Snow_Girl
                  </template>
                  <template v-slot:social>
                    <a href="https://twitter.com/10_wia_" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/kmkr/vj_02.png"
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
              </div>
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
    this.setBackgroundColor("#E8F5E9");
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
      title: 'カメクラ',
      meta: [
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
          content: 'カメクラ',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${process.env.BASE_URL}/img/logos/kmkr.png`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: '── DJのヒナ、仮装 ───',
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@mixin shadow($offset_x: 0.5em, $offset_y: 0.5em, $blur:0, $color: #00897B) {
  filter: drop-shadow($offset_x $offset_y $blur $color);
}

.kmkr-shadow-rb {
  @include shadow;
}

.kmkr-shadow-rb-sm {
  @include shadow(.0625em, .0625em, 0, #80CBC4);
}

.kmkr-shadow-lb {
  @include shadow(-.5em);
}

.kmkr-shadow-lb-sm {
  @include shadow(-.0625em, .0625em, 0, #80CBC4);
}
</style>