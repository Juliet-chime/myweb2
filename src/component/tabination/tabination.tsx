import React, { useState } from 'react'
import styled,{css} from 'styled-components'
import Tabs, { TABS } from './Tabs';

interface Props {
  active?:any;
  setActive?:any;
}

const PageContainer = styled.div`
display:flex;
flex:1;
min-height:100vh;
justify-content:center;
align-items:center;
background-color:#845ec2;
`

const TabsWrapper = styled.div`
width:320px;
display:flex;
border-radius:40px;
height:310px;
align-items:center;
background-color:#ff6f91;
padding: 0 10px;
`
const Card = styled.div`
overflow:hidden;
position:relative;
width:300px;
height:240px;
`
const transition = css`
transition:transform 0.45s
`

const Content = styled.div<Props>`
position:absolute;
height:100%;
display:flex;
transform: translateX(${(p)=>(p.active === 0 ? 0 : `-${p.active * 300}px`)});
${transition}
padding:10px;
color:white;
`
const Tab = styled.div`
width:300px;
`

const Tabination = () => {
  const [active, setActive] = useState(1)
  return (
    <PageContainer>
      <TabsWrapper>
      <Card>
        <Tabs active={active} setActive={setActive}/>
        <Content>
          {TABS.map((tab:any)=>(
            <Tab>{tab}</Tab>
          ))}
        </Content>
      </Card>
      </TabsWrapper>
    </PageContainer>
  )
}

export default Tabination