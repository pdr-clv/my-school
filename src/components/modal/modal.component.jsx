import React from 'react';
import ButtonCustom from '../button/button.component';

import { ModalContainer, ModalContent, ModalHeader, ModalBody, ModalFooter} from './modal.styles';

const Modal = () => {
  return(
    <ModalContainer>
      <ModalContent>
        <ModalHeader>
          <h4>Modal title</h4>
        </ModalHeader>
        <ModalBody>
          This is the modal body
        </ModalBody>
        <ModalFooter>
          <ButtonCustom>Close</ButtonCustom>
        </ModalFooter>
      </ModalContent>
    </ModalContainer>
      
  );
};

export default Modal;