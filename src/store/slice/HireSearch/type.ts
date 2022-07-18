export interface HireSearchProps {
  isLoading?: boolean
  status?: 'idle' | 'loading' | 'failed' | 'succeeded'
  hireSearch?: []
  error?: any
}
