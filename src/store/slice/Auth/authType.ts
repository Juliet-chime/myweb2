export interface AuthProps {
  isLoading?: boolean
  status?: 'idle' | 'loading' | 'failed' | 'succeeded'
  user?: UserProps
  error?: any
}

interface UserProps {
  '.expires': string | null
  '.issued': string | null
  access_token: string | null
  expires_in: number | null
  profilePix: string | null
  roles: string | null
  token_type: string | null
  user_id: string | null
  userassignedmenu: string | null
  username: string | null
}
