import { mount } from '@vue/test-utils'
import Array from '@/components/Array.vue'

describe('Array.vue', () => {
  it('doesn\'t mutate array', async () => {
    let array = [1]
    const wrapper = mount(Array, {
      propsData: { array }
    })

    await wrapper.vm.$nextTick()

    console.log(wrapper.vm.array) // Should be [1, 2]
  })
})
