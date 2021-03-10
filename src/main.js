import Vue from 'vue'
import App from './App.vue'

import analytics from './google-analytics'

analytics('UA-158548765-1')

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
