import React, { useState } from 'react'
import Button from '../../../component/button/Button'
import InputElement from '../../../component/input'
import { OneWayHolder } from '../bookASeat/style'


const BookingStatus = () => {
  const [refCode, setRefCode] = useState("")
  return (
    <OneWayHolder>
      <div>
      <label htmlFor="">Check booking status</label><br/><br/>
         <div style={{width:"97%"}}>
            <InputElement type="text" id="refCode" name="refCode" value={refCode}  onChange={(e:any)=>setRefCode(e.target.value)}/>
          </div>
        <Button
              type="submit"
              text="Proceed"
              onClick={() => console.log(refCode)}
              width="100%"
              background="#696969"
              borderRadius="8px"
              fontSize="14px"
              color="white"
              margin="20px 0px 0px 0px"
            />
      </div>
    </OneWayHolder>
  )
}

export default BookingStatus