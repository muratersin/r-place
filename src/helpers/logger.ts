export type LogType = 'error' | 'debug' | 'log' | 'warn'

const createLogger = (logType: LogType): ((...data: any[]) => void) => {
  const logPrefix = 'Logger: '

  if (import.meta.env.DEV || logType === 'error') {
    return console[logType].bind(console, logPrefix)
  }

  return () => null
}

export const consoleLog = createLogger('log')
export const consoleWarning = createLogger('warn')
export const consoleError = createLogger('error')
export const consoleDebug = createLogger('debug')
