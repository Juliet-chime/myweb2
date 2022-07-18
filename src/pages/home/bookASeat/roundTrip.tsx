import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../../component/button/Button'
import InputElement from '../../../component/input'
import Loader from '../../../component/loader'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { getArrivalTerminal } from '../../../store/slice/GetArrivalTerminal'
import { getBookingSearch } from '../../../store/slice/GetBookingList'
import { DeparturDateAdult, OneWayHolder } from './style'

const RoundTrip = () => {

  const [departTerminalRound, setDepartTerminalRound] = useState('')
  const [toTerminalRound, setToTerminalRound] = useState('')
  const [departureDateRound, setDepartureDateRound] = useState(new Date())
  const [arrivalDateRound, setArrivalDateRound] = useState('')
  const [roundAdult, setRoundAdult] = useState(1)

  const dispatch = useAppDispatch();
  const navigate = useNavigate()

  const  {arrivalTerminal} = useAppSelector(
    (state) => state.arrivalTerminal
  );

  const onChangeOneway = (e: { target: any; }) =>{
setDepartTerminalRound(e.target.value)
dispatch(getArrivalTerminal(e.target.value))
  }

  const { isLoading, departureTerminal } = useAppSelector(
    (state) => state.departureTerminal
  );
  const booking = useAppSelector(
    (state) => state.bookingSearch
  );
  const onHandleRoundTrip = (e:any) =>{
    e.preventDefault()
const newStartDate = new Date(departureDateRound)
let date = JSON.stringify(newStartDate)
   date = date.slice(1,11)

   const newEndDate = new Date(arrivalDateRound)
let endDate = JSON.stringify(newEndDate)
  endDate = endDate.slice(1,11)

  const bookingData = {
    DepartureTerminalId: departTerminalRound,
    DestinationTerminalId: toTerminalRound,
    DepartureDate: date,
    ReturnDate: endDate,
    NumberOfAdults: roundAdult,
    TripType: '1',
  };

  const currItem = JSON.parse(JSON.stringify(departureTerminal));

  const departing = currItem.find(
    (terminal:any) => terminal.TerminalId === Number(departTerminalRound)
  );

    const currItemArrival = JSON.parse(JSON.stringify(arrivalTerminal));
    const arriving = currItemArrival.find(
    (terminal:any) => terminal.TerminalId === Number(toTerminalRound)
  );

    const userSelect = {
      noOfAdult: roundAdult,
      date: date,
      endDate: endDate,
      departureName:departing.TerminalName,
      arrivalName:arriving.TerminalName
    }

    localStorage.setItem('userSelect', JSON.stringify(userSelect))

  dispatch(getBookingSearch(bookingData)).then((res)=>{
    // const triptype = res.payload.Object.TripType
      if(res.payload.Object === null){
        alert('Error validating request')
      }else {
        navigate('/selectbus')
         const triptype = res.payload.Object.TripType
         localStorage.setItem('tripType',triptype)
      }
   }).catch(err => {
    console.log(err)
   })
  }

  const adults = [];
  for (let i = 1; i <= 13; i++) {
    adults.push(i);
  }
  return (
    <OneWayHolder>
    <div>
      <label>Travelling From</label>
      {isLoading?(<div>loading..</div>):(
         <select
         name="roundDepartureTerminal"
         id="roundDepartureTerminal"
         className="select"
         style={{ marginBottom: '20px' }}
         onChange={onChangeOneway}
         value={departTerminalRound}
       >
         <option value="" disabled hidden></option>
         {departureTerminal?.map((terminal, index) => (
           <option value={terminal?.TerminalId} key={index}>
             {terminal?.TerminalName}
           </option>
         ))}
       </select>
       )}
      
      <label>Travelling to</label>
      <select name="roundArrivalTerminal" id="roundArrivalTerminal" placeholder='Arrival Terminal' style={{marginBottom:'20px'}} onChange={(e:any)=> setToTerminalRound(e.target.value)} value={toTerminalRound}>
      <option value="" disabled hidden style={{color:'white',display: 'none'}}></option>
      {arrivalTerminal?.map((terminal, index) => (
           <option value={terminal?.TerminalId} key={index}>
             {terminal?.TerminalName}
           </option>
         ))}
      </select>

      < DeparturDateAdult>
        <div style={{width:'45%'}}>
          <label htmlFor="">Departure Date</label>
          <InputElement type="date" id="roundDeparturedate" name="roundDeparturedate" value={departureDateRound}  onChange={(e:any)=>setDepartureDateRound(e.target.value)} width="100%"/>
        </div>
        
        <div style={{width:'45%'}}>
          <label htmlFor="">Arrival Date</label>
          <InputElement type="date" id="roundArrivalDate" name="roundArrivaldate" value={arrivalDateRound} onChange={(e:any)=>setArrivalDateRound(e.target.value)} placeholder="select Date" width="100%"/>
        </div>
      </ DeparturDateAdult>
      <div style={{width:'50%',margin:'10px 0px 30px 0px'}}>
        <label>Adults</label>
      <select name="roundAdult" id="roundAdult" placeholder='Arrival Terminal' value={roundAdult} onChange={(e:any)=>setRoundAdult(e.target.value)}>
      <option value="DEFAULT" disabled hidden style={{color:'white',display: 'none'}}></option>
      {adults?.map((adult) => (
                <option value={adult} key={adult}>
                  {adult}
                </option>
              ))}
      </select>
        </div>
      <Button
            type="submit"
            text={booking.isLoading ? (<div style={{display:'flex', justifyContent:'center',alignItems:'center',gap:'10px'}}>
            <div>
              <Loader/>
            </div>
            <p>Looking for Bus</p>
            </div>):'Proceed'}
            disabled={!(departTerminalRound && toTerminalRound && departureDateRound && arrivalDateRound)}
            onClick={onHandleRoundTrip}
            width="100%"
              background="#696969"
              borderRadius="8px"
              fontSize="14px"
              color="white"
          />
    </div>
  </OneWayHolder>
  )
}

export default RoundTrip