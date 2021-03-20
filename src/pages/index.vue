<template>
  <div>
    <div class="eyecatch-container fade-in">
      <div class="catchcopy">
        <div>
          <div>
            さらば、ヒナクラ。
          </div>
        </div>
        <div>
          <img src="@/assets/img/logos/hnkr.png"/>
        </div>
      </div>
      <div class="slideshow">
        <img src="@/assets/img/eyecatch/01.jpeg" class="eyecatch-img"/>
        <img src="@/assets/img/eyecatch/02.jpeg" class="eyecatch-img"/>
        <img src="@/assets/img/eyecatch/03.jpeg" class="eyecatch-img"/>
        <img src="@/assets/img/eyecatch/04.jpeg" class="eyecatch-img"/>
        <img src="@/assets/img/eyecatch/05.jpeg" class="eyecatch-img"/>
      </div>
    </div>

    <div class="bg-white mb-5 container fill-left index-shadow-lb slide-in-from-left mt-vh100">
      <div class="row">
        <div class="col-12 pb-3">
          <h1 class="font-expletus text-hi index-shadow-rb-sm">
            Introduction
          </h1>
          <p>
            タマクラ / ヒナクラって何？
          </p>
          <div class="text-right">
            <tama-button to="/about" nuxt-link>
              more
            </tama-button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import DummyImage from "../components/samples/DummyImage";
import TamaButton from "../components/buttons/TamaButton";
import {mapMutations} from "vuex";

export default {
  name: "index",
  components: {TamaButton, DummyImage},
  head() {
    return {
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: 'ヒナクラ | ⚡大17代の卒業祝いアニクラ'
        },
        {
          hid: 'description',
          name: 'description',
          content: '⚡大17代の卒業祝いアニクラとして2021/03/20に「ヒナクラ」を開催！'
        },
        {
          property: 'og:url',
          content: `${process.env.BASE_URL / this.$route.fullPath}`
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:title',
          content: 'ヒナクラ | ⚡大17代の卒業祝いアニクラ',
        },
        {
          property: 'og:image',
          content: `${process.env.BASE_URL}/img/fliers/hnkr_v2.jpg`,
        },
        {
          property: 'og:description',
          content: '⚡大17代の卒業祝いアニクラとして2021/03/20に「ヒナクラ」を開催！',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image'
        },
      ]
    }
  },
  mounted() {
    this.setVisitIn(this.$route.name);
    this.setBackgroundColor('#FAFAFA');
    this.setNavigatorWhite(true);
  },
  destroyed() {
    this.setNavigatorWhite(false);
  },
  methods: {
    ...mapMutations({
      setBackgroundColor: 'setBackgroundColor',
      setVisitIn: 'setVisitIn',
      setNavigatorWhite: 'setNavigatorWhite'
    })
  }
}
</script>

<style lang="scss">
.index-flier {
  max-width: 800px;
  width: 100%;
  object-fit: contain;
}

.eyecatch-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 50rem;

  background: #eee;
  z-index: 1;
  overflow: hidden;

  & > div {
    width: 100%;
    position: relative;
  }

  & .catchcopy {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 50;

    & > div:nth-child(1) {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 5rem;

      & > div {
        color: #FFFFFF;
        writing-mode: vertical-rl;
        font-size: 3rem;
        font-family: serif;
        font-weight: bold;
      }
    }

    & > div:nth-child(2) {
      height: 8rem;

      & > img {
        height: 100%;
        object-fit: contain;
      }
    }
  }

  & > .slideshow {
    height: 100%;
    width: 100%;
    position: relative;
    background-color: #000000;
    z-index: 49;
  }

  & .eyecatch-img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    width: 100%;
    height: 100%;

    object-fit: cover;
    filter: brightness(50%);

    animation-name: slideshow;
    animation-duration: 50s;
    animation-iteration-count: infinite;
    animation-fill-mode: both;
    animation-timing-function: linear;

    &:nth-child(1) {
      animation-delay: 0s;
    }

    &:nth-child(2) {
      animation-delay: 10s;
    }

    &:nth-child(3) {
      animation-delay: 20s;
    }

    &:nth-child(4) {
      animation-delay: 30s;
    }

    &:nth-child(5) {
      animation-delay: 40s;
    }
  }
}

@keyframes slideshow {
  0% {
    z-index: 1;
    opacity: 0;
  }

  5% {
    z-index: 1;
    opacity: 1;
  }

  20% {
    opacity: 1;
    z-index: 1;
  }

  21% {
    opacity: 1;
    z-index: 0;
  }

  30% {
    opacity: 1;
  }

  31% {
    opacity: 0;
  }

  100% {
    opacity: 0;
  }
}

.mt-vh100 {
  margin-top: 50rem !important;
}
</style>