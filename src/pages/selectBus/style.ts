import styled from 'styled-components'

export const SelectBusHeader = styled.h1`
    font-weight: 500;
    font-size: 20px;
    line-height: 32px;
    color: rgba(0, 0, 0, 0.6);
    margin-bottom: 5px;
    margin-top: 10px;
    padding: 0px 150px;
`

export const SelectBusHolder = styled.section`
  padding: 0px 150px 50px 150px;
  @media (max-width: 1024px) {
    padding: 10px;
  }
`
export const RouteHeader = styled.h1`
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 5px;
  margin-top: 60px;
`
export const RouteType = styled.h1`
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  color: #000000;
  margin-top: 20px;
`
export const BookingDetails = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 50px;
  padding: 30px 0px;
  background: rgba(86, 204, 242, 0.1);
  box-shadow: 0px -3px 40px 6px rgb(0 0 0 / 4%);
  border-radius: 20px;
  @media (max-width: 1024px) {
    display: block;
    padding: 30px;
  }
  .jetholder {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(86, 204, 242, 0.06);
    border-radius: 20px;
  }
  .traveldetails {
    flex: 2;
    h4 {
      font-size: 25px;
      line-height: 36px;
      color: #333333;
      margin-bottom: 10px;
    }
    .select-p {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #333333;
    margin-bottom: 8px;
    span {
      font-weight: normal;
    color: rgba(51, 51, 51, 0.8);
    }
    }
    .bookingseat {
      display: flex;
      gap: 5px;
      margin-top: -25px;
      padding: 0;
    }
    .adults {
      display: flex;
      gap: 5px;
      margin-top: -25px;
    }
  }
  .fare {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
