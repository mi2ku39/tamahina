<template>
  <div>
    <div class="container bg-white fill-right mt-5 tmkr3-5-shadow-lb slide-in-from-right">
      <div class="row">
        <div class="col-12 text-center mb-3">
          <img src="@/assets/img/logos/tmkr03-5_logo.png"
               alt="タマクラ3.5"
               class="img-fluid"/>
        </div>

        <div class="col-12 text-center">
          <p>
            ── DJのタマゴ、参集 ───
          </p>
          <p>
            「今回はオンライン配信オンリーです」<br>
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
          <h1 class="text-strong tmkr3-5-shadow-lb-sm mb-0">
            開催日時
          </h1>
          <h2 class="text-hi my-0">
            DAY 1: 11/15 21:00~
          </h2>
          <h2 class="text-hi my-0">
            DAY 2: 11/29 21:00~
          </h2>

          <h1 class="font-expletus text-strong tmkr3-5-shadow-lb-sm mb-0">
            会場
          </h1>
          <h2 class="text-hi my-0">
            DAY 1 / DAY 2 ともに<br>
            <a href="https://www.twitch.tv/tamakura_hinakura" target="_blank">
              Twitch
              <fa :icon="fa.twitch"/>
            </a>
          </h2>

          <h1 class="font-expletus text-strong tmkr3-5-shadow-lb-sm mb-0">
            詳細
          </h1>
          <h2 class="text-hi mt-0">
            <a href="https://twipla.jp/events/460798" target="_blank">
              twipla
            </a>
          </h2>
        </div>
      </div>
    </div>

    <div class="container bg-white fill-left mt-5 tmkr3-5-shadow-rb py-3 slide-in-from-right">
      <div class="row">
        <div class="col-12">
          <div class="text-center">
            <h1 class="font-expletus text-strong tmkr3-5-shadow-rb-sm">
              Members
            </h1>
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
                    <img src="@/assets/img/social_icons/tmkr03-5/DAY1DJs/DAY1_0.png"
                         alt="塩パセリ"
                         class="img-icon img-round"/>
                  </template>
                  <template v-slot:name>
                    塩パセリ
                  </template>
                  <template v-slot:social>
                    <a href="https://twitter.com/@siopaseri" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </template>
                  <template v-slot:poem>
                    ひぐらしのなく頃に続編、ガチで面白すぎる
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/tmkr03-5/DAY1DJs/DAY1_1.JPG"
                         alt="DAイチ"
                         class="img-icon img-round">
                  </template>
                  <template v-slot:name>
                    DAイチ
                  </template>
                  <template v-slot:social>
                    <a href="https://twitter.com/@ddd_aaa_1" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </template>
                  <template v-slot:poem>
                    19/11/3に帰して
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/tmkr03-5/DAY1DJs/DAY1_2.jpeg"
                         alt="蒼彩"
                         class="img-icon img-round">
                  </template>
                  <template v-slot:name>
                    蒼彩
                  </template>
                  <template v-slot:social>
                    <a href="https://twitter.com/aoi_water_765" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </template>
                  <template v-slot:poem>
                    ドヤ顔でプロフィールカードを提出したつもりが、別案件のテンプレだった男がいたんですよ～。なーにぃ！？やっちまったなぁ！(申し訳ありませんでした。)
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/tmkr03-5/DAY1DJs/DAY1_3.png"
                         alt="たっくん"
                         class="img-icon img-round">
                  </template>
                  <template v-slot:name>
                    たっくん
                  </template>
                  <template v-slot:social>
                    <a href="https://twitter.com/mikuta0407" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </template>
                  <template v-slot:poem>
                    がんばります
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/tmkr03-5/DAY1DJs/DAY1_4.jpg"
                         alt="咲空"
                         class="img-icon img-round">
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
                    自我、強めました
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/tmkr03-5/DAY1DJs/DAY1_5.jpg"
                         alt="hide"
                         class="img-icon img-round">
                  </template>
                  <template v-slot:name>
                    hide
                  </template>
                  <template v-slot:social>
                    <a href="https://twitter.com/@HIDE517314" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </template>
                  <template v-slot:poem>
                    頑張る
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/tmkr03-5/DAY1DJs/DAY1_6.jpg"
                         alt="ケー"
                         class="img-icon img-round">
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
                    "いつもなぜかロリコンって言われるので今回はそれを払拭するものを持っていきます"
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/tmkr03-5/DAY1DJs/DAY1_7.JPG"
                         alt="こうやん"
                         class="img-icon img-round">
                  </template>
                  <template v-slot:name>
                    こうやん
                  </template>
                  <template v-slot:social>
                    <a href="https://twitter.com/Empty_F1fth" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </template>
                  <template v-slot:poem>
                    オンラインでも暴れろ！！！！！！！！！！！！！！！
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/tmkr03-5/DAY1DJs/DAY1_8.JPG"
                         alt="ガイエン"
                         class="img-icon img-round">
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
                    別に何を流してもいいのだろう？(錬鉄の英雄並感)
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/tmkr03-5/DAY1DJs/DAY1_9.jpg"
                         alt="Ma9μ"
                         class="img-icon img-round">
                  </template>
                  <template v-slot:name>
                    Ma9μ
                  </template>
                  <template v-slot:social>
                    <a href="https://twitter.com/maag2nd" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </template>
                  <template v-slot:poem>
                    噂のタマクラさんにお邪魔することができてうれしいです
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/tmkr03-5/DAY1DJs/DAY1_10.jpg"
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
                    これ書いてる2日前に仕事辞めました
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
              <h1 class="font-expletus text-strong">
                DAY 2
              </h1>
              <dj-profile class="mb-3">
                <template v-slot:icon>
                  <img src="@/assets/img/social_icons/tmkr03-5/DAY2DJs/DAY2_0.png"
                       alt="SZKZ_AOB"
                       class="img-icon img-round">
                </template>
                <template v-slot:name>
                  SZKZ_AOB
                </template>
                <template v-slot:social>
                  <a href="https://twitter.com/https://twitter.com/DJ_AOB_ZOY" target="_blank">
                    <fa :icon="fa.twitter"/>
                  </a>
                </template>
                <template v-slot:poem>
                  原作の私、酒飲んでて草
                </template>
              </dj-profile>

              <dj-profile class="mb-3">
                <template v-slot:icon>
                  <img src="@/assets/img/social_icons/tmkr03-5/DAY2DJs/DAY2_1.jpg"
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
                  ついにエムラクールのテキストがなくなりました。つまりこれで4回目です。
                </template>
              </dj-profile>

              <dj-profile class="mb-3">
                <template v-slot:icon>
                  <img src="@/assets/img/social_icons/tmkr03-5/DAY2DJs/DAY2_2.jpg"
                       alt="いとま"
                       class="img-icon img-round">
                </template>
                <template v-slot:name>
                  いとま
                </template>
                <template v-slot:social>
                  <a href="https://twitter.com/itoma425" target="_blank">
                    <fa :icon="fa.twitter"/>
                  </a>
                </template>
                <template v-slot:poem>
                  Stella-rium erってなんですか？
                </template>
              </dj-profile>

              <dj-profile class="mb-3">
                <template v-slot:icon>
                  <img src="@/assets/img/social_icons/tmkr03-5/DAY2DJs/DAY2_3.jpg"
                       alt="Web担当"
                       class="img-icon img-round">
                </template>
                <template v-slot:name>
                  Web担当
                </template>
                <template v-slot:poem>
                  hnkr.ghostserver.jpみてね!!!!!!!!!
                </template>
              </dj-profile>

              <dj-profile class="mb-3">
                <template v-slot:icon>
                  <img src="@/assets/img/social_icons/tmkr03-5/DAY2DJs/DAY2_4.jpg"
                       alt="Wizary"
                       class="img-icon img-round">
                </template>
                <template v-slot:name>
                  Wizary
                </template>
                <template v-slot:social>
                  <a href="https://twitter.com/wizary_rnd" target="_blank">
                    <fa :icon="fa.twitter"/>
                  </a>
                </template>
                <template v-slot:poem>
                  ひよこはちょう可愛い！🐤
                </template>
              </dj-profile>

              <dj-profile class="mb-3">
                <template v-slot:icon>
                  <img src="@/assets/img/social_icons/tmkr03-5/DAY2DJs/DAY2_5.png"
                       alt="クリームソーダ"
                       class="img-icon img-round">
                </template>
                <template v-slot:name>
                  クリームソーダ
                </template>
                <template v-slot:social>
                  <a href="https://twitter.com/sCream_Sodapop" target="_blank">
                    <fa :icon="fa.twitter"/>
                  </a>
                </template>
                <template v-slot:poem>
                  ＿＿私、最初から狂ってたんです
                </template>
              </dj-profile>

              <dj-profile class="mb-3">
                <template v-slot:icon>
                  <img src="@/assets/img/social_icons/tmkr03-5/DAY2DJs/DAY2_6.png"
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
                  ごめん、やっぱ俺ユーロしか流せないわ
                </template>
              </dj-profile>

              <dj-profile class="mb-3">
                <template v-slot:icon>
                  <img src="@/assets/img/social_icons/tmkr03-5/DAY2DJs/DAY2_7.jpeg"
                       alt="OKAZ"
                       class="img-icon img-round">
                </template>
                <template v-slot:name>
                  OKAZ
                </template>
                <template v-slot:social>
                  <a href="https://twitter.com/@OKAZ_DJ_Wing3" target="_blank">
                    <fa :icon="fa.twitter"/>
                  </a>
                </template>
                <template v-slot:poem>
                  「自分にしかできない」を作りたいです。
                </template>
              </dj-profile>

              <dj-profile class="mb-3">
                <template v-slot:icon>
                  <img src="@/assets/img/social_icons/tmkr03-5/DAY2DJs/DAY2_8.jpg"
                       alt="甘納豆"
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
                  天野聡美erさん 北原沙弥香erさん 折笠アユムerさん　是非お待ちしています。
                </template>
              </dj-profile>

              <dj-profile class="mb-3">
                <template v-slot:icon>
                  <img src="@/assets/img/social_icons/tmkr03-5/DAY2DJs/DAY2_9.JPG"
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
                <template v-slot:poem>
                  [TwiPla]古墳も建てたし墓も建てたので次は協力してピラミッド建てませんか？
                </template>
              </dj-profile>

              <dj-profile class="mb-3">
                <template v-slot:icon>
                  <img src="@/assets/img/social_icons/tmkr03-5/DAY2DJs/DAY2_10.png"
                       alt="shock_Pan"
                       class="img-icon img-round">
                </template>
                <template v-slot:name>
                  shock_Pan
                </template>
                <template v-slot:social>
                  <a href="https://twitter.com/mgn_shock_pan" target="_blank">
                    <fa :icon="fa.twitter"/>
                  </a>
                </template>
                <template v-slot:poem>
                  いやー、今日もパンがうまいっ！
                </template>
              </dj-profile>
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
    this.setBackgroundColor("#ffefff");
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
      title: 'タマクラ3.5',
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: 'タマクラ3.5 | ヒナクラ'
        },
        {
          hid: 'description',
          name: 'description',
          content: '── DJのタマゴ、参集 ─── 「今回はオンライン配信オンリーです」' +
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
          content: 'タマクラ3.5',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${process.env.BASE_URL}/img/logos/tmkr03-5_logo.png`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: '── DJのヒナ、参集 ───',
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@mixin shadow($offset_x: 0.5em, $offset_y: 0.5em, $blur:0, $color: #ff7fbf) {
  filter: drop-shadow($offset_x $offset_y $blur $color);
}

.tmkr3-5-shadow-rb {
  @include shadow;
}

.tmkr3-5-shadow-rb-sm {
  @include shadow(.0625em, .0625em, 0, #ffc6e2);
}

.tmkr3-5-shadow-lb {
  @include shadow(-.5em);
}

.tmkr3-5-shadow-lb-sm {
  @include shadow(-.0625em, .0625em, 0, #ffc6e2);
}
</style>