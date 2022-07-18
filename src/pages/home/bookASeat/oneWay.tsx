import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../../component/button/Button'
import InputElement from '../../../component/input'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { getArrivalTerminal } from '../../../store/slice/GetArrivalTerminal'
import { getBookingSearch } from '../../../store/slice/GetBookingList'
import { getDepartureTerminal } from '../../../store/slice/GetDepartureTerminal'
import { DeparturDateAdult, OneWayHolder } from './style'
import ms from 'ms'
import { startDate } from '../utils'
import Loader from '../../../component/loader'

const OneWay = () => {
  const token = localStorage.getItem('token')
  const [departTerminal, setDepartTerminal] = useState('')
  const [toTerminal, setToTerminal] = useState('')
  const [departuredate, setdeparturedate] = useState(new Date())
  const [onewayAdult, setOnewayAdult] = useState(1)

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const departureTerminal = useAppSelector((state) => state.departureTerminal)
 

  const { arrivalTerminal } = useAppSelector((state) => state.arrivalTerminal)

  const onChangeOneway = (e: any) => {
    setDepartTerminal(e.target.value)
    dispatch(getArrivalTerminal(e.target.value))
  }

  const booking = useAppSelector((state) => state.bookingSearch)

  const onHandleOneWay = (e: any) => {
    e.preventDefault()
    const newStartDate = new Date(departuredate)
    let date = JSON.stringify(newStartDate)
    date = date.slice(1, 11)

    const bookingData = {
      DepartureTerminalId: departTerminal,
      DestinationTerminalId: toTerminal,
      DepartureDate: date,
      NumberOfAdults: onewayAdult,
      TripType: '0',
      BookingType: '0',
      NumberOfChildren: '0',
    }

    const currItem = JSON.parse(JSON.stringify(departureTerminal.departureTerminal));

  const departing = currItem.find(
    (terminal:any) => terminal.TerminalId === Number(departTerminal)
  );

    const currItemArrival = JSON.parse(JSON.stringify(arrivalTerminal));
    const arriving = currItemArrival.find(
    (terminal:any) => terminal.TerminalId === Number(toTerminal)
  );

    const userSelect = {
      noOfAdult: onewayAdult,
      date: date,
      departureName:departing.TerminalName,
      arrivalName:arriving.TerminalName
    }

    localStorage.setItem('userSelect', JSON.stringify(userSelect))

    dispatch(getBookingSearch(bookingData))
      .then((res) => {
        const triptype = res.payload.Object.TripType
        localStorage.setItem('tripType', triptype)
        if (res.payload.Object === null) {
          alert('Error validating request')
          window.location.reload()
        } else {
          navigate('/selectbus')
          console.log(res)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  //  const myCurrentDate=new Date()
  //  console.log(myCurrentDate)
  // const ms =  myCurrentDate.setDate(myCurrentDate.getDate()+ 14);
  // console.log(ms)
  // const futureDtae = new Date(ms)
  // console.log(futureDtae)

  const minsec = ms('14d')

  // const minDate = (+new Date(departuredate)-minsec);
  const maxsDate = new Date(+new Date(departuredate) + minsec)
  const maxDate =
    maxsDate.getFullYear() + '-' + (maxsDate.getMonth() + 1) + '-' + maxsDate.getDate()

  const adults = []
  for (let i = 1; i <= 13; i++) {
    adults.push(i)
  }

  useEffect(() => {
    dispatch(getDepartureTerminal())
  }, [token])
  return (
    <OneWayHolder>
      <div>
        <label>Travelling From</label>
        <select
          name='departureTerminal'
          id='departureTerminal'
          className='select'
          value={departTerminal}
          style={{ marginBottom: '20px' }}
          onChange={onChangeOneway}
        >
          <option value='' disabled hidden>
            select terminal
          </option>
          {departureTerminal.departureTerminal?.map((terminal, index) => (
            <option value={terminal?.TerminalId} key={index}>
              {terminal?.TerminalName}
            </option>
          ))}
        </select>
        <label>Travelling to</label>
        <select
          name='arrivalTerminal'
          id='arrivalTerminal'
          placeholder='Arrival Terminal'
          value={toTerminal}
          style={{ marginBottom: '20px' }}
          onChange={(e) => setToTerminal(e.target.value)}
        >
          <option value='' disabled style={{ color: 'white', display: 'none' }}>
            select terminal
          </option>
          {arrivalTerminal?.map((terminal, index) => (
            <option value={terminal?.TerminalId} key={index}>
              {terminal?.TerminalName}
            </option>
          ))}
        </select>

        <DeparturDateAdult>
          <div style={{ width: '50%' }}>
            <label htmlFor=''>Departure Date</label>
            <InputElement
              type='date'
              id='departuredate'
              name='departuredate'
              value={departuredate}
              onChange={(e: any) => setdeparturedate(e.target.value)}
              width='100%'
              min={startDate()}
              max={maxDate}
            />
          </div>

          <div style={{ width: '50%' }}>
            <label>Adults</label>
            <select
              name='onewayAdult'
              id='onewayAdult'
              placeholder='Arrival Terminal'
              value={onewayAdult}
              onChange={(e: any) => setOnewayAdult(e.target.value)}
            >
              <option
                value='DEFAULT'
                disabled
                hidden
                style={{ color: 'white', display: 'none' }}
              ></option>
              {adults?.map((adult) => (
                <option value={adult} key={adult}>
                  {adult}
                </option>
              ))}
            </select>
          </div>
        </DeparturDateAdult>
        <Button
          type='submit'
          text={
            booking.isLoading ? (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <div>
                  <Loader />
                </div>
                <p>Looking for Bus</p>
              </div>
            ) : (
              'Proceed'
            )
          }
          disabled={!(departTerminal && toTerminal && departuredate)}
          onClick={onHandleOneWay}
          width='100%'
          background='#696969'
          borderRadius='8px'
          fontSize='14px'
          color='white'
          margin='20px 0px 0px 0px'
        />
      </div>
    </OneWayHolder>
  )
}

export default OneWay
