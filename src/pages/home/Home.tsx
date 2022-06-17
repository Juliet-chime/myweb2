import React, { useState } from "react";
import styled from "styled-components";
import { pendingDocumentOptions, pendingDocumentToTableTab } from ".";
import HorizonalTab from "../../component/horizontalTab";
import { BannerContainer, BookingTripHolder, HomeSection } from "./style";

type TPendingDocument = "BOOKASEAT" | "HIREABUS" | "BOOKINGSTATUS";

const Home = () => {
  const [pendingDocument, setPendingDocument] =
    useState<TPendingDocument>("BOOKASEAT");

  const onChangeWalletTransaction = (value: string) => {
    const selectedValue = value as TPendingDocument;
    setPendingDocument(selectedValue);
  };
  return (
    <>
      <HomeSection>
        <BannerContainer>
          <div className="banner-text">
            <h1>Revolutionizing mobility in Africa</h1>
            <p>
              GIGM is a technologically powered company providing{" "}
              <span className="gigm-red">MOBILITY</span> services to people
              across Africa,
            </p>
          </div>

          <div className="banner-booking">
            <BookingTripHolder >
              <HorizonalTab
                options={pendingDocumentOptions}
                onChange={onChangeWalletTransaction}
                defaultValue="NODOCUMENTAPPROVED"
                width="100%"
                display="flex"
                gap="15px"
                justifyContent="space-between"
                padding="10px 20px"
                background="rgba(255, 255, 255, 0.082)"
                color="rgba(255, 255, 255, 0.4);"
                borderRadius="20px 20px 0px 0px"
                type="submit"
              />
              <div>{pendingDocumentToTableTab[pendingDocument]}</div>
            </BookingTripHolder>
          </div>
        </BannerContainer>
      </HomeSection>
    </>
  );
};

export default Home;


