<template>
  <div>
    <div class="container bg-white fill-right mt-5 tmkr1-shadow-lb slide-in-from-right">
      <div class="row">
        <div class="col-12 text-center mb-3">
          <img src="@/assets/img/logos/tmkr01_logo.png"
               alt="タマクラ"
               class="img-fluid"/>
        </div>

        <div class="col-12 text-center">
          ──DJのタマゴ、生誕───
        </div>

        <div class="col-12 text-center">
          <h1 class="font-expletus text-strong tmkr1-shadow-lb-sm mb-0">
            Theme
          </h1>
          <h2 class="text-hi mt-0">
            自己紹介
          </h2>

          <h1 class="text-strong tmkr1-shadow-lb-sm mb-0">
            開催日時
          </h1>
          <h2 class="text-hi mt-0">
            2020/6/6 22:00~
          </h2>

          <h1 class="font-expletus text-strong tmkr1-shadow-lb-sm mb-0">
            会場
          </h1>
          <h2 class="text-hi mt-0">
            <a href="https://www.twitch.tv/tamakura_hinakura" target="_blank">
              Twitch
              <fa :icon="fa.twitch"/>
            </a>
          </h2>

          <h1 class="font-expletus text-strong tmkr1-shadow-lb-sm mb-0">
            イベント詳細
          </h1>
          <h2 class="text-hi mt-0">
            <a href="https://twipla.jp/events/447534" target="_blank">
              twipla
            </a>
          </h2>

        </div>
      </div>
    </div>

    <div class="container bg-white fill-left mt-5 tmkr1-shadow-rb py-3">
      <div class="row">
        <div class="col-12 text-center">
          <h1 class="font-expletus text-strong tmkr1-shadow-rb-sm">
            Members
          </h1>

          <vertical-title-container>
            <template v-slot:title>
              DJs
            </template>
            <template v-slot:body>
              <div class="text-left">
                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/tmkr01/emuracool.jpg"
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
                    ニコニコ動画(原宿)時代から 令和のVまで幅広く<br>
                    卒業します
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/tmkr01/john.jpg"
                         alt="John"
                         class="img-icon img-round">
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
                    栗山未来来いよ<br>
                    アルカス久石奏、スロカス暁美ほむら
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/tmkr01/pwl32.jpg"
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
                    飛び跳ねたくなるやつ<br>
                    ちゃんと寝てる真人間ですけど
                    平日トータルで4時間以上寝てるので真人間ですけど
                    PAとかはできるけどDJになれと脅されてこんなことに
                    うちはボリュームを最大にして暴れるのが専門なんだ
                    乳酸菌を摂って闇に飲まれよ
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/tmkr01/Shock_Pan.jpg"
                         alt="Shock_Pan"
                         class="img-icon img-round">
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
                    二次ドルのオタクくん、顔面ニコニコ動画くん<br>
                    "爆踊り"、やっていこうぜ💃
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/tmkr01/ji__1.png"
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
                    2.5次元アイドル中心
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/tmkr01/su_ji_2nd.jpg"
                         alt="スージー(II世)"
                         class="img-icon img-round">
                  </template>
                  <template v-slot:name>
                    スージー(II世)
                  </template>
                  <template v-slot:social>
                    <a href="https://twitter.com/su_ji_2nd" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </template>
                  <template v-slot:poem>
                    イキってかっこいい曲知りたいオタク。<br>
                    小倉唯がTwitterに向いていないのではなく
                    お前らがTwitterに向いていないのだ。
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/tmkr01/drag_chai.jpg"
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
                    同人音楽・VTuber楽曲・音ゲ曲<br>
                    あなたのことが大好きな
                    メイドさんに死ぬほど(物理)
                    愛されて眠れない耳かき音声
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/tmkr01/AmaNato0.jpg"
                         alt="甘納豆🍊🍫"
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
                    CocoroにUO灯した者、コメントの元ネタがわかる人<br>
                    DJ初挑戦です、やっとここ-DJブース-まで歩いてきた
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/tmkr01/siopaseri.jpg"
                         alt="塩パセリ"
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
                    2010~2014アニメ、汎用デッキ、日常系<br>
                    I respect [OIEKURA]
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/tmkr01/saketoba.png"
                         alt="鮭とば"
                         class="img-icon img-round">
                  </template>
                  <template v-slot:name>
                    鮭とば
                  </template>
                  <template v-slot:poem>
                    アニメ見ると聖地を探そうとするオタク<br>
                    シオパセリ後は頼んだ ('ω')ﾉｼ
                  </template>
                </dj-profile>
              </div>
            </template>
          </vertical-title-container>
          <div class="text-center">
            and more...?
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {faTwitch, faTwitter} from "@fortawesome/free-brands-svg-icons";
import VerticalTitleContainer from "../../components/layouts/VerticalTitleContainer";
import DjProfile from "../../components/layouts/DjProfile";
import DummyImage from "../../components/samples/DummyImage";
import {mapMutations} from "vuex";

export default {
  name: "tmkr01",
  components: {DummyImage, DjProfile, VerticalTitleContainer},
  mounted() {
    this.setBackgroundColor("#FFFDE7");
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
  }
}
</script>

<style lang="scss">
@mixin shadow($offset_x: 0.5em, $offset_y: 0.5em, $blur:0, $color: #FFEE58) {
  filter: drop-shadow($offset_x $offset_y $blur $color);
}

.tmkr1-shadow-rb {
  @include shadow;
}

.tmkr1-shadow-rb-sm {
  @include shadow(.0625em, .0625em, 0, #FFF59D);
}

.tmkr1-shadow-lb {
  @include shadow(-.5em);
}

.tmkr1-shadow-lb-sm {
  @include shadow(-.0625em, .0625em, 0, #FFF59D);
}
</style>