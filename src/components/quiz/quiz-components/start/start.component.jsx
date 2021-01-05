import React from 'react';
import ButtonCustom from '../../../button/button.component';

import CardComponent from '../../../card/card.component';

const Start = ({onQuizStart}) => {
  return (
    <CardComponent>
      <h1>Start Quiz</h1>
      <p>Good luck!</p>
      <ButtonCustom handleClick={onQuizStart} label='Start' />
    </CardComponent>
  )
};

export default Start;
