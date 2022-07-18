import React from 'react'
import CustomModal from '../../../component/modal';

interface Props {
    openModal?:any;
    onClose?:any;
}

const ExceededSeat = ({openModal,onClose}:Props) => {
  return (
    <CustomModal
    open={openModal}
    onClose={onClose}
    modalHeader={<h3>Select Seat(s) Exceeded</h3>}
    modalBody={<h4>You have exceeded the number of seats selectable</h4>}
    />
  )
}

export default ExceededSeat