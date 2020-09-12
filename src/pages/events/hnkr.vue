<template>
  <div>
    <div class="container bg-white fill-right mt-5 hnkr-shadow-lb slide-in-from-right">
      <div class="row">
        <div class="col-12 text-center mb-3">
          <img src="@/assets/img/logos/hnkr.png"
               alt="ヒナクラ"
               class="img-fluid"/>
        </div>

        <div class="col-12 text-center">
          ── DJのヒナ、飛翔 ───
        </div>

        <div class="col-12 text-center">
          <h1 class="font-expletus text-strong hnkr-shadow-lb-sm mb-0">
            開催日時
          </h1>
          <h2 class="text-hi mt-0">
            2021/3/6
          </h2>

          <h1 class="font-expletus text-strong hnkr-shadow-lb-sm mb-0">
            会場
          </h1>
          <h2 class="mt-0">
            未定
          </h2>

        </div>
      </div>
    </div>

    <div class="container bg-white fill-left mt-5 hnkr-shadow-rb slide-in-from-left py-3">
      <div class="row">
        <div class="col-12 text-center">
          <h1 class="font-expletus text-strong hnkr-shadow-rb-sm">
            Members
          </h1>
          <h2>
            未定
          </h2>
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