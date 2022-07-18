export interface BookingStatusProps {
  isLoading?: boolean
  status?: 'idle' | 'loading' | 'failed' | 'succeeded'
  bookingStatus?: []
  error?: any
}
