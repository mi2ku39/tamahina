<template>
  <div class="navigator-container text-hi mt-3">
    <div>
      <h1 class="font-expletus">
        Site Logo
      </h1>
    </div>
    <div>
      about
    </div>
    <div>
      events
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

</style>