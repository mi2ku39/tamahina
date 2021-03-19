<template>
  <div>
    <div class="container bg-white fill-right mt-5 hnkr-shadow-lb slide-in-from-right">
      <div class="row">
        <div class="col-12 text-center my-5">
          <img src="/img/logos/hnkr.png"
               alt="ヒナクラ"
               class="img-fluid"/>
        </div>

        <div class="col-12 text-center">
          <h2 style="color: #f44336;">
            ── DJのヒナ、飛翔 ───
          </h2>
          <p>
            <b>「⚡大の変な奴らの卒業祝い」</b>という名目で<br>
            オタクたちが大はしゃぎ！<br>
            <br>
            アニクラってなに？って人にオススメの<br>
            初心者向けノンレギュイベント！<br>
            リアルアニクラ初見？大丈夫！DJもほぼ初心者！<br>
            ただし、<b>熱意とセトリは"本物"</b>
          </p>
        </div>

        <div class="col-12 text-center">
          <h1 class="font-expletus text-strong hnkr-shadow-lb-sm mb-0">
            開催日時
          </h1>
          <h2 class="text-hi mt-0">
            2021/3/20 14:00~
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
            Time Table
          </h1>
          <div>
            <img src="@/assets/img/social_icons/hnkr/k1v2.jpg" class="w-100">
          </div>
        </div>
      </div>
    </div>

    <div class="container bg-white fill-left mt-5 hnkr-shadow-lb slide-in-from-left py-3">
      <div class="row">
        <div class="col-12">
          <h1 class="font-expletus text-strong hnkr-shadow-rb-sm">
            Members
          </h1>
          <div>
            <vertical-title-container class="mb-5">
              <template #title>
                First Harf
              </template>
              <template #body>
                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/hnkr/DJs/H_01.png"
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
                    ご卒業おめでとうございます。そうでない方は一緒に頑張りましょう。
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/hnkr/DJs/H_02.jpg"
                         alt="john"
                         class="img-icon img-round"/>
                  </template>
                  <template v-slot:name>
                    john
                  </template>
                  <template v-slot:social>
                    <a href="https://twitter.com/_krym31" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </template>
                  <template v-slot:poem>
                    ありがとう
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/hnkr/DJs/H_03.jpg"
                         alt="ケー"
                         class="img-icon img-round"/>
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
                    最後だしオタク泣かせますね<br>
                    いい曲聞いて、幸せになろう
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/hnkr/DJs/H_04.PNG"
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
                    もし自分が音を止めても<br>
                    卒業する皆さんは歩みを止めないでください
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/hnkr/DJs/H_05.jpeg"
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
                    やっとここまで、歩いてきた。
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/hnkr/DJs/H_06.jpg"
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
                    机とコンセントだけあればどこでも皿を回せて<br>
                    なんなら配信までできるセット、貸し出しやってます
                  </template>
                </dj-profile>
              </template>
            </vertical-title-container>

            <vertical-title-container class="mb-5">
              <template #title>
                Latter Harf
              </template>
              <template #body>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/hnkr/DJs/H_09.jpg"
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
                    あなたのことが大好きなメイドさんに<br>
                    溺れるほど(物理)愛されて<br>
                    眠れない癒し音声
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/hnkr/DJs/H_08.jpg"
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
                    解き放つさよなら<br>
                    溢れ出すありがとう
                  </template>
                </dj-profile>


                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/hnkr/DJs/H_10.png"
                         alt="Shock_Pan a.k.a. 旧:ふくとも"
                         class="img-icon img-round"/>
                  </template>
                  <template v-slot:name>
                    Shock_Pan a.k.a. 旧:ふくとも
                  </template>
                  <template v-slot:social>
                    <a href="https://twitter.com/mgn_shock_pan" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </template>
                  <template v-slot:poem>
                    好きな作品の最終巻がなかなか読めないタイプのオタクですが、<br>
                    ヒナクラやろうぜが僕たちのスタートラインなので逃げられません。
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/hnkr/DJs/H_07.jpeg"
                         alt="堀川 進"
                         class="img-icon img-round"/>
                  </template>
                  <template v-slot:name>
                    堀川 進
                  </template>
                  <template v-slot:social>
                    <a href="https://twitter.com/susumu_horikawa" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </template>
                  <template v-slot:poem>
                    ☆バ先ソング流すね☆
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/hnkr/DJs/H_11.jpg"
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
                    卒業できるかわかりません
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/hnkr/DJs/H_12.jpg"
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
                    今までタマクラ関係でお世話になった方々やソフ研と魔研の関係者お待ちしています<br>
                    呼び方わからん！
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
  head() {
    return {
      title: 'イベント詳細',
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: 'ヒナクラ | ⚡大17代の卒業祝いアニクラ'
        },
        {
          hid: 'description',
          name: 'description',
          content: '── DJのヒナ、飛翔 ─── 「⚡大の変な奴らの卒業祝い」という名目で' +
              'オタクたちが酒入れながら大はしゃぎ！アニクラってなに？って人にオススメの' +
              '初心者向けノンレギュイベント！リアルアニクラ初見？大丈夫！DJもほぼ初心者！ただし、熱意とセトリは"本物"'
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
          content: '⚡大17代の卒業祝いアニクラ',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${process.env.BASE_URL}/img/logos/hnkr.png`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: '── DJのヒナ、飛翔 ───',
        }
      ]
    }
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