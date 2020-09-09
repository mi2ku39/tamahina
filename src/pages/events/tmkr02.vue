<template>
  <div>
    <div class="container bg-white fill-right mt-5 tmkr2-shadow-lb">
      <div class="row">
        <div class="col-12 text-center mb-3">
          <img src="@/assets/img/logos/tmkr02_logo.png"
               alt="タマクラ2"
               class="img-fluid"/>
        </div>

        <div class="col-12 text-center">
          ──DJのタマゴ、胎動───
        </div>

        <div class="col-12 text-center">
          <h1 class="font-expletus text-strong tmkr2-shadow-lb-sm mb-0">
            Theme
          </h1>
          <h2 class="text-hi mt-0">
            紅白対抗<br/>
            性癖
          </h2>

          <h1 class="text-strong tmkr2-shadow-lb-sm mb-0">
            開催日時
          </h1>
          <h2 class="text-hi my-0">
            DAY1: 2020/7/10 22:00~
          </h2>
          <h2 class="text-hi mt-0">
            DAY2: 2020/7/11 22:00~
          </h2>

          <h1 class="font-expletus text-strong tmkr2-shadow-lb-sm mb-0">
            会場
          </h1>
          <h2 class="text-hi mt-0">
            Twitch
            <fa :icon="fa.twitch"/>
          </h2>

          <h1 class="font-expletus text-strong tmkr2-shadow-lb-sm mb-0">
            参加表明
          </h1>
          <h2 class="text-hi mt-0">
            <a href="https://twipla.jp/events/448481" target="_blank">
              twipla
            </a>
          </h2>

        </div>
      </div>
    </div>

    <div class="container bg-white fill-left mt-5 tmkr2-shadow-rb py-3">
      <div class="row">
        <div class="col-12">
          <div class="text-center">
            <h1 class="font-expletus text-strong tmkr2-shadow-rb-sm">
              Members
            </h1>
          </div>

          <vertical-title-container class="mb-5">
            <template v-slot:title>
              DJs
            </template>
            <template v-slot:body>
              <div>
                <h2 class="font-expletus text-strong">
                  DAY 1
                </h2>
                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/tmkr02/d1r0.jpg"
                         alt="ふぉーと"
                         class="img-icon img-round"/>
                  </template>
                  <template v-slot:name>
                    ふぉーと
                  </template>
                  <template v-slot:social>
                    <div class="d-flex align-items-center">
                      <team-tag red/>
                    </div>
                  </template>
                  <template v-slot:poem>
                    誰でもないあなたへ<br/>
                    通りすがりの仮面DJです。
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/tmkr02/d1r2.png"
                         alt="鮭とば"
                         class="img-icon img-round">
                  </template>
                  <template v-slot:name>
                    鮭とば
                  </template>
                  <template v-slot:social>
                    <div class="d-flex align-items-center">
                      <team-tag red class="mr-1"/>
                      <div>
                        <a href="https://twitter.com/s__toba" target="_blank">
                          <fa :icon="fa.twitter"/>
                        </a>
                      </div>
                    </div>
                  </template>
                  <template v-slot:poem>
                    聖地巡礼しろ（しなさい）<br>
                    性癖ってなんなんやろな。
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/tmkr02/d1r3.jpg"
                         alt="塩パセリ"
                         class="img-icon img-round">
                  </template>
                  <template v-slot:name>
                    塩パセリ
                  </template>
                  <template v-slot:social>
                    <div class="d-flex align-items-center">
                      <team-tag red class="mr-1"/>
                      <div>
                        <a href="https://twitter.com/siopaseri" target="_blank">
                          <fa :icon="fa.twitter"/>
                        </a>
                      </div>
                    </div>
                  </template>
                  <template v-slot:poem>
                    全オタクでも3割刺します<br/>
                    各位これがアニクラだってのを思い出してください
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/tmkr02/d1r4.jpg"
                         alt="pwl32"
                         class="img-icon img-round">
                  </template>
                  <template v-slot:name>
                    pwl32
                  </template>
                  <template v-slot:social>
                    <div class="d-flex align-items-center">
                      <team-tag red class="mr-1"/>
                      <div>
                        <a href="https://twitter.com/pwl32" target="_blank">
                          <fa :icon="fa.twitter"/>
                        </a>
                      </div>
                    </div>
                  </template>
                  <template v-slot:poem>
                    HARDCOREをちょっとだけかじったやつ<br/>
                    性癖といわれるとアニソンが選択肢からはずれるんですけどどうしたらいいの
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/tmkr02/d1r5.jpg"
                         alt="ツカタク"
                         class="img-icon img-round">
                  </template>
                  <template v-slot:name>
                    ツカタク
                  </template>
                  <template v-slot:social>
                    <div class="d-flex align-items-center">
                      <team-tag red class="mr-1"/>
                      <div>
                        <a href="https://twitter.com/tsukataku_s" target="_blank">
                          <fa :icon="fa.twitter"/>
                        </a>
                      </div>
                    </div>
                  </template>
                  <template v-slot:poem>
                    今回は燃えより萌えで<br/>
                    ピンクって赤ですか？
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/tmkr02/d1r6.jpg"
                         alt="emuracool"
                         class="img-icon img-round">
                  </template>
                  <template v-slot:name>
                    emuracool
                  </template>
                  <template v-slot:social>
                    <div class="d-flex align-items-center">
                      <team-tag red class="mr-1"/>
                      <div>
                        <a href="https://twitter.com/OrijinHeathaze" target="_blank">
                          <fa :icon="fa.twitter"/>
                        </a>
                      </div>
                    </div>
                  </template>
                  <template v-slot:poem>
                    幅広く刺していくオタクになりたい<br/>
                    性癖で曲を語っていきたい
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/tmkr02/d1w1.jpg"
                         alt="わたあめ"
                         class="img-icon img-round">
                  </template>
                  <template v-slot:name>
                    わたあめ
                  </template>
                  <template v-slot:social>
                    <div class="d-flex align-items-center">
                      <team-tag white class="mr-1"/>
                      <div>
                        <a href="https://twitter.com/wata_pa_chi" target="_blank">
                          <fa :icon="fa.twitter"/>
                        </a>
                      </div>
                    </div>
                  </template>
                  <template v-slot:poem>
                    アニソンとか可愛いの<br/>
                    neko*neko
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/tmkr02/d1w3.png"
                         alt="じっつ"
                         class="img-icon img-round"/>
                  </template>
                  <template v-slot:name>
                    じっつ
                  </template>
                  <template v-slot:social>
                    <div class="d-flex align-items-center">
                      <team-tag white class="mr-1"/>
                      <div>
                        <a href="https://twitter.com/jt__1" target="_blank">
                          <fa :icon="fa.twitter"/>
                        </a>
                      </div>
                    </div>
                  </template>
                  <template v-slot:poem>
                    今回はアニソンとちょこっとVをながしたいとかんがえています"<br/>
                    嫁が原作で非処女になってから6年になります...
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/tmkr02/d1w4.jpg"
                         alt="食パン"
                         class="img-icon img-round">
                  </template>
                  <template v-slot:name>
                    食パン
                  </template>
                  <template v-slot:social>
                    <div class="d-flex align-items-center">
                      <team-tag white class="mr-1"/>
                      <div>
                        <a href="https://twitter.com/mhn_shock_pan" target="_blank">
                          <fa :icon="fa.twitter"/>
                        </a>
                      </div>
                    </div>
                  </template>
                  <template v-slot:poem>
                    2.5次ドルとか2012年前後のオタクソングとか<br/>
                    性癖開放しますが警察は呼ばないでください👮‍♂️ 🚓🚨
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/tmkr02/d1w2.jpg"
                         alt="雪女"
                         class="img-icon img-round">
                  </template>
                  <template v-slot:name>
                    雪女
                  </template>
                  <template v-slot:social>
                    <div class="d-flex align-items-center">
                      <team-tag white class="mr-1"/>
                      <div>
                        <a href="https://twitter.com/10_wia_" target="_blank">
                          <fa :icon="fa.twitter"/>
                        </a>
                      </div>
                    </div>
                  </template>
                  <template v-slot:poem>
                    ブチ上げソングが好きなオタク、アニリミが好きなオタク<br/>
                    もうすぐ冬だな...
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/tmkr02/d1w5.png"
                         alt="ケー"
                         class="img-icon img-round"/>
                  </template>
                  <template v-slot:name>
                    ケー
                  </template>
                  <template v-slot:social>
                    <div class="d-flex align-items-center">
                      <team-tag white class="mr-1"/>
                      <div>
                        <a href="https://twitter.com/ke_odakyu9000" target="_blank">
                          <fa :icon="fa.twitter"/>
                        </a>
                      </div>
                    </div>
                  </template>
                  <template v-slot:poem>
                    自称ロリ、アイマスP、Beatmaniaシリーズオタク、BMSやるひと（全部入るとは言ってない）<br/>
                    機材がないですDJもしたことないです
                    なぜか飛び込んでしまいました
                    アイマスと音ゲーから「白」魅せたいです
                  </template>
                </dj-profile>
              </div>
            </template>

          </vertical-title-container>

          <vertical-title-container>
            <template v-slot:title>
              DJs
            </template>
            <template v-slot:body>
              <div>
                <h2 class="text-strong font-expletus">
                  DAY2
                </h2>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/tmkr02/d1r1.jpg"
                         alt="specia"
                         class="img-icon img-round">
                  </template>
                  <template v-slot:name>
                    specia
                  </template>
                  <template v-slot:social>
                    <div class="d-flex align-items-center">
                      <team-tag red class="mr-1"/>
                      <div>
                        <a href="https://twitter.com/Revaty0421" target="_blank">
                          <fa :icon="fa.twitter"/>
                        </a>
                      </div>
                    </div>
                  </template>
                  <template v-slot:poem>
                    広く浅くみるけどやっぱり日常系が一番！<br/>
                    曲の性癖、キャラの性癖...
                    いろんな性癖を流したい
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/tmkr02/d2r1.jpg"
                         alt="Matter"
                         class="img-icon img-round">
                  </template>
                  <template v-slot:name>
                    Matter
                  </template>
                  <template v-slot:social>
                    <div class="d-flex align-items-center">
                      <team-tag red class="mr-1"/>
                      <div>
                        <a href="https://twitter.com/Matter3_DJ" target="_blank">
                          <fa :icon="fa.twitter"/>
                        </a>
                      </div>
                    </div>
                  </template>
                  <template v-slot:poem>
                    エロと魔法の学園モノ<br>
                    性癖開拓支援機関代表性癖の提供をお待ちしております
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/tmkr02/d2r3.jpg"
                         alt="とまとまん"
                         class="img-icon img-round">
                  </template>
                  <template v-slot:name>
                    とまとまん
                  </template>
                  <template v-slot:social>
                    <div class="d-flex align-items-center">
                      <team-tag red class="mr-1"/>
                      <div>
                        <a href="https://twitter.com/tomatoman714" target="_blank">
                          <fa :icon="fa.twitter"/>
                        </a>
                      </div>
                    </div>
                  </template>
                  <template v-slot:poem>
                    ユーロビート爆踊り部になりたくないか？<br>
                    #2020年は東方が来る
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/tmkr02/d2r4.jpg"
                         alt="TSURU"
                         class="img-icon img-round">
                  </template>
                  <template v-slot:name>
                    TSURU
                  </template>
                  <template v-slot:social>
                    <div class="d-flex align-items-center">
                      <team-tag red class="mr-1"/>
                      <div>
                        <a href="https://twitter.com/Japan_crane0916" target="_blank">
                          <fa :icon="fa.twitter"/>
                        </a>
                      </div>
                    </div>
                  </template>
                  <template v-slot:poem>
                    ロックに片足突っ込んだ感じのDJです。<br>
                    性癖（アンセム）を流します。
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/tmkr02/d2r5.jpg"
                         alt="甘納豆"
                         class="img-round img-icon"/>
                  </template>
                  <template v-slot:name>
                    甘納豆
                  </template>
                  <template v-slot:social>
                    <div class="d-flex align-items-center">
                      <team-tag red class="mr-1"/>
                      <div>
                        <a href="https://twitter.com/AmaNato0" target="_blank">
                          <fa :icon="fa.twitter"/>
                        </a>
                      </div>
                    </div>
                  </template>
                  <template v-slot:poem>
                    2nd GEARを入れていきます<br>
                    猛々しく燃える炎になる
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/tmkr02/d2w1.jpg"
                         alt="xai"
                         class="img-icon img-round">
                  </template>
                  <template v-slot:name>
                    xai
                  </template>
                  <template v-slot:social>
                    <div class="d-flex align-items-center">
                      <team-tag white class="mr-1"/>
                      <div>
                        <a href="https://twitter.com/xai_rakutan" target="_blank">
                          <fa :icon="fa.twitter"/>
                        </a>
                      </div>
                    </div>
                  </template>
                  <template v-slot:poem>
                    たぶんVとか女児アニ<br>
                    えっちだねってヲタク言いますけど、音でもいうんですか
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/tmkr02/su_ji_2nd.jpg"
                         alt="スージー（Ⅱ世）"
                         class="img-round img-icon">
                  </template>
                  <template v-slot:name>
                    スージー（Ⅱ世）
                  </template>
                  <template v-slot:social>
                    <div class="d-flex align-items-center">
                      <team-tag white class="mr-1"/>
                      <div>
                        <a href="https://twitter.com/su_ji_2nd" target="_blank">
                          <fa :icon="fa.twitter"/>
                        </a>
                      </div>
                    </div>
                  </template>
                  <template v-slot:poem>
                    多分女子向け<br>
                    好きな唯は小倉です。
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/tmkr02/d2w3.jpg"
                         alt="ルリトラ"
                         class="img-icon img-round">
                  </template>
                  <template v-slot:name>
                    ルリトラ
                  </template>
                  <template v-slot:social>
                    <div class="d-flex align-items-center">
                      <team-tag white class="mr-1"/>
                      <div>
                        <a href="https://twitter.com/murabitoa3714" target="_blank">
                          <fa :icon="fa.twitter"/>
                        </a>
                      </div>
                    </div>
                  </template>
                  <template v-slot:poem>
                    謎musicを布教しに来ました。ポピュラーな音楽を流します。<br>
                    ≠6 ぽぴゅらーってなに？ラー油の一種？わかんないや！！
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/tmkr02/d2w4.jpg"
                         alt="john"
                         class="img-round img-icon">
                  </template>
                  <template v-slot:name>
                    john
                  </template>
                  <template v-slot:social>
                    <div class="d-flex align-items-center">
                      <team-tag white class="mr-1"/>
                      <div>
                        <a href="https://twitter.com/_krym31" target="_blank">
                          <fa :icon="fa.twitter"/>
                        </a>
                      </div>
                    </div>
                  </template>
                  <template v-slot:poem>
                    小学六年生から周りが馬鹿らしく感じ感情が薄れて行く
                    今はほとんど残っていない
                    機械みたいなものだ
                    冷たい自分をみると悲しくなる。<br>
                    ちぇるーん♪
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/tmkr02/d2w5.jpg"
                         alt="鶴/𝑰𝑵𝑻𝑬𝑹𝑵𝑬𝑻_𝑮𝑰𝑹𝑳"
                         class="img-icon img-round">
                  </template>
                  <template v-slot:name>
                    鶴/𝑰𝑵𝑻𝑬𝑹𝑵𝑬𝑻_𝑮𝑰𝑹𝑳
                  </template>
                  <template v-slot:social>
                    <div class="d-flex align-items-center">
                      <team-tag white class="mr-1"/>
                      <div>
                        <a href="https://twitter.com/crane_dantata" target="_blank">
                          <fa :icon="fa.twitter"/>
                        </a>
                      </div>
                    </div>
                  </template>
                  <template v-slot:poem>
                    アニメ/二次元アイドル<br>
                    DLsite タグ一覧:淡泊/あっさり ラブラブ/あまあま
                  </template>
                </dj-profile>

                <dj-profile class="mb-3">
                  <template v-slot:icon>
                    <img src="@/assets/img/social_icons/tmkr02/d2w6.jpg"
                         alt="ちゃい"
                         class="img-round img-icon">
                  </template>
                  <template v-slot:name>
                    ちゃい
                  </template>
                  <template v-slot:social>
                    <div class="d-flex align-items-center">
                      <team-tag white class="mr-1"/>
                      <div>
                        <a href="https://twitter.com/drag_chai" target="_blank">
                          <fa :icon="fa.twitter"/>
                        </a>
                      </div>
                    </div>
                  </template>
                  <template v-slot:poem>
                    いつもはkawaii musicだけど今回はkakkoii musicもいきます<br>
                    あなたのことが大好きなメイドさんに死ぬほど（物理）愛されて眠れない耳かき音声
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
import TeamTag from "../../components/tag/TeamTag";

export default {
  name: "tmkr02",
  components: {TeamTag, DummyImage, DjProfile, VerticalTitleContainer},
  mounted() {
    this.setBackgroundColor("#ffebee");
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
@mixin shadow($offset_x: 0.5em, $offset_y: 0.5em, $blur:0, $color: #d7003a) {
  filter: drop-shadow($offset_x $offset_y $blur $color);
}

.tmkr2-shadow-rb {
  @include shadow;
}

.tmkr2-shadow-rb-sm {
  @include shadow(.0625em, .0625em, 0, #f0908d);
}

.tmkr2-shadow-lb {
  @include shadow(-.5em);
}

.tmkr2-shadow-lb-sm {
  @include shadow(-.0625em, .0625em, 0, #f0908d);
}
</style>