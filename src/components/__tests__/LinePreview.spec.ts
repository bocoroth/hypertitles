import { beforeEach, describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'

import LinePreview from '@/components/LinePreview.vue'
import { Util } from '@/utils/Util'

vi.mock('@/utils/Util', () => ({
  Util: {
    debugLog: vi.fn()
  }
}))

describe('LinePreview.vue', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders a heading with "Line Preview"', () => {
    const wrapper = mount(LinePreview)
    const h1 = wrapper.get('h1')
    expect(h1.text()).toBe('Line Preview')
  })

  it('calls Util.debugLog once on mount with the expected message', () => {
    mount(LinePreview)
    expect(Util.debugLog).toHaveBeenCalledTimes(1)
    expect(Util.debugLog).toHaveBeenCalledWith('LinePreview module mounted.')
  })
})
