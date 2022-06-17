import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../../../component/button/Button'
import InputElement from '../../../component/input'
import { OneWayHolder, RetainABusHolder } from '../bookASeat/style'
import { endDate, startDate } from '../utils'

const HireOneWay = () => {

  const [data, setData] = useState({
    hireDepartureTerminal:"",
    hireArrivalTerminal:"",
    hireDeparturedate:startDate()
  })

  
  const [checkBox, setCheckBox] = useState(false)

  const onChangeHireABus = (e: { target: any; }) =>{
    console.log(e.target)
    setData({...data,[e.target.name]:e.target.value})
      }

      const onProceed = () =>{
        console.log(data)
        console.log(checkBox)
      }

  return (
    <OneWayHolder>
      <div>
        <label>Hire From</label>
        <select name="hireDepartureTerminal" id="" className='select' style={{marginBottom:"20px"}} onChange={onChangeHireABus}>
        <option value="DEFAULT"  disabled hidden></option>
          <option value="boy">
            boy
          </option>
          <option value="boy">
            boy
          </option>
        </select>
        <label>Hire Destination</label>
        <select name="hireArrivalTerminal" id="" placeholder='Arrival Terminal' style={{marginBottom:"20px"}} onChange={onChangeHireABus}>
        <option value="DEFAULT" disabled hidden ></option>
          <option value="boy">
            boy
          </option>
          <option value="boy">
            boy
          </option>
        </select>

        <label>Departing on</label>
<div style={{width:"98%"}}>
<InputElement type="date" id="hireDeparturedate" name="hireDeparturedate" value={data.hireDeparturedate}  onChange={onChangeHireABus} min={startDate()} max={endDate(14)} />
</div>
<RetainABusHolder>
<div style={{width:"3%"}}><InputElement type="checkbox" id="checkBox" name="checkBox" value={checkBox} onChange={(e:any)=>{setCheckBox(e.target.checked)}}/></div>
<label htmlFor="">Retain bus for the night?</label>
</RetainABusHolder>

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

export default HireOneWay

