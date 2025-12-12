import { mount } from '@vue/test-utils'
import { test, expect, describe } from 'vitest'
import EditBox from '../components/modules/EditBox.vue'

describe('Running module/EditBox tests...', () => {
  test('Component mounts properly', async () => {
    const wrapper = mount(EditBox, {
      // global: {
      //   mocks: {
      //     // mock for vue-i18n
      //     $t: (msg: any) => msg
      //   }
      // }
    })
    expect(wrapper).toBeTruthy()

    wrapper.unmount()
  })
})
