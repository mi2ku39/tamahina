<template>
  <div class="navigator-container text-hi mt-3">
    <div>
      <h1 class="font-expletus">
        <nuxt-link to="/">
          <img src="@/assets/img/logos/hnkr.png"
               alt="ヒナクラ"
               class="navigator-site-logo"/>
        </nuxt-link>
      </h1>
    </div>
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

.navigator-container > div {
  margin-right: 10px;
}

.navigator-container h1 {
  margin: 0;
  padding: 0;
}

.navigator-container a {
  text-decoration: none;
  font-weight: bold;
}

.navigator-site-logo {
  height: 2em;
  object-fit: contain;
}

</style>