import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { Util } from '@/utils/Util'

describe('Util.debugLog', () => {
  beforeEach(() => {
    Util.setDebugMode(false)
  })

  afterEach(() => {
    vi.restoreAllMocks()
    Util.setDebugMode(false)
  })

  it('returns empty string and does not call console.debug when debug mode is disabled', () => {
    const consoleSpy = vi.spyOn(console, 'debug')
    Util.setDebugMode(false)
    const result = Util.debugLog('should', 'not', 'log')
    expect(result).toBe('')
    expect(consoleSpy).not.toHaveBeenCalled()
  })

  it('formats timestamp, joins messages and calls console.debug when enabled', () => {
    vi.spyOn(Date.prototype, 'toISOString').mockReturnValue('2020-01-01T12:34:56.789Z')
    const consoleSpy = vi.spyOn(console, 'debug')
    Util.setDebugMode(true)
    const result = Util.debugLog('a', 'b', 123)
    expect(result).toBe('[2020-01-01 12:34:56.789 UTC] a b 123')
    expect(consoleSpy).toHaveBeenCalledWith(result)
  })

  it('returns just the timestamp bracket when no messages provided', () => {
    vi.spyOn(Date.prototype, 'toISOString').mockReturnValue('2020-01-01T12:34:56.789Z')
    const consoleSpy = vi.spyOn(console, 'debug')
    Util.setDebugMode(true)
    const result = Util.debugLog()
    expect(result).toBe('[2020-01-01 12:34:56.789 UTC]')
    expect(consoleSpy).toHaveBeenCalledWith(result)
  })
})
