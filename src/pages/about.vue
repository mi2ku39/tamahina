<template>
  <div>
    <div class="container fade-in">
      <div class="row align-items-center">
        <div class="col-12 col-lg-6">
          <img src="@/assets/img/hmlr_logo_n.png" class="w-100" style="margin-top: 60px;"/>
        </div>
        <div class="col-12 col-lg-6">
          <img src="@/assets/img/tmkr1_logo.png" class="w-100"/>
        </div>
      </div>
    </div>

    <div class="bg-white my-5 container fill-right index-shadow-lb slide-in-from-right">
      <div class="row">
        <div class="col-12 pb-3">
          <h1 class="font-noto text-hi index-shadow-lb-sm">
            タマクラ / ヒナクラ とは？
          </h1>
          <p>
            ⚡大17代の卒業祝いアニクラとして2021/03/06に「ヒナクラ」を開催！<br>
            またヒナクラ参加DJの練習としてDJの"タマゴ"向けオンラインアニクラ「タマクラ」も定期的に開催！
          </p>
        </div>
      </div>
    </div>

    <div class="container fade-in">
      <div class="row align-items-center">
        <div class="col-12 col-lg-6 mb-3 index-shadow-lb">
          <img src="@/assets/img/about/a1.png" class="w-100"/>
        </div>
        <div class="col-12 col-lg-6 mb-3 index-shadow-lb">
          <img src="@/assets/img/about/a2.png" class="w-100"/>
        </div>
        <div class="col-12 col-lg-6 mb-3 index-shadow-lb">
          <img src="@/assets/img/about/a3.png" class="w-100"/>
        </div>
        <div class="col-12 col-lg-6 mb-3 index-shadow-lb">
          <img src="@/assets/img/about/a4.png" class="w-100"/>
        </div>
      </div>
    </div>

    <div class="container my-5">
      <div class="row">
        <div class="col-12 col-lg-6 fill-left index-shadow-rb slide-in-from-left">
          <h1 class="font-noto text-hi index-shadow-rb-sm">
            タマクラの特徴として視聴者さんも聞くだけじゃなく楽しめる企画を実施中！
          </h1>
          <ol class="li-margin">
            <li>
              画面になうぷれツイート表示！
            </li>
            <li>
              なうぷれツイート間で「他の人のツイートがない」 場合ランプが一つ点灯！
            </li>
            <li>
              また、「この曲選公序良俗に反してない？？」って場合鹿さんが出現！曲間で3匹以上鹿さんが現れた場合ランプが一つ点灯！
            </li>
            <li>
              3つ以上ランプが点灯した場合「DJがうまくなる飲み物」を飲んでもらいます！
            </li>
          </ol>
        </div>
        <div class="col-12 col-lg-6 d-flex flex-column align-items-center mt-5 mt-lg-0">
          <img src="@/assets/img/about/b1.png" class="w-100 index-shadow-rb mb-3"/>
          <img src="@/assets/img/about/b2.png" class="w-100 index-shadow-rb mb-3"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import DummyImage from "../components/samples/DummyImage.vue";
import {mapMutations} from "vuex";

export default {
  name: "about",
  components: {DummyImage},
  mounted() {
    this.setVisitIn(this.$route.name);
    this.setBackgroundColor('#FAFAFA');
  },
  methods: {
    ...mapMutations({
      setBackgroundColor: 'setBackgroundColor',
      setVisitIn: 'setVisitIn'
    })
  },
  head() {
    return {
      title: 'タマクラ',
      meta: [
        {
          property: 'og:type',
          content: 'article',
        },
        {
          property: 'og:title',
          content: 'about',
        },
        {
          property: 'og:image',
          content: '/img/logos/hnkr.png',
        },
        {
          property: 'og:description',
          content: 'タマクラ / ヒナクラ とは？⚡大17代の卒業祝いアニクラとして2021/03/06に「ヒナクラ」を開催！' +
              'またヒナクラ参加DJの練習としてDJの"タマゴ"向けオンラインアニクラ「タマクラ」も定期的に開催！',
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.li-margin {
  & li {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }
}
</style>