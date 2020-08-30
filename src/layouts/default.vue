<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <navigator/>
        </div>
      </div>
    </div>
    <nuxt/>
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