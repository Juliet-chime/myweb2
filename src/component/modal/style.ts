import styled from 'styled-components'
import { ModalProps } from '.'

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  z-index: 999999;
`

export const ModalBodyContainer = styled.div<ModalProps>`
  min-width: ${(props) => (props.minWidth ? props.minWidth : '30%')};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : '40%')};
  max-height: ${(props) => (props.maxHeight ? props.maxHeight : '80%')};
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => (props.background ? props.background : 'white')};
  color: black;
  box-shadow: 4px 8px 25px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 999999999;
  transform: translate(-50%, -45%);
  border-radius: 4px;
  padding: 20px;

  @media (max-width: 1024px) {
    max-width: 100%;
    margin: 0px 10px;
  }
`
export const CloseModal = styled.div`
  border: solid;
  font-size: 15px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: rgba(226, 29, 0, 0.8);
  margin: 0px 0px 0px auto;
  color: white;
`

export const CustomModalHeader = styled.div`
  /* flex: 0.2%;
  display: flex;
  align-items: center;
  justify-content: center; */
`

export const CustomModalBody = styled('div')<ModalProps>`
  /* border: solid blue; */
  /* padding: 0 2rem; */



  /* flex: 0.8;
  display: ${(props) => (props.display ? props.display : 'flex')};
  align-items: ${(props) => props.alignItem};
  overflow-y: auto; */


  
  /* justify-content: ${(props) => (props.justifyContent ? props.justifyContent : 'center')}; */
`

export const CustomModalFooter = styled.div`
  /* flex: 0.2; */
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 0.5rem;
  @media (max-width: 1024px) {
    justify-content: space-around;
  }
`
