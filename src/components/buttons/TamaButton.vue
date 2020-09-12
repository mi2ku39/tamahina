<template>
  <div>
    <nuxt-link class="tamabutton-container font-expletus" :to="to" v-if="nuxtLink">
      <slot/>
    </nuxt-link>
    <a :href="to" v-else class="tamabutton-container font-expletus" :target="target">
      <slot/>
    </a>
  </div>
</template>

<script>
export default {
  name: "tama-button",
  props: {
    to: {
      type: String,
      required: true
    },
    nuxtLink: {
      type: Boolean,
      default: false
    },
    target: {
      type: String,
      default: '_self'
    }
  }
}
</script>

<style lang="scss">
.tamabutton-container {
  transition: color 200ms linear;
  position: relative;
  font-size: 1.2em;
  display: inline-block;
  padding: 8px;
  color: #FFFFFF !important;
  text-decoration: none;
  overflow: hidden;
  border: 4px solid #000000;
  z-index: 3;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #000000;
    z-index: -2;
  }

  &:before {
    transition: right 200ms ease-in-out;
    content: '';
    position: absolute;
    left: 0;
    right: 100%;
    top: 0;
    bottom: 0;
    background-color: #FFFFFF;
    z-index: -1;
  }

  &:hover {
    color: #000000 !important;

    &:before {
      right: 0;
    }
  }
}
</style>