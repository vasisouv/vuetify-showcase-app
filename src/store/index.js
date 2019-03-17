import Vue from 'vue'
import Vuex from 'vuex'

import newsFeed from './modules/news-feed'
import jobsFeed from './modules/jobs-feed'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    newsFeed,
    jobsFeed
  }
})
