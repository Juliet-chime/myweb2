/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react'
import { pendingDocumentOptions, pendingDocumentToTableTab } from '.'
import HorizonalTab from '../../component/horizontalTab'
import {
  BannerContainer,
  BestPrice,
  BookingTripHolder,
  DigitalWallet,
  EnterprisePartner,
  HomeSection,
  WorldPocket,
} from './style'
import jet from '../../component/img/jet tri 1.png'
import Button from '../../component/button/Button'
import card from '../../component/img/cards.png'
import walletline from '../../component/img/walletline.svg'
import googleplay from '../../component/img/google-play.png'
import googleplayeng from '../../component/img/Google Play - eng.png'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import hotterminal from '../../component/img/Rectangle 6513.png'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { getPopularRoutes } from '../../store/slice/PopularRoute'
import Loader from '../../component/loader'
import ProtectRouteModal from './protectRoute'
import { userName, password, clientId, appGrant, secret } from '../../config'
import { authUser } from '../../store/slice/Auth'

type TPendingDocument = 'BOOKASEAT' | 'HIREABUS' | 'BOOKINGSTATUS'

const Home = () => {
  const dispatch = useAppDispatch()

  const [openModal, setOpenModal] = useState(false)
  const [loadItem, setLoadItem] = useState()

  const onviewPopularRoute = (item: any) => {
    setOpenModal(true)
    setLoadItem(item)
  }

  const { popularRoutes, isLoading } = useAppSelector((state) => state.pouplarRoutes)

  const auth = useAppSelector((state) => state.auth)

  const getUser = () => {
    const formEncoded = new URLSearchParams({
      username: userName,
      password: password,
      client_id: clientId,
      grant_type: appGrant,
      client_secret: secret,
    })
    dispatch(authUser(formEncoded))
  }

  useEffect(() => {
    getUser()
    localStorage.removeItem('persist:root')
  }, [])

  useEffect(() => {
    dispatch(getPopularRoutes())
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 490,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // dots: true,
          autoplay: false,
        },
      },
    ],
  }

  const [pendingDocument, setPendingDocument] = useState<TPendingDocument>('BOOKASEAT')

  const onChangeWalletTransaction = (value: string) => {
    const selectedValue = value as TPendingDocument
    setPendingDocument(selectedValue)
  }

  return (
    <>
      <ProtectRouteModal
        openModal={openModal}
        onClose={() => setOpenModal(!openModal)}
        item={loadItem}
      />

      <HomeSection>
        <BannerContainer>
          <div className='banner-text'>
            <h1>Revolutionizing mobility in Africa</h1>
            <p>
              GIGM is a technologically powered company providing{' '}
              <span className='gigm-red'>MOBILITY</span> services to people across Africa,
            </p>
          </div>

          <div className='banner-booking'>
            <BookingTripHolder>
              <HorizonalTab
                options={pendingDocumentOptions}
                onChange={onChangeWalletTransaction}
                defaultValue='NODOCUMENTAPPROVED'
                width='100%'
                display='flex'
                gap='15px'
                justifyContent='space-between'
                padding='10px 20px'
                background='rgba(255, 255, 255, 0.082)'
                color='rgba(255, 255, 255, 0.4);'
                borderRadius='20px 20px 0px 0px'
                type='submit'
              />
              <div>{pendingDocumentToTableTab[pendingDocument]}</div>
            </BookingTripHolder>
          </div>
        </BannerContainer>
      </HomeSection>

      <BestPrice>
        <div className='bestpriceholder'>
          <div className='bestpricetext'>
            <h1>Best Trip Prices</h1>
            <p>Bringing you more routes at the best prices.</p>
          </div>

          {/* lorem100 */}
          <div className='trip-bestprice'>
            {isLoading ? (
              <div>
                <Loader />
              </div>
            ) : (
              <Slider {...settings}>
                {popularRoutes?.map((route, index) => (
                  <div key={index}>
                    <div className='slide-img'>
                      {index === 0 ? (
                        <img src={hotterminal} alt='' />
                      ) : index === 1 ? (
                        <img src={hotterminal} alt='' />
                      ) : index === 2 ? (
                        <img src={hotterminal} alt='' />
                      ) : index === 3 ? (
                        <img src={hotterminal} alt='' />
                      ) : index === 4 ? (
                        <img src={hotterminal} alt='' />
                      ) : (
                        'SliderImage'
                      )}
                      <div>
                        <h4 style={{ maxWidth: '220px', margin: 'auto' }}>
                          {route.RouteName?.replace('==>', 'to')}
                        </h4>
                        <br />
                        <Button
                          type='submit'
                          text='Book Now'
                          onClick={() => onviewPopularRoute(route)}
                          width='55%'
                          background='rgb(86, 204, 242)'
                          borderRadius='8px'
                          fontSize='14px'
                          color='white'
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            )}
          </div>
        </div>
      </BestPrice>

      <WorldPocket>
        <div className='WorldPocket-holder'>
          <div className='WorldPocket-text'>
            <p className='introducing'>Introducing</p>
            <h1>The world in your pocket</h1>
            <p>
              Use the GIGM app to organize your entire trip and find mobile-exclusive deals on the
              go.
            </p>

            <div className='appstoreimg'>
              <div className='googleplay'>
                <img src={googleplay} alt='' />
              </div>

              <div className='googleplay'>
                <img src={googleplayeng} alt='' />
              </div>
            </div>
          </div>

          <div className='WorldPocket-img'></div>
        </div>
      </WorldPocket>

      <DigitalWallet>
        <div className='digital-wallet-holder'>
          <div className='digital-wallet-text'>
            <h1>Our digital wallet system</h1>
            <p>
              Use the GIGM wallet system to perform all digital transactions. Pay bills, buy airtime
              and fund your trips only on the <span style={{ fontWeight: '700' }}>mobile app</span>.
              <img src={walletline} alt='' className='walletredline' />
            </p>
          </div>
          <div className='digital-wallet-img'>
            <img src={card} alt={card} />
          </div>
        </div>
      </DigitalWallet>

      <EnterprisePartner>
        <div className='enterprise-holder'>
          <div className='enterprise-holder-text'>
            <h1>Become an Enterprise Partner</h1>
            <p>Want to start up a transport business?</p>
            <p>Have some buses you will like to profitable use?</p>
            <p>
              Want to contribute to providing better interstate road transport experience in Africa.
            </p>
            <p>This scheme is designed for you</p>
            <Button
              type='submit'
              text='Get Started'
              onClick={() => console.log('hello')}
              width='70%'
              background='rgb(226, 29, 0)'
              borderRadius='8px'
              fontSize='14px'
              color='white'
            />
          </div>
          <div className='enterprise-img-holder'>
            <img src={jet} alt='' />
          </div>
        </div>
      </EnterprisePartner>
    </>
  )
}

export default Home
