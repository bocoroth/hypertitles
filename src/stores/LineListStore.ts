import { defineStore } from 'pinia'

import type { LineListState } from '@/types'

export default defineStore('linelist', {
  state: (): LineListState => ({
    currentLine: '',
    currentLineNum: 0,
    data: { meta: { authorName: '', composerName: '', css: '', dateCreated: '', dateModified: '', editorName: '', performanceNotes: '', workTitle: '' }, text: [] },
    isEditorMode: false,
    lineData: [],
    metaData: { authorName: '', composerName: '', css: '', dateCreated: '', dateModified: '', editorName: '', performanceNotes: '', workTitle: '' }
  }),
})
