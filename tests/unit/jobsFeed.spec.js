import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
import JobsFeed from '@/views/JobsFeed.vue'
import JobsList from '@/components/JobsList.vue'
import Vuetify from 'vuetify'

import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Vuetify)

describe('JobsFeed.vue', () => {
  let store
  let state

  beforeEach(() => {
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
  })
  it('contains', () => {
    const wrapper = shallowMount(JobsFeed, { store, localVue, sync: false })
    expect(wrapper.contains(JobsList)).toBe(true)
  })
})
