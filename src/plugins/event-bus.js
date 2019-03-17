import Vue from 'vue'

export const Bus = new Vue()

const bus = {
  install () {
    Vue.bus = bus
    Vue.prototype.$bus = Bus
  }
}

Vue.use(bus)
