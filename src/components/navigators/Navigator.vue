<template>
  <div class="navigator-container text-hi mt-3" :class="{'dark': white}">
    <div>
      <nuxt-link to="/">
        <img src="@/assets/img/logos/hnkr.png"
             alt="ヒナクラ"
             class="navigator-site-logo"/>
      </nuxt-link>
    </div>
    <div class="navigator-item-container">
      <div :class="{'visiting': visitIn === 'about'}">
        <nuxt-link to="/about">
          about
        </nuxt-link>
      </div>
      <div :class="{'visiting': visitIn === 'events'}">
        <nuxt-link to="/events">
          events
        </nuxt-link>
      </div>
      <div :class="{'visiting': visitIn === 'others'}">
        <nuxt-link to="/others">
          others
        </nuxt-link>
      </div>
    </div>
    <div class="navigator-links-container">
      <div>
        <a href="https://twitter.com/hinakura_202103" target="_blank">
          <fa :icon="fa.twitter"/>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import {mapState} from "vuex";

export default {
  name: "Navigator",
  computed: {
    fa: function () {
      return {
        twitter: faTwitter
      }
    },
    ...mapState({
      visitIn: 'visitIn',
      white: 'navigatorWhite'
    })
  }
}
</script>

<style lang="scss">
@mixin shadow($offset_x: 0.5em, $offset_y: 0.5em, $blur:0, $color: #9E9E9E) {
  filter: drop-shadow($offset_x $offset_y $blur $color);
}

.dark a {
  &:visited, &:link {
    color: rgba(#FFFFFF, .5) !important;
  }

  &:hover {
    color: #FFFFFF !important;
  }
}

.navigator-container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;

  a {
    text-decoration: none;
    font-weight: bold;
    transition: color 200ms, filter 200ms ease-in-out;

    &:visited, &:link {
      color: #616161;
    }

    &:hover {
      color: #000000;
      @include shadow(.125em, .125em, 0, rgba(0, 0, 0, .3));
    }
  }

  .visiting {
    a {
      &:link, &:visited, &:hover {
        color: #E91E63 !important;
        filter: none !important;
      }
    }
  }

  & > * {
    z-index: 100;
  }
}

.navigator-site-logo {
  height: 4em;
  object-fit: contain;
}

.navigator-item-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;

  & > div {
    margin: 0 5px;
    font-size: 1.25rem;
  }
}

.navigator-links-container {
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-end;

  & > div {
    margin: 0 5px;
    font-size: 1.5rem;
  }
}
</style>