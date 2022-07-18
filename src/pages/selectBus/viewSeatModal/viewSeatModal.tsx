import React, { createContext, useContext, useEffect, useState } from 'react'

import selected from '../../../component/img/selected.svg'
import available from '../../../component/img/available.svg'
import booked from '../../../component/img/booked.svg'
import steering from '../../../component/img/steering-wheel 1.svg'
import carSeat from '../../../component/img/seat 2.svg'
import {
  ImgEight,
  ImgEleven,
  ImgFive,
  ImgFour,
  ImgFourteen,
  ImgNine,
  ImgOne,
  ImgSeven,
  ImgSix,
  ImgTen,
  ImgThirteen,
  ImgThree,
  ImgTwelve,
  ImgTwo,
  RowThree,
  RowTwo,
  SeatEightDiv,
  SeatElevenDiv,
  SeatFiveDiv,
  SeatFourDiv,
  SeatFourteenDiv,
  SeatNineDiv,
  SeatOneDiv,
  SeatSevenDiv,
  SeatSixDiv,
  SeatTenDiv,
  SeatThirteenDiv,
  SeatThreeDiv,
  SeatTwelveDiv,
  SeatTwoDiv,
  SteeringDriver,
  ViewHeaderDiv,
} from './style'
import CustomModal from '../../../component/modal'
import Button from '../../../component/button/Button'
import { useTripContext } from '../../../context'
// import './style.css'
import styled from 'styled-components'
import ExceededSeat from './exceededSeat'
import { useNavigate } from 'react-router-dom'

export interface PopularRouteProps {
  openModal?: boolean
  onClose?: any
  availableSeats?: number[]
  totalNumberOfSeats?: any
  triptype?: any;
  limitOne?:any;
  openExceedSeat?:any;
}

const ViewSeatHeader = () => {
  return (
    <ViewHeaderDiv>
      <div className='seatContainer'>
        <h1 className='titles-seat'>
          <img src={selected} alt='' />
          <br /> Selected Seat
        </h1>
      </div>

      <div className='seatContainer'>
        <h1 className='titles-seat'>
          <img src={available} alt='' /> <br />
          Available Seat
        </h1>
      </div>

      <div className='seatContainer'>
        <h1 className='titles-seat'>
          <img src={booked} alt='' /> <br />
          Booked Seat
        </h1>
      </div>
    </ViewHeaderDiv>
  )
}

const ViewSeatModal = ({
  openModal,
  onClose,
  availableSeats,
  totalNumberOfSeats,
  triptype,
  limitOne,
  openExceedSeat
}: PopularRouteProps) => {
  console.log(availableSeats)
  const [checked, setChecked] = useState(false)
  const [currentData, setCurrentData] = useState([]);
  // const [openExceedSeat, setOpenExceedSeat] = useState(false)

  const navigate =  useNavigate() 

  const { returnTrip, setReturnTrip } = useTripContext()


  const handleChange = (e:any) => {
    let isSelected = e.currentTarget.checked;
    const values = e.target.value;
    const items = [...currentData, values];
    const uniqueItems = [...new Set(items) as any];


    if (isSelected) {
      if (currentData.length < limitOne){
         setCurrentData(uniqueItems as [])
      }else{
        e.preventDefault();
        isSelected = false;
        onClose()
        openExceedSeat();
      }
    } else {
      setCurrentData(currentData.filter((item) => values !== item));
    }
  }

  const ShowPassengerDetails = (e:any) => {
    if (triptype === 0) {
      navigate('/passengerdetails')
    } else {
      setReturnTrip(true)
    }
    onClose()
  }
  return (
    <>
    <CustomModal
      open={openModal}
      onClose={onClose}
      modalHeader={<ViewSeatHeader />}
      modalBody={
        <>
          {totalNumberOfSeats === 14 ? (
            <>
            {!availableSeats?.length ? (<h1 style={{fontSize:'18px',textAlign:'center'}}>No seat Available</h1>) : (<div>
                <SteeringDriver>
                  <div className='steering'>
                    <img src={steering} alt='' />
                  </div>
                  <br />
                  <br />
                  <br />

                  <div>
                    {availableSeats?.includes(1) ? (
                      <SeatOneDiv>
                        <input type='checkbox' id='seat-1' value='1' onChange={handleChange}/>

                        <label htmlFor='seat-1' className='seat-one'>
                          <span className='seatnumbers'>
                            <ImgOne src={carSeat} alt='' className='seat1' />
                          </span>
                          <span className='number'>1</span>
                        </label>
                      </SeatOneDiv>
                    ) : (
                      <SeatOneDiv>
                        <input type='checkbox' id='seat-1' disabled={true} />

                        <label htmlFor='seat-1' className='seat-one'>
                          <span className='seatnumbers'>
                            <ImgOne src={carSeat} alt='' className='seat1' />
                          </span>
                          <span className='number'>1</span>
                        </label>
                      </SeatOneDiv>
                    )}
                  </div>
                </SteeringDriver>

                <RowThree>
                <div className='childrow'>
                  {availableSeats?.includes(2) ? (
                    <SeatTwoDiv>
                      <input type='checkbox' id='seat-2' value='2' onChange={handleChange} />

                      <label htmlFor='seat-2' className='seat-two'>
                        <span className='seatnumbers'>
                          <ImgTwo src={carSeat} alt='' className='seat2' />
                        </span>
                        <span className='number'>2</span>
                      </label>
                    </SeatTwoDiv>
                  ) : (
                    <SeatTwoDiv>
                      <input type='checkbox' id='seat-2' disabled={true} />

                      <label htmlFor='seat-2' className='seat-two'>
                        <span className='seatnumbers'>
                          <ImgTwo src={carSeat} alt='' className='seat2' />
                        </span>
                        <span className='number'>2</span>
                      </label>
                    </SeatTwoDiv>
                  )}

                  {availableSeats?.includes(3) ? (
                    <SeatThreeDiv>
                      <input type='checkbox' id='seat-3' value='3' onChange={handleChange} />

                      <label htmlFor='seat-3' className='seat-three'>
                        <span className='seatnumbers'>
                          <ImgThree src={carSeat} alt='' className='seat3' />
                        </span>
                        <span className='number'>3</span>
                      </label>
                    </SeatThreeDiv>
                  ) : (
                    <SeatThreeDiv>
                      <input type='checkbox' id='seat-3' disabled={true} />

                      <label htmlFor='seat-3' className='seat-three'>
                        <span className='seatnumbers'>
                          <ImgThree src={carSeat} alt='' className='seat3' />
                        </span>
                        <span className='number'>3</span>
                      </label>
                    </SeatThreeDiv>
                  )}
                  </div>

                  {availableSeats?.includes(4) ? (
                    <SeatFourDiv>
                      <input type='checkbox' id='seat-4' value='4' onChange={handleChange} />

                      <label htmlFor='seat-4' className='seat-four'>
                        <span className='seatnumbers'>
                          <ImgFour src={carSeat} alt='' className='seat4' />
                        </span>
                        <span className='number'>4</span>
                      </label>
                    </SeatFourDiv>
                  ) : (
                    <SeatFourDiv>
                      <input type='checkbox' id='seat-4' disabled={true} />

                      <label htmlFor='seat-4' className='seat-four'>
                        <span className='seatnumbers'>
                          <ImgFour src={carSeat} alt='' className='seat4' />
                        </span>
                        <span className='number'>4</span>
                      </label>
                    </SeatFourDiv>
                  )}
                </RowThree>
                <br />

                <RowThree>
                  <div className='childrow'>
                    {availableSeats?.includes(5) ? (
                      <SeatFiveDiv>
                        <input type='checkbox' id='seat-5' value='5' onChange={handleChange} />

                        <label htmlFor='seat-5' className='seat-five'>
                          <span className='seatnumbers'>
                            <ImgFive src={carSeat} alt='' className='seat5' />
                          </span>
                          <span className='number'>5</span>
                        </label>
                      </SeatFiveDiv>
                    ) : (
                      <SeatFiveDiv>
                        <input type='checkbox' id='seat-5' disabled={true} />

                        <label htmlFor='seat-5' className='seat-five'>
                          <span className='seatnumbers'>
                            <ImgFive src={carSeat} alt='' className='seat5' />
                          </span>
                          <span className='number'>5</span>
                        </label>
                      </SeatFiveDiv>
                    )}

                    {availableSeats?.includes(6) ? (
                      <SeatSixDiv>
                        <input type='checkbox' id='seat-6' value='6' onChange={handleChange} />

                        <label htmlFor='seat-6' className='seat-six'>
                          <span className='seatnumbers'>
                            <ImgSix src={carSeat} alt='' className='seat6' />
                          </span>
                          <span className='number'>6</span>
                        </label>
                      </SeatSixDiv>
                    ) : (
                      <SeatSixDiv>
                        <input type='checkbox' id='seat-6' disabled={true} />

                        <label htmlFor='seat-6' className='seat-six'>
                          <span className='seatnumbers'>
                            <ImgSix src={carSeat} alt='' className='seat6' />
                          </span>
                          <span className='number'>6</span>
                        </label>
                      </SeatSixDiv>
                    )}
                  </div>

                  {availableSeats?.includes(7) ? (
                    <SeatSevenDiv>
                      <input type='checkbox' id='seat-7' value='7' onChange={handleChange} />

                      <label htmlFor='seat-7' className='seat-seven'>
                        <span className='seatnumbers'>
                          <ImgSeven src={carSeat} alt='' className='seat7' />
                        </span>
                        <span className='number'>7</span>
                      </label>
                    </SeatSevenDiv>
                  ) : (
                    <SeatSixDiv>
                      <input type='checkbox' id='seat-7' disabled={true} />

                      <label htmlFor='seat-7' className='seat-seven'>
                        <span className='seatnumbers'>
                          <ImgSix src={carSeat} alt='' className='seat7' />
                        </span>
                        <span className='number'>7</span>
                      </label>
                    </SeatSixDiv>
                  )}
                </RowThree>
                <br />

                <RowThree>
                  <div className='childrow'>
                    {availableSeats?.includes(8) ? (
                      <SeatEightDiv>
                        <input type='checkbox' id='seat-8' value='8' onChange={handleChange} />

                        <label htmlFor='seat-8' className='seat-eight'>
                          <span className='seatnumbers'>
                            <ImgEight src={carSeat} alt='' className='seat8' />
                          </span>
                          <span className='number'>8</span>
                        </label>
                      </SeatEightDiv>
                    ) : (
                      <SeatEightDiv>
                        <input type='checkbox' id='seat-8' disabled={true} />

                        <label htmlFor='seat-8' className='seat-eight'>
                          <span className='seatnumbers'>
                            <ImgEight src={carSeat} alt='' className='seat8' />
                          </span>
                          <span className='number'>8</span>
                        </label>
                      </SeatEightDiv>
                    )}

                    {availableSeats?.includes(9) ? (
                      <SeatNineDiv>
                        <input type='checkbox' id='seat-9' value='9' onChange={handleChange} />

                        <label htmlFor='seat-9' className='seat-nine'>
                          <span className='seatnumbers'>
                            <ImgNine src={carSeat} alt='' className='seat9' />
                          </span>
                          <span className='number'>9</span>
                        </label>
                      </SeatNineDiv>
                    ) : (
                      <SeatNineDiv>
                        <input type='checkbox' id='seat-6' disabled={true} />

                        <label htmlFor='seat-9' className='seat-nine'>
                          <span className='seatnumbers'>
                            <ImgNine src={carSeat} alt='' className='seat9' />
                          </span>
                          <span className='number'>9</span>
                        </label>
                      </SeatNineDiv>
                    )}
                  </div>

                  {availableSeats?.includes(10) ? (
                    <SeatTenDiv>
                      <input type='checkbox' id='seat-10' value='10' onChange={handleChange} />

                      <label htmlFor='seat-10' className='seat-ten'>
                        <span className='seatnumbers'>
                          <ImgTen src={carSeat} alt='' className='seat10' />
                        </span>
                        <span className='number'>10</span>
                      </label>
                    </SeatTenDiv>
                  ) : (
                    <SeatTenDiv>
                      <input type='checkbox' id='seat-10' disabled={true} />

                      <label htmlFor='seat-10' className='seat-ten'>
                        <span className='seatnumbers'>
                          <ImgTen src={carSeat} alt='' className='seat10' />
                        </span>
                        <span className='number'>10</span>
                      </label>
                    </SeatTenDiv>
                  )}
                </RowThree>
                <br />

                <RowThree>
                <div className='childrow'>
                    {availableSeats?.includes(11) ? (
                      <SeatElevenDiv>
                        <input type='checkbox' id='seat-11' value='11' onChange={handleChange} />

                        <label htmlFor='seat-11' className='seat-eleven'>
                          <span className='seatnumbers'>
                            <ImgEleven src={carSeat} alt='' className='seat11' />
                          </span>
                          <span className='number'>11</span>
                        </label>
                      </SeatElevenDiv>
                    ) : (
                      <SeatElevenDiv>
                        <input type='checkbox' id='seat-11' disabled={true} />

                        <label htmlFor='seat-11' className='seat-eleven'>
                          <span className='seatnumbers'>
                            <ImgEleven src={carSeat} alt='' className='seat11' />
                          </span>
                          <span className='number'>11</span>
                        </label>
                      </SeatElevenDiv>
                    )}

                    {availableSeats?.includes(12) ? (
                      <SeatTwelveDiv>
                        <input type='checkbox' id='seat-12' value='12' onChange={handleChange} />

                        <label htmlFor='seat-12' className='seat-twelve'>
                          <span className='seatnumbers'>
                            <ImgTwelve src={carSeat} alt='' className='seat12' />
                          </span>
                          <span className='number'>12</span>
                        </label>
                      </SeatTwelveDiv>
                    ) : (
                      <SeatTwelveDiv>
                        <input type='checkbox' id='seat-12' disabled={true} />

                        <label htmlFor='seat-12' className='seat-twelve'>
                          <span className='seatnumbers'>
                            <ImgTwelve src={carSeat} alt='' className='seat12' />
                          </span>
                          <span className='number'>12</span>
                        </label>
                      </SeatTwelveDiv>
                    )}
                    </div>

                    {availableSeats?.includes(13) ? (
                      <SeatThirteenDiv>
                        <input type='checkbox' id='seat-13' value='13' onChange={handleChange} />

                        <label htmlFor='seat-13' className='seat-thirteen'>
                          <span className='seatnumbers'>
                            <ImgThirteen src={carSeat} alt='' className='seat13' />
                          </span>
                          <span className='number'>13</span>
                        </label>
                      </SeatThirteenDiv>
                    ) : (
                      <SeatThirteenDiv>
                        <input type='checkbox' id='seat-13' disabled={true} />

                        <label htmlFor='seat-13' className='seat-thirteen'>
                          <span className='seatnumbers'>
                            <ImgThirteen src={carSeat} alt='' className='seat13' />
                          </span>
                          <span className='number'>13</span>
                        </label>
                      </SeatThirteenDiv>
                    )}
                  

                  {availableSeats?.includes(14) ? (
                      <SeatFourteenDiv>
                        <input type='checkbox' id='seat-14' value='14' onChange={handleChange} />

                        <label htmlFor='seat-14' className='seat-fourteen'>
                          <span className='seatnumbers'>
                            <ImgFourteen src={carSeat} alt='' className='seat14' />
                          </span>
                          <span className='number'>14</span>
                        </label>
                      </SeatFourteenDiv>
                    ) : (
                      <SeatFourteenDiv>
                        <input type='checkbox' id='seat-14' disabled={true} />

                        <label htmlFor='seat-14' className='seat-fourteen'>
                          <span className='seatnumbers'>
                            <ImgFourteen src={carSeat} alt='' className='seat14' />
                          </span>
                          <span className='number'>14</span>
                        </label>
                      </SeatFourteenDiv>
                    )}
                </RowThree>

                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                  <Button
                    type='button'
                    text='Continue'
                    onClick={ShowPassengerDetails}
                    width='60%'
                    background='#696969'
                    borderRadius='8px'
                    fontSize='14px'
                    color='white'
                    disabled={currentData.length < limitOne}
                  />
                </div>
              </div>)}
              
            </>
          ) : totalNumberOfSeats === 13 ? (
            <>
              {!availableSeats?.length ? (<h1  style={{fontSize:'18px',textAlign:'center'}}>No seat avaliable</h1>) : (<div>
                <SteeringDriver>
                  <div className='steering'>
                    <img src={steering} alt='' />
                  </div>
                  <br />
                  <br />
                  <br />

                  <div>
                    {availableSeats?.includes(1) ? (
                      <SeatOneDiv>
                        <input type='checkbox' id='seat-1' value='1' onChange={handleChange} />

                        <label htmlFor='seat-1' className='seat-one'>
                          <span className='seatnumbers'>
                            <ImgOne src={carSeat} alt='' className='seat1' />
                          </span>
                          <span className='number'>1</span>
                        </label>
                      </SeatOneDiv>
                    ) : (
                      <SeatOneDiv>
                        <input type='checkbox' id='seat-1' disabled={true} />

                        <label htmlFor='seat-1' className='seat-one'>
                          <span className='seatnumbers'>
                            <ImgOne src={carSeat} alt='' className='seat1' />
                          </span>
                          <span className='number'>1</span>
                        </label>
                      </SeatOneDiv>
                    )}
                  </div>
                </SteeringDriver>

                <RowTwo>
                  {availableSeats?.includes(2) ? (
                    <SeatTwoDiv>
                      <input type='checkbox' id='seat-2' value='2' onChange={handleChange} />

                      <label htmlFor='seat-2' className='seat-two'>
                        <span className='seatnumbers'>
                          <ImgTwo src={carSeat} alt='' className='seat2' />
                        </span>
                        <span className='number'>2</span>
                      </label>
                    </SeatTwoDiv>
                  ) : (
                    <SeatTwoDiv>
                      <input type='checkbox' id='seat-2' disabled={true} />

                      <label htmlFor='seat-2' className='seat-two'>
                        <span className='seatnumbers'>
                          <ImgTwo src={carSeat} alt='' className='seat2' />
                        </span>
                        <span className='number'>2</span>
                      </label>
                    </SeatTwoDiv>
                  )}

                  {availableSeats?.includes(3) ? (
                    <SeatThreeDiv>
                      <input type='checkbox' id='seat-3' value='3' onChange={handleChange} />

                      <label htmlFor='seat-3' className='seat-three'>
                        <span className='seatnumbers'>
                          <ImgThree src={carSeat} alt='' className='seat3' />
                        </span>
                        <span className='number'>3</span>
                      </label>
                    </SeatThreeDiv>
                  ) : (
                    <SeatThreeDiv>
                      <input type='checkbox' id='seat-3' disabled={true} />

                      <label htmlFor='seat-3' className='seat-three'>
                        <span className='seatnumbers'>
                          <ImgThree src={carSeat} alt='' className='seat3' />
                        </span>
                        <span className='number'>3</span>
                      </label>
                    </SeatThreeDiv>
                  )}

                  {availableSeats?.includes(4) ? (
                    <SeatFourDiv>
                      <input type='checkbox' id='seat-4' value='4' onChange={handleChange} />

                      <label htmlFor='seat-4' className='seat-four'>
                        <span className='seatnumbers'>
                          <ImgFour src={carSeat} alt='' className='seat4' />
                        </span>
                        <span className='number'>4</span>
                      </label>
                    </SeatFourDiv>
                  ) : (
                    <SeatFourDiv>
                      <input type='checkbox' id='seat-4' disabled={true} />

                      <label htmlFor='seat-4' className='seat-four'>
                        <span className='seatnumbers'>
                          <ImgFour src={carSeat} alt='' className='seat4' />
                        </span>
                        <span className='number'>4</span>
                      </label>
                    </SeatFourDiv>
                  )}
                </RowTwo>
                <br />

                <RowThree>
                  <div className='childrow'>
                    {availableSeats?.includes(5) ? (
                      <SeatFiveDiv>
                        <input type='checkbox' id='seat-5' value='5' onChange={handleChange} />

                        <label htmlFor='seat-5' className='seat-five'>
                          <span className='seatnumbers'>
                            <ImgFive src={carSeat} alt='' className='seat5' />
                          </span>
                          <span className='number'>5</span>
                        </label>
                      </SeatFiveDiv>
                    ) : (
                      <SeatFiveDiv>
                        <input type='checkbox' id='seat-5' disabled={true} />

                        <label htmlFor='seat-5' className='seat-five'>
                          <span className='seatnumbers'>
                            <ImgFive src={carSeat} alt='' className='seat5' />
                          </span>
                          <span className='number'>5</span>
                        </label>
                      </SeatFiveDiv>
                    )}

                    {availableSeats?.includes(6) ? (
                      <SeatSixDiv>
                        <input type='checkbox' id='seat-6' value='6' onChange={handleChange} />

                        <label htmlFor='seat-6' className='seat-six'>
                          <span className='seatnumbers'>
                            <ImgSix src={carSeat} alt='' className='seat6' />
                          </span>
                          <span className='number'>6</span>
                        </label>
                      </SeatSixDiv>
                    ) : (
                      <SeatSixDiv>
                        <input type='checkbox' id='seat-6' disabled={true} />

                        <label htmlFor='seat-6' className='seat-six'>
                          <span className='seatnumbers'>
                            <ImgSix src={carSeat} alt='' className='seat6' />
                          </span>
                          <span className='number'>6</span>
                        </label>
                      </SeatSixDiv>
                    )}
                  </div>

                  {availableSeats?.includes(7) ? (
                    <SeatSevenDiv>
                      <input type='checkbox' id='seat-7' value='7' onChange={handleChange} />

                      <label htmlFor='seat-7' className='seat-seven'>
                        <span className='seatnumbers'>
                          <ImgSeven src={carSeat} alt='' className='seat7' />
                        </span>
                        <span className='number'>7</span>
                      </label>
                    </SeatSevenDiv>
                  ) : (
                    <SeatSixDiv>
                      <input type='checkbox' id='seat-7' disabled={true} />

                      <label htmlFor='seat-7' className='seat-seven'>
                        <span className='seatnumbers'>
                          <ImgSix src={carSeat} alt='' className='seat7' />
                        </span>
                        <span className='number'>7</span>
                      </label>
                    </SeatSixDiv>
                  )}
                </RowThree>
                <br />

                <RowThree>
                  <div className='childrow'>
                    {availableSeats?.includes(8) ? (
                      <SeatEightDiv>
                        <input type='checkbox' id='seat-8' value='8' onChange={handleChange} />

                        <label htmlFor='seat-8' className='seat-eight'>
                          <span className='seatnumbers'>
                            <ImgEight src={carSeat} alt='' className='seat8' />
                          </span>
                          <span className='number'>8</span>
                        </label>
                      </SeatEightDiv>
                    ) : (
                      <SeatEightDiv>
                        <input type='checkbox' id='seat-8' disabled={true} />

                        <label htmlFor='seat-8' className='seat-eight'>
                          <span className='seatnumbers'>
                            <ImgEight src={carSeat} alt='' className='seat8' />
                          </span>
                          <span className='number'>8</span>
                        </label>
                      </SeatEightDiv>
                    )}

                    {availableSeats?.includes(9) ? (
                      <SeatNineDiv>
                        <input type='checkbox' id='seat-9' value='9' onChange={handleChange} />

                        <label htmlFor='seat-9' className='seat-nine'>
                          <span className='seatnumbers'>
                            <ImgNine src={carSeat} alt='' className='seat9' />
                          </span>
                          <span className='number'>9</span>
                        </label>
                      </SeatNineDiv>
                    ) : (
                      <SeatNineDiv>
                        <input type='checkbox' id='seat-6' disabled={true} />

                        <label htmlFor='seat-9' className='seat-nine'>
                          <span className='seatnumbers'>
                            <ImgNine src={carSeat} alt='' className='seat9' />
                          </span>
                          <span className='number'>9</span>
                        </label>
                      </SeatNineDiv>
                    )}
                  </div>

                  {availableSeats?.includes(10) ? (
                    <SeatTenDiv>
                      <input type='checkbox' id='seat-10' value='10' onChange={handleChange} />

                      <label htmlFor='seat-10' className='seat-ten'>
                        <span className='seatnumbers'>
                          <ImgTen src={carSeat} alt='' className='seat10' />
                        </span>
                        <span className='number'>10</span>
                      </label>
                    </SeatTenDiv>
                  ) : (
                    <SeatTenDiv>
                      <input type='checkbox' id='seat-10' disabled={true} />

                      <label htmlFor='seat-10' className='seat-ten'>
                        <span className='seatnumbers'>
                          <ImgTen src={carSeat} alt='' className='seat10' />
                        </span>
                        <span className='number'>10</span>
                      </label>
                    </SeatTenDiv>
                  )}
                </RowThree>
                <br />

                <RowThree>
                  <div className='childrow'>
                    {availableSeats?.includes(11) ? (
                      <SeatElevenDiv>
                        <input type='checkbox' id='seat-11' value='11' onChange={handleChange} />

                        <label htmlFor='seat-11' className='seat-eleven'>
                          <span className='seatnumbers'>
                            <ImgEleven src={carSeat} alt='' className='seat11' />
                          </span>
                          <span className='number'>11</span>
                        </label>
                      </SeatElevenDiv>
                    ) : (
                      <SeatElevenDiv>
                        <input type='checkbox' id='seat-11' disabled={true} />

                        <label htmlFor='seat-11' className='seat-eleven'>
                          <span className='seatnumbers'>
                            <ImgEleven src={carSeat} alt='' className='seat11' />
                          </span>
                          <span className='number'>11</span>
                        </label>
                      </SeatElevenDiv>
                    )}

                    {availableSeats?.includes(12) ? (
                      <SeatTwelveDiv>
                        <input type='checkbox' id='seat-12' value='12' onChange={handleChange} />

                        <label htmlFor='seat-12' className='seat-twelve'>
                          <span className='seatnumbers'>
                            <ImgTwelve src={carSeat} alt='' className='seat12' />
                          </span>
                          <span className='number'>12</span>
                        </label>
                      </SeatTwelveDiv>
                    ) : (
                      <SeatTwelveDiv>
                        <input type='checkbox' id='seat-12' disabled={true} />

                        <label htmlFor='seat-12' className='seat-twelve'>
                          <span className='seatnumbers'>
                            <ImgTwelve src={carSeat} alt='' className='seat12' />
                          </span>
                          <span className='number'>12</span>
                        </label>
                      </SeatTwelveDiv>
                    )}
                  </div>

                  {availableSeats?.includes(13) ? (
                    <SeatThirteenDiv>
                      <input type='checkbox' id='seat-13' value='13' onChange={handleChange} />

                      <label htmlFor='seat-13' className='seat-thirteen'>
                        <span className='seatnumbers'>
                          <ImgThirteen src={carSeat} alt='' className='seat13' />
                        </span>
                        <span className='number'>13</span>
                      </label>
                    </SeatThirteenDiv>
                  ) : (
                    <SeatThirteenDiv>
                      <input type='checkbox' id='seat-13' disabled={true} />

                      <label htmlFor='seat-13' className='seat-thirteen'>
                        <span className='seatnumbers'>
                          <ImgThirteen src={carSeat} alt='' className='seat13' />
                        </span>
                        <span className='number'>13</span>
                      </label>
                    </SeatThirteenDiv>
                  )}
                </RowThree>

                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                  <Button
                    type='button'
                    text='Continue'
                    onClick={ShowPassengerDetails}
                    width='60%'
                    background='#696969'
                    borderRadius='8px'
                    fontSize='14px'
                    color='white'
                    disabled={currentData.length < limitOne}
                  />
                </div>
              </div>)}
            </>
          ) : totalNumberOfSeats === 12 ? (
            <>
            {!availableSeats?.length ? (<h1  style={{fontSize:'18px',textAlign:'center'}}>No seat avaliable</h1>) : (<div>
                <SteeringDriver>
                  <div className='steering'>
                    <img src={steering} alt='' />
                  </div>
                  <br />
                  <br />
                  <br />

                  <div>
                    {availableSeats?.includes(1) ? (
                      <SeatOneDiv>
                        <input type='checkbox' id='seat-1' value='1' onChange={handleChange} />

                        <label htmlFor='seat-1' className='seat-one'>
                          <span className='seatnumbers'>
                            <ImgOne src={carSeat} alt='' className='seat1' />
                          </span>
                          <span className='number'>1</span>
                        </label>
                      </SeatOneDiv>
                    ) : (
                      <SeatOneDiv>
                        <input type='checkbox' id='seat-1' disabled={true} />

                        <label htmlFor='seat-1' className='seat-one'>
                          <span className='seatnumbers'>
                            <ImgOne src={carSeat} alt='' className='seat1' />
                          </span>
                          <span className='number'>1</span>
                        </label>
                      </SeatOneDiv>
                    )}
                  </div>
                </SteeringDriver>
                <RowThree>
                  {availableSeats?.includes(2) ? (
                    <SeatTwoDiv>
                      <input type='checkbox' id='seat-2' value='2' onChange={handleChange} />

                      <label htmlFor='seat-2' className='seat-two'>
                        <span className='seatnumbers'>
                          <ImgTwo src={carSeat} alt='' className='seat2' />
                        </span>
                        <span className='number'>2</span>
                      </label>
                    </SeatTwoDiv>
                  ) : (
                    <SeatTwoDiv>
                      <input type='checkbox' id='seat-2' disabled={true} />

                      <label htmlFor='seat-2' className='seat-two'>
                        <span className='seatnumbers'>
                          <ImgTwo src={carSeat} alt='' className='seat2' />
                        </span>
                        <span className='number'>2</span>
                      </label>
                    </SeatTwoDiv>
                  )}

                  {availableSeats?.includes(3) ? (
                    <SeatThreeDiv>
                      <input type='checkbox' id='seat-3' value='3' onChange={handleChange} />

                      <label htmlFor='seat-3' className='seat-three'>
                        <span className='seatnumbers'>
                          <ImgThree src={carSeat} alt='' className='seat3' />
                        </span>
                        <span className='number'>3</span>
                      </label>
                    </SeatThreeDiv>
                  ) : (
                    <SeatThreeDiv>
                      <input type='checkbox' id='seat-3' disabled={true} />

                      <label htmlFor='seat-3' className='seat-three'>
                        <span className='seatnumbers'>
                          <ImgThree src={carSeat} alt='' className='seat3' />
                        </span>
                        <span className='number'>3</span>
                      </label>
                    </SeatThreeDiv>
                  )}
                </RowThree><br/>

                <RowThree>
                  <div className='childrow'>
                    {availableSeats?.includes(4) ? (
                      <SeatFourDiv>
                        <input type='checkbox' id='seat-4' value='4' onChange={handleChange} />

                        <label htmlFor='seat-4' className='seat-four'>
                          <span className='seatnumbers'>
                            <ImgFour src={carSeat} alt='' className='seat4' />
                          </span>
                          <span className='number'>4</span>
                        </label>
                      </SeatFourDiv>
                    ) : (
                      <SeatFourDiv>
                        <input type='checkbox' id='seat-4' disabled={true} />

                        <label htmlFor='seat-4' className='seat-four'>
                          <span className='seatnumbers'>
                            <ImgFour src={carSeat} alt='' className='seat4' />
                          </span>
                          <span className='number'>4</span>
                        </label>
                      </SeatFourDiv>
                    )}

                    {availableSeats?.includes(5) ? (
                      <SeatFiveDiv>
                        <input type='checkbox' id='seat-5' value='5' onChange={handleChange} />

                        <label htmlFor='seat-5' className='seat-five'>
                          <span className='seatnumbers'>
                            <ImgFive src={carSeat} alt='' className='seat5' />
                          </span>
                          <span className='number'>5</span>
                        </label>
                      </SeatFiveDiv>
                    ) : (
                      <SeatFiveDiv>
                        <input type='checkbox' id='seat-5' disabled={true} />

                        <label htmlFor='seat-5' className='seat-five'>
                          <span className='seatnumbers'>
                            <ImgFive src={carSeat} alt='' className='seat5' />
                          </span>
                          <span className='number'>5</span>
                        </label>
                      </SeatFiveDiv>
                    )}
                  </div>
                  <div>
                      {availableSeats?.includes(6) ? (
                        <SeatSixDiv>
                          <input type='checkbox' id='seat-6' value='6' onChange={handleChange} />

                          <label htmlFor='seat-6' className='seat-six'>
                            <span className='seatnumbers'>
                              <ImgSix src={carSeat} alt='' className='seat6' />
                            </span>
                            <span className='number'>6</span>
                          </label>
                        </SeatSixDiv>
                      ) : (
                        <SeatSixDiv>
                          <input type='checkbox' id='seat-6' disabled={true} />

                          <label htmlFor='seat-6' className='seat-six'>
                            <span className='seatnumbers'>
                              <ImgSix src={carSeat} alt='' className='seat6' />
                            </span>
                            <span className='number'>6</span>
                          </label>
                        </SeatSixDiv>
                      )}
                    </div>
                </RowThree><br/>

                <RowThree>
                  <div className='childrow'>
                    {availableSeats?.includes(7) ? (
                      <SeatSevenDiv>
                        <input type='checkbox' id='seat-7' value='7' onChange={handleChange} />

                        <label htmlFor='seat-7' className='seat-seven'>
                          <span className='seatnumbers'>
                            <ImgSeven src={carSeat} alt='' className='seat7' />
                          </span>
                          <span className='number'>7</span>
                        </label>
                      </SeatSevenDiv>
                    ) : (
                      <SeatSevenDiv>
                        <input type='checkbox' id='seat-7' disabled={true} />

                        <label htmlFor='seat-7' className='seat-seven'>
                          <span className='seatnumbers'>
                            <ImgSeven src={carSeat} alt='' className='seat7' />
                          </span>
                          <span className='number'>7</span>
                        </label>
                      </SeatSevenDiv>
                    )}

                    {availableSeats?.includes(8) ? (
                      <SeatEightDiv>
                        <input type='checkbox' id='seat-8' value='8' onChange={handleChange} />

                        <label htmlFor='seat-8' className='seat-eight'>
                          <span className='seatnumbers'>
                            <ImgEight src={carSeat} alt='' className='seat8' />
                          </span>
                          <span className='number'>8</span>
                        </label>
                      </SeatEightDiv>
                    ) : (
                      <SeatEightDiv>
                        <input type='checkbox' id='seat-8' disabled={true} />

                        <label htmlFor='seat-8' className='seat-eight'>
                          <span className='seatnumbers'>
                            <ImgEight src={carSeat} alt='' className='seat8' />
                          </span>
                          <span className='number'>8</span>
                        </label>
                      </SeatEightDiv>
                    )}
                  </div>

                  {availableSeats?.includes(9) ? (
                    <SeatNineDiv>
                      <input type='checkbox' id='seat-9' value='9' onChange={handleChange} />

                      <label htmlFor='seat-9' className='seat-nine'>
                        <span className='seatnumbers'>
                          <ImgNine src={carSeat} alt='' className='seat9' />
                        </span>
                        <span className='number'>9</span>
                      </label>
                    </SeatNineDiv>
                  ) : (
                    <SeatNineDiv>
                      <input type='checkbox' id='seat-9' disabled={true} />

                      <label htmlFor='seat-9' className='seat-nine'>
                        <span className='seatnumbers'>
                          <ImgNine src={carSeat} alt='' className='seat9' />
                        </span>
                        <span className='number'>9</span>
                      </label>
                    </SeatNineDiv>
                  )}
                </RowThree><br/>

                <RowThree>
                  <div className='childrow'>
                    {availableSeats?.includes(10) ? (
                      <SeatTenDiv>
                        <input type='checkbox' id='seat-10' value='10' onChange={handleChange} />

                        <label htmlFor='seat-10' className='seat-ten'>
                          <span className='seatnumbers'>
                            <ImgTen src={carSeat} alt='' className='seat10' />
                          </span>
                          <span className='number'>10</span>
                        </label>
                      </SeatTenDiv>
                    ) : (
                      <SeatTenDiv>
                        <input type='checkbox' id='seat-10' disabled={true} />

                        <label htmlFor='seat-10' className='seat-ten'>
                          <span className='seatnumbers'>
                            <ImgTen src={carSeat} alt='' className='seat10' />
                          </span>
                          <span className='number'>10</span>
                        </label>
                      </SeatTenDiv>
                    )}

                    {availableSeats?.includes(11) ? (
                      <SeatElevenDiv>
                        <input type='checkbox' id='seat-11' value='11' onChange={handleChange} />

                        <label htmlFor='seat-11' className='seat-eleven'>
                          <span className='seatnumbers'>
                            <ImgEleven src={carSeat} alt='' className='seat11' />
                          </span>
                          <span className='number'>11</span>
                        </label>
                      </SeatElevenDiv>
                    ) : (
                      <SeatElevenDiv>
                        <input type='checkbox' id='seat-11' disabled={true} />

                        <label htmlFor='seat-11' className='seat-eleven'>
                          <span className='seatnumbers'>
                            <ImgEleven src={carSeat} alt='' className='seat11' />
                          </span>
                          <span className='number'>11</span>
                        </label>
                      </SeatElevenDiv>
                    )}
                  </div>

                  {availableSeats?.includes(12) ? (
                    <SeatTwelveDiv>
                      <input type='checkbox' id='seat-12' value='12' onChange={handleChange} />

                      <label htmlFor='seat-12' className='seat-twelve'>
                        <span className='seatnumbers'>
                          <ImgTwelve src={carSeat} alt='' className='seat12' />
                        </span>
                        <span className='number'>12</span>
                      </label>
                    </SeatTwelveDiv>
                  ) : (
                    <SeatTwelveDiv>
                      <input type='checkbox' id='seat-12' disabled={true} />

                      <label htmlFor='seat-12' className='seat-twelve'>
                        <span className='seatnumbers'>
                          <ImgTwelve src={carSeat} alt='' className='seat12' />
                        </span>
                        <span className='number'>12</span>
                      </label>
                    </SeatTwelveDiv>
                  )}
                </RowThree>

                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                  <Button
                    type='button'
                    text='Continue'
                    onClick={ShowPassengerDetails}
                    width='60%'
                    background='#696969'
                    borderRadius='8px'
                    fontSize='14px'
                    color='white'
                    disabled={currentData.length < limitOne}
                  />
                </div>
              </div>) }
              
            </>
          ) : totalNumberOfSeats === 6 ? (
            <>
            {!availableSeats?.length ? (<h1  style={{fontSize:'18px',textAlign:'center'}}>No seat avaliable</h1>) : ( <div>
                <SteeringDriver>
                  <div className='steering'>
                    <img src={steering} alt='' />
                  </div>
                  <br />
                  <br />
                  <br />

                  {availableSeats?.includes(1) ? (
                    <SeatOneDiv>
                      <input type='checkbox' id='seat-1' value='1' onChange={handleChange} />

                      <label htmlFor='seat-1' className='seat-one'>
                        <span className='seatnumbers'>
                          <ImgOne src={carSeat} alt='' className='seat1' />
                        </span>
                        <span className='number'>1</span>
                      </label>
                    </SeatOneDiv>
                  ) : (
                    <SeatOneDiv>
                      <input type='checkbox' id='seat-1' disabled={true} />

                      <label htmlFor='seat-1' className='seat-one'>
                        <span className='seatnumbers'>
                          <ImgOne src={carSeat} alt='' className='seat1' />
                        </span>
                        <span className='number'>1</span>
                      </label>
                    </SeatOneDiv>
                  )}
                </SteeringDriver>

                <RowThree>
                  {availableSeats?.includes(2) ? (
                    <SeatTwoDiv>
                      <input type='checkbox' id='seat-2' value='2' onChange={handleChange} />

                      <label htmlFor='seat-2' className='seat-two'>
                        <span className='seatnumbers'>
                          <ImgTwo src={carSeat} alt='' className='seat2' />
                        </span>
                        <span className='number'>2</span>
                      </label>
                    </SeatTwoDiv>
                  ) : (
                    <SeatTwoDiv>
                      <input type='checkbox' id='seat-2' disabled={true} />

                      <label htmlFor='seat-2' className='seat-two'>
                        <span className='seatnumbers'>
                          <ImgTwo src={carSeat} alt='' className='seat2' />
                        </span>
                        <span className='number'>2</span>
                      </label>
                    </SeatTwoDiv>
                  )}

                  {availableSeats?.includes(3) ? (
                    <SeatThreeDiv>
                      <input type='checkbox' id='seat-3' value='3' onChange={handleChange} />

                      <label htmlFor='seat-3' className='seat-three'>
                        <span className='seatnumbers'>
                          <ImgThree src={carSeat} alt='' className='seat3' />
                        </span>
                        <span className='number'>3</span>
                      </label>
                    </SeatThreeDiv>
                  ) : (
                    <SeatThreeDiv>
                      <input type='checkbox' id='seat-3' disabled={true} />

                      <label htmlFor='seat-3' className='seat-three'>
                        <span className='seatnumbers'>
                          <ImgThree src={carSeat} alt='' className='seat3' />
                        </span>
                        <span className='number'>3</span>
                      </label>
                    </SeatThreeDiv>
                  )}
                </RowThree><br/>

                <RowThree>
                  {availableSeats?.includes(4) ? (
                    <SeatFourDiv>
                      <input type='checkbox' id='seat-4' value='4' onChange={handleChange} />

                      <label htmlFor='seat-4' className='seat-four'>
                        <span className='seatnumbers'>
                          <ImgFour src={carSeat} alt='' className='seat4' />
                        </span>
                        <span className='number'>4</span>
                      </label>
                    </SeatFourDiv>
                  ) : (
                    <SeatFourDiv>
                      <input type='checkbox' id='seat-4' disabled={true} />

                      <label htmlFor='seat-4' className='seat-four'>
                        <span className='seatnumbers'>
                          <ImgFour src={carSeat} alt='' className='seat4' />
                        </span>
                        <span className='number'>4</span>
                      </label>
                    </SeatFourDiv>
                  )}

                  {availableSeats?.includes(5) ? (
                    <SeatFiveDiv>
                      <input type='checkbox' id='seat-5' value='5' onChange={handleChange} />

                      <label htmlFor='seat-5' className='seat-five'>
                        <span className='seatnumbers'>
                          <ImgFive src={carSeat} alt='' className='seat5' />
                        </span>
                        <span className='number'>5</span>
                      </label>
                    </SeatFiveDiv>
                  ) : (
                    <SeatFiveDiv>
                      <input type='checkbox' id='seat-5' disabled={true} />

                      <label htmlFor='seat-5' className='seat-five'>
                        <span className='seatnumbers'>
                          <ImgFive src={carSeat} alt='' className='seat5' />
                        </span>
                        <span className='number'>5</span>
                      </label>
                    </SeatFiveDiv>
                  )}
                </RowThree><br/>

                <RowThree>
                  {availableSeats?.includes(6) ? (
                    <SeatSixDiv>
                      <input type='checkbox' id='seat-6' value='6' onChange={handleChange} />

                      <label htmlFor='seat-6' className='seat-six'>
                        <span className='seatnumbers'>
                          <ImgSix src={carSeat} alt='' className='seat6' />
                        </span>
                        <span className='number'>6</span>
                      </label>
                    </SeatSixDiv>
                  ) : (
                    <SeatSixDiv>
                      <input type='checkbox' id='seat-6' disabled={true} />

                      <label htmlFor='seat-6' className='seat-six'>
                        <span className='seatnumbers'>
                          <ImgSix src={carSeat} alt='' className='seat6' />
                        </span>
                        <span className='number'>6</span>
                      </label>
                    </SeatSixDiv>
                  )}

                  {availableSeats?.includes(7) ? (
                    <SeatSevenDiv>
                      <input type='checkbox' id='seat-7' value='7' onChange={handleChange} />

                      <label htmlFor='seat-7' className='seat-seven'>
                        <span className='seatnumbers'>
                          <ImgSeven src={carSeat} alt='' className='seat7' />
                        </span>
                        <span className='number'>7</span>
                      </label>
                    </SeatSevenDiv>
                  ) : (
                    <SeatSevenDiv>
                      <input type='checkbox' id='seat-7' disabled={true} />

                      <label htmlFor='seat-7' className='seat-seven'>
                        <span className='seatnumbers'>
                          <ImgSeven src={carSeat} alt='' className='seat7' />
                        </span>
                        <span className='number'>7</span>
                      </label>
                    </SeatSevenDiv>
                  )}
                </RowThree>
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                  <Button
                    type='button'
                    text='Continue'
                    onClick={ShowPassengerDetails}
                    width='60%'
                    background='#696969'
                    borderRadius='8px'
                    fontSize='14px'
                    color='white'
                    disabled={currentData.length < limitOne}
                  />
                </div>
              </div>)}
             
            </>
          ) : null}
        </>
      }
    />
    </>
  )
}

export default ViewSeatModal
