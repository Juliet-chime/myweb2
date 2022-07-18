import React, { createContext, useContext, useState } from 'react'

export type TripContextType = {
  returnTrip?: any;
  setReturnTrip?: any;
}

// const initialState = {
//     returnTrip: false
// }


export const TripContext = createContext<TripContextType | undefined>(undefined)



 export const useTripContext = () => useContext(TripContext) as TripContextType

const TripContextProvider = ({ children }:any) => {
    const [returnTrip, setReturnTrip] = useState(false)
   
    return <TripContext.Provider value={{ returnTrip, setReturnTrip }}>{children}</TripContext.Provider>;
  };
  
  export default TripContextProvider;
  