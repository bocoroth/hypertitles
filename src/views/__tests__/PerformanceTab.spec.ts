import { beforeEach, describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'

import PerformanceTab from '@/views/PerformanceTab.vue'
import LineList from '@/components/LineList.vue'
import { Util } from '@/utils/Util'

vi.mock('@/utils/Util', () => ({
  Util: {
    debugLog: vi.fn(),
  },
}))

describe('PerformanceTab.vue', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders the component', () => {
    const wrapper = mount(PerformanceTab)
    expect(wrapper.exists()).toBe(true)
  })

  it('renders LineList component', () => {
    const wrapper = mount(PerformanceTab)
    expect(wrapper.findComponent(LineList).exists()).toBe(true)
  })

  it('calls debugLog on mount', () => {
    mount(PerformanceTab)
    expect(Util.debugLog).toHaveBeenCalledWith('Performance view mounted.')
  })

  it('has performanceLineList ref', () => {
    const wrapper = mount(PerformanceTab)
    expect(wrapper.vm.$refs.performanceLineList).toBeDefined()
  })
})