import styled from 'styled-components';

export const SectionAnswers = styled.section`
  height: 50vh;
  overflow-y: scroll;
  ul {
    padding: 10px 20px;
  }

  p{
    padding: 5px;  
    margin: 5px 0;
  }
  p:nth-child(1) {
    text-align: left;
  }
`;

export const PAnswer = styled.p`
  background-color: ${(props)=> props.answerIsOk ? '#5cb85c' : '#d9534f'};
`;

export const PCorrectAnswer = styled.p`
  background-color: #5bc0de;
  display: ${(props)=> props.showCorrection ? 'block' : 'none'};
`;