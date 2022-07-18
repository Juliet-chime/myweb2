import React, { useEffect, useState } from 'react'
import Button from '../../component/button/Button'
import InputElement from '../../component/input'
import CustomModal from '../../component/modal'
import { DeparturDateAdult, OneWayHolder } from './bookASeat/style'
import styled from 'styled-components'
import { getBookingSearch } from '../../store/slice/GetBookingList'
import { useAppDispatch } from '../../store/hooks'

export interface PopularRouteProps {
  openModal?: boolean
  onClose?: any
  item?: any
}

const ModalHeaderWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  h4 {
    max-width: 290px;
    margin: auto;
  }
`

const ProtectRouteModal = ({ item, openModal, onClose }: PopularRouteProps) => {
  const dispatch = useAppDispatch()

  const [departTerminal, setDepartTerminal] = useState()
  const [toTerminal, setToTerminal] = useState()
  const [departuredate, setdeparturedate] = useState(new Date())
  const [onewayAdult, setOnewayAdult] = useState(1)
  const adults = []
  for (let i = 1; i <= 13; i++) {
    adults.push(i)
  }

  const onHandleOneWay = (e: any) => {
    e.preventDefault()
    const newDate = new Date(departuredate)
    let date = JSON.stringify(newDate)
    date = date.slice(1, 11)

    const bookingData = {
      DepartureTerminalId: item?.DepartureTerminalId,
      DestinationTerminalId: item?.DestinationTerminalId,
      DepartureDate: date,
      NumberOfAdults: onewayAdult,
      TripType: '0',
      BookingType: '0',
      NumberOfChildren: '0',
    }

    dispatch(getBookingSearch(bookingData))
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <CustomModal
      open={openModal}
      onClose={onClose}
      modalHeader={
        <ModalHeaderWrap>
          <h4>
            Book a bus from {item?.DepartureTerminalName.replace('=>', '-')} to{' '}
            {item?.DestinationTerminalName.replace('=>', '-')}{' '}
          </h4>
          <p>Please enter the following details</p>
        </ModalHeaderWrap>
      }
      modalBody={
        <OneWayHolder>
          <div>
            <label>Travelling From</label>
            <InputElement
              type='text'
              id='departureterminal'
              name='departureterminal'
              value={item?.DepartureTerminalName.replace('=>', '-')}
              onChange={(e: any) => setDepartTerminal(e.target.value)}
              width='100%'
              color='black'
            />

            <label>Travelling to</label>
            <InputElement
              type='text'
              id='arrivalterminal'
              name='arrivalterminal'
              value={item?.DestinationTerminalName.replace('=>', '-')}
              onChange={(e: any) => setToTerminal(e.target.value)}
              width='100%'
            />

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
                  color='black'
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
              text='Proceed'
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
      }
    />
  )
}

export default ProtectRouteModal
