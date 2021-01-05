import React, { useEffect } from 'react';
import ButtonCustom from '../button/button.component';

import { ModalContainer, ModalContent, ModalHeader, ModalBody, ModalFooter} from './modal.styles';

const Modal = ({ show, onClose, title, children, YesNo }) => {

  const closeOnEscapeKeyDown = e => {
    if ((e.charCode || e.keyCode) === 27) onClose();
  }

  const onSubmit = (e) => {
    console.log('submitting')
  }

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown);
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
    }
// eslint-disable-next-line
  }, []);

  return(
    <ModalContainer onClick = {onClose} show={show}>
      <ModalContent onClick = {e => e.stopPropagation()} show={show}>
        <ModalHeader>
          <h4>{title}</h4>
        </ModalHeader>
        <ModalBody>
          {children}
        </ModalBody>
        <ModalFooter>
          {
            YesNo && 
              <div>
              <ButtonCustom label='Cancel' handleClick={onClose} type='outline'/>
              <ButtonCustom label='Submit' handleClick={onSubmit}/>
              </div>
          }
          {!YesNo && <ButtonCustom label='Close' handleClick={onClose}/>}
        </ModalFooter>
      </ModalContent>
    </ModalContainer>
      
  );
};

export default Modal;