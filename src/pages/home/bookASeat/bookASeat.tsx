import React, { useState } from 'react';
import { bookingTripOptions, bookingTripToTab } from '.';
import HorizonalTab from '../../../component/horizontalTab';

type TPendingDocument = 'ONEWAY' | 'ROUNDTRIP';

const BookABus = () => {
  const [pendingDocument, setPendingDocument] =
    useState<TPendingDocument>('ONEWAY');

  const onChangeWalletTransaction = (value: string) => {
    const selectedValue = value as TPendingDocument;
    setPendingDocument(selectedValue);
  };
  return (
    <div style={{ width: '100%' }}>
      <HorizonalTab
        options={bookingTripOptions}
        onChange={onChangeWalletTransaction}
        defaultValue="NODOCUMENTAPPROVED"
        width="100%"
        display="flex"
        gap="15px"
        padding="10px 20px"
        background="none"
        color="rgba(255, 255, 255, 0.4);"
        borderRadius="0px"
        type="button"
      />
      <div>{bookingTripToTab[pendingDocument]}</div>
    </div>
  );
};

export default BookABus;
