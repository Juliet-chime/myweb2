import React, { useState } from 'react';
import styled from 'styled-components';

interface Props {
    active?:any;
    // setActive?:any;
  }

const Tab = styled.button<Props>`
  font-size: 20px;
  padding: 10px 60px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid black;
    opacity: 1;
  `}
`;
const ButtonGroup = styled.div`
  display: flex;
`;

interface Props {
    defaultValue?: string;
    children?:any;
}
const types = [{option:'Cash',value:'CASH'}, {option:'Credit Card',value:'CREDIT CARD'}, {option:'Bitcoin',value:'BITCOIN'}];

type TPendingDocument =
  | 'CASH'
  | 'CREDIT CARD'
  | 'BITCOIN'

const typesToTableTab = {
    'CASH':() =><p>helo CASH</p>,
    'CREDIT CARD':() =><p>helo CREDITCARD</p>,
    'BITCOIN': () =><p>helo BITCOIN</p>,
  };

function TabGroup({children,defaultValue = 'All'}:Props) {

  const [active, setActive] = useState(types[0].value);
  const [pendingDocument, setPendingDocument] =
    useState<TPendingDocument>('CASH');

  const onTabClicked = (value:any)=>{
// setSelectedValue(value)
const selectvalue = value as TPendingDocument
setPendingDocument(selectvalue)
setActive(value)
  }


  return (
    <>
      <ButtonGroup>
        {types.map(type => (
          <Tab
            key={type.value}
            active={active === type.value}
            onClick={()=>onTabClicked(type.value)}
          >
            {type.option}
          </Tab>
        ))}
      </ButtonGroup>
      <p />
      <p> typesToTableTab{active} </p>
    </>
  );
}

export default TabGroup