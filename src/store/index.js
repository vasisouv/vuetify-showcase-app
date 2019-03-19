import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

import redditFeed from './modules/reddit-feed'
import jobsFeed from './modules/jobs-feed'

const vuexLocalStorage = new VuexPersist({
  storage: window.localStorage, // or window.sessionStorage or localForage instance.
  // Function that passes the state and returns the state with only the objects you want to store.
  reducer: state => ({
    jobsFeed: state.jobsFeed
  })
  // filter: state => (console.log(state)) // Boolean
})

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    redditFeed,
    jobsFeed
  },
  plugins: [vuexLocalStorage.plugin]
})
