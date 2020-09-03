<template>
  <div>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-12 col-lg-6">
          <img src="@/assets/img/hmlr_logo_n.png" class="w-100" style="margin-top: 60px;"/>
        </div>
        <div class="col-12 col-lg-6">
          <img src="@/assets/img/tmkr1_logo.png" class="w-100"/>
        </div>
      </div>
    </div>

    <div class="bg-white my-5 container fill-right index-shadow-lb">
      <div class="row">
        <div class="col-12 pb-3">
          <h1 class="font-noto text-hi index-shadow-rb-sm">
            タマクラ / ヒナクラ とは？
          </h1>
          <p>
            ﾋﾟｬ~~~~
          </p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-12 col-md-4">
          <dummy-image height="20em" width="100%" class="index-shadow-lb">
            これまでの<br/>スクショ
          </dummy-image>
        </div>
        <div class="col-12 col-md-4">
          <dummy-image height="20em" width="100%" class="index-shadow-lb">
            これまでの<br/>スクショ
          </dummy-image>
        </div>
        <div class="col-12 col-md-4">
          <dummy-image height="20em" width="100%" class="index-shadow-lb">
            これまでの<br/>スクショ
          </dummy-image>
        </div>
      </div>
    </div>

    <div class="container my-5">
      <div class="row">
        <div class="col-12 col-lg-8 fill-left index-shadow-rb">
          ｱｱｱ~~~~~~~
        </div>
        <div class="col-12 col-lg-4 d-flex flex-column align-items-center mt-5 mt-lg-0">
          <dummy-image height="20em" width="100%" class="index-shadow-rb mb-3">
            これまでの<br/>スクショ
          </dummy-image>
          <dummy-image height="20em" width="100%" class="index-shadow-rb">
            これまでの<br/>スクショ
          </dummy-image>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import DummyImage from "../components/samples/DummyImage.vue";

export default {
  name: "about",
  components: {DummyImage},
}
</script>

<style lang="scss" scoped>

</style>