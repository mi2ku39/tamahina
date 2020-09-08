<template>
  <div>
    <div class="container bg-white fill-right index-shadow-lb mt-5">
      <div class="row">
        <div class="col-12 col-lg-6 mb-3 pb-3">
          <h1 class="font-expletus text-strong index-shadow-lb-sm">
            Events
          </h1>
          <p class="font-weight-bold">
            タマクラとヒナクラの詳細
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col-12 col-lg-6 mb-3 text-center">
          <nuxt-link to="/events/tmkr00">
            <img src="@/assets/img/logos/tmkr00_logo.png"
                 alt="tamaclub 0"
                 class="img-fluid"/>
          </nuxt-link>
        </div>

        <div class="col-12 col-lg-6 mb-3 text-center">
          <nuxt-link to="/events/tmkr01">
            <img src="@/assets/img/logos/tmkr01_logo.png"
                 alt="tamaclub 1"
                 class="img-fluid"/>
          </nuxt-link>
        </div>

        <div class="col-12 col-lg-6 mb-3 text-center">
          <nuxt-link to="/events/tmkr02">
            <img src="@/assets/img/logos/tmkr02_logo.png"
                 alt="tamaclub 2"
                 class="img-fluid"/>
          </nuxt-link>
        </div>

        <div class="col-12 col-lg-6 mb-3 text-center">
          <nuxt-link to="/events/tmkr02-5">
            <img src="@/assets/img/logos/tmkr02.5_logo.png"
                 alt="tamaclub 2.5"
                 class="img-fluid"/>
          </nuxt-link>
        </div>

        <div class="col-12 col-lg-6 mb-3 text-center">
          <img src="@/assets/img/logos/tmkr03_logo.png"
               alt="tamaclub 3"
               class="img-fluid"/>
        </div>

        <div class="col-12 col-lg-6 mb-3 text-center">
          <img src="@/assets/img/logos/tmkr_nazo.png"
               alt="?"
               class="img-fluid"/>
        </div>

        <div class="col-12 col-lg-6 mb-3 text-center">
          <img src="@/assets/img/logos/tmkr_nazo.png"
               alt="?"
               class="img-fluid"/>
        </div>

        <div class="col-12 col-lg-6 mb-3 text-center">
          <img src="@/assets/img/logos/tmkr_nazo.png"
               alt="?"
               class="img-fluid"/>
        </div>

        <div class="col-12 col-lg-6 mb-3 text-center">
          <img src="@/assets/img/logos/tmkr_nazo.png"
               alt="?"
               class="img-fluid"/>
        </div>

        <div class="col-12 col-lg-6 mb-3 text-center">
          <img src="@/assets/img/logos/tmkr_nazo.png"
               alt="?"
               class="img-fluid"/>
        </div>

        <div class="col-12 col-lg-6 mb-3 text-center">
          <img src="@/assets/img/logos/hnkr.png"
               alt="hinaclub"
               class="img-fluid"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: "events",
  mounted() {
    this.setBackgroundColor('#FAFAFA');
  },
  methods: {
    ...mapMutations({
      setBackgroundColor: 'setBackgroundColor'
    })
  }
}
</script>

<style lang="scss">
.img-fluid {
  max-width: 100%;
  max-height: 10em;
  object-fit: contain;
}

.img-container {
  max-height: 4em;
  max-width: 100%;
}
</style>