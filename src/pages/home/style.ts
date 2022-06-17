import styled from "styled-components";
import Homebanner from "../../component/img/Homebanner.png";

export const HomeSection = styled.section`
  background-image: linear-gradient(
      248.08deg,
      rgba(235, 164, 154, 0.5) 13.9%,
      rgba(47, 81, 92, 0.5) 100.87%
    ),
    url(${Homebanner});
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  padding: 10rem 8rem 5rem 8rem;
  @media (max-width: 1024px) {
    padding: 10px;
  }
`;

export const BannerContainer = styled.div`
  color: #ffffff;
  display: flex;
  flex-wrap: wrap;
  gap: 100px;
  @media (max-width: 1024px) {
    gap: 10px;
  }
  .banner-text {
    max-height: 300px;
    margin-top: 15vh;
    @media (max-width: 1024px) {
      margin-top: 20vh;
    }
    h1 {
      font-size: 48px;
      line-height: 54px;
      max-width: 545px;
      @media (max-width: 1024px) {
        font-size: 30px;
        max-width: 100%;
        line-height: 40px;
      }
    }
    p {
      font-size: 18px;
      line-height: 26px;
      color: #ffffff;
      max-width: 380px;
      margin-bottom: 40px;
      margin-top: -20px;

      @media (max-width: 1024px) {
        font-size: 14px;
        max-width: 100%;
      }
    }
  }
  .banner-booking {
    width: 40%;
    @media (max-width: 1024px) {
      width: 100%;
    }
  }
`;

export const BookingTripHolder = styled.div`
  min-height: 200px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
`;
