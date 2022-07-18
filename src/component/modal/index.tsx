import React, { useEffect, useRef } from 'react'
import Button from '../button/Button'
import { CloseModal, CustomModalBody, CustomModalFooter, CustomModalHeader, ModalBackground, ModalBodyContainer } from './style'
import { FaTimes } from 'react-icons/fa'

export interface ModalProps {
  open?: boolean;
  onClose?: any;
  background?: string;
  color?: string;
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  display?: string;
  minWidth?: string;
  maxWidth?:string;
  maxHeight?:string;
  height?: string;
  alignItem?:string;
  justifyContent?:string;
  modalPosition?:string;
  modalHeader?: JSX.Element[] | JSX.Element;
  modalBody?: JSX.Element[] | JSX.Element;
  modalFooter?: JSX.Element[] | JSX.Element;
  onsubmit?: any;
  submitLabel?: any;
}

const CustomModal = ({
  open,
  onClose,
  onsubmit,
  modalBody,
  modalFooter,
  modalHeader,
  submitLabel,
}: ModalProps) => {

    const modalref = useRef<HTMLInputElement | null>(null);

    const closeModal = (e:any) => {
        if (modalref.current === e.target){
         onClose()
        }
      };

      useEffect(()=>{
        if (open) {
            document.body.style.overflow = 'hidden';
          } else {
            document.body.style.overflow = 'auto';
          }
        //   document.addEventListener('click', closeModal);
        //   return () => {
        //     document.removeEventListener('click', closeModal);
        //   };
      },[open,modalref])
  return (
    <>
      {open && (
        <ModalBackground ref={modalref} onClick={closeModal}>
        <ModalBodyContainer >
        < CloseModal onClick={onClose}><FaTimes/></ CloseModal>
          {modalHeader && < CustomModalHeader>{modalHeader}</ CustomModalHeader>}
          {modalBody && <CustomModalBody>{modalBody}</CustomModalBody>}
          {modalFooter && (
            <CustomModalFooter>
                {modalFooter}
              {onsubmit && (
                <Button
                  text={submitLabel}
                  onClick={onsubmit}
                  type='submit'
                  width='25%'
                  background='rgb(86, 204, 242)'
                  borderRadius='8px'
                  fontSize='14px'
                  color='white'
                />
              )}
            </CustomModalFooter>
          )}
        </ModalBodyContainer>
        </ModalBackground>
      )}
    </>
  )
}

export default CustomModal
