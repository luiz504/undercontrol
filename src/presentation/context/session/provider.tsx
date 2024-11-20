import { useQueryClient } from '@tanstack/react-query'
import { createContext, FC, PropsWithChildren, useState } from 'react'

type SessionContextType = {
  session: Date | null
  initSession: (session: Date) => void
  endSession: () => void
}

export const SessionContext = createContext<SessionContextType | null>(null)

export const SessionProvider: FC<PropsWithChildren> = ({ children }) => {
  const queryClient = useQueryClient()
  const [session, setSession] = useState<SessionContextType['session']>(null)

  const initSession = (session: Date) => {
    setSession(session)
  }

  const endSession = () => {
    queryClient.clear()
    setSession(null)
  }

  return (
    <SessionContext.Provider value={{ session, initSession, endSession }}>
      {children}
    </SessionContext.Provider>
  )
}
