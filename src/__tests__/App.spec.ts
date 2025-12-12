import { beforeEach, describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'

import App from '@/App.vue'
import { Util } from '@/utils/Util'

vi.mock('@/utils/Util')
vi.mock('bootstrap/js/dist/tab')

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      App: {
        settings: 'Settings',
        editor: 'Editor',
        performance: 'Performance'
      }
    }
  }
})

describe('App.vue', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders the component', () => {
    const wrapper = mount(App, {
      global: {
        plugins: [i18n],
        stubs: ['settings-tab', 'editor-tab', 'performance-tab']
      }
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('calls setDebugMode on mount', () => {
    mount(App, {
      global: {
        plugins: [i18n],
        stubs: ['settings-tab', 'editor-tab', 'performance-tab']
      }
    })
    expect(Util.setDebugMode).toHaveBeenCalledWith(true)
  })

  it('calls debugLog on mounted', () => {
    mount(App, {
      global: {
        plugins: [i18n],
        stubs: ['settings-tab', 'editor-tab', 'performance-tab']
      }
    })
    expect(Util.debugLog).toHaveBeenCalledWith('App mounted.')
  })

  it('renders all three tab buttons', () => {
    const wrapper = mount(App, {
      global: {
        plugins: [i18n],
        stubs: ['settings-tab', 'editor-tab', 'performance-tab']
      }
    })
    const buttons = wrapper.findAll('.nav-link')
    expect(buttons).toHaveLength(3)
  })

  it('renders settings tab as active by default', () => {
    const wrapper = mount(App, {
      global: {
        plugins: [i18n],
        stubs: ['settings-tab', 'editor-tab', 'performance-tab']
      }
    })
    const activeTab = wrapper.find('.tab-pane.show.active')
    expect(activeTab.attributes('id')).toBe('nav-settings')
  })

  it('renders all three tab panes', () => {
    const wrapper = mount(App, {
      global: {
        plugins: [i18n],
        stubs: ['settings-tab', 'editor-tab', 'performance-tab']
      }
    })
    const panes = wrapper.findAll('.tab-pane')
    expect(panes).toHaveLength(3)
  })
})
