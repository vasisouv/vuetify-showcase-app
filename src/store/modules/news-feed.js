import { INSERT, UPDATE, DELETE } from '../mutation-types'
import Vue from 'vue'

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
  // getAllDeployments: state => {
  //   return state.all
  // },
  // getDeploymentSensorById: (state, getters) => (sensorId, deploymentId) => {
  //   let deployment = getters.getDeploymentById(deploymentId)
  //   return deployment.sensors.find(sensor => sensor.id === parseInt(sensorId))
  // },
  // getDeploymentById: state => id => {
  //   return state.all.find(deployment => deployment.id === parseInt(id))
  // }
}

// mutations
const mutations = {
  [INSERT] (state, articles) {
    // Vue.set(state.all, articles)
    state.articles.unshift(...articles)
  },
  [DELETE] (state) {
    console.log('deleting')
  },
  [UPDATE] (state, payload) {
    console.log(payload)
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
