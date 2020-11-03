<template>
  <div>
    <div class="container bg-white fill-right mt-5 tmkr0-shadow-lb slide-in-from-right">
      <div class="row">
        <div class="col-12 text-center mb-3">
          <img src="@/assets/img/logos/tmkr00_logo.png"
               alt="タマクラ0"
               class="img-fluid"/>
        </div>
        <div class="col-12 text-center">
          <h1 class="font-expletus text-strong tmkr0-shadow-lb-sm mb-0">
            開催日時
          </h1>
          <h2 class="text-hi mt-0">
            2020/5/20 22:00~
          </h2>

          <h1 class="font-expletus text-strong tmkr0-shadow-lb-sm mb-0">
            会場
          </h1>
          <h2 class="text-hi mt-0">
            <a href="https://www.twitch.tv/tamakura_hinakura" target="_blank">
              Twitch
              <fa :icon="fa.twitch"/>
            </a>
          </h2>

        </div>
      </div>
    </div>

    <div class="container bg-white fill-left mt-5 tmkr0-shadow-rb slide-in-from-left py-3">
      <div class="row">
        <div class="col-12 text-center">
          <h1 class="font-expletus text-strong tmkr0-shadow-rb-sm">
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
                    <img src="@/assets/img/social_icons/tmkr00/emuracool.jpg"
                         alt="emuracool"
                         class="img-icon img-round">
                  </template>
                  <template v-slot:name>
                    emuracool
                  </template>
                  <template v-slot:social>
                    <a href="https://twitter.com/OrijinHeathaze">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/tmkr00/siopaseri.jpg"
                         alt="塩パセリ"
                         class="img-round img-icon">
                  </template>
                  <template v-slot:name>
                    塩パセリ
                  </template>
                  <template v-slot:social>
                    <a href="https://twitter.com/siopaseri">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/tmkr00/AmaNato0.jpg"
                         alt="甘納豆"
                         class="img-icon img-round">
                  </template>
                  <template v-slot:name>
                    甘納豆
                  </template>
                  <template v-slot:social>
                    <a href="https://twitter.com/AmaNato0">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/tmkr00/drag_chai.jpg"
                         alt="ちゃい"
                         class="img-icon img-round">
                  </template>
                  <template v-slot:name>
                    ちゃい
                  </template>
                  <template v-slot:social>
                    <a href="https://twitter.com/drag_chai">
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
import {mapMutations} from "vuex"
import {faTwitch, faTwitter} from '@fortawesome/free-brands-svg-icons';
import VerticalTitleContainer from "../../components/layouts/VerticalTitleContainer";
import DummyImage from "../../components/samples/DummyImage";
import DjProfile from "../../components/layouts/DjProfile";

export default {
  name: "tmkr00",
  components: {DjProfile, DummyImage, VerticalTitleContainer},
  mounted() {
    this.setBackgroundColor('#FFFFFF');
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
      title: 'タマクラ0',
      meta: [
        {
          property: 'og:type',
          content: 'article',
        },
        {
          property: 'og:title',
          content: 'タマクラ0',
        },
        {
          property: 'og:image',
          content: '/img/logos/tmkr00_logo.png',
        },
        {
          property: 'og:description',
          content: 'タマクラ0のイベントページです。',
        }
      ]
    }
  }
}
</script>
<style lang="scss">
@mixin shadow($offset_x: 0.5em, $offset_y: 0.5em, $blur:0, $color: #FFF59D) {
  filter: drop-shadow($offset_x $offset_y $blur $color);
}

.tmkr0-shadow-rb {
  @include shadow;
}

.tmkr0-shadow-rb-sm {
  @include shadow(.0625em, .0625em, 0, #FFF59D);
}

.tmkr0-shadow-lb {
  @include shadow(-.5em);
}

.tmkr0-shadow-lb-sm {
  @include shadow(-.0625em, .0625em, 0, #FFF59D);
}
</style>