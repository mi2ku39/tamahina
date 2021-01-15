<template>
  <div>
    <div class="container bg-white fill-right mt-5 index-shadow-lb slide-in-from-right">
      <div class="row">
        <div class="col-12 text-center mb-3 mt-3">
          <img src="/img/logos/bimitmsushi.png"
               alt="美味しいタマゴ寿司"
               class="img-fluid"/>
        </div>

        <div class="col-12 text-center">
          <p style="font-size: 3rem;" class="px-3">
            <span style="color: #7CB342" class="font-weight-bold">美味しいオクラ</span><br>
            ×<br>
            <span style="color: #FDD835" class="font-weight-bold">タマクラ</span><br>
            ×<br>
            <span style="color: #e53935" class="font-weight-bold">寿司クラ</span><br>
            ↓<br>
            <img src="/img/logos/bimitmsushi.png"
                 alt="美味しいタマゴ寿司"
                 class="img-fluid"/>
          </p>
        </div>

        <div class="col-12 text-center">
          <h1 class="text-strong index-shadow-lb-sm mb-0">
            開催日時
          </h1>
          <h2 class="text-hi my-0">
            10/24 15:00~24:00
          </h2>

          <h1 class="font-expletus text-strong index-shadow-lb-sm mb-0">
            会場
          </h1>
          <h2 class="text-hi my-0">
            <a href="https://www.twitch.tv/tamakura_hinakura" target="_blank">
              Twitch
              <fa :icon="fa.twitch"/>
            </a>
          </h2>

          <h1 class="font-expletus text-strong index-shadow-lb-sm mb-0">
            詳細
          </h1>
          <h2 class="text-hi mt-0">
            <a href="https://twipla.jp/events/457848" target="_blank">
              twipla
            </a>
          </h2>
        </div>
      </div>
    </div>

    <div class="container bg-white fill-left mt-5 index-shadow-rb py-3 slide-in-from-right">
      <div class="row">
        <div class="col-12">
          <div class="text-center">
            <h1 class="font-expletus text-strong index-shadow-rb-sm">
              Members
            </h1>
          </div>
        </div>
      </div>

      <vertical-title-container class="mb-5">
        <template v-slot:title>
          美味しいオクラ
        </template>
        <template v-slot:body>
          <div>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/bimitmsushi/okura/os31.png"
                     alt="雪女"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                雪女
              </template>
              <template v-slot:poem>
                久しぶりにDJやります
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/bimitmsushi/okura/os34.JPG"
                     alt="こうやん"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                こうやん
              </template>
              <template v-slot:poem>
                タマゴ寿司あまり好きじゃないんですよね(ヘイトスピーチ)
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/bimitmsushi/okura/os36.jpg"
                     alt="いとま"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                いとま
              </template>
              <template v-slot:poem>
                美味クラ所属、アニソンDJです。
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/bimitmsushi/okura/os35.png"
                     alt="ゆるます"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                ゆるます
              </template>
              <template v-slot:poem>
                私は極道じゃないです 信じてください
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/bimitmsushi/okura/os33.jpg"
                     alt="Ma9μ"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                Ma9μ
              </template>
              <template v-slot:poem>
                ←この通りになっていることを願っています
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/bimitmsushi/okura/os32.jpg"
                     alt="ちゃい"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                ちゃい
              </template>
              <template v-slot:poem>
                ある日、おじいさんがね、えっと、なんだっけ、あははっ！忘れちゃった～！あれ～？なんだっけ、んふふwほよ～！
                でね、おばあさんもね、何かしてたんだけど、その時にクソデカピーチがね、ズンドコズンドコって、あっ！そう！川！今川にいるのおばあさん！おじいさんはわかんないや。わからんちゃね～
                あえ？今なんの話してた？
              </template>
            </dj-profile>

          </div>
        </template>
      </vertical-title-container>

      <vertical-title-container class="mb-5">
        <template v-slot:title>
          タマクラ
        </template>
        <template v-slot:body>
          <div>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/bimitmsushi/tmkr/r4.png"
                     alt="Shock_Pan"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                Shock_Pan
              </template>
              <template v-slot:poem>
                この時間がすべてじゃない。<br>
                ・・・でも、今しかできないこと、ここにしかないものもある。<br>
                <br>
                って言われて平塚静クソデカ感情部に入部してしまった・・・<br>
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/bimitmsushi/tmkr/r2.jpg"
                     alt="ケー"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                ケー
              </template>
              <template v-slot:poem>
                今回は「かわいい」「かっこいい」のを流します、たぶん<br>
                ちなみに楽曲派って定義ガバすぎね？なんでもありじゃん？（これは個人の感想です）
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/bimitmsushi/tmkr/r3.png"
                     alt="たっくん"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                たっくん
              </template>
              <template v-slot:poem>
                機材なし芸人の跡を継ぎたいと思います。
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/bimitmsushi/tmkr/r1.jpg"
                     alt="ラギヒ"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                ラギヒ
              </template>
              <template v-slot:poem>
                サンリオの出してたキャラパッケージの駄菓子が懐かしいです
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/bimitmsushi/tmkr/r5.jpg"
                     alt="Cream Soda"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                Cream Soda
              </template>
              <template v-slot:poem>
                オールラウンドに流すので・・・<br/>
                一曲も刺さらなくてもお許しください！(ボルガ博士)
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/bimitmsushi/tmkr/r6.jpg"
                     alt="ルリトラ"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                ルリトラ
              </template>
              <template v-slot:poem>
                実は美味タマ寿司全部出たらしい
              </template>
            </dj-profile>
          </div>
        </template>
      </vertical-title-container>

      <vertical-title-container class="mb-5">
        <template v-slot:title>
          寿司クラ
        </template>
        <template v-slot:body>
          <div>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/bimitmsushi/sushi/os21.png"
                     alt="甘納豆"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                甘納豆
              </template>
              <template v-slot:poem>
                久しぶり、君のことを忘れた日はなかったよ。<br>
                あの頃と同じように・・・いやもっときれいな姿を見せようね。<br>
                ——Beyond ○○○○。<br>
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/bimitmsushi/sushi/os26.jpg"
                     alt="Ａ-68"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                Ａ-68
              </template>
              <template v-slot:poem>
                第10話 愛する人はずっと見守っている
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/bimitmsushi/sushi/os23.jpg"
                     alt="咲空"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                咲空
              </template>
              <template v-slot:poem>
                ※オススメが流れるとは限りません。<br>
                でも多めかも。<br>
                あとアー写は遺影じゃないよ。<br>
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/bimitmsushi/sushi/os22.jpg"
                     alt="suicat"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                suicat
              </template>
              <template v-slot:poem>
                ヒラメとカレイの英単語は同じ
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/bimitmsushi/sushi/os24.jpg"
                     alt="DJ Sunshine"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                DJ Sunshine
              </template>
              <template v-slot:poem>
                通なネタをお届けします。
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/bimitmsushi/sushi/os25.jpg"
                     alt="TMTMN"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                TMTMN
              </template>
              <template v-slot:poem>
                SUSHI EUROBEAT HEY OMACHI!!
              </template>
            </dj-profile>

          </div>
        </template>
      </vertical-title-container>

    </div>
  </div>
</template>

<script>
import {mapMutations} from "vuex";
import {faSoundcloud, faTwitch, faTwitter} from "@fortawesome/free-brands-svg-icons";
import VerticalTitleContainer from "../../components/layouts/VerticalTitleContainer";
import DjProfile from "../../components/layouts/DjProfile";
import TeamTag from "../../components/tag/TeamTag";

export default {
  name: "bimitmsushi",
  components: {TeamTag, DjProfile, VerticalTitleContainer},
  mounted() {
    this.setBackgroundColor('#FAFAFA');
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
      title: 'タマクラ4',
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: 'タマクラ4 | ヒナクラ'
        },
        {
          hid: 'description',
          name: 'description',
          content: '── DJのタマゴ、出陣 ─── 「またチームバトルってやつしませんか？」という名目で' +
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
          content: 'タマクラ4',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${process.env.BASE_URL}/img/logos/tmkr4_logo.png`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: '── DJのヒナ、出陣 ───',
        }
      ]
    }
  }
}
</script>

<style lang="scss">
</style>