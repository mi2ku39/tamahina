<template>
  <div>
    <div class="container bg-white fill-right mt-5 tmkr4_5-shadow-lb slide-in-from-right">
      <div class="row">
        <div class="col-12 text-center mb-3 mt-3">
          <img src="/img/logos/tmkr04.5_logo.png"
               alt="タマクラ4.5"
               class="img-fluid"/>
        </div>

        <div class="col-12 text-center">
          <p>
            ── DJのタマゴ、出陣 ───
          </p>
          <p>
            「またチームバトルってやつしませんか？」<br>
            という名目でオタクたちが大暴れ！<br>
            <br>
            アニクラってなに？って人にオススメの<br>
            初心者向けノンレギュイベント！<br>
            <a href="https://twipla.jp/events/447454" target="_blank">#ヒナクラ</a> に参加するオタクが練習をする配信だよ<br>
            アニクラ初見？大丈夫！DJもほぼ初心者！<br>
            ただし、熱意とセトリは"本物"<br>
          </p>
        </div>

        <div class="col-12 text-center">
          <h1 class="text-strong tmkr4_5-shadow-lb-sm mb-0">
            開催日時
          </h1>
          <h2 class="text-hi my-0">
            DAY 1: 2/05 21:30~
          </h2>
          <h2 class="text-hi my-0">
            DAY 2: 2/06 21:30~
          </h2>

          <h1 class="font-expletus text-strong tmkr4_5-shadow-lb-sm mb-0">
            会場
          </h1>
          <h2 class="text-hi my-0">
            DAY 1 / DAY 2 ともに<br>
            <a href="https://www.twitch.tv/tamakura_hinakura" target="_blank">
              Twitch
              <fa :icon="fa.twitch"/>
            </a>
          </h2>

          <h1 class="font-expletus text-strong tmkr4_5-shadow-lb-sm mb-0">
            詳細
          </h1>
          <h2 class="text-hi mt-0">
            <a href="https://twipla.jp/events/461964" target="_blank">
              twipla
            </a>
          </h2>
        </div>
      </div>
    </div>

    <div class="container bg-white fill-left mt-5 tmkr4_5-shadow-rb py-3 slide-in-from-right">
      <div class="row">
        <div class="col-12">
          <div class="text-center">
            <h1 class="font-expletus text-strong tmkr4_5-shadow-rb-sm">
              Members
            </h1>
          </div>
        </div>
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
                <img src="@/assets/img/social_icons/tmkr04-5/DAY1/45d11.jpg"
                     alt="影人"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                影人
              </template>
              <template v-slot:social>
                <div class="d-flex align-items-center">
                  <div>
                    <a href="https://twitter.com/kagebito_DJ" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </div>
                </div>
              </template>
              <template v-slot:poem>
                自分のオタク道が始まった曲たちをかけます！！<br>
                札幌からよろしくです！！
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/tmkr04-5/DAY1/45d12.png"
                     alt="YU3S"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                YU3S
              </template>
              <template v-slot:social>
                <div class="d-flex align-items-center">
                  <div>
                    <a href="https://twitter.com/YU3S_SH1NY" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </div>
                </div>
              </template>
              <template v-slot:poem>
                タマクラ初参加です！<br>
                よろしくお願いします
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/tmkr04-5/DAY1/45d13.jpg"
                     alt="ちゃい"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                ちゃい
              </template>
              <template v-slot:social>
                <div class="d-flex align-items-center">
                  <div>
                    <a href="https://twitter.com/drag_chai" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </div>
                </div>
              </template>
              <template v-slot:poem>
                意地悪な双子の射○我慢ゲーム<br>
                左右から「いいよ」と「ダメ」を流し込む音声
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/tmkr04-5/DAY1/45d14.jpeg"
                     alt="中国四千年"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                中国四千年
              </template>
              <template v-slot:social>
                <div class="d-flex align-items-center">
                  <div>
                    <a href="https://twitter.com/Nozomi_kasa_ki" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </div>
                </div>
              </template>
              <template v-slot:poem>
                初心者です、お手柔らかに...
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/tmkr04-5/DAY1/45d15.png"
                     alt="KASUMI_N"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                KASUMI_N
              </template>
              <template v-slot:social>
                <div class="d-flex align-items-center">
                  <div>
                    <a href="https://twitter.com/KASUMI______N" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </div>
                </div>
              </template>
              <template v-slot:poem>
                先輩に枠を譲ってもらってタマクラ初参加です！<br>
                KASUMI_Nの可愛さ覚えてもらってくださいね！
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/tmkr04-5/DAY1/45d16.jpg"
                     alt="Fuji-K"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                Fuji-K
              </template>
              <template v-slot:social>
                <div class="d-flex align-items-center">
                  <div>
                    <a href="https://twitter.com/FujiK1212dj" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </div>
                </div>
              </template>
              <template v-slot:poem>
                ブシロードロックフェス追悼
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/tmkr04-5/DAY1/45d17.png"
                     alt="Yuka."
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                Yuka.
              </template>
              <template v-slot:social>
                <div class="d-flex align-items-center">
                  <div>
                    <a href="https://twitter.com/PumPkin_cat7" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </div>
                </div>
              </template>
              <template v-slot:poem>
                上司 消し方　
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/tmkr04-5/DAY1/45d18.jpeg"
                     alt="甘納豆"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                甘納豆
              </template>
              <template v-slot:social>
                <div class="d-flex align-items-center">
                  <div>
                    <a href="https://twitter.com/AmaNato0" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </div>
                </div>
              </template>
              <template v-slot:poem>
                年齢14歳<br>
                誕生日5月31日<br>
                星座双子座<br>
                血液型AB型<br>
                利き手右<br>
                出身地神奈川県<br>
                趣味オンラインゲーム<br>
                特技タイピング<br>
                好みかわいいもの
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/tmkr04-5/DAY1/45d19.png"
                     alt="咲空"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                咲空
              </template>
              <template v-slot:social>
                <div class="d-flex align-items-center">
                  <div>
                    <a href="https://twitter.com/s_sakLa_P39" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </div>
                </div>
              </template>
              <template v-slot:poem>
                念願のタマクラ出演なので
                "はっちゃけたい"と思います
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
          <div>
            <h1 class="font-expletus text-strong">
              DAY 2
            </h1>
            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/tmkr04-5/DAY2/45d21.jpg"
                     alt="DAイチ"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                DAイチ
              </template>
              <template v-slot:social>
                <div class="d-flex align-items-center">
                  <div>
                    <a href="https://twitter.com/ddd_aaa_1" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </div>
                </div>
              </template>
              <template v-slot:poem>
                寂しくなるね
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/tmkr04-5/DAY2/45d22.jpg"
                     alt="DJ SunShine"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                DJ SunShine
              </template>
              <template v-slot:social>
                <div class="d-flex align-items-center">
                  <div>
                    <a href="https://twitter.com/DJ_SS_3015" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </div>
                </div>
              </template>
              <template v-slot:poem>
                「僕と結婚してくれ！」<br>
                「もちろん！」<br>
                はぁ・・・(クソデカため息)」<br>
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/tmkr04-5/DAY2/45d23.jpg"
                     alt="ルリトラ"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                ルリトラ
              </template>
              <template v-slot:social>
                <div class="d-flex align-items-center">
                  <div>
                    <a href="https://twitter.com/murabitoa3714" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </div>
                </div>
              </template>
              <template v-slot:poem>
                もはやプロフネタ切れ<br>
                PC変えたら素材類吹き飛んでて泣いた
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/tmkr04-5/DAY2/45d24.png"
                     alt="TMTMN"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                TMTMN
              </template>
              <template v-slot:social>
                <div class="d-flex align-items-center">
                  <div>
                    <a href="https://twitter.com/tomatoman714" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </div>
                </div>
              </template>
              <template v-slot:poem>
                私の人生を変えた、あの頃のユーロを流したい。
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/tmkr04-5/DAY2/45d25.png"
                     alt="FishTohu"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                FishTohu
              </template>
              <template v-slot:social>
                <div class="d-flex align-items-center">
                  <div>
                    <a href="https://twitter.com/FishTohu9346" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </div>
                </div>
              </template>
              <template v-slot:poem>
                アイマスしか知らないのでアイマスばっかかけます
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/tmkr04-5/DAY2/45d26.jpg"
                     alt="emuracool"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                emuracool
              </template>
              <template v-slot:social>
                <div class="d-flex align-items-center">
                  <div>
                    <a href="https://twitter.com/OrijinHeathaze" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </div>
                </div>
              </template>
              <template v-slot:poem>
                情緒不安定DJになりたい
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/tmkr04-5/DAY2/45d27.jpeg"
                     alt="ガイエン"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                ガイエン
              </template>
              <template v-slot:social>
                <div class="d-flex align-items-center">
                  <div>
                    <a href="https://twitter.com/gaien_daigaku" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </div>
                </div>
              </template>
              <template v-slot:poem>
                タマクラ出演3回目の完全初心者です！
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/tmkr04-5/DAY2/45d28.jpeg"
                     alt="AYFW"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                AYFW
              </template>
              <template v-slot:social>
                <div class="d-flex align-items-center">
                  <div>
                    <a href="https://twitter.com/_ayfw" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </div>
                </div>
              </template>
              <template v-slot:poem>
                温泉DJ部らしさを出していきたいと思います。
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/tmkr04-5/DAY2/45d29.jpg"
                     alt="Web担当"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                Web担当
              </template>
              <template v-slot:poem>
                ボーカロイド曲を流します。
              </template>
            </dj-profile>

          </div>
        </template>
      </vertical-title-container>

    </div>
  </div>
</template>

<script>
import VerticalTitleContainer from "../../components/layouts/VerticalTitleContainer";
import DjProfile from "../../components/layouts/DjProfile";
import {mapMutations} from "vuex";
import {faSoundcloud, faTwitch, faTwitter} from "@fortawesome/free-brands-svg-icons";

export default {
  name: "tmkr04-5",
  components: {DjProfile, VerticalTitleContainer},
  mounted() {
    this.setBackgroundColor("#E8EAF6");
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
      title: 'タマクラ4.5',
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: 'タマクラ4.5 | ヒナクラ'
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
          content: 'タマクラ4.5',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${process.env.BASE_URL}/img/logos/tmkr04_logo.png`,
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
@mixin shadow($offset_x: 0.5em, $offset_y: 0.5em, $blur:0, $color: #673AB7) {
  filter: drop-shadow($offset_x $offset_y $blur $color);
}

.tmkr4_5-shadow-rb {
  @include shadow;
}

.tmkr4_5-shadow-rb-sm {
  @include shadow(.0625em, .0625em, 0, #E8EAF6);
}

.tmkr4_5-shadow-lb {
  @include shadow(-.5em);
}

.tmkr4_5-shadow-lb-sm {
  @include shadow(-.0625em, .0625em, 0, #E8EAF6);
}

</style>