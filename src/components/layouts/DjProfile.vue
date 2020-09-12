<template>
  <div class="d-flex flex-row flex-wrap">
    <div class="d-flex align-items-center">
      <slot name="icon"/>
    </div>
    <div class="flex-grow-1 ml-3 d-flex flex-column justify-content-center">
      <div class="text-hi profile-name">
        <slot name="name"/>
      </div>
      <div class="profile-socials">
        <slot name="social"/>
      </div>
      <div>
        <slot name="poem"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DjProfile"
}
</script>

<style lang="scss">
.profile-name {
  font-weight: bold;
  font-size: 2rem;
}

.profile-socials {
  font-size: 1.5rem;

  a {
    transition: color 200ms;

    &:link, &:visited {
      color: rgba(102, 102, 102, 1);
    }

    &:hover {
      color: rgba(0, 0, 0, 1);
    }
  }
}
</style>