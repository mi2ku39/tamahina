<template>
  <div class="container">
    <div class="row">
      <div class="col-2">
        <div class="title-container font-expletus d-flex align-items-center">
          <slot name="title"/>
        </div>
      </div>
      <div class="col-10">
        <slot name="body"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VerticalTitleContainer"
}
</script>

<style lang="scss">
.title-container {
  writing-mode: vertical-lr;
  border-right: 2px solid #212121;
  font-size: 3em;
  font-weight: bold;
  color: #212121;
  padding: .25em 0;
}
</style>