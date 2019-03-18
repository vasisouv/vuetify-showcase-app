import { mount } from '@vue/test-utils'
import NewsList from '@/components/NewsList.vue'

describe('NewsList.vue', () => {
  const wrapper = mount(NewsList)

  it('renders the correct markup', () => {
    expect(wrapper.find('v-list')).toBe(true)
  })
  //
  // // it's also easy to check for the existence of elements
  // it('has a button', () => {
  //   expect(wrapper.contains('button')).toBe(true)
  // })
  //
  // it('button should increment the count', () => {
  //   expect(wrapper.vm.count).toBe(0)
  //   const button = wrapper.find('button')
  //   button.trigger('click')
  //   expect(wrapper.vm.count).toBe(1)
  // })
})
