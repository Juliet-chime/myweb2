import { combineReducers } from "redux";
import authSlice from "./slice/Auth";
import getDepartureTerminalSlice from "./slice/GetDepartureTerminal";

const rootReducer = combineReducers({
  auth: authSlice,
  departureTerminal: getDepartureTerminalSlice,
});

export default rootReducer;
