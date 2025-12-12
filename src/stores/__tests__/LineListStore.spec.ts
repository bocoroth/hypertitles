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
        expect(store.currentLine).toBe('')
        expect(store.currentLineNum).toBe(0)
        expect(store.isEditorMode).toBe(false)
        expect(store.lineData).toEqual([])
    })

    it('should have correct data structure', () => {
        const store = LineListStore()
        expect(store.data).toBeDefined()
        expect(store.data.meta).toBeDefined()
        expect(store.data.text).toEqual([])
    })

    it('should have correct metaData structure with empty strings', () => {
        const store = LineListStore()
        expect(store.metaData.authorName).toBe('')
        expect(store.metaData.composerName).toBe('')
        expect(store.metaData.css).toBe('')
        expect(store.metaData.dateCreated).toBe('')
        expect(store.metaData.dateModified).toBe('')
        expect(store.metaData.editorName).toBe('')
        expect(store.metaData.performanceNotes).toBe('')
        expect(store.metaData.workTitle).toBe('')
    })

    it('should have correct data.meta structure with empty strings', () => {
        const store = LineListStore()
        expect(store.data.meta.authorName).toBe('')
        expect(store.data.meta.composerName).toBe('')
        expect(store.data.meta.css).toBe('')
        expect(store.data.meta.dateCreated).toBe('')
        expect(store.data.meta.dateModified).toBe('')
        expect(store.data.meta.editorName).toBe('')
        expect(store.data.meta.performanceNotes).toBe('')
        expect(store.data.meta.workTitle).toBe('')
    })
})