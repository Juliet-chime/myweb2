import React, { useState } from 'react'
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-google-places-autocomplete'
import Button from '../../../component/button/Button'
import InputElement from '../../../component/input'
import Loader from '../../../component/loader'
import { googleApi } from '../../../config'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { getHireSearch } from '../../../store/slice/HireSearch'
import { DeparturDateAdult, OneWayHolder, RetainABusHolder } from '../bookASeat/style'
import { endDate, startDate } from '../utils'

const HireRoundTrip = () => {
  const dispatch = useAppDispatch()

  const apiKey = googleApi

  const hireSearch = useAppSelector((state) => state.hireSearch)

  const [hireRoundDepartureTerminal, setHireRoundDepartureTerminal] = useState(null)
  const [hireRoundArrivalTerminal, setHireRoundArrivalTerminal] = useState(null)
  const [hireRoundDepartureDate, setHireRoundDepartureDate] = useState(new Date())
  const [hireRoundArrivalDate, setHireRoundArrivalDate] = useState(new Date())
  const [rounddepartureLongLat, setRoundDepartureLongLat] = useState({})
  const [roundarrivalLongLat, setRoundArrivalLongLat] = useState({})
  const [roundCheckBox, setRoundCheckBox] = useState(false)

  const handleRoundDepartureSelect = async (item: any) => {
    const newValue = item.label
    setHireRoundDepartureTerminal(newValue)
    const results = await geocodeByAddress(newValue)
    const latlng = await getLatLng(results[0])
    setRoundDepartureLongLat(latlng)
  }

  const handleRoundArrivalSelect = async (item: any) => {
    const newValue = item.label
    setHireRoundArrivalTerminal(newValue)

    const results = await geocodeByAddress(newValue)
    const latLng = await getLatLng(results[0])
    setRoundArrivalLongLat(latLng)
  }

  const postRoundSearch = () => {
    const newDate = new Date(hireRoundDepartureDate)
    let date = JSON.stringify(newDate)
    date = date.slice(1, 11)

    const newEndDate = new Date(hireRoundArrivalDate)
    let endDate = JSON.stringify(newEndDate)
    endDate = endDate.slice(1, 11)

    const service = new window.google.maps.DistanceMatrixService()

    const requestInfo = {
      origins: [rounddepartureLongLat] as any,
      destinations: [roundarrivalLongLat] as any,
      travelMode: 'DRIVING' as any,
      unitSystem: window.google.maps.UnitSystem.METRIC,
      avoidHighways: false,
      avoidTolls: false,
    }

    service.getDistanceMatrix(requestInfo, callback)

    function callback(response: any, callback: any) {
      const distance = response.rows[0].elements[0].distance.text.split('km')

      const details = {
        OnewayPickupDate: date,
        OnewayDistanceApart: parseInt(distance[0]),
        OneWayDropoffLocation: hireRoundArrivalTerminal,
        HiredServiceType: '1',
        OnewayPickupLocation: hireRoundDepartureTerminal,
        ReturnDistanceApart: parseInt(distance[0]),
        ReturnPickupLocation: hireRoundArrivalTerminal,
        ReturnPickupDate: endDate,
        ReturnDropoffLocation: hireRoundDepartureTerminal,
        IsSleepOver: roundCheckBox,
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
      <div>
        <label>Hire From</label>
        <GooglePlacesAutocomplete
          apiKey={apiKey}
          selectProps={{
            onChange: (value: any) => handleRoundDepartureSelect(value),
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
            onChange: (value: any) => handleRoundArrivalSelect(value),
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

        <DeparturDateAdult>
          <div style={{ width: '48%' }}>
            <label htmlFor=''>Departing on</label>
            <InputElement
              type='date'
              id='roundHireDeparturedate'
              name='roundHireDeparturedate'
              onChange={(e: any) => setHireRoundDepartureDate(e.target.value)}
              value={hireRoundDepartureDate}
              min={startDate()}
              max={endDate(14)}
              width='100%'
            />
          </div>

          <div style={{ width: '48%' }}>
            <label htmlFor=''>Return</label>
            <InputElement
              type='date'
              id='roundHireDepartureArrivaldate'
              name='roundHireDepartureArrivaldate'
              onChange={(e: any) => setHireRoundArrivalDate(e.target.value)}
              value={hireRoundArrivalDate}
              placeholder='select Date'
              width='100%'
            />
          </div>
        </DeparturDateAdult>
        <RetainABusHolder>
          <div style={{ width: '3%' }}>
            <InputElement
              type='checkbox'
              id='checkBox'
              name='checkBox'
              value={roundCheckBox}
              onChange={(e: any) => setRoundCheckBox(e.target.checked)}
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
                <p>Processing</p>
              </div>
            ) : (
              'Proceed'
            )
          }
          disabled={
            !(
              hireRoundDepartureTerminal &&
              hireRoundArrivalTerminal &&
              hireRoundDepartureDate &&
              hireRoundArrivalDate
            )
          }
          onClick={postRoundSearch}
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

export default HireRoundTrip
