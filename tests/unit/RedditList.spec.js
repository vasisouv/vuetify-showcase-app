import { mount } from '@vue/test-utils'
import RedditList from '@/views/RedditList.vue'
import Vue from 'vue'
import Vuetify from 'vuetify'

import Vuex from 'vuex'

describe('RedditList.vue', () => {
  let store
  let state
  let wrapper

  beforeEach(() => {
    Vue.use(Vuetify)
    Vue.use(Vuex)
    state = {
      allJobs: []
    }
    store = new Vuex.Store({
      modules: {
        jobsFeed: {
          namespaced: true,
          state,
          actions: {
            fetch: jest.fn()
          }
        }
      }
    })

    wrapper = mount(RedditList, { store })
  })
})
