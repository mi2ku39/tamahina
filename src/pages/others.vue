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
          <h1 class="font-noto text-hi index-shadow-lb-sm">
            新規参加者募集中
          </h1>
          <p>
            今後のタマクラ参加者を募集中！未経験者大歓迎！詳細は以下のフォームをご確認ください！<br>
          </p>
          <div class="text-right">
            <tama-button to="https://docs.google.com/forms/d/1ixknOly2osmkZ9CFd3XGPVc3tDMd7yBUjaFpICHs2iQ"
                         target="_blank">
              フォームを開く
            </tama-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import DummyImage from "../components/samples/DummyImage.vue";
import {mapMutations} from "vuex";
import TamaButton from "../components/buttons/TamaButton.vue";

export default {
  name: "other",
  components: {TamaButton, DummyImage},
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
.li-margin {
  & li {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }
}
</style>