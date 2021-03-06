import { mount } from '@vue/test-utils'
import JobsList from '@/views/JobsList.vue'
import Vue from 'vue'
import Vuetify from 'vuetify'

import Vuex from 'vuex'

describe('JobsList.vue', () => {
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

    wrapper = mount(JobsList, { store })
  })
})
