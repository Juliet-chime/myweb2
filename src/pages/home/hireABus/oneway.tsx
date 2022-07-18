import React, { useState } from 'react'
import Button from '../../../component/button/Button'
import InputElement from '../../../component/input'
import { OneWayHolder, RetainABusHolder } from '../bookASeat/style'
import { endDate, startDate } from '../utils'
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-google-places-autocomplete'
import { googleApi } from '../../../config'
import './index.css'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { getHireSearch } from '../../../store/slice/HireSearch'
import Loader from '../../../component/loader'

const HireOneWay = () => {
  const dispatch = useAppDispatch()

  const apiKey = googleApi

  const hireSearch = useAppSelector((state) => state.hireSearch)
  const [hireDepartureTerminal, setHireDepartureTerminal] = useState(null)
  const [hireArrivalTerminal, setHireArrivalTerminal] = useState(null)
  const [hireDepartureDate, setHireDepartureDate] = useState(new Date())
  const [departureLongLat, setDepartureLongLat] = useState({})
  const [arrivalLongLat, setArrivalLongLat] = useState({})

  const [checkBox, setCheckBox] = useState(false)

  const handleDepartureSelect = async (item: any) => {
    const newValue = item.label
    setHireDepartureTerminal(newValue)

    const results = await geocodeByAddress(newValue)
    const latLng = await getLatLng(results[0])
    setDepartureLongLat(latLng)
  }

  const handleArrivalSelect = async (item: any) => {
    const value = item.label
    setHireArrivalTerminal(value)

    const results = await geocodeByAddress(value)
    const latLng = await getLatLng(results[0])
    setArrivalLongLat(latLng)
  }

  const postSearch = () => {
    const newDate = new Date(hireDepartureDate)
    let date = JSON.stringify(newDate)
    date = date.slice(1, 11)

    const service = new window.google.maps.DistanceMatrixService()

    const requestInfo = {
      origins: [departureLongLat] as any,
      destinations: [arrivalLongLat] as any,
      travelMode: 'DRIVING' as any,
      unitSystem: window.google.maps.UnitSystem.METRIC,
      avoidHighways: false,
      avoidTolls: false,
    }
    service.getDistanceMatrix(requestInfo, callback)

    function callback(response: any, status: any) {
      const distance = response.rows[0].elements[0].distance.text.split('km')


      const details = {
        OnewayPickupDate: date,
        OnewayDistanceApart: parseInt(distance[0]),
        OneWayDropoffLocation: hireArrivalTerminal,
        HiredServiceType: '0',
        OnewayPickupLocation: hireDepartureTerminal,
        IsSleepOver: checkBox,
      }

      dispatch(getHireSearch(details))
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
  return (
    <OneWayHolder>
      <div id='content3'>
        <label>Hire From</label>
        <GooglePlacesAutocomplete
          apiKey={apiKey}
          selectProps={{
            onChange: (value: any) => handleDepartureSelect(value),
            styles: {
              option: (provided: any, state: any) => ({
                ...provided,
                borderBottom: '1px dotted black',
                color: state.isSelected ? 'white' : 'black',
              }),
              singleValue: (provided: any, state: any) => ({
                ...provided,
                color: state.isSelected ? 'black' : 'white',
              }),
              placeholder: (provided: any, state: any) => ({
                ...provided,
                color: state.isSelected ? 'white' : 'white',
              }),
            },
            placeholder: 'Enter Departure Point...',
          }}
          autocompletionRequest={{
            componentRestrictions: {
              country: ['ng'],
            },
          }}
        />
        <label>Hire Destination</label>
        <GooglePlacesAutocomplete
          apiKey={apiKey}
          selectProps={{
            onChange: (value: any) => handleArrivalSelect(value),
            styles: {
              option: (provided: any, state: any) => ({
                ...provided,
                borderBottom: '1px dotted black',
                color: state.isSelected ? 'white' : 'black',
              }),
              singleValue: (provided: any, state: any) => ({
                ...provided,
                color: state.isSelected ? 'black' : 'white',
              }),
              placeholder: (provided: any, state: any) => ({
                ...provided,
                color: state.isSelected ? 'white' : 'white',
              }),
            },
            placeholder: 'Enter Departure Point...',
          }}
          autocompletionRequest={{
            componentRestrictions: {
              country: ['ng'],
            },
          }}
        />

        <label>Departing on</label>
        <div style={{ width: '98%' }}>
          <InputElement
            type='date'
            id='hireDeparturedate'
            name='hireDeparturedate'
            value={hireDepartureDate}
            onChange={(e: any) => setHireDepartureDate(e.target.value)}
            min={startDate()}
            max={endDate(14)}
            width='100%'
          />
        </div>
        <RetainABusHolder>
          <div style={{ width: '3%' }}>
            <InputElement
              type='checkbox'
              id='checkBox'
              name='checkBox'
              value={checkBox}
              onChange={(e: any) => {
                setCheckBox(e.target.checked)
              }}
            />
          </div>
          <label htmlFor=''>Retain bus for the night?</label>
        </RetainABusHolder>

        <Button
          type='submit'
          text={
            hireSearch.isLoading ? (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <div>
                  <Loader />
                </div>
                <p>Processing </p>
              </div>
            ) : (
              'Proceed'
            )
          }
          disabled={!(hireDepartureDate && hireArrivalTerminal && hireDepartureDate)}
          onClick={postSearch}
          width='100%'
          background='#696969'
          borderRadius='8px'
          fontSize='14px'
          color='white'
        />
      </div>
    </OneWayHolder>
  )
}

export default HireOneWay
