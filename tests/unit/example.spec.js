import { mount } from '@vue/test-utils'
import ArrayWrapper from './ArrayWrapper'
import Array from '@/components/Array'

describe('ArrayWrapper.vue', () => {
  it('doesn\'t mutate array', async () => {
    const wrapper = mount(ArrayWrapper)

    await wrapper.vm.$nextTick()

    console.log(wrapper.find(Array).vm.array) // Should be [1, 2]
  })
})
