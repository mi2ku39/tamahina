<template>
  <div class="navigator-container text-hi mt-3">
    <div>
      <nuxt-link to="/">
        <img src="@/assets/img/logos/hnkr.png"
             alt="ヒナクラ"
             class="navigator-site-logo"/>
      </nuxt-link>
    </div>
    <div class="navigator-item-container">
      <div>
        <nuxt-link to="/about">
          about
        </nuxt-link>
      </div>
      <div>
        <nuxt-link to="/events">
          events
        </nuxt-link>
      </div>
      <div>
        others
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigator"
}
</script>

<style lang="scss">
.navigator-container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
}

.navigator-container a {
  text-decoration: none;
  font-weight: bold;
}

.navigator-site-logo {
  height: 4em;
  object-fit: contain;
}

.navigator-item-container {
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;

  & > div {
    margin: 0 5px;
  }
}

</style>