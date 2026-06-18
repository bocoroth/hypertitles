import { defineStore } from 'pinia'

import type { LineList, LineListState, ScriptLine, ScriptMetadata } from '@/types'

export default defineStore('linelist', {
  persist: true,
  state: (): LineListState => ({
    currentLine: null,
    nextLine: null,
    currentSequence: null,
    lineAfterSequence: null,
    isEditorMode: false,
    lineList: {
      meta: {
        authorName: '',
        composerName: '',
        css: '',
        dateCreated: '',
        dateModified: '',
        editorName: '',
        performanceNotes: '',
        workTitle: ''
      },
      text: [],
      sequences: []
    }
  }),
  getters: {
    getCurrentLine(state): ScriptLine | null {
      return state.currentLine
    },
    getNextLine(state): ScriptLine | null {
      return state.nextLine
    },
    getIsEditorMode(state): boolean {
      return state.isEditorMode
    },
    getLineList(state): LineList {
      return state.lineList
    }
  },
  actions: {
    // Setters
    setCurrentLine(line: ScriptLine) {
      this.currentLine = line
    },
    setIsEditorMode(isEditor: boolean) {
      this.isEditorMode = isEditor
    },
    setMetaData(metaData: ScriptMetadata) {
      this.lineList.meta = metaData
    },
    setLineList(newLineList: LineList) {
      this.lineList = newLineList
    },
    setCurrentSequence(sequenceId: number | null) {
      this.currentSequence = sequenceId
    },
    setLineAfterSequence(lineNum: number | null) {
      this.lineAfterSequence = lineNum
    },
    // Adders
    addScriptLine(lineObj: ScriptLine) {
      this.lineList.text.push(lineObj)
    }
  }
})
