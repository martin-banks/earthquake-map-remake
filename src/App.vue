<template>
  <article id="app">
    <earthquake-map />

    <div class="topOverlay">
      <div class="topOverlay__signature">
        <a href="https://martinbanks.com.au">
          <img class="topOverlay__signature--image white" :src="signatureWhite" alt="Martin Banks" />
          <img class="topOverlay__signature--image black" :src="signatureBlack" alt="Martin Banks" />
        </a>
      </div>
      <div class="topOverlay__github">
        <a href="https://github.com/martin-banks/earthquake-map-remake">
          <github-mark :size="30" />
        </a>
      </div>
    </div>

  </article>
</template>

<script>
import EarthquakeMap from './components/earthquake-map.vue'
import GithubMark from './components/github-mark.vue'

import signatureWhite from './assets/signature-white.png'
import signatureBlack from './assets/signature-black.png'

export default {
  name: 'App',
  components: {
    EarthquakeMap,
    GithubMark,
  },
  data () {
    return {
      signatureWhite,
      signatureBlack
    }
  }
}
</script>

<style lang="sass">
@import "./styleguide/index.sass"
@import "./styleguide/reset.sass"

#app
  position: relative

.topOverlay
  position: absolute !important
  display: grid
  grid-template-columns: auto auto
  gap: 0.5rem
  justify-content: center
  align-items: center
  top: 0
  right: 0
  padding: 0.5rem 1rem
  background: rgba(white, 0.8)
  @media screen and (prefers-color-scheme: dark)
    background: rgba(black, 0.6)

  &__signature
    &--image
      width: 100px !important
      &.black
        display: none !important
      &.white
        display: none !important
      @media screen and (prefers-color-scheme: light)
        &.black
          display: block !important
      @media screen and (prefers-color-scheme: dark)
        &.white
          display: block !important

</style>
