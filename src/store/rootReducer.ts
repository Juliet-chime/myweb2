import { combineReducers } from 'redux'
import authSlice from './slice/Auth'
import getArrivalTerminalSlice from './slice/GetArrivalTerminal'
import getBookingSearchSlice from './slice/GetBookingList'
import getBookingStatusSlice from './slice/GetBookingStatus'
import getDepartureTerminalSlice from './slice/GetDepartureTerminal'
import getHireSearchSlice from './slice/HireSearch'
import getPopularRoutesSlice from './slice/PopularRoute'

const rootReducer = combineReducers({
  auth: authSlice,
  departureTerminal: getDepartureTerminalSlice,
  arrivalTerminal: getArrivalTerminalSlice,
  bookingSearch: getBookingSearchSlice,
  bookingStatus: getBookingStatusSlice,
  hireSearch: getHireSearchSlice,
  pouplarRoutes: getPopularRoutesSlice,
})

export default rootReducer
