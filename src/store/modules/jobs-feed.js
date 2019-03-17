import { INSERT, UPDATE } from '../mutation-types'

const jobsUri = 'http://localhost:3000/jobs'

// initial state
const getDefaultState = () => {
  return {
    allJobs: [],
    sortField: 'datePosted',
    sortOrder: 'desc',
    filterField: 'company.name',
    filterContent: ''
  }
}

const state = getDefaultState()

// actions
const actions = {
  fetch ({ dispatch, commit, state }) {
    let params = {
      _sort: state.sortField,
      _order: state.sortOrder
    }
    console.log(params)
    this._vm.$http.get(jobsUri, {
      params: params
    }).then(jobs => {
      commit('INSERT_JOBS', jobs.data)
    })
  },
  setSortField ({ commit, dispatch }, sorting) {
    commit('UPDATE_SORT_FIELD', sorting)
    dispatch('fetch')
  },
  setSortOrder ({ commit, dispatch }, ordering) {
    commit('UPDATE_SORT_ORDER', ordering)
    dispatch('fetch')
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
  [INSERT + '_JOBS'] (state, jobs) {
    state.allJobs = jobs
  },
  [UPDATE + '_SORT_ORDER'] (state, sortOrder) {
    state.sortOrder = sortOrder
  },
  [UPDATE + '_SORT_FIELD'] (state, sortField) {
    state.sortField = sortField
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
