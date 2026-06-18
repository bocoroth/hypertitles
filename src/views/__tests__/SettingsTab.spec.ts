import { beforeEach, describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'

import SettingsTab from '@/views/SettingsTab.vue'
import { Util } from '@/utils/Util'

vi.mock('@/utils/Util')

describe('SettingsTab.vue', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders the component', () => {
    const wrapper = mount(SettingsTab, {
      global: {
        mocks: {
          $t: (key: string) => key
        }
      }
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('calls Util.debugLog on mount', () => {
    mount(SettingsTab, {
      global: {
        mocks: {
          $t: (key: string) => key
        }
      }
    })
    expect(Util.debugLog).toHaveBeenCalledWith('Settings view mounted.')
  })

  it('renders h1 with correct i18n translation', () => {
    const wrapper = mount(SettingsTab, {
      global: {
        mocks: {
          $t: (_key: string) => `Settings`
        }
      }
    })
    expect(wrapper.find('h1').text()).toBe('Settings')
  })
})
