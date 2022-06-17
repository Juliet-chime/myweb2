import styled from "styled-components";

export const InputField = styled.input`
border: 1px solid rgba(86, 204, 242, 0.5);
font-style: normal;
font-weight: normal;
// font-size: 12px;
margin:5px 0px;
// line-height: 20px;
height: 38px;
width: 100%;
padding: 0 0.5em 0 0.5em;
//  padding: 0px 5px;
/* color: #ffffff; */
color: #fff;
background: rgba(86, 204, 242, 0.05);
box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
border-radius: 8px;

&:disabled {
    opacity: 0.5;
  }
  
  &:focus {
    outline: none;
  }
  &::-webkit-calendar-picker-indicator {
    filter: invert(1);
}
`