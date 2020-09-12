<template>
  <div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-12 d-flex justify-content-center fade-in">
          <dummy-image width="20em" height="20em" class="index-shadow-lb">
            直近開催のフライヤー
          </dummy-image>
        </div>
      </div>
    </div>

    <div class="bg-white my-5 container fill-left index-shadow-rb slide-in-from-left">
      <div class="row">
        <div class="col-12 pb-3">
          <h1 class="font-expletus text-hi index-shadow-rb-sm">
            Introduction
          </h1>
          <p>
            タマクラ / ヒナクラって何？
          </p>
          <div class="text-right">
            <tama-button to="/about" nuxt-link>
              more
            </tama-button>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white my-5 container fill-right index-shadow-lb slide-in-from-right">
      <div class="row">
        <div class="col-12 pb-3">
          <h1 class="font-expletus text-hi index-shadow-lb-sm">
            Shall we dance?
          </h1>
          <p>
            タマクラ参加者募集中！
          </p>
          <div class="text-right">
            <tama-button to="/others" nuxt-link>
              more
            </tama-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DummyImage from "../components/samples/DummyImage";
import TamaButton from "../components/buttons/TamaButton";
import {mapMutations} from "vuex";

export default {
  name: "index",
  components: {TamaButton, DummyImage},
  mounted() {
    this.setVisitIn(this.$route.name);
    this.setBackgroundColor('#FAFAFA');
  },
  methods: {
    ...mapMutations({
      setBackgroundColor: 'setBackgroundColor',
      setVisitIn: 'setVisitIn'
    })
  }
}
</script>

<style lang="scss">

</style>