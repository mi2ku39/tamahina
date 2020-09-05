<template>
  <div class="hidden-overflow-x">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <navigator/>
        </div>
      </div>
    </div>
    <nuxt/>
    <div class="container-fluid bg-black py-5 text-md-wh position-relative" style="margin-top: 5em;">
      <div class="row">
        <div class="col-12">
          <div class="container">
            <div class="row">
              <div class="col-12 text-center">
                <span class="hncl-cr">&copy; 2020 ヒナクラ, </span>
                <img src="@/assets/img/gs_wh.png" class="gs-logo"/>.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="designed-by-gs-position">
        <span>
          <span class="designed-by-gs">
            Designed by&nbsp;
          </span>
          <img src="@/assets/img/gs_wh.png" class="gs-logo"/>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import Navigator from "../components/navigators/Navigator";

export default {
  name: "default",
  components: {Navigator}
}
</script>

<style scoped>
.designed-by-gs-position {
  position: absolute;
  bottom: .5em;
  left: .5em;
}

.gs-logo {
  height: 2em;
  vertical-align: middle;
  opacity: .6;
}

.hncl-cr {
  vertical-align: middle;
}

.gs-logo-cr {
  height: 2em;
  vertical-align: middle;
  opacity: .6;
}

.designed-by-gs {
  font-size: .75em;
  vertical-align: middle;
}
</style>