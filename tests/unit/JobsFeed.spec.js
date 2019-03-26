import { mount } from '@vue/test-utils'
import JobsFeed from '@/views/JobsFeed.vue'
// import JobsList from '@/components/JobsList.vue'
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
  // it('contains no job list when no jobs length is less than 1', () => {
  //   const wrapper = shallowMount(JobsFeed, { store, localVue })
  //   expect(wrapper.contains(JobsList)).toBe(false)
  // })

  it('should have a happy ending', () => {
    console.log(wrapper.find().html())

    // as normal HTML tags. For example, <v-flex> should be
    // Just so that you can visually inspect the rendered html.

    // rendered as <div class="v-flex ...">
    // expect(wrapper.contains('div.flex')).toBe(true)
  })
})
