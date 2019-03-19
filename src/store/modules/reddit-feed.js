import { INSERT, UPDATE } from '../mutation-types'

const redditNewUrl = 'https://www.reddit.com/r/pics/new.json?sort=new'

// initial state
const getDefaultState = () => {
  return {
    posts: [],
    interval: 300000,
    lastUpdated: null,
    noNew: false
  }
}

const state = getDefaultState()

// actions
const actions = {
  fetch ({ commit, state }) {
    this._vm.$http.get(redditNewUrl).then((response) => {
      // check if reddit posts exist
      if (this._vm.$helpers.has(response.data, 'data')) {
        commit(INSERT + '_POSTS', response.data.data.children)
      }
    })
  },
  setInterval ({ commit }, interval) {
    commit(UPDATE + '_INTERVAL', interval)
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
  [INSERT + '_POSTS'] (state, posts) {
    // iterate new posts in reverse to ensure correct order
    let newPostsFound = false
    for (let i = posts.length - 1; i--; i >= 0) {
      let p = posts[i]
      if (!state.posts.some(post => JSON.stringify(post.data.title) === JSON.stringify(p.data.title))) {
        state.posts.unshift(p)
        newPostsFound = true
      }
    }
    if (!newPostsFound) {
      state.noNew = true
      setTimeout(function () {
        state.noNew = false
      }, 2000)
    }
  },
  [UPDATE + '_INTERVAL'] (state, payload) {
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
