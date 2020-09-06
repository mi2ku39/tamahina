<template>
  <div class="container">
    <div class="row">
      <div class="col-md-2 col-12 mb-3 mb-md-0">
        <div class="d-flex h-100 align-items-stretch">
          <div class="title-container font-expletus text-left">
            <slot name="title"/>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-10">
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

  font-weight: bold;
  color: #212121;
  flex-grow: 1;

  border-bottom: 2px solid #212121;
  font-size: 2em;

  @media (min-width: 768px) {
    & {
      border-bottom: none;
      margin-bottom: 0;

      writing-mode: vertical-lr;
      border-right: 2px solid #212121;
      padding: .25em 0;
      font-size: 3em;
    }
  }
}
</style>