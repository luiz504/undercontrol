import { useEffect } from 'react'

export const useDebugScreen = (message: string) => {
  useEffect(() => {
    console.log('🧿 Montou ' + message) //eslint-disable-line
    return () => {
      console.log('💥 Desmontou ' + message) //eslint-disable-line
    }
  }, [message])
}
