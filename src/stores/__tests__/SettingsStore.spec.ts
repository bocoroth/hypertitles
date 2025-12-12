import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'

import SettingsStore from '../SettingsStore'

describe('SettingsStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should have correct initial state', () => {
    const store = SettingsStore()
    expect(store.lang).toBe('en')
    expect(store.currentView).toBe('settingsTab')
  })

  it('should update lang', () => {
    const store = SettingsStore()
    store.lang = 'fr'
    expect(store.lang).toBe('fr')
  })

  it('should update currentView', () => {
    const store = SettingsStore()
    store.currentView = 'profileTab'
    expect(store.currentView).toBe('profileTab')
  })

  it('should have independent store instances', () => {
    const store1 = SettingsStore()
    const store2 = SettingsStore()
    store1.lang = 'es'
    expect(store2.lang).toBe('en')
  })
})
