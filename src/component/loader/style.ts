import styled,{ keyframes } from 'styled-components';

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

export const LoaderStyle = styled.div`
border: 8px solid #f5f5f5;
border-radius: 50%;
width: 10px;
height: 10px;
border-bottom:7px solid rgb(226, 29, 0);
/* border-top:4px solid rgb(226, 29, 0); */
animation-name: ${spinAnimation};
 animation-duration: 2s;
 animation-iteration-count: infinite;
animation-timing-function:linear;
margin: auto;
margin-top: 10%;
/* display: flex;
justify-content: center;
align-items: center; */
`

