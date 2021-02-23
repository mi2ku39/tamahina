<template>
  <div>
    <div class="container bg-white fill-right mt-5 hnkr0-shadow-lb slide-in-from-right">
      <div class="row">
        <div class="col-12 text-center mt-3 mb-5">
          <img src="/img/logos/hnkr0_logo.png"
               alt="ヒナクラ0"
               class="img-fluid"/>
        </div>

        <div class="col-12 text-center">
          <p>
            ── DJのヒナ、激励 ───
          </p>
          <p>
            「今回はオンライン配信オンリーです」<br>
            <br>
            アニクラってなに？って人にオススメの<br>
            初心者向けノンレギュイベント！<br>
            <a href="https://twipla.jp/events/447454" target="_blank">#ヒナクラ</a> に参加するDJ陣を激励するための配信！<br>
            アニクラ初見？大丈夫！DJもほぼ初心者！<br>
            ただし、熱意とセトリは"本物"<br>
          </p>
        </div>

        <div class="col-12 text-center">
          <h1 class="font-expletus text-strong hnkr0-shadow-lb-sm mb-0">
            開催日時
          </h1>
          <h2 class="text-hi my-0">
            DAY1: 2021/3/14 21:00~
          </h2>
          <h2 class="text-hi mt-0">
            DAY2: 2021/3/19 21:00~
          </h2>

          <h1 class="font-expletus text-strong hnkr0-shadow-lb-sm mb-0">
            会場
          </h1>
          <h2 class="mt-0 text-hi">
            <a href="https://www.twitch.tv/tamakura_hinakura" target="_blank">
              Twitch
              <fa :icon="fa.twitch"/>
            </a>
          </h2>

          <h1 class="font-expletus text-strong hnkr0-shadow-lb-sm mb-0">
            詳細
          </h1>
          <h2 class="text-hi mt-0">
            <a href="https://twipla.jp/events/474350" target="_blank">
              twipla
            </a>
          </h2>

        </div>
      </div>
    </div>

    <div class="container bg-white fill-left mt-5 hnkr0-shadow-rb slide-in-from-left py-3">
      <div class="row">
        <div class="col-12">
          <h1 class="font-expletus text-strong hnkr0-shadow-rb-sm">
            Time Table
          </h1>
          <div>
            <img src="@/assets/img/social_icons/hnkr0/z1.png" class="w-100">
          </div>
        </div>
      </div>
    </div>

    <div class="container bg-white fill-right mt-5 hnkr0-shadow-lb slide-in-from-right">
      <div class="row">
        <div class="col-12">
          <h1 class="font-expletus text-strong hnkr0-shadow-rb-sm">
            Members
          </h1>
          <div>
            <vertical-title-container class="mb-5">
              <template #title>
                DAY 1
              </template>
              <template #body>
                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/hnkr0/DAY1/F1_01.jpg"
                         alt="ミモカ"
                         class="img-icon img-round"/>
                  </template>
                  <template v-slot:name>
                    ミモカ
                  </template>
                  <template v-slot:poem>
                    タマクラがぼくをヒナにした―
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/hnkr0/DAY1/F1_02.png"
                         alt="YU3S"
                         class="img-fluid"/>
                  </template>
                  <template v-slot:name>
                    YU3S
                  </template>
                  <template v-slot:social>
                    <a href="https://twitter.com/YU3S_SH1NY" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </template>
                  <template v-slot:poem>
                    イイ感じに頑張ります！
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/hnkr0/DAY1/F1_03.JPG"
                         alt="specia"
                         class="img-icon img-round"/>
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
                    卒業ソング
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/hnkr0/DAY1/F1_04.png"
                         alt="suicat"
                         class="img-icon"/>
                  </template>
                  <template v-slot:name>
                    suicat
                  </template>
                  <template v-slot:social>
                    <a href="https://twitter.com/mr_s_21s" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </template>
                  <template v-slot:poem>
                    飛び立つDJのヒナたちに向けて反面教師として<br>
                    教鞭と音の暴力を振るっていきたいと思います
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/hnkr0/DAY1/F1_05.jpeg"
                         alt="中国四千年"
                         class="img-icon img-round"/>
                  </template>
                  <template v-slot:name>
                    中国四千年
                  </template>
                  <template v-slot:social>
                    <a href="https://twitter.com/Nozomi_kasa_ki" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </template>
                  <template v-slot:poem>
                    岡咲美保さん、めっちゃ可愛い。
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/hnkr0/DAY1/F1_06.png"
                         alt="TMTMN"
                         class="img-icon img-round"/>
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
                    全盛期は"ゼロ"際にもなっていませんでした。<br>
                    ゼロってことでinstもちょっとだけ流します。
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/hnkr0/DAY1/F1_07.jpg"
                         alt="ぴろー"
                         class="img-icon img-round"/>
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
                    社会人の先輩として、巣立つ皆様にメッセージを送ります
                  </template>
                </dj-profile>
              </template>
            </vertical-title-container>

            <vertical-title-container class="mb-5">
              <template #title>
                DAY 2
              </template>
              <template #body>
                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/hnkr0/DAY2/F2_01.png"
                         alt="ダークSZKZ"
                         class="img-icon img-round"/>
                  </template>
                  <template v-slot:name>
                    ダークSZKZ
                  </template>
                  <template #social>
                    <a href="https://twitter.com/siopaseri" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </template>
                  <template v-slot:poem>
                    SZKZ_AOB最後の出番です
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/hnkr0/DAY2/F2_02.png"
                         alt="鮭とば"
                         class="img-icon img-round"/>
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
                    卒業と仕事をください。
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/hnkr0/DAY2/F2_03.JPG"
                         alt="ガイエン"
                         class="img-icon img-round"/>
                  </template>
                  <template v-slot:name>
                    ガイエン
                  </template>
                  <template v-slot:social>
                    <a href="https://twitter.com/gaien_daigaku" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </template>
                  <template v-slot:poem>
                    ジャンプの曲流すかは不明です
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/hnkr0/DAY2/F2_04.jpeg"
                         alt="ツカタク"
                         class="img-icon img-round"/>
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
                    なんやかんやこの系列3回も出演させていただいたので<br>
                    今回は集大成！という感じでいきます
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/hnkr0/DAY2/F2_05.jpg"
                         alt="hide"
                         class="img-icon img-round"/>
                  </template>
                  <template v-slot:name>
                    hide
                  </template>
                  <template v-slot:social>
                    <a href="https://twitter.com/HIDE517314" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </template>
                  <template v-slot:poem>
                    多分インターネットミュージック
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/hnkr0/DAY2/F2_06.jpg"
                         alt="DAイチ"
                         class="img-icon img-round"/>
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
                    またね
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/hnkr0/DAY2/F2_07.jpg"
                         alt="ルリトラ"
                         class="img-icon img-round"/>
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
                    タマクラデビュー勢としてバトン繋ぎに来ました
                  </template>
                </dj-profile>

              </template>
            </vertical-title-container>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapMutations} from "vuex"
import {faTwitch, faTwitter} from '@fortawesome/free-brands-svg-icons';
import VerticalTitleContainer from "../../components/layouts/VerticalTitleContainer";
import DummyImage from "../../components/samples/DummyImage";
import DjProfile from "../../components/layouts/DjProfile";

export default {
  name: "hnkr0",
  components: {DjProfile, DummyImage, VerticalTitleContainer},
  mounted() {
    this.setBackgroundColor('#eee');
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
        twitter: faTwitter
      }
    }
  },
  head() {
    return {
      title: 'ヒナクラゼロ',
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: 'ヒナクラゼロ | ヒナクラ'
        },
        {
          hid: 'description',
          name: 'description',
          content: '── DJのヒナ、激励 ─── 「今回はオンライン配信オンリーです」' +
              'アニクラってなに？って人にオススメの初心者向けノンレギュイベント！' +
              '#ヒナクラ に参加するDJ陣を激励するための配信！アニクラ初見？大丈夫！DJもほぼ初心者！' +
              'ただし、熱意とセトリは"本物"'
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
          content: 'ヒナクラゼロ',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${process.env.BASE_URL}/img/logos/hnkr0_logo.png`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: '── DJのヒナ、激励 ───',
        }
      ]
    }
  }
}
</script>
<style lang="scss">
@mixin shadow($offset_x: 0.5em, $offset_y: 0.5em, $blur:0, $color: #212121) {
  filter: drop-shadow($offset_x $offset_y $blur $color);
}

.hnkr0-shadow-rb {
  @include shadow;
}

.hnkr0-shadow-rb-sm {
  @include shadow(.0625em, .0625em, 0, #BDBDBD);
}

.hnkr0-shadow-lb {
  @include shadow(-.5em);
}

.hnkr0-shadow-lb-sm {
  @include shadow(-.0625em, .0625em, 0, #BDBDBD);
}
</style>