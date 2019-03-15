import Vue from 'vue'

const newsApiKey = process.env.VUE_APP_NEWS_API_KEY
const topHeadlinesUrl = 'https://newsapi.org/v2/top-headlines?' +
  'country=us&' +
  'apiKey=' + newsApiKey
// initial state
const getDefaultState = () => {
  return {
    all: [],
    interval: 25000
  }
}

const state = getDefaultState()

// actions
const actions = {
  fetch () {
    // Vue.prototype.$http.get(topHeadlinesUrl).then((response) => {
    //
    // })
  }
}

// mutations
const mutations = {}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
