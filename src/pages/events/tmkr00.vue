<template>
  <div>
    <div class="container bg-white fill-right mt-5 tmkr0-shadow-lb slide-in-from-left">
      <div class="row">
        <div class="col-12 text-center mb-3">
          <img src="@/assets/img/logos/tmkr00_logo.png"
               alt="タマクラ0"
               class="img-fluid"/>
        </div>
        <div class="col-12 text-center">
          <h1 class="font-expletus text-strong tmkr0-shadow-lb-sm">
            開催日時
          </h1>
          <h2 class="text-hi">
            2020/5/20 22:00~
          </h2>
        </div>
      </div>
    </div>

    <div class="container bg-white fill-left mt-5 tmkr0-shadow-rb slide-in-from-right">
      <div class="row">
        <div class="col-12 text-center">
          <h1 class="font-expletus text-strong tmkr0-shadow-rb-sm">
            Members
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapMutations} from "vuex"

export default {
  name: "tmkr00",
  mounted() {
    this.setBackgroundColor('#FFFFFF');
  },
  methods: {
    ...mapMutations({
      setBackgroundColor: 'setBackgroundColor'
    })
  }
}
</script>
<style lang="scss">
@mixin shadow($offset_x: 0.5em, $offset_y: 0.5em, $blur:0, $color: #FFF176) {
  filter: drop-shadow($offset_x $offset_y $blur $color);
}

.tmkr0-shadow-rb {
  @include shadow;
}

.tmkr0-shadow-rb-sm {
  @include shadow(.0625em, .0625em, 0, #FFF176);
}

.tmkr0-shadow-lb {
  @include shadow(-.5em);
}

.tmkr0-shadow-lb-sm {
  @include shadow(-.0625em, .0625em, 0, #FFF176);
}

.img-fluid {
  max-width: 100%;
  max-height: 10em;
  object-fit: contain;
}
</style>