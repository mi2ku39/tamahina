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

    <div class="container-fluid bg-black mt-5 py-5 text-md-wh">
      <div class="row">
        <div class="col-12">
          <div class="container">
            <div class="row">
              <div class="col-12 text-center">
                &copy; 2020 ヒナクラ, おかもと from GhostServer.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DummyImage from "../components/samples/DummyImage";

export default {
  name: "index",
  components: {DummyImage}
}
</script>

<style lang="scss">
@mixin shadow($offset_x: 0.5em, $offset_y: 0.5em, $blur:0, $color: #9E9E9E) {
  filter: drop-shadow($offset_x $offset_y $blur $color);
}

.index-shadow-rb {
  @include shadow;
}

.index-shadow-rb-sm {
  @include shadow(.0625em, .0625em, 0, #BDBDBD);
}

.index-shadow-lb {
  @include shadow(-.5em);
}

.index-shadow-lb-sm {
  @include shadow(-.0625em, .0625em, 0, #BDBDBD);
}

</style>