import React, { useState } from "react";
import Button from "../../../component/button/Button";
import InputElement from "../../../component/input";
import {
  DeparturDateAdult,
  OneWayHolder,
  RetainABusHolder,
} from "../bookASeat/style";
import { endDate, startDate } from "../utils";

const HireRoundTrip = () => {

  const [data, setData] = useState({
    roundHireDepartureTerminal:"",
    roundHireArrivalTerminal:"",
    roundHireDeparturedate:startDate(),
    roundHireArrivaldate:""
  })

  const [roundCheckBox, setRoundCheckBox] = useState(false)

  const onChangeHireABus = (e: { target: any; }) =>{
    console.log(e.target)
    setData({...data,[e.target.name]:e.target.value})
      }

      const onProceed = () =>{
        console.log(data)
        console.log(roundCheckBox)
      }

  return (
    <OneWayHolder>
      <div>
        <label>Hire From</label>
        <select
          name="roundHireDepartureTerminal"
          id="roundHireDepartureTerminal"
          className="select"
          style={{ marginBottom: "20px" }}
          onChange={onChangeHireABus}
        >
          <option value="DEFAULT" disabled hidden>
            
          </option>
          <option value="boy">boy</option>
          <option value="boy">boy</option>
        </select>
        <label>Hire Destination</label>
        <select
          name="roundHireArrivalTerminal"
          id="roundHireArrivalTerminal"
          placeholder="Arrival Terminal"
          style={{ marginBottom: "20px" }}
          onChange={onChangeHireABus}
        >
          <option
           value="DEFAULT"
            disabled
            hidden
          >
            Arrival Terminal
          </option>
          <option value="boy">boy</option>
          <option value="boy">boy</option>
        </select>

        <DeparturDateAdult>
          <div style={{ width: "48%" }}>
            <label htmlFor="">Departing on</label>
            <InputElement
              type="date"
              id="roundHireDeparturedate"
              name="roundHireDeparturedate"
              onChange={onChangeHireABus}
              value={data.roundHireDeparturedate}
              min={startDate()} max={endDate(14)}
            />
          </div>

          <div style={{ width: "48%" }}>
            <label htmlFor="">Return</label>
            <InputElement
              type="date"
              id="roundHireDepartureArrivaldate"
              name="roundHireDepartureArrivaldate"
              onChange={onChangeHireABus}
              value={data.roundHireArrivaldate}
              placeholder="select Date"
            />
          </div>
        </DeparturDateAdult>
        <RetainABusHolder>
          <div style={{ width: "3%" }}>
            <InputElement
              type="checkbox"
              id="checkBox"
              name="checkBox"
              value={roundCheckBox}
              onChange={(e:any) => setRoundCheckBox(e.target.checked)}
            />
          </div>
          <label htmlFor="">Retain bus for the night?</label>
        </RetainABusHolder>

        <Button
          type="submit"
          text="Proceed"
          onClick={onProceed}
          width="100%"
              background="#696969"
              borderRadius="8px"
              fontSize="14px"
              color="white"
        />
      </div>
    </OneWayHolder>
  );
};

export default HireRoundTrip;
