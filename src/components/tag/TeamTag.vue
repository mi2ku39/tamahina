<template>
  <div class="team-tag-container" :style="style">
    <div>
      {{ label }}
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamTag",
  props: {
    red: {
      type: Boolean,
      default: false
    },
    white: {
      type: Boolean,
      default: false
    },
    blue: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    style: function () {
      return {
        'border': this.border,
        'background-color': this.bgColor,
        'color': this.color
      }
    },
    bgColor: function () {
      if (this.red) {
        return '#f44336';
      } else if (this.white) {
        return '#FFFFFF';
      } else if (this.blue) {
        return '#03A9F4';
      } else {
        return '#FFFFFF';
      }
    },
    border: function () {
      if (this.red) {
        return '2px solid #f44336';
      } else if (this.blue) {
        return '2px solid #03A9F4';
      } else if (this.white) {
        return '2px solid #212121';
      }
    },
    label: function () {
      if (this.red) {
        return 'RED TEAM';
      } else if (this.blue) {
        return 'BLUE TEAM';
      } else if (this.white) {
        return 'WHITE TEAM';
      } else {
      }
      return 'WHITE TEAM';
    },
    color: function () {
      if (this.red) {
        return '#FFFFFF';
      } else if (this.white) {
        return '#212121';
      } else if (this.blue) {
        return '#FFFFFF';
      } else {
        return '#212121'
      }
    }
  }
}
</script>

<style lang="scss">
.team-tag-container {
  font-size: .8rem;
  border-radius: .75rem;
  height: 1.5rem;
  line-height: 1rem;
  padding: 0 6px;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>