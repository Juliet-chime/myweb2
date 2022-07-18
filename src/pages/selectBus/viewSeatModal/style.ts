import styled from 'styled-components'

interface Props {
  check?: any
}

export const ViewHeaderDiv = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 10px;
  padding: 5px 0px;
  display: flex;
  justify-content: space-between;
  .titles-seat {
    font-size: 12px;
    text-align: center;
  }
`

export const SteeringDriver = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 0px 20px;
  .steering {
    img {
      width: 40px;
    }
  }
`

export const ImgOne = styled.img`
    filter: invert(78%) sepia(90%) saturate(3087%) hue-rotate(164deg) brightness(91%) contrast(110%);
      width: 40px;
`

export const SeatOneDiv = styled.div`
  position: relative;
 > input {
     display: none;
  }

  > input + label {
    cursor: pointer;
  }

  .number {
    color: white;
    font-size: 16px;
    font-weight: bold;
    position: absolute;
    left: 15px;
    top: -1px;
  }

  > input:checked + label {
    ${ImgOne}{
      filter: invert(73%) sepia(17%) saturate(6196%) hue-rotate(98deg) brightness(94%) contrast(84%);
    }
  }

  > input:disabled + label {
    ${ImgOne}{
      filter: invert(50%) sepia(7%) saturate(8%) hue-rotate(341deg) brightness(96%) contrast(85%);
    }

  }
`

export const ImgTwo = styled.img`
    filter: invert(78%) sepia(90%) saturate(3087%) hue-rotate(164deg) brightness(91%) contrast(110%);
      width: 40px;
`

export const SeatTwoDiv = styled.div`
  position: relative;
 > input {
     display: none;
  }

  > input + label {
    cursor: pointer;
  }

  .number {
    color: white;
    font-size: 16px;
    font-weight: bold;
    position: absolute;
    left: 15px;
    top: -1px;
  }

  > input:checked + label {
    ${ImgTwo}{
      filter: invert(73%) sepia(17%) saturate(6196%) hue-rotate(98deg) brightness(94%) contrast(84%);
    }
  }

  > input:disabled + label {
    ${ImgTwo}{
      filter: invert(50%) sepia(7%) saturate(8%) hue-rotate(341deg) brightness(96%) contrast(85%);
    }

  }
`


export const ImgThree = styled.img`
    filter: invert(78%) sepia(90%) saturate(3087%) hue-rotate(164deg) brightness(91%) contrast(110%);
      width: 40px;
`

export const SeatThreeDiv = styled.div`
  position: relative;
 > input {
     display: none;
  }

  > input + label {
    cursor: pointer;
  }

  .number {
    color: white;
    font-size: 16px;
    font-weight: bold;
    position: absolute;
    left: 15px;
    top: -1px;
  }

  > input:checked + label {
    ${ImgThree}{
      filter: invert(73%) sepia(17%) saturate(6196%) hue-rotate(98deg) brightness(94%) contrast(84%);
    }
  }

  > input:disabled + label {
    ${ImgThree}{
      filter: invert(50%) sepia(7%) saturate(8%) hue-rotate(341deg) brightness(96%) contrast(85%);
    }

  }
`

export const ImgFour = styled.img`
    filter: invert(78%) sepia(90%) saturate(3087%) hue-rotate(164deg) brightness(91%) contrast(110%);
      width: 40px;
`

export const SeatFourDiv = styled.div`
  position: relative;
 > input {
     display: none;
  }

  > input + label {
    cursor: pointer;
  }

  .number {
    color: white;
    font-size: 16px;
    font-weight: bold;
    position: absolute;
    left: 15px;
    top: -1px;
  }

  > input:checked + label {
    ${ImgFour}{
      filter: invert(73%) sepia(17%) saturate(6196%) hue-rotate(98deg) brightness(94%) contrast(84%);
    }
  }

  > input:disabled + label {
    ${ImgFour}{
      filter: invert(50%) sepia(7%) saturate(8%) hue-rotate(341deg) brightness(96%) contrast(85%);
    }

  }
`

export const ImgFive = styled.img`
    filter: invert(78%) sepia(90%) saturate(3087%) hue-rotate(164deg) brightness(91%) contrast(110%);
      width: 40px;
`

export const SeatFiveDiv = styled.div`
  position: relative;
 > input {
     display: none;
  }

  > input + label {
    cursor: pointer;
  }

  .number {
    color: white;
    font-size: 16px;
    font-weight: bold;
    position: absolute;
    left: 15px;
    top: -1px;
  }

  > input:checked + label {
    ${ImgFive}{
      filter: invert(73%) sepia(17%) saturate(6196%) hue-rotate(98deg) brightness(94%) contrast(84%);
    }
  }

  > input:disabled + label {
    ${ImgFive}{
      filter: invert(50%) sepia(7%) saturate(8%) hue-rotate(341deg) brightness(96%) contrast(85%);
    }

  }
`

export const ImgSix = styled.img`
    filter: invert(78%) sepia(90%) saturate(3087%) hue-rotate(164deg) brightness(91%) contrast(110%);
      width: 40px;
`

export const SeatSixDiv = styled.div`
  position: relative;
 > input {
     display: none;
  }

  > input + label {
    cursor: pointer;
  }

  .number {
    color: white;
    font-size: 16px;
    font-weight: bold;
    position: absolute;
    left: 15px;
    top: -1px;
  }

  > input:checked + label {
    ${ImgSix}{
      filter: invert(73%) sepia(17%) saturate(6196%) hue-rotate(98deg) brightness(94%) contrast(84%);
    }
  }

  > input:disabled + label {
    ${ImgSix}{
      filter: invert(50%) sepia(7%) saturate(8%) hue-rotate(341deg) brightness(96%) contrast(85%);
    }

  }
`

export const ImgSeven = styled.img`
    filter: invert(78%) sepia(90%) saturate(3087%) hue-rotate(164deg) brightness(91%) contrast(110%);
      width: 40px;
`

export const SeatSevenDiv = styled.div`
  position: relative;
 > input {
     display: none;
  }

  > input + label {
    cursor: pointer;
  }

  .number {
    color: white;
    font-size: 16px;
    font-weight: bold;
    position: absolute;
    left: 15px;
    top: -1px;
  }

  > input:checked + label {
    ${ImgSeven}{
      filter: invert(73%) sepia(17%) saturate(6196%) hue-rotate(98deg) brightness(94%) contrast(84%);
    }
  }

  > input:disabled + label {
    ${ImgSeven}{
      filter: invert(50%) sepia(7%) saturate(8%) hue-rotate(341deg) brightness(96%) contrast(85%);
    }

  }
`

export const ImgEight = styled.img`
    filter: invert(78%) sepia(90%) saturate(3087%) hue-rotate(164deg) brightness(91%) contrast(110%);
      width: 40px;
`

export const SeatEightDiv = styled.div`
  position: relative;
 > input {
     display: none;
  }

  > input + label {
    cursor: pointer;
  }

  .number {
    color: white;
    font-size: 16px;
    font-weight: bold;
    position: absolute;
    left: 15px;
    top: -1px;
  }

  > input:checked + label {
    ${ImgEight}{
      filter: invert(73%) sepia(17%) saturate(6196%) hue-rotate(98deg) brightness(94%) contrast(84%);
    }
  }

  > input:disabled + label {
    ${ImgEight}{
      filter: invert(50%) sepia(7%) saturate(8%) hue-rotate(341deg) brightness(96%) contrast(85%);
    }

  }
`

export const ImgNine = styled.img`
    filter: invert(78%) sepia(90%) saturate(3087%) hue-rotate(164deg) brightness(91%) contrast(110%);
      width: 40px;
`

export const SeatNineDiv = styled.div`
  position: relative;
 > input {
     display: none;
  }

  > input + label {
    cursor: pointer;
  }

  .number {
    color: white;
    font-size: 16px;
    font-weight: bold;
    position: absolute;
    left: 15px;
    top: -1px;
  }

  > input:checked + label {
    ${ImgNine}{
      filter: invert(73%) sepia(17%) saturate(6196%) hue-rotate(98deg) brightness(94%) contrast(84%);
    }
  }

  > input:disabled + label {
    ${ImgNine}{
      filter: invert(50%) sepia(7%) saturate(8%) hue-rotate(341deg) brightness(96%) contrast(85%);
    }

  }
`

export const ImgTen = styled.img`
    filter: invert(78%) sepia(90%) saturate(3087%) hue-rotate(164deg) brightness(91%) contrast(110%);
      width: 40px;
`

export const SeatTenDiv = styled.div`
  position: relative;
 > input {
     display: none;
  }

  > input + label {
    cursor: pointer;
  }

  .number {
    color: white;
    font-size: 16px;
    font-weight: bold;
    position: absolute;
    left: 10px;
    top: -1px;
  }

  > input:checked + label {
    ${ImgTen}{
      filter: invert(73%) sepia(17%) saturate(6196%) hue-rotate(98deg) brightness(94%) contrast(84%);
    }
  }

  > input:disabled + label {
    ${ImgTen}{
      filter: invert(50%) sepia(7%) saturate(8%) hue-rotate(341deg) brightness(96%) contrast(85%);
    }

  }
`
export const ImgEleven = styled.img`
    filter: invert(78%) sepia(90%) saturate(3087%) hue-rotate(164deg) brightness(91%) contrast(110%);
      width: 40px;
`

export const SeatElevenDiv = styled.div`
  position: relative;
 > input {
     display: none;
  }

  > input + label {
    cursor: pointer;
  }

  .number {
    color: white;
    font-size: 16px;
    font-weight: bold;
    position: absolute;
    left: 10px;
    top: -1px;
  }

  > input:checked + label {
    ${ImgEleven}{
      filter: invert(73%) sepia(17%) saturate(6196%) hue-rotate(98deg) brightness(94%) contrast(84%);
    }
  }

  > input:disabled + label {
    ${ImgEleven}{
      filter: invert(50%) sepia(7%) saturate(8%) hue-rotate(341deg) brightness(96%) contrast(85%);
    }

  }
`
export const ImgTwelve = styled.img`
    filter: invert(78%) sepia(90%) saturate(3087%) hue-rotate(164deg) brightness(91%) contrast(110%);
      width: 40px;
`

export const SeatTwelveDiv = styled.div`
  position: relative;
 > input {
     display: none;
  }

  > input + label {
    cursor: pointer;
  }

  .number {
    color: white;
    font-size: 16px;
    font-weight: bold;
    position: absolute;
    left: 10px;
    top: -1px;
  }

  > input:checked + label {
    ${ImgTwelve}{
      filter: invert(73%) sepia(17%) saturate(6196%) hue-rotate(98deg) brightness(94%) contrast(84%);
    }
  }

  > input:disabled + label {
    ${ImgTwelve}{
      filter: invert(50%) sepia(7%) saturate(8%) hue-rotate(341deg) brightness(96%) contrast(85%);
    }

  }
`
export const ImgThirteen = styled.img`
    filter: invert(78%) sepia(90%) saturate(3087%) hue-rotate(164deg) brightness(91%) contrast(110%);
      width: 40px;
`

export const SeatThirteenDiv = styled.div`
  position: relative;
 > input {
     display: none;
  }

  > input + label {
    cursor: pointer;
  }

  .number {
    color: white;
    font-size: 16px;
    font-weight: bold;
    position: absolute;
    left: 10px;
    top: -1px;
  }

  > input:checked + label {
    ${ImgThirteen}{
      filter: invert(73%) sepia(17%) saturate(6196%) hue-rotate(98deg) brightness(94%) contrast(84%);
    }
  }

  > input:disabled + label {
    ${ImgThirteen}{
      filter: invert(50%) sepia(7%) saturate(8%) hue-rotate(341deg) brightness(96%) contrast(85%);
    }

  }
`
export const ImgFourteen = styled.img`
    filter: invert(78%) sepia(90%) saturate(3087%) hue-rotate(164deg) brightness(91%) contrast(110%);
      width: 40px;
`

export const SeatFourteenDiv = styled.div`
  position: relative;
 > input {
     display: none;
  }

  > input + label {
    cursor: pointer;
  }

  .number {
    color: white;
    font-size: 16px;
    font-weight: bold;
    position: absolute;
    left: 10px;
    top: -1px;
  }

  > input:checked + label {
    ${ImgFourteen}{
      filter: invert(73%) sepia(17%) saturate(6196%) hue-rotate(98deg) brightness(94%) contrast(84%);
    }
  }

  > input:disabled + label {
    ${ImgFourteen}{
      filter: invert(50%) sepia(7%) saturate(8%) hue-rotate(341deg) brightness(96%) contrast(85%);
    }

  }
`

// export const SeatOneLabel = styled.label`
//   position: relative;
//   display: flex;
//   margin-top: 10px;
//   .no {
//     font-size: 16px;
//     position: absolute;
//     right: 11px;
//     bottom: 7px;
//     color: white;
//   }
// `

// export const ImageOne = styled.img<Props>`
//   filter: ${(props) =>
//     props.check
//       ? ' invert(73%) sepia(17%) saturate(6196%) hue-rotate(98deg) brightness(94%) contrast(84%);'
//       : 'invert(78%) sepia(90%) saturate(3087%) hue-rotate(164deg) brightness(91%) contrast(110%);'};
//   width: 30px;
// `

// export const InputField = styled.input.attrs({ type: 'checkbox' })`
//   display: none;
//   cursor: pointer;
//   background-color: blue;

//   &:disabled {
//     ${ImageOne}

//     background-color: red;
//   }
// `

export const RowTwo = styled.div`
  display: flex;
  padding: 0px 20px;
  gap: 70px;
`

// export const SeatTwoLabel = styled.label`
//   position: relative;
//   display: flex;
//   margin-top: 10px;
//   .no2 {
//     font-size: 16px;
//     position: absolute;
//     left: 10px;
//     bottom: 7px;
//     color: white;
//   }

//   .no10 {
//     font-size: 16px;
//     position: absolute;
//     left: 6px;
//     bottom: 7px;
//     color: white;
//   }

//   .no11 {
//     font-size: 16px;
//     position: absolute;
//     left: 6px;
//     bottom: 7px;
//     color: white;
//   }

//   .no12 {
//     font-size: 16px;
//     position: absolute;
//     left: 6px;
//     bottom: 7px;
//     color: white;
//   }

//   .no13 {
//     font-size: 16px;
//     position: absolute;
//     left: 6px;
//     bottom: 7px;
//     color: white;
//   }
// `

export const RowThree = styled.div`
  display: flex;
  padding: 0px 20px;
  justify-content: space-between;

  .childrow {
    display: flex;
    gap: 40px;
  }
`
