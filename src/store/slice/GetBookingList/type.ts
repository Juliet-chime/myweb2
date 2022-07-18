export interface BookingProps {
  isLoading?: boolean
  status?: 'idle' | 'loading' | 'failed' | 'succeeded'
  bookingSearch?: BookingSearchProps
  error?: any
}

interface BookingSearchProps {
Arrivals?:TerminalProps[] | null;
Departures?:TerminalProps[];
TripType?:number;
}

interface TerminalProps {
  AdultFare?: number
  AppReturnFare?: number
  AvailableNumberOfSeats?: number
  AvailableSeats?: number[]
  BookedSeat?: number
  BookedSeats?: number[]
  Currency?: string
  ChildFare?: string
  DateCreated?: string
  DepartureDate?: any
  DepartureTime?: string
  ExcludedSeats?: number
  FarePrice?: any
  HasPickup?: boolean
  IsVirtualBus?: boolean
  JetPrimeMoverIncludedSeats?: string
  RouteName?: string
  TotalNumberOfSeats?: string
  VehicleModel?: number
  VehicleName?: string
  noOfAdult?: number
  noOfChild?: number
}
