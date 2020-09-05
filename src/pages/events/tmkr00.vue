<template>
  <div>
    <div class="container bg-white fill-right mt-5 tmkr0-shadow-lb">
      タマクラ0
    </div>
  </div>
</template>
<script>
export default {
  name: "tmkr00"
}
</script>
<style lang="scss">
@mixin shadow($offset_x: 0.5em, $offset_y: 0.5em, $blur:0, $color: #9E9E9E) {
  filter: drop-shadow($offset_x $offset_y $blur $color);
}

.tmkr0-shadow-rb {
  @include shadow;
}

.tmkr0-shadow-rb-sm {
  @include shadow(.0625em, .0625em, 0, #BDBDBD);
}

.tmkr0-shadow-lb {
  @include shadow(-.5em);
}

.tmkr0-shadow-lb-sm {
  @include shadow(-.0625em, .0625em, 0, #BDBDBD);
}
</style>