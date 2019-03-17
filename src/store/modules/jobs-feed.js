import { INSERT, UPDATE } from '../mutation-types'

const jobsUri = 'http://localhost:3000/jobs'

// initial state
const getDefaultState = () => {
  return {
    allJobs: [],
    sortField: 'datePosted',
    sortOrder: 'desc',
    filterField: 'company.name',
    filterValue: null
  }
}

const state = getDefaultState()

// actions
const actions = {
  fetch ({ dispatch, commit, state }) {
    let filterFieldStr = String(state.filterField)
    let params = {
      _sort: state.sortField,
      _order: state.sortOrder
    }
    if (state.filterValue) {
      params[filterFieldStr] = state.filterValue
    }
    this._vm.$http.get(jobsUri, {
      params: params
    }).then(jobs => {
      commit('INSERT_JOBS', jobs.data)
    })
  },
  setSortField ({ commit, dispatch }, sorting) {
    commit(UPDATE + '_SORT_FIELD', sorting)
    dispatch('fetch')
  },
  setSortOrder ({ commit, dispatch }, ordering) {
    commit(UPDATE + '_SORT_ORDER', ordering)
    dispatch('fetch')
  },
  setFilterField ({ commit, dispatch }, filterField) {
    commit(UPDATE + '_FILTER_FIELD', filterField)
    dispatch('fetch')
  },
  setFilterValue ({ commit, dispatch }, filterValue) {
    commit(UPDATE + '_FILTER_VALUE', filterValue)
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
  },
  [UPDATE + '_FILTER_VALUE'] (state, filterValue) {
    state.filterValue = filterValue
  },
  [UPDATE + '_FILTER_FIELD'] (state, filterField) {
    state.filterValue = null
    state.filterField = filterField
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
