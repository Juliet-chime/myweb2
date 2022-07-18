import styled from 'styled-components'
import Homebanner from '../../component/img/Homebanner.png'
import mockup from '../../component/img/mockup.svg'

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
`

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
    .gigm-red {
      color: rgb(226, 29, 0);
    }
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
`

export const BookingTripHolder = styled.div`
  min-height: 200px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
`

export const BestPrice = styled.section`
  .bestpriceholder {
    display: flex;
    position: relative;
    padding: 50px 150px;
    @media (max-width: 1024px) {
      display: block;
      height: 100%;
      padding: 10px;
    }
    .bestpricetext {
      flex: 1.2;
      padding: 50px 0px 0px 0px;
      h1 {
        font-size: 56px;
        line-height: 64px;
        color: #333333;
      }
      p {
        font-size: 24px;
        line-height: 32px;
        color: #333333;
        max-width: 354px;
      }
    }
    .trip-bestprice {
      flex: 2;
      position: relative;
      padding: 10px 0px 40px 0px;
      overflow: hidden;
      .slick-prev {
        left: 440px;
        top: 350px !important;
        background: black !important;
        color: white !important;

        @media (max-width: 1024px) {
          left: 125px;
          top: 440px !important;
          // bottom: 0px !important;
        }
      }

      .slick-next {
        right: 440px;
        top: 350px !important;
        background: black !important;
        color: white !important;
        @media (max-width: 1024px) {
          right: 125px;
          top: 440px !important;
        }
      }
      .slick-prev.slick-next {
        /* font-size: 0;
    line-height: 0;
    position: absolute;
    top: 50%;
    display: block;
    width: 20px;
    height: 20px;
    padding: 0;
    transform: translate(0, -50%);
    cursor: pointer;
    color: transparent;
    border: none;
    outline: none;
    background: transparent; */
      }

      .slick-next:before {
        content: '→';
      }
      .slick-prev:before,
      .slick-next:before {
        font-family: 'slick';
        font-size: 20px;
        line-height: 1;
        opacity: 0.75;
        color: white;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      .slide-img {
        position: relative;
        max-width: 100%;
        img {
          width: 90%;
          margin: auto;
        }
        div {
          position: absolute;
          color: white;
          bottom: 30px;
          width: 100%;
          text-align: center;
        }
      }
    }
  }
`

export const WorldPocket = styled.section`
  .WorldPocket-holder {
    display: flex;
    @media (max-width: 1024px) {
      display: block;
    }
    .WorldPocket-text {
      flex: 2;
      background-color: #56ccf2;
      padding: 150px 0px 0px 150px;
      @media (max-width: 1024px) {
        padding: 150px 0px 10px 10px;
      }
      .introducing {
        font-weight: 500;
        font-size: 16px;
        line-height: 26px;
        color: #56ccf2;
        background: #ffffff;
        border-radius: 8px;
        max-width: 85px;
        padding: 5px 10px;
      }
      h1 {
        font-weight: bold;
        font-size: 32px;
        line-height: 40px;
        color: #333333;
        margin-top: 20px;
        margin-bottom: 12px;
      }

      p {
        max-width: 363px;
        font-size: 14px;
        line-height: 20px;
        color: #333333;
        margin-bottom: 20px;
      }

      .appstoreimg {
        display: flex;
        gap: 10px;
        .googleplay {
          width: 100px;
          height: 30px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }

    .WorldPocket-img {
      flex: 3;
      background-image: url(${mockup});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      padding: 260px 0px;
      @media (max-width: 1024px) {
        background-size: cover;
      }
    }
  }
`

export const DigitalWallet = styled.section`
  background-color: #f5f5f5;
  padding: 3rem 0px;
  .digital-wallet-holder {
    display: flex;
    padding: 0px 8rem;
    justify-content: space-between;
    @media (max-width: 1024px) {
      display: block;
      padding: 10px;
    }
  }
  .digital-wallet-text {
    h1 {
      max-width: 448px;
      font-weight: bold;
      font-size: 54px;
      line-height: 62px;
      color: #333333;
    }
    p {
      max-width: 328px;
      font-size: 14px;
      line-height: 20px;
      color: #1f1f1f;
      position: relative;
      padding: 0px 0px 5px 0px;
      img {
        position: absolute;
        right: 148px;
        bottom: 0px;
      }
    }
  }
  .digital-wallet-img {
    img {
      width: 100%;
    }
  }
`

export const EnterprisePartner = styled.section`
  display: flex;
  background: rgba(86, 204, 242, 0.2);
  padding: 3rem 0px;
  .enterprise-holder {
    display: flex;
    padding: 0px 8rem;
    gap: 50px;
    @media (max-width: 1024px) {
      padding: 10px;
      display: block;
    }
    .enterprise-holder-text {
      flex: 1;
      background: #56ccf2;
      box-shadow: 0px 4px 50px rgb(86 204 242 / 20%);
      border-radius: 14px;
      padding: 20px 30px;

      h1 {
        font-weight: bold;
        font-size: 40px;
        line-height: 50px;
        color: #1f1f1f;
        max-width: 297px;
        margin-bottom: 10px;
      }

      p {
        font-size: 16px;
        line-height: 26px;
        color: #333333;
        opacity: 0.8;
        max-width: 280px;
        margin-bottom: 15px;
      }
    }
    .enterprise-img-holder {
      flex: 3.5;
      img {
        width: 100%;
      }
    }
  }
`
