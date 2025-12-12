import { beforeEach, describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { defineComponent, h } from 'vue'

import LineList from '@/components/LineList.vue'

const debugSpy = vi.fn()
vi.mock('@/utils/Util', () => ({ Util: { debugLog: debugSpy } }))

const DatatableStub = defineComponent({
  name: 'Datatable',
  props: {
    value: { type: Array, default: () => [] },
    selectionMode: { type: String, default: '' },
    dataKey: { type: String, default: '' },
    scrollable: { type: Boolean, default: false },
    scrollHeight: { type: String, default: '' }
  },
  setup(props) {
    return () =>
      h(
        'div',
        {
          'data-testid': 'datatable-stub',
          'data-selection-mode': props.selectionMode,
          'data-datakey': props.dataKey,
          'data-scrollable': String(props.scrollable),
          'data-scrollheight': props.scrollHeight
        },
        [
          h('div', { 'data-testid': 'datatable-value-length' }, String((props.value || []).length)),
          ...(props.value || []).map((item: any) =>
            h('div', { 'data-line-number': String(item.lineNumber) }, item.line)
          )
        ]
      )
  }
})

const ColumnStub = defineComponent({ name: 'Column', props: ['field', 'header', 'style'], setup: () => () => null })

describe('LineList.vue', () => {
  beforeEach(() => {
    debugSpy.mockClear()
  })

  it('calls Util.debugLog on mount', () => {
    mount(LineList, { global: { components: { Datatable: DatatableStub, Column: ColumnStub } } })
    expect(debugSpy).toHaveBeenCalled()
  })

  it('renders datatable stub with correct number of rows', () => {
    const wrapper = mount(LineList, { global: { components: { Datatable: DatatableStub, Column: ColumnStub } } })
    const countEl = wrapper.find('[data-testid="datatable-value-length"]')
    expect(countEl.exists()).toBe(true)
    expect(countEl.text()).toBe('2')
    const rows = wrapper.findAll('[data-line-number]')
    expect(rows.length).toBe(2)
  })

  it('passes selectionMode, dataKey and scroll props to datatable', () => {
    const wrapper = mount(LineList, { global: { components: { Datatable: DatatableStub, Column: ColumnStub } } })
    const dt = wrapper.find('[data-testid="datatable-stub"]')
    expect(dt.attributes('data-selection-mode')).toBe('single')
    expect(dt.attributes('data-datakey')).toBe('lineNumber')
    expect(dt.attributes('data-scrollable')).toBe('true')
    expect(dt.attributes('data-scrollheight')).toBe('400px')
  })

  it('renders the expected line text for each row', () => {
    const wrapper = mount(LineList, { global: { components: { Datatable: DatatableStub, Column: ColumnStub } } })
    const rows = wrapper.findAll('[data-line-number]')
    expect(rows[0].text()).toContain('Lorem ipsum')
    expect(rows[1].text()).toContain('Ut enim ad minim veniam')
  })
})
