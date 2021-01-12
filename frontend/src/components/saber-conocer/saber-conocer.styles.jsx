import styled,{ css } from 'styled-components';

const isCorrect = css`
  background-color: rgba(144,238,144,0.2);
  border: 1px solid green;
  color: green;
`;

const isNotCorrect = css`
  background-color: rgba(256,0,0,0.2);
  border: 1px solid red;
  color: red;
`;



const valueState = ({ value }) => {
  if (value==='true') {
    return isCorrect;
  } else if (value==='false') {
    return isNotCorrect;
  }
}

export const SelectQuestion = styled.select`
  ${valueState}
`;

export const Sentence = styled.div`
  display: flex;
`;