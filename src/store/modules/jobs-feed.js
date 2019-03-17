import { INSERT, UPDATE, DELETE } from '../mutation-types'

const jobsUri = 'http://localhost:3000/jobs'

// initial state
const getDefaultState = () => {
  return {
    sortBy: null,
    filterBy: null,
    filter: null
  }
}

const state = getDefaultState()

// actions
const actions = {
  fetch ({ commit, state }) {
    return this._vm.$http.get(jobsUri)
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
