import React from 'react';
import OneWay from './oneWay';
import RoundTrip from './roundTrip';

const bookingTripToTab = {
  ONEWAY: <OneWay />,
  ROUNDTRIP: <RoundTrip />,
};

const bookingTripOptions = [
  { label: 'One way', value: 'ONEWAY' },
  { label: 'Round trip', value: 'ROUNDTRIP' },
];

export { bookingTripOptions, bookingTripToTab };
