import { INSERT, UPDATE, DELETE } from '../mutation-types'

const newsApiKey = process.env.VUE_APP_NEWS_API_KEY
const topHeadlinesUrl = 'https://newsapi.org/v2/top-headlines?' +
  'country=us&' +
  'apiKey=' + newsApiKey

// initial state
const getDefaultState = () => {
  return {
    articles: [],
    interval: 300000,
    lastUpdated: null
  }
}

const state = getDefaultState()

// actions
const actions = {
  fetch ({ commit, state }) {
    this._vm.$http.get(topHeadlinesUrl).then((response) => {
      // check if articles exist
      if (this._vm.$helpers.has(response.data, 'articles')) {
        commit(INSERT, response.data.articles)
      }
    })
  },
  setInterval ({ commit }, interval) {
    commit('UPDATE', interval)
  }
}

// getters
const getters = {
  articles: state => {
    return state.articles
  },
  interval: state => {
    return state.interval
  }
}

// mutations
const mutations = {
  [INSERT] (state, articles) {
    articles.forEach(a => {
      if (!state.articles.some(article => JSON.stringify(article) === JSON.stringify(a))) {
        state.articles.unshift(a)
      }
    })
  },
  [DELETE] (state, payload) {

  },
  [UPDATE] (state, payload) {
    console.log('updating interval ' + payload)
    state.interval = payload
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
