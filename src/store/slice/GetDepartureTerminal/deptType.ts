export interface DepartureProps {
  isLoading?: boolean
  status?: 'idle' | 'loading' | 'failed' | 'succeeded'
  departureTerminal?: TerminalProps[]
  error?: any
}

interface TerminalProps {
  latitude?: number | null
  longitude?: number | null
  StateName?: string | null
  TerminalId?: any
  TerminalAddress?: number | null
  TerminalName?: string
  TerminalStartDate?: string | null
}
