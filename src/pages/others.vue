<template>
  <div>
    <div class="container">
      <div class="row align-items-center fade-in">
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
            新規参加者募集中
          </h1>
          <p>
            今後のタマクラ参加者を募集中！未経験者大歓迎！詳細は以下のフォームをご確認ください！<br>
          </p>
          <div class="text-right">
            <tama-button to="https://docs.google.com/forms/d/1ixknOly2osmkZ9CFd3XGPVc3tDMd7yBUjaFpICHs2iQ"
                         target="_blank">
              フォームを開く
            </tama-button>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white my-5 container fill-left index-shadow-rb slide-in-from-left">
      <div class="row">
        <div class="col-12 pb-3">
          <h1 class="font-noto text-hi index-shadow-lb-sm">
            運営情報
          </h1>
          <div class="container">
            <div class="row">
              <div class="col-12">
                <dj-profile>
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/organizations/hnkr_twitter.jpg"
                         alt="ヒナクラ"
                         class="img-fluid img-round">
                  </template>
                  <template v-slot:name>
                    ヒナクラ
                  </template>
                  <template v-slot:social>
                    <a href="https://twitter.com/hinakura_202103" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </template>
                  <template v-slot:poem>
                    DJのヒナ、飛翔────<br>
                    2021/03/06(土)、⚡マ生17卒記念アニクラ「#ヒナクラ」開催予定
                  </template>
                </dj-profile>
              </div>
              <div class="col-12">
                <dj-profile>
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/organizations/gs_twitter.jpg"
                         alt="GhostServer"
                         class="img-fluid img-round">
                  </template>
                  <template v-slot:name>
                    GhostServer
                  </template>
                  <template v-slot:social>
                    <a href="https://twitter.com/GhostServer_JP" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                    <a href="https://portal.ghostserver.jp" target="_blank">
                      <fa :icon="fa.globe"/>
                    </a>
                  </template>
                  <template v-slot:poem>
                    デジタルコンテンツの同人ベンダー「GhostServer」です。<br>
                    本サイトのデザイン・コーディング・運用を担当しております。
                  </template>
                </dj-profile>
              </div>
            </div>
          </div>
          <p>
            サイト・twipla掲載情報へのお問い合わせはヒナクラ、
            サイトの誤字・脱字、バグや不具合などの報告はGhostServerへお願いいたします。
          </p>
        </div>
      </div>
    </div>

    <div class="bg-white my-5 container fill-right index-shadow-lb slide-in-from-right">
      <div class="row">
        <div class="col-12 pb-3">
          <h1 class="font-noto text-hi index-shadow-lb-sm text-center">
            Overview
          </h1>
          <p class="text-center">
            Copyright &copy; 2020 ヒナクラ, GhostServer All Rights Reserved.
          </p>
          <p class="text-center">
            <tama-button to="https://github.com/DenpaGhost/tamahina"
                         target="_blank">
              View on GitHub
              <fa :icon="fa.github"/>
            </tama-button>
          </p>
          <p class="text-center">
            推奨環境: Chrome
          </p>
          <p class="text-center">
            Chrome以外のブラウザでは正しく表示されないことがあります。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import DummyImage from "../components/samples/DummyImage.vue";
import {mapMutations} from "vuex";
import TamaButton from "../components/buttons/TamaButton.vue";
import DjProfile from "../components/layouts/DjProfile.vue";
import {faGithub, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faGlobe} from "@fortawesome/free-solid-svg-icons";

export default {
  name: "other",
  components: {DjProfile, TamaButton, DummyImage},
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
      title: 'others',
      meta: [
        {
          property: 'og:type',
          content: 'article',
        },
        {
          property: 'og:title',
          content: 'others',
        },
        {
          property: 'og:image',
          content: '/img/logos/hnkr.png',
        },
        {
          property: 'og:description',
          content: '新規参加者募集中！今後のタマクラ参加者を募集中！未経験者大歓迎！',
        }
      ]
    }
  },
  computed: {
    fa: function () {
      return {
        twitter: faTwitter,
        github: faGithub,
        globe: faGlobe
      }
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