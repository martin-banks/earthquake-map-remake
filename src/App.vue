<template>
  <article id="app">
    <earthquake-map />
  </article>
</template>

<script>
import EarthquakeMap from './components/earthquake-map.vue'

export default {
  name: 'App',
  components: {
    EarthquakeMap
  }
}
</script>

<style lang="sass">
@import "./styleguide/index.sass"
@import "./styleguide/reset.sass"

</style>
