import React, { useEffect, useState } from "react";
import Button from "../../../component/button/Button";
import InputElement from "../../../component/input";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { getDepartureTerminal } from "../../../store/slice/GetDepartureTerminal";
import { endDate, startDate } from "../utils";
import { DeparturDateAdult, OneWayHolder } from "./style";

const OneWay = () => {
  const token = localStorage.getItem("token");
  const [data, setData] = useState({
    departureTerminal:"",
    arrivalTerminal:"",
    departuredate:"",
    onewayAdult:""
  })

  const y =startDate()
  const e = endDate(2)

  // console.log(y, "--------", e)

  const onChangeOneway = (e: { target: any; }) =>{
console.log(e.target)
setData({...data,[e.target.name]:e.target.value})
  }

  const onProceed = () =>{
    console.log(data)
  }

  const dispatch = useAppDispatch();

  const { isLoading, departureTerminal } = useAppSelector(
    (state) => state.departureTerminal
  );

  const adults = [];
  for (let i = 1; i <= 13; i++) {
    adults.push(i);
  }

  // min="2022-06-17" max="2022-06-20"

  useEffect(() => {
    dispatch(getDepartureTerminal(token));
  }, [token]);
  return (
    <OneWayHolder>
      <div>
        <label>Travelling From</label>
       {isLoading?(<div>loading..</div>):(
         <select
         name="departureTerminal"
         id="departureTerminal"
         className="select"
         style={{ marginBottom: "20px" }}
         onChange={onChangeOneway}
       >
         <option value="DEFAULT" disabled hidden></option>
         {departureTerminal?.map((terminal, index) => (
           <option value={terminal?.TerminalName} key={index}>
             {terminal?.TerminalName}
           </option>
         ))}
       </select>
       )}
        <label>Travelling to</label>
        <select
          name="arrivalTerminal"
          id="arrivalTerminal"
          placeholder="Arrival Terminal"
          style={{ marginBottom: "20px" }}
          onChange={onChangeOneway}
        >
          <option
            value="DEFAULT"
            disabled
            style={{ color: "white", display: "none" }}
          ></option>
          <option value="boy">boy</option>
          <option value="boy">boy</option>
        </select>

        <DeparturDateAdult>
          <div style={{ width: "50%" }}>
            <label htmlFor="">Departure Date</label>
            <InputElement
              type="date"
              id="departuredate"
              name="departuredate"
              value={data.departuredate}
              onChange={onChangeOneway}
              min={startDate()} 
              max={endDate(14)}
            />
          </div>

          <div style={{ width: "50%" }}>
            <label>Adults</label>
            <select name="onewayAdult" id="onewayAdult" placeholder="Arrival Terminal">
              <option
                value="DEFAULT"
                disabled
                hidden
                style={{ color: "white", display: "none" }}
                onChange={onChangeOneway}
              ></option>
              {adults?.map((adult) => (
                <option value={adult} key={adult}>
                  {adult}
                </option>
              ))}
            </select>
          </div>
        </DeparturDateAdult>
        <Button
          type="submit"
          text="Proceed"
          onClick={onProceed}
          width="100%"
          background="#696969"
          borderRadius="8px"
          fontSize="14px"
          color="white"
          margin="20px 0px 0px 0px"
        />
      </div>
    </OneWayHolder>
  );
};

export default OneWay;
