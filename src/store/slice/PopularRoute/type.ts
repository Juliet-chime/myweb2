export interface PopularRouteProps {
  isLoading?: boolean
  status?: 'idle' | 'loading' | 'failed' | 'succeeded'
  popularRoutes?: TerminalProps[]
  error?: any
}

interface TerminalProps {
  DepartureTerminalId?: number
  DepartureTerminalName?: string
  DestinationTerminalId?: number
  RouteName?: string
  DestinationTerminalName?: string
  DispatchFee?: number
  TerminalName?: string
  TerminalStartDate?: string | null
}
