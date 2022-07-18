import React from 'react'
import HireOneWay from './oneway'
import HireRoundTrip from './roundtrip'

const roundBookingTripToTab = {
  ONEWAY: <HireOneWay />,
  ROUNDTRIP: <HireRoundTrip />,
}

const roundBookingTripOptions = [
  { label: 'One way', value: 'ONEWAY' },
  { label: 'Round trip', value: 'ROUNDTRIP' },
]

export { roundBookingTripOptions, roundBookingTripToTab }
