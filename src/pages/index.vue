<template>
  <div>
    <div class="container mt-3">
      <div class="row">
        <div class="col-12 d-flex justify-content-center">
          <dummy-image width="20em" height="20em" class="index-shadow-lb">
            直近開催のフライヤー
          </dummy-image>
        </div>
      </div>
    </div>

    <div class="bg-white my-5 container fill-left index-shadow-rb">
      <div class="row">
        <div class="col-12 pb-3">
          <h1 class="font-expletus text-hi index-shadow-rb-sm">
            Introduction
          </h1>
          <p>
            タマクラ / ヒナクラって何？
          </p>
          <div class="text-right">
            <nuxt-link to="/about">
              <tama-button>
                more
              </tama-button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white my-5 container fill-right index-shadow-lb">
      <div class="row">
        <div class="col-12 pb-3">
          <h1 class="font-expletus text-hi index-shadow-lb-sm">
            Shall we dance?
          </h1>
          <p>
            いっしょにDJしよっか
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DummyImage from "../components/samples/DummyImage";
import TamaButton from "../components/buttons/TamaButton";

export default {
  name: "index",
  components: {TamaButton, DummyImage}
}
</script>

<style lang="scss">

</style>