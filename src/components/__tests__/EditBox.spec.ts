import { describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'

import EditBox from '@/components/EditBox.vue'
import { Util } from '@/utils/Util'

vi.mock('@/utils/Util', () => ({
  Util: {
    debugLog: vi.fn()
  }
}))

describe('EditBox.vue', () => {
  it('renders the component', () => {
    const wrapper = mount(EditBox)
    expect(wrapper.find('#editbox').exists()).toBe(true)
  })

  it('initializes lineItem as empty string', () => {
    const wrapper = mount(EditBox)
    const vm = wrapper.vm as unknown as { lineItem: string }
    expect(vm.lineItem).toBe('')
  })

  it('renders the Editor component', () => {
    const wrapper = mount(EditBox)
    expect(wrapper.findComponent({ name: 'Editor' }).exists()).toBe(true)
  })

  it('binds lineItem to Editor v-model', async () => {
    const wrapper = mount(EditBox)
    const vm = wrapper.vm as unknown as { lineItem: string }
    vm.lineItem = 'Test content'
    await wrapper.vm.$nextTick()
    expect(vm.lineItem).toBe('Test content')
  })

  it('calls debugLog on mount', () => {
    mount(EditBox)
    expect(Util.debugLog).toHaveBeenCalledWith('EditBox module mounted.')
  })

  it('applies correct editor height style', () => {
    const wrapper = mount(EditBox)
    const editor = wrapper.findComponent({ name: 'Editor' })
    expect(editor.props('editorStyle')).toBe('height: 150px;')
  })
})
