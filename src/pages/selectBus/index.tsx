import React, { useContext, useState } from 'react'
import { useAppSelector } from '../../store/hooks'
import { BookingDetails, RouteHeader, RouteType, SelectBusHeader, SelectBusHolder } from './style'
import jet from '../../component/img/Jetmover 1.png'
import chair from '../../component/img/car-seat 1.svg'
import clock from '../../component/img/clock (2) 2.svg'
import group from '../../component/img/group.svg'
import map from '../../component/img/map.svg'
import Button from '../../component/button/Button'
import ViewSeatModal from './viewSeatModal/viewSeatModal'
import { useNavigate } from 'react-router-dom'
import { useTripContext, TripContext, TripContextType } from '../../context'
import ReturnViewSeatModal from './viewSeatModal/returnViewSeatModal'
import ExceededSeat from './viewSeatModal/exceededSeat'
// import ReturnViewSeatModal from './viewSeatModal/returnViewSeatModal'

const dateTimeFormat = new Intl.DateTimeFormat('en', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
})

const user = localStorage.getItem('userSelect')

const retriveduser = JSON.parse(user || '')

const fromArea = retriveduser?.departureName
const toArea = retriveduser?.arrivalName
const traveldate = retriveduser?.date
const noofAdult = retriveduser?.noOfAdult
const roundTraveldate = retriveduser?.endDate
const adultLimitOne = retriveduser?.noOfAdult
const adultLimitTwo = retriveduser?.noOfAdult

// userInfo = userInfo ? JSON.parse(userInfo) : (alert("Error validating your request"), history.push("./"))

const formatter = new Intl.NumberFormat()

const tripType = localStorage.getItem('tripType')
const userInfo = localStorage.getItem('userSelect')

const SelectBus = () => {
  const navigate = useNavigate()

  const { returnTrip, setReturnTrip } = useTripContext()

  // user = user ? JSON.parse(user) : (alert('Error validating your request'), navigate('./'))

  const { isLoading, bookingSearch } = useAppSelector((state) => state.bookingSearch)


  const [openViewSeat, setOpenViewSeat] = useState(false)
  const [openReturnViewSeat, setOpenReturnViewSeat] = useState(false)

  const [unBookedSeat, setUnBookedSeat] = useState()
  const [totalSeat, setTotalSeat] = useState()

  const [returnUnBookedSeat, setReturnUnBookedSeat] = useState()
  const [returntotalSeat, setReturnTotalSeat] = useState()
  const [openExceedSeat, setOpenExceedSeat] = useState(false)

  const onViewSeat = (item: any, spaceSeat: any) => {
    setOpenViewSeat(true)
    setUnBookedSeat(item)
    setTotalSeat(spaceSeat)
  }

  const onViewReturnSeat = (item: any, spaceSeat: any) => {
    setOpenReturnViewSeat(true)
    setReturnUnBookedSeat(item)
    setReturnTotalSeat(spaceSeat)
  }

  const onToggleOpenExceedSeat = () => {
    setOpenExceedSeat(true)
  }

  const onToggleCloseExceedSeat = () => {
    setOpenExceedSeat(false)
  }
  return (
    <>

<ExceededSeat openModal={openExceedSeat} onClose={onToggleCloseExceedSeat}/>

      <ViewSeatModal
        openModal={openViewSeat}
        onClose={() => setOpenViewSeat(false)}
        availableSeats={unBookedSeat}
        totalNumberOfSeats={totalSeat}
        triptype={bookingSearch?.TripType}
        limitOne={adultLimitOne}
        openExceedSeat={onToggleOpenExceedSeat}
  />

      <ReturnViewSeatModal
        openModal={openReturnViewSeat}
        onClose={() => setOpenReturnViewSeat(false)}
        returnAvailableSeats={returnUnBookedSeat}
        returnTotalNumberOfSeats={returntotalSeat}
        limitTwo={adultLimitTwo}
        openExceedSeat={onToggleOpenExceedSeat}
      />
      <>
        {returnTrip ? (
          <>
            <div>
              <h1 style={{padding:'0px 150px'}}>Return Trip Bus Availability</h1>
              <SelectBusHeader>
                {toArea} to {fromArea} {dateTimeFormat.format(new Date(roundTraveldate))} -{' '}
                {noofAdult} Adult(s)
              </SelectBusHeader>
            </div>
            {!bookingSearch?.Arrivals?.length ? (
              <h2 style={{padding:'20px 120px'}}>No bus found</h2>
            ) : (
              <SelectBusHolder>
                {bookingSearch?.Arrivals?.map((booking, index) => (
                  <div key={index}>
                    {/* <RouteHeader>
              {booking.RouteName?.replace('==>', 'to')}{' '}
              {dateTimeFormat.format(new Date(booking.DepartureDate))}
              {''}
              {booking.noOfAdult} Adult(s)
            </RouteHeader> */}
                    <RouteType>Select your bus type</RouteType>
                    <BookingDetails>
                      <div className='jetholder'>
                        <img src={jet} alt='' />
                      </div>
                      <div className='traveldetails'>
                        <h4>{booking.VehicleName}</h4>
                        <p className='select-p'>
                          <span>Departure:</span>&nbsp;{toArea.replace('==>', '-')}
                          &nbsp;
                          <span>•</span>
                          &nbsp;<span>Arrival:</span>&nbsp;
                          {fromArea.replace('=>', '-')}
                        </p>
                        <div className='bookingseat'>
                          <img src={chair} alt='' />
                          <p>{booking.AvailableNumberOfSeats} seats(available) </p>
                          <img src={clock} alt='' />
                          <p>{booking.DepartureTime}</p>
                        </div>
                        <div className='adults'>
                          <img src={group} alt='' />
                          <p>Adults: {booking.noOfAdult}</p>
                        </div>
                      </div>
                      <div className='fare'>
                        <h2>₦{formatter.format(booking.FarePrice)}</h2>
                        <Button
                          type='submit'
                          text='View seat'
                          onClick={() =>
                            onViewReturnSeat(booking.AvailableSeats, booking.TotalNumberOfSeats)
                          }
                          width='60%'
                          background='rgb(226, 29, 0)'
                          borderRadius='8px'
                          fontSize='14px'
                          color='white'
                          margin='10px 0px'
                        />
                      </div>
                    </BookingDetails>
                  </div>
                ))}
              </SelectBusHolder>
            )}
          </>
        ) : (
          <>
            <SelectBusHeader>
              {fromArea} to {toArea} {dateTimeFormat.format(new Date(traveldate))} - {noofAdult}{' '}
              Adult(s)
            </SelectBusHeader>
            {!bookingSearch?.Departures?.length ? (
              <h2  style={{padding:'20px 120px'}}>No bus found</h2>
            ) : (
              <SelectBusHolder>
                {bookingSearch?.Departures?.map((booking, index) => (
                  <div key={index}>
                    {/* <RouteHeader>
              {booking.RouteName?.replace('==>', 'to')}{' '}
              {dateTimeFormat.format(new Date(booking.DepartureDate))}
              {''}
              {booking.noOfAdult} Adult(s)
            </RouteHeader> */}
                    <RouteType>Select your bus type</RouteType>
                    <BookingDetails>
                      <div className='jetholder'>
                        <img src={jet} alt='' />
                      </div>
                      <div className='traveldetails'>
                        <h4>{booking.VehicleName}</h4>
                        <p className='select-p'>
                        <span>Departure:</span>&nbsp;{fromArea.replace('=>', '-')}
                          &nbsp;
                          <span>•</span>
                          &nbsp;<span>Arrival:</span>&nbsp;
                          {toArea.replace('==>', '-')}
                        </p>  
                        <div className='bookingseat'>
                          <img src={chair} alt='' />
                          <p>{booking.AvailableNumberOfSeats} seats(available) </p>
                          <img src={clock} alt='' />
                          <p>{booking.DepartureTime}</p>
                        </div>
                        <div className='adults'>
                          <img src={group} alt='' />
                          <p>Adults: {booking.noOfAdult}</p>
                        </div>
                      </div>
                      <div className='fare'>
                        <h2>₦{formatter.format(booking.FarePrice)}</h2>
                        <Button
                          type='submit'
                          text='View seat'
                          onClick={() =>
                            onViewSeat(booking.AvailableSeats, booking.TotalNumberOfSeats)
                          }
                          width='60%'
                          background='rgb(226, 29, 0)'
                          borderRadius='8px'
                          fontSize='14px'
                          color='white'
                          margin='10px 0px'
                        />
                      </div>
                    </BookingDetails>
                  </div>
                ))}
              </SelectBusHolder>
            )}
          </>
        )}
      </>
    </>
  )
}

export default SelectBus
