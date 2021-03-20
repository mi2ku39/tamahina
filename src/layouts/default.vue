<template>
  <div class="hidden-overflow-x position-relative" :style="style">
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
                <a href="https://portal.ghostserver.jp" target="_blank" class="gs-logo-link">
                  <img src="@/assets/img/gs_wh.png" class="gs-logo" alt="GhostServer"/>
                </a>.
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
          <a href="https://portal.ghostserver.jp" target="_blank" class="gs-logo-link">
            <img src="@/assets/img/gs_wh.png" class="gs-logo" alt="GhostServer"/>
          </a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import Navigator from "../components/navigators/Navigator";
import {mapState} from "vuex";

export default {
  name: "default",
  components: {Navigator},
  computed: {
    style: function () {
      return {
        'background-color': this.backgroundColor,
        'transition': 'background-color 200ms'
      }
    },
    ...mapState({
      backgroundColor: 'backgroundColor'
    })
  }
}
</script>

<style lang="scss">
.designed-by-gs-position {
  position: absolute;
  bottom: .5em;
  left: .5em;
}

.gs-logo {
  height: 2em;
  vertical-align: middle;
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

.gs-logo-link {
  transition: opacity 200ms;

  &:link, &:visited {
    opacity: .6;
  }

  &:hover {
    opacity: 1;
  }
}
</style>