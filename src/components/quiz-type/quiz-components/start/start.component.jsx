import React from 'react';
import { FormattedMessage } from 'react-intl';

import ButtonCustom from '../../../button/button.component';
import CardComponent from '../../../card/card.component';

const Start = ({ onQuizStart }) => {
  return (
    <CardComponent>
      <h1>
        <FormattedMessage
          id='quiz.start.startMsg'
          defaultMessage='Start Quiz'
        />
      </h1>
      <p>
        <FormattedMessage
          id='quiz.start.msg1'
          defaultMessage='Type your answers'
        />
      </p>
      <p>
        <FormattedMessage id='quiz.start.msg2' defaultMessage='Good luck' />!
      </p>
      <ButtonCustom handleClick={onQuizStart} label='Start' />
    </CardComponent>
  );
};

export default Start;
