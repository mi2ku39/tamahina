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
    <div class="container-fluid bg-black py-5 text-md-wh" style="margin-top: 5em;">
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
import Navigator from "../components/navigators/Navigator";

export default {
  name: "default",
  components: {Navigator}
}
</script>

<style scoped>

</style>