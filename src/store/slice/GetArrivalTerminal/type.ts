export interface ArrivalProps {
  isLoading?: boolean
  status?: 'idle' | 'loading' | 'failed' | 'succeeded'
  arrivalTerminal?: TerminalProps[]
  error?: any
}

interface TerminalProps {
  latitude: number | null
  longitude: number | null
  StateName: string | null
  TerminalAddress: number | null
  TerminalId?: any
  TerminalName: string
  TerminalStartDate: string | null
}
