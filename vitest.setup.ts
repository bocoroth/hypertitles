import { vi } from 'vitest'

// Prevent @vue/devtools-kit from accessing web storage during tests which
// triggers "--localstorage-file was provided without a valid path" warnings.
vi.mock('@vue/devtools-kit', () => ({
  __esModule: true,
  // Provide the exports used by the package in a no-op form
  getTimelineLayersStateFromStorage: () => undefined,
  initStateFactory: () => undefined,
  // default export fallback
  default: {}
}))
