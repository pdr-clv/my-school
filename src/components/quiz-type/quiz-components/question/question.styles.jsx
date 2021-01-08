import styled from 'styled-components';

export const ControlDiv = styled.div`
  input {
    margin-left: 10px;
    font-size: 20px;
    padding: 5px;
    max-width: 100%;
  }
`;
export const AnswerDiv = styled.div`
  color: ${(props) => props.isCorrect ? 'green' : 'red'};
`;
export const ErrorDiv = styled.div`
  color: red;
  margin-bottom: 10px;
`;

export const LabelQ = styled.label`
  display: block;
  text-align: left;
  font-size: 18px;
  margin-left: 0;
  
  input {
    margin-right: 10px;
  }
`;