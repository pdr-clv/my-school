import styled, { css } from 'styled-components';

const outline = css `
  background-color: transparent;
  color: rgba(0,0,0,0.8);
  border: solid 1px grey;
`;


const warning = css`
  background-color: #f0ad4e;
`;

const success = css`
  background-color: #5cb85c;
`;
const danger = css`
  background-color: #d9534f;
`;

const info = css`
  background-color: #5bc0de;
`;

const getType = ({ type }) => {
  if ( type === 'success') return success;
  if ( type === 'danger') return danger;
  if ( type === 'warning') return warning;
  if ( type === 'info') return info;
  if ( type === 'outline') return outline;

}

export const ButtonStyles = styled.button`

  padding: 10px 15px;
  background-color: rgb(254,0,50);
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  width: ${props => props.width ? `${props.width.substring(1)}%` : ''};
  ${getType};
  margin: 0 5px;
  transition: all 0.3s ease;
  display: ${props => props.hidden ? 'none' : ''};

  &:hover{
    transform: scale(1.06);
  }
`;
