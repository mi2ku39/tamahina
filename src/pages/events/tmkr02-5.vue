<template>
  <div>
    <div class="container bg-white fill-right mt-5 tmkr2_5-shadow-lb">
      <div class="row">
        <div class="col-12 text-center mb-3">
          <img src="@/assets/img/logos/tmkr02.5_logo.png"
               alt="タマクラ2.5"
               class="img-fluid"/>
        </div>

        <div class="col-12 text-center">
          ゆるますさん主催オンラインアニクラ大型フェス「Wave Clib Festival」にタマクラも参戦！
        </div>

        <div class="col-12 text-center">
          <h1 class="font-expletus text-strong tmkr2_5-shadow-lb-sm mb-0">
            Theme
          </h1>
          <h2 class="text-hi mt-0">
            タマクラっぽいの
          </h2>

          <h1 class="text-strong tmkr2_5-shadow-lb-sm mb-0">
            開催日時
          </h1>
          <h2 class="text-hi my-0">
            2020/8/30 14:00~
          </h2>

          <h1 class="font-expletus text-strong tmkr2_5-shadow-lb-sm mb-0">
            会場
          </h1>
          <h2 class="text-hi mt-0">
            Wave Clib Festival ( Twitch
            <fa :icon="fa.twitch"/>
            )
          </h2>

          <h1 class="font-expletus text-strong tmkr2_5-shadow-lb-sm mb-0">
            参加表明
          </h1>
          <h2 class="text-hi mt-0">
            <a href="https://twipla.jp/events/454289" target="_blank">
              twipla
            </a>
          </h2>

        </div>
      </div>
    </div>

    <div class="container bg-white fill-left mt-5 tmkr2_5-shadow-rb py-3">
      <div class="row">
        <div class="col-12">
          <div class="text-center">
            <h1 class="font-expletus text-strong tmkr2_5-shadow-rb-sm">
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
                    <img src="@/assets/img/social_icons/tmkr02-5/Shock_Pan.png"
                         alt="Shock_Pan"
                         class="img-icon img-round"/>
                  </template>
                  <template v-slot:name>
                    Shock_Pan
                  </template>
                  <template v-slot:social>
                    <a href="https://twitter.com/mgn_shock_pan" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/tmkr02-5/Daichi.png"
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
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/tmkr02-5/ji__1.png"
                         alt="じっつ"
                         class="img-icon img-round">
                  </template>
                  <template v-slot:name>
                    じっつ
                  </template>
                  <template v-slot:social>
                    <a href="https://twitter.com/jt__1" target="_blank">
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
import {faTwitch, faTwitter} from "@fortawesome/free-brands-svg-icons";
import VerticalTitleContainer from "../../components/layouts/VerticalTitleContainer";
import DjProfile from "../../components/layouts/DjProfile";
import DummyImage from "../../components/samples/DummyImage";
import {mapMutations} from "vuex";

export default {
  name: "tmkr02-5",
  components: {DummyImage, DjProfile, VerticalTitleContainer},
  mounted() {
    this.setBackgroundColor("#E0F2F1");
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
@mixin shadow($offset_x: 0.5em, $offset_y: 0.5em, $blur:0, $color: #A7FFEB) {
  filter: drop-shadow($offset_x $offset_y $blur $color);
}

.tmkr2_5-shadow-rb {
  @include shadow;
}

.tmkr2_5-shadow-rb-sm {
  @include shadow(.0625em, .0625em, 0, #A7FFEB);
}

.tmkr2_5-shadow-lb {
  @include shadow(-.5em);
}

.tmkr2_5-shadow-lb-sm {
  @include shadow(-.0625em, .0625em, 0, #A7FFEB);
}
</style>