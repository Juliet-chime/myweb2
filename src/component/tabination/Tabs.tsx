import React from 'react'
import styled,{css} from 'styled-components'

export const TABS = ["cute","Funny","goat"]

const Row = styled.div`
display:flex;
position:relative;
`
const transition = css`
transition:transform 0.45s;
`

const Underline = styled.div<Props>`
position:absolute;
left:0;
border:solid;
bottom:0%;
width:33.33%;
height:4px;
background:#f9f871;
transform: translateX(${(p)=>(p.active === 0 ? 0 : p.active * 100)}%);
${transition}
`

const Button = styled.button<Props>`
flex:1 1 33.33%;
outline:none;
height:30px;
cursor:Pointer;
border-bottom: 1px solid rgba(234,435,348,0.5);
color:${(p)=> p.active ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.25)"};
background:#ff6f91;
border:unset;
`

interface Props {
    active?:any;
    setActive?:any;
}

const Tabs = ({active, setActive}:Props) => {
  return (
   <Row>
    <Underline active={active} />
    {
        TABS.map((tab,index)=>(
            <Button active={active === index} onClick={()=>setActive(index)}>{tab}</Button>
        ))
    }
   </Row>
  )
}

export default Tabs