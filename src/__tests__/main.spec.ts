import { beforeEach, describe, expect, it, vi } from 'vitest'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'

vi.mock('vue')
vi.mock('pinia')
vi.mock('primevue/config')
vi.mock('@primeuix/themes/lara')
vi.mock('@/App.vue', () => ({ default: {} }))

describe('main.ts', () => {
  let mockApp: any

  beforeEach(async () => {
    vi.clearAllMocks()
    vi.resetModules()
    mockApp = {
      use: vi.fn().mockReturnThis(),
      mount: vi.fn()
    }
    const mockPinia = { 
      use: vi.fn(),
      install: vi.fn(),
      state: {}
    }
    vi.mocked(createApp).mockReturnValue(mockApp)
    vi.mocked(createPinia).mockReturnValue(mockPinia as any)
    await import('@/main')
  })

  it('should create a Vue app instance', () => {
    expect(createApp).toBeDefined()
  })

  it('should initialize Pinia store', () => {
    expect(createPinia).toBeDefined()
  })

  it('should register Pinia plugin', () => {
    expect(mockApp.use).toHaveBeenCalled()
  })

  it('should configure PrimeVue theme', () => {
    expect(mockApp.use).toHaveBeenCalledWith(
      PrimeVue,
      expect.objectContaining({
        theme: expect.any(Object)
      })
    )
  })

  it('should mount app to #app element', () => {
    expect(mockApp.mount).toHaveBeenCalledWith('#app')
  })
})
