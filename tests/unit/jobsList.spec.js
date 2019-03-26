import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/JobsList.vue'

describe('JobsList.vue', () => {
  it('contains', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
