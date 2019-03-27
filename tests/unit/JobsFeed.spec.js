import { mount } from '@vue/test-utils'
import JobsFeed from '@/views/JobsFeed.vue'
import JobsList from '@/components/JobsList.vue'
import Vue from 'vue'
import Vuetify from 'vuetify'

import Vuex from 'vuex'

describe('JobsFeed.vue', () => {
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

    wrapper = mount(JobsFeed, { store })
  })
  it('contains no job list when no jobs length is less than 1', () => {
    expect(wrapper.contains(JobsList)).toBe(false)
  })

  it('contains a loading spinner while fetching the jobs', () => {
    expect(wrapper.contains('v-progress-circular')).toBe(true)
  })

  it('contains a toolbar', () => {
    expect(wrapper.contains('v-toolbar')).toBe(true)
  })

  it('contains a green toolbar', () => {
    expect(wrapper.find('v-toolbar').attributes('color').toBe('green'))
  })
})
