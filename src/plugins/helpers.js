import Vue from 'vue'

const helperFunctions = {
  has (object, key) {
    return object != null && hasOwnProperty.call(object, key)
  }
}
const helpers = {
  install () {
    Vue.helpers = helpers
    Vue.prototype.$helpers = helperFunctions
  }
}

Vue.use(helpers)
