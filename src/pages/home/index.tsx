import React from 'react'
import BookABus from './bookASeat/bookASeat'
import BookingStatus from './bookingStatus'
import HireABus from './hireABus/hirebus'

const pendingDocumentToTableTab = {
  BOOKASEAT: <BookABus />,
  HIREABUS: <HireABus />,
  BOOKINGSTATUS: <BookingStatus />,
}

const pendingDocumentOptions = [
  { label: 'Book a seat', value: 'BOOKASEAT' },
  { label: 'Hire a bus', value: 'HIREABUS' },
  { label: 'Booking Status', value: 'BOOKINGSTATUS' },
]

export { pendingDocumentOptions, pendingDocumentToTableTab }
