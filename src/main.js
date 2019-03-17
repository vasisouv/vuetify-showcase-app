import Vue from 'vue'
import './plugins/vuetify'
import './plugins/vue-axios'
import './plugins/helpers'
import App from './App.vue'
import router from './router/router'
import store from './store/'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
