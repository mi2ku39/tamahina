<template>
  <div>
    <div class="container bg-white fill-right mt-5 tmkr_f-shadow-lb slide-in-from-right">
      <div class="row">
        <div class="col-12 text-center mb-3 mt-3">
          <img src="/img/logos/tmkrF_logo.png"
               alt="タマクラF"
               class="img-fluid"/>
        </div>

        <div class="col-12 text-center">
          <p>
            ── DJのタマゴ、孵化 ───
          </p>
          <p>
            「初心者向けイベントタマクラ、ついに最終回」<br>
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
          <h1 class="text-strong tmkr_f-shadow-lb-sm mb-0">
            開催日時
          </h1>
          <h2 class="text-hi my-0">
            DAY 1: 2/26 21:00~
          </h2>
          <h2 class="text-hi my-0">
            DAY 2: 2/28 21:00~
          </h2>

          <h1 class="font-expletus text-strong tmkr_f-shadow-lb-sm mb-0">
            会場
          </h1>
          <h2 class="text-hi my-0">
            DAY 1 / DAY 2 ともに<br>
            <a href="https://www.twitch.tv/tamakura_hinakura" target="_blank">
              Twitch
              <fa :icon="fa.twitch"/>
            </a>
          </h2>

          <h1 class="font-expletus text-strong tmkr_f-shadow-lb-sm mb-0">
            詳細
          </h1>
          <h2 class="text-hi mt-0">
            <a href="https://twipla.jp/events/473710" target="_blank">
              twipla
            </a>
          </h2>
        </div>
      </div>
    </div>

    <div class="container bg-white fill-left mt-5 tmkr_f-shadow-rb py-3 slide-in-from-right">
      <div class="row">
        <div class="col-12">
          <div class="text-center">
            <h1 class="font-expletus text-strong tmkr_f-shadow-rb-sm">
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
                <img src="@/assets/img/social_icons/tmkrF/DAY1/F1_01.JPG"
                     alt="specia"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                specia
              </template>
              <template v-slot:social>
                <div class="d-flex align-items-center">
                  <div>
                    <a href="https://twitter.com/Revaty0421" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </div>
                </div>
              </template>
              <template v-slot:poem>
                イベント終わらせるかもしれません
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/tmkrF/DAY1/F1_02.jpg"
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
                タマクラ最終回ということで、在宅でも暴れていきましょう！
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/tmkrF/DAY1/F1_03.JPG"
                     alt="ゆるます"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                ゆるます
              </template>
              <template v-slot:social>
                <div class="d-flex align-items-center">
                  <div>
                    <a href="https://twitter.com/yrms_trinity" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </div>
                </div>
              </template>
              <template v-slot:poem>
                いえーい✌
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/tmkrF/DAY1/F1_04.jpg"
                     alt="いとま"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                いとま
              </template>
              <template v-slot:social>
                <div class="d-flex align-items-center">
                  <div>
                    <a href="https://twitter.com/itoma425" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </div>
                </div>
              </template>
              <template v-slot:poem>
                いつも通り
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/tmkrF/DAY1/F1_05.jpg"
                     alt="hide"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                hide
              </template>
              <template v-slot:social>
                <div class="d-flex align-items-center">
                  <div>
                    <a href="https://twitter.com/HIDE517314" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </div>
                </div>
              </template>
              <template v-slot:poem>
                タマクラお疲れさまでした！<br>
                精一杯送り出せるように頑張ります！
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/tmkrF/DAY1/F1_06.png"
                     alt="たっくん"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                たっくん
              </template>
              <template v-slot:social>
                <div class="d-flex align-items-center">
                  <div>
                    <a href="https://twitter.com/mikuta0407" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </div>
                </div>
              </template>
              <template v-slot:poem>
                ありがとうタマクラ
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/tmkrF/DAY1/F1_08.jpg"
                     alt="ケー"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                ケー
              </template>
              <template v-slot:social>
                <div class="d-flex align-items-center">
                  <div>
                    <a href="https://twitter.com/ke_odakyu9000" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </div>
                </div>
              </template>
              <template v-slot:poem>
                ロリコンじゃないです。かわいいものに弱いだけ！<br>
                良い曲<small style="color: #f44336">(要定義)</small>を流すので聞こえたら暴れてほしい！
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/tmkrF/DAY1/F1_07.png"
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
                生き残りたい
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/tmkrF/DAY1/F1_09.jpg"
                     alt="Web担当"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                Web担当
              </template>
              <template v-slot:poem>
                Web担当ちゃんです。
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/tmkrF/DAY1/F1_10.jpg"
                     alt="パピ"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                パピ
              </template>
              <template #social>
                <div class="d-flex align-items-center">
                  <div>
                    <a href="https://twitter.com/Bitter_sweet38" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </div>
                </div>
              </template>
              <template v-slot:poem>
                大学の先輩がお世話になっているタマクラに参加させていただくということで<br>
                恥のないようなDJができたらいいなと思っています！！
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/tmkrF/DAY1/F1_11.JPG"
                     alt="じっつ"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                じっつ
              </template>
              <template #social>
                <div class="d-flex align-items-center">
                  <div>
                    <a href="https://twitter.com/jt__1" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </div>
                </div>
              </template>
              <template v-slot:poem>
                [Twipla]ここまで頑張ってくれた主催のためになにかしたくないですか?<br>
                <a href="https://twipla.jp/events/473462" target="_blank">https://twipla.jp/events/473462</a>
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
                <img src="@/assets/img/social_icons/tmkrF/DAY2/F2_01.JPG"
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
                くぁwせdrftgyふじこlp;https://twitter.com/:「」
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/tmkrF/DAY2/F2_02.jpg"
                     alt="ルリトラ"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                ルリトラ
              </template>
              <template v-slot:social>
                <div class="d-flex align-items-center">
                  <div>
                    <a href="https://twitter.com/murabitoA3714" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </div>
                </div>
              </template>
              <template v-slot:poem>
                タマクラよ永遠に
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/tmkrF/DAY2/F2_03.png"
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
                タマクラ、終わるのか.....<br>
                最後もやっぱり、はっちゃけます
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/tmkrF/DAY2/F2_04.png"
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
                多動こそ人生
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/tmkrF/DAY2/F2_05.png"
                     alt="suicat"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                suicat
              </template>
              <template v-slot:social>
                <div class="d-flex align-items-center">
                  <div>
                    <a href="https://twitter.com/mr_s_21s" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </div>
                </div>
              </template>
              <template v-slot:poem>
                みなさんどうぞCHAOSを味わてください！
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/tmkrF/DAY2/F2_06.png"
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
                第2回から変なことばっかりしました。<br>
                本当にお世話になりました。<br>
                恩返しに最後までユーロファイターします！
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/tmkrF/DAY2/F2_07.jpg"
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
                ありがとう
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/tmkrF/DAY2/F2_08.jpg"
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
                LastWord/最後の言霊(2)(青)(青)<br>
                インスタント<br>
                この呪文1つを対象とし、それを打ち消す。<br>
                <span class="font-italic text-disabled">
                いつか、誰かが私を打ち負かすだろう。<br>
                だがそれは今日ではないし、お前にでもない。
                  </span>
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/tmkrF/DAY2/F2_09.jpg"
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
                「学校が大好きで」「音楽が大好きで」<br>
                <br>
                「アイドルが大好きで」「高まるのが大好きで」<br>
                <br>
                「メンバーが大好きで」「この毎日が大好きで」<br>
                <br>
                「頑張るのが大好きで」「廻すことが大好きで」<br>
                <br>
                「タマクラが大好きだったから」
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/tmkrF/DAY2/F2_10.png"
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
                タマクラ、お前...消えるのか？
              </template>
            </dj-profile>

            <dj-profile class="mb-3">
              <template v-slot:icon>
                <img src="@/assets/img/social_icons/tmkrF/DAY2/F2_11.png"
                     alt="塩パセリ"
                     class="img-icon img-round"/>
              </template>
              <template v-slot:name>
                塩パセリ
              </template>
              <template v-slot:social>
                <div class="d-flex align-items-center">
                  <div>
                    <a href="https://twitter.com/siopaseri" target="_blank">
                      <fa :icon="fa.twitter"/>
                    </a>
                  </div>
                </div>
              </template>
              <template v-slot:poem>
                DJのタマゴ、孵化ーー
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
import {faTwitter, faTwitch} from "@fortawesome/free-brands-svg-icons";
import DjProfile from "../../components/layouts/DjProfile";
import VerticalTitleContainer from "../../components/layouts/VerticalTitleContainer";

export default {
  name: "tmkrf",
  components: {VerticalTitleContainer, DjProfile},
  mounted() {
    this.setBackgroundColor('#faf0d4');
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
      title: 'タマクラF',
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: 'タマクラF | ヒナクラ'
        },
        {
          hid: 'description',
          name: 'description',
          content: '── DJのタマゴ、孵化 ─── ' +
              '「初心者向けイベントタマクラ、ついに最終回」という名目で' +
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
          content: 'タマクラF',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${process.env.BASE_URL}/img/logos/tmkrF_logo.png`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: '── DJのヒナ、孵化 ───',
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@mixin shadow($offset_x: 0.5em, $offset_y: 0.5em, $blur:0, $color: #e6b422) {
  filter: drop-shadow($offset_x $offset_y $blur $color);
}

.tmkr_f-shadow-rb {
  @include shadow;
}

.tmkr_f-shadow-rb-sm {
  @include shadow(.0625em, .0625em, 0, #e6dab8);
}

.tmkr_f-shadow-lb {
  @include shadow(-.5em);
}

.tmkr_f-shadow-lb-sm {
  @include shadow(-.0625em, .0625em, 0, #e6dab8);
}

</style>