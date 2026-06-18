import { defineStore } from 'pinia'

export default defineStore('settings', {
  persist: true,
  state: () => ({
    lang: 'en',
    currentView: 'settingsTab'
  })
})
