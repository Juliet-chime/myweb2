import React, { useState } from 'react'
import Button from '../../../component/button/Button'
import InputElement from '../../../component/input'
import { useAppSelector } from '../../../store/hooks'
import { DeparturDateAdult, OneWayHolder } from './style'

const RoundTrip = () => {

  const [data, setData] = useState({
    roundDepartureTerminal:"",
    roundArrivalTerminal:"",
    roundDeparturedate:"",
    roundArrivaldate:"",
    roundAdult:""
  })

  const onChangeOneway = (e: { target: any; }) =>{
console.log(e.target)
setData({...data,[e.target.name]:e.target.value})
  }

  const { isLoading, departureTerminal } = useAppSelector(
    (state) => state.departureTerminal
  );

  const onProceed = () =>{
    console.log(data)
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
         style={{ marginBottom: "20px" }}
         onChange={onChangeOneway}
       >
         <option value="DEFAULT" disabled hidden></option>
         {departureTerminal?.map((terminal, index) => (
           <option value={terminal?.TerminalName} key={index}>
             {terminal?.TerminalName}
           </option>
         ))}
       </select>
       )}
      
      <label>Travelling to</label>
      <select name="roundArrivalTerminal" id="roundArrivalTerminal" placeholder='Arrival Terminal' style={{marginBottom:"20px"}} onChange={onChangeOneway}>
      <option value="DEFAULT" disabled hidden style={{color:"white",display: "none"}}></option>
        <option value="boy">
          boy
        </option>
        <option value="boy">
          boy
        </option>
      </select>

      < DeparturDateAdult>
        <div style={{width:"45%"}}>
          <label htmlFor="">Departure Date</label>
          <InputElement type="date" id="roundDeparturedate" name="roundDeparturedate" value={data.roundDeparturedate}  onChange={onChangeOneway}/>
        </div>
        
        <div style={{width:"45%"}}>
          <label htmlFor="">Arrival Date</label>
          <InputElement type="date" id="roundArrivalDate" name="roundArrivaldate" value={data.roundArrivaldate} onChange={onChangeOneway} placeholder="select Date"/>
        </div>
      </ DeparturDateAdult>
      <div style={{width:"50%",margin:"10px 0px 30px 0px"}}>
        <label>Adults</label>
      <select name="roundAdult" id="roundAdult" placeholder='Arrival Terminal' onChange={onChangeOneway}>
      <option value="DEFAULT" disabled hidden style={{color:"white",display: "none"}}></option>
      {adults?.map((adult) => (
                <option value={adult} key={adult}>
                  {adult}
                </option>
              ))}
      </select>
        </div>
      <Button
            type="submit"
            text="Proceed"
            onClick={onProceed}
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