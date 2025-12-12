export interface ScriptLine {
  cssClass: string
  durationMS: number
  endTime: string
  id: number
  startTime: string
  text: string
}

export interface ScriptMetadata {
  authorName: string
  composerName: string
  css: string
  dateCreated: string
  dateModified: string
  editorName: string
  performanceNotes: string
  workTitle: string
}

export interface LineList {
  meta: ScriptMetadata
  text: ScriptLine[]
}

export interface LineListState {
  currentLine: string
  currentLineNum: number
  data: LineList
  isEditorMode: boolean
  lineData: ScriptLine[]
  metaData: ScriptMetadata
}
