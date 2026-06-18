export interface ScriptLine {
  cssClass: string
  durationMS: number
  endTime: string
  id: number
  startTime: string
  text: string
  sequenceAfter?: number | null
}

export interface Sequence {
  id: number
  name: string
  loop: number | 'inf'
  text: ScriptLine[]
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
  text: ScriptLine[],
  sequences?: Sequence[]
}

export interface LineListState {
  currentLine: ScriptLine | null
  nextLine: ScriptLine | null
  currentSequence: number | null
  lineAfterSequence: number | null
  isEditorMode: boolean
  lineList: LineList
}
