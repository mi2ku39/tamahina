<template>
  <div>
    <div class="container bg-white fill-right mt-5 hnkr-shadow-lb slide-in-from-right">
      <div class="row">
        <div class="col-12 text-center mb-3">
          <img src="@/assets/img/logos/hnkr.png"
               alt="ヒナクラ"
               class="img-fluid"/>
        </div>

        <div class="col-12 text-center">
          ── DJのヒナ、飛翔 ───
        </div>

        <div class="col-12 text-center">
          <h1 class="font-expletus text-strong hnkr-shadow-lb-sm mb-0">
            開催日時
          </h1>
          <h2 class="text-hi mt-0">
            2021/3/6
          </h2>

          <h1 class="font-expletus text-strong hnkr-shadow-lb-sm mb-0">
            会場
          </h1>
          <h2 class="mt-0 text-hi">
            <a href="https://www.twitch.tv/tamakura_hinakura" target="_blank">
              Twitch
              <fa :icon="fa.twitch"/>
            </a>
            & 新宿azito
          </h2>

          <h1 class="font-expletus text-strong hnkr-shadow-lb-sm mb-0">
            参加表明
          </h1>
          <h2 class="text-hi my-0">
            <a href="https://twipla.jp/events/447454" target="_blank">
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

    <div class="container bg-white fill-left mt-5 hnkr-shadow-rb slide-in-from-left py-3">
      <div class="row">
        <div class="col-12">
          <h1 class="font-expletus text-strong hnkr-shadow-rb-sm">
            Members
          </h1>
          <div>
            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/hnkr/DJ1.jpg"
                     alt="emuracool"
                     class="img-icon img-round"/>
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
                卒業します
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/hnkr/DJ2.jpg"
                     alt="John"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                John
              </template>
              <template v-slot:social>
                <a href="https://twitter.com/_krym31" target="_blank">
                  <fa :icon="fa.twitter"/>
                </a>
              </template>
              <template v-slot:poem>
                アルカス久石奏、スロカス暁美ほむら
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/hnkr/DJ4.jpg"
                     alt="pwl32"
                     class="img-icon img-round"/>
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
                ちゃんと寝てる真人間ですけど<br>
                平日トータルで4時間以上寝てるので真人間ですけど<br>
                PAとかはできるけどDJになれと脅されてこんなことに<br>
                うちはボリュームを最大にして暴れるのが専門なんだ<br>
                乳酸菌を摂って闇に飲まれよ
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/hnkr/DJ3.jpg"
                     alt="Shock_Pan"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                Shock_Pan
              </template>
              <template v-slot:social>
                <a href="https://twitter.com/q_fktm" target="_blank">
                  <fa :icon="fa.twitter"/>
                </a>
              </template>
              <template v-slot:poem>
                "爆踊り"、やっていこうぜ💃
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/hnkr/DJ5.jpg"
                     alt="xai"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                xai
              </template>
              <template v-slot:social>
                <a href="https://twitter.com/xai_rakutan" target="_blank">
                  <fa :icon="fa.twitter"/>
                </a>
              </template>
              <template v-slot:poem>
                八王子の山から下山してきました。<br>
                "猿"見せつけていきます。
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/hnkr/DJ6.png"
                     alt="じっつ"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                じっつ
              </template>
              <template v-slot:social>
                <a href="https://twitter.com/jt__1" target="_blank">
                  <fa :icon="fa.twitter"/>
                </a>
              </template>
              <template v-slot:poem>
                DJでもなければ⚡ですらない主催ですが<br>
                面白そうなのでノリでやってます。<br>
                多分人生最初で最期のDJになるので推しコンテンツかけたいです、<br>
                精一杯頑張りますので 暖かく見守ってもらえると幸いです。<br>
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/hnkr/DJ7.jpg"
                     alt="ちゃい"
                     class="img-icon img-round"/>
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
                ASMR厄介おじさんと申します
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/hnkr/DJ8.jpg"
                     alt="わたあめ"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                わたあめ
              </template>
              <template v-slot:social>
                <a href="https://twitter.com/wataame_" target="_blank">
                  <fa :icon="fa.twitter"/>
                </a>
              </template>
              <template v-slot:poem>
                拗れたオタクたちの青春を揺さぶるようにプレイしていきたいと思います！<br>
                業が深いオタクまってるからね
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/hnkr/DJ9.jpg"
                     alt="甘納豆"
                     class="img-icon img-round"/>
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
                DJ初挑戦です、<br>
                やっとここ-DJブース-まで歩いてきた
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/hnkr/DJ10.jpg"
                     alt="塩パセリ"
                     class="img-icon img-round"/>
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
                全員、”沸かせます”
              </template>
            </dj-profile>

            <h2 class="text-center text-hi">
              and more...?
            </h2>
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
  name: "hnkr",
  components: {DjProfile, DummyImage, VerticalTitleContainer},
  mounted() {
    this.setBackgroundColor('#ffebee');
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
  head: {
    title: 'イベント詳細'
  }
}
</script>
<style lang="scss">
@mixin shadow($offset_x: 0.5em, $offset_y: 0.5em, $blur:0, $color: #ff1744) {
  filter: drop-shadow($offset_x $offset_y $blur $color);
}

.hnkr-shadow-rb {
  @include shadow;
}

.hnkr-shadow-rb-sm {
  @include shadow(.0625em, .0625em, 0, #ef9a9a);
}

.hnkr-shadow-lb {
  @include shadow(-.5em);
}

.hnkr-shadow-lb-sm {
  @include shadow(-.0625em, .0625em, 0, #ef9a9a);
}
</style>