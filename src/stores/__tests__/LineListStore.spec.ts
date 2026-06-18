import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'

import LineListStore from '../LineListStore'

describe('LineListStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should create the store', () => {
    const store = LineListStore()
    expect(store).toBeDefined()
  })

  it('should have correct initial state values', () => {
    const store = LineListStore()
    expect(store.currentLine).toBeNull()
    expect(store.nextLine).toBeNull()
    expect(store.currentSequence).toBeNull()
    expect(store.lineAfterSequence).toBeNull()
    expect(store.isEditorMode).toBe(false)
    expect(store.lineList.text).toEqual([])
  })

  it('should have correct data structure', () => {
    const store = LineListStore()
    expect(store.lineList).toBeDefined()
    expect(store.lineList.meta).toBeDefined()
    expect(store.lineList.text).toEqual([])
  })

  it('should have correct meta structure with empty strings', () => {
    const store = LineListStore()
    const meta = store.lineList.meta
    expect(meta.authorName).toBe('')
    expect(meta.composerName).toBe('')
    expect(meta.css).toBe('')
    expect(meta.dateCreated).toBe('')
    expect(meta.dateModified).toBe('')
    expect(meta.editorName).toBe('')
    expect(meta.performanceNotes).toBe('')
    expect(meta.workTitle).toBe('')
  })
})
