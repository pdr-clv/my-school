import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  opacity: ${props => props.show ? '1' : '0'};
  pointer-events: ${props => props.show ? 'visible' : 'none'};
`;

export const ModalContent = styled.div`
  width: 500px;
  background-color: white;
  transform: ${props => props.show ? 'translateY(0)' : 'translateY(-200px)'};
  transition: all 0.3s ease;
`;

export const ModalHeader = styled.div`
  padding: 10px;
  h2 {
    margin: 0;
    color: rgb(254,0,50);
  }
`;

export const ModalBody = styled.div`
  padding: 10px;
`;

export const ModalFooter = styled.div`
  padding: 10px;
`;