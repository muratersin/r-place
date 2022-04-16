import { describe, test, expect } from 'vitest'

import { consoleDebug, consoleError, consoleLog, consoleWarning } from '@/helpers/logger'

describe('Logger ', () => {
  test('consoleDebug should be a function', () => {
    expect(consoleDebug).toBeTypeOf('function')
  })

  test('consoleError should be a function', () => {
    expect(consoleError).toBeTypeOf('function')
  })

  test('consoleLog should be a function', () => {
    expect(consoleLog).toBeTypeOf('function')
  })

  test('consoleWarning should be a function', () => {
    expect(consoleWarning).toBeTypeOf('function')
  })
})
