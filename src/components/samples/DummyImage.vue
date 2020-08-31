<template>
  <div :style="{width: width, height: height}" class="dummy-image">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "DummyImage",
  props: {
    width: {
      type: String,
      default: '10em'
    },
    height: {
      type: String,
      default: '10em'
    }
  }
}
</script>

<style lang="scss">
.dummy-image {
  background-color: #eeeeee;
  border: 4px solid #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>