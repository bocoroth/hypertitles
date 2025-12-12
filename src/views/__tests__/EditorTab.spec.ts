import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { shallowMount, mount } from '@vue/test-utils'

import EditorTab from '@/views/EditorTab.vue'
import { Util } from '@/utils/Util'

describe('EditorTab.vue', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('calls Util.debugLog on mount', () => {
    const debugSpy = vi.spyOn(Util, 'debugLog')
    shallowMount(EditorTab, {
      global: {
        stubs: ['edit-box', 'line-list'],
      },
    })
    expect(debugSpy).toHaveBeenCalled()
  })

  it('renders edit-box and line-list elements', () => {
    const wrapper = shallowMount(EditorTab, {
      global: {
        stubs: ['edit-box', 'line-list'],
      },
    })
    expect(wrapper.find('edit-box').exists()).toBe(true)
    expect(wrapper.find('line-list').exists()).toBe(true)
  })

  it('exposes editorLineList ref', () => {
    const wrapper = mount(EditorTab, {
      global: {
        stubs: {
          'edit-box': { template: '<div />' },
          'line-list': { template: '<div />' },
        },
      },
    })
    // refs live on vm.$refs
    expect((wrapper.vm as any).$refs.editorLineList).toBeDefined()
  })
})
