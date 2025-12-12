import { afterEach, describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'

import LineListButtons from '@/components/LineListButtons.vue'

const debugLogMock = vi.fn()
vi.mock('@/utils/Util', () => ({ Util: { debugLog: debugLogMock } }))

const t = (key: string) => {
  const map: Record<string, string> = {
    'LineList.gotoline': 'Go to line',
    'LineList.view': 'View',
    'LineList.cue': 'Cue',
    'LineList.go': 'Go'
  }
  return map[key] ?? key
}

afterEach(() => {
  vi.clearAllMocks()
})

describe('LineListButtons.vue', () => {
  it('renders expected elements, translations and calls Util.debugLog on mount', () => {
    const wrapper = mount(LineListButtons, {
      global: {
        mocks: { $t: t }
      }
    })

    const container = wrapper.find('.goto-line-container')
    expect(container.exists()).toBe(true)
    expect(container.attributes('style')).toContain('display: none')

    const label = wrapper.find('.goto-line-label')
    expect(label.text()).toBe('Go to line')

    expect(wrapper.find('input.goto-line-input').exists()).toBe(true)

    const viewBtn = wrapper.find('.goto-line-view')
    expect(viewBtn.exists()).toBe(true)
    expect(viewBtn.text()).toBe('View')

    const cueBtn = wrapper.find('.goto-line-cue')
    const goBtn = wrapper.find('.goto-line-go')
    expect(cueBtn.text()).toBe('Cue')
    expect(goBtn.text()).toBe('Go')

    expect(debugLogMock).toHaveBeenCalledTimes(1)
    expect(debugLogMock).toHaveBeenCalledWith('LineListButtons module mounted.')
  })

  it('applies d-none class to cue and go buttons when isEditorMode is true and not when false', async () => {
    const wrapperEditor = mount(LineListButtons, {
      props: { isEditorMode: true },
      global: { mocks: { $t: t } }
    })
    expect(wrapperEditor.find('.goto-line-cue').classes()).toContain('d-none')
    expect(wrapperEditor.find('.goto-line-go').classes()).toContain('d-none')

    const wrapperNormal = mount(LineListButtons, {
      props: { isEditorMode: false },
      global: { mocks: { $t: t } }
    })
    expect(wrapperNormal.find('.goto-line-cue').classes()).not.toContain('d-none')
    expect(wrapperNormal.find('.goto-line-go').classes()).not.toContain('d-none')
  })
})
