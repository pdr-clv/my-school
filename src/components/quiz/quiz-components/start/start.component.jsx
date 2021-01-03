import React from 'react';
import ButtonCustom from '../../../button/button.component';

import { Card, CardContent, Content } from '../../../card/card.styles';


const Start = ({onQuizStart}) => {
  return (
    <Card>
      <CardContent>
        <Content>
          <h1>Start Quiz</h1>
          <p>Good luck!</p>
          <ButtonCustom handleClick={onQuizStart} label='Start' />
        </Content>
      </CardContent>  
    </Card>
  );
};

export default Start;
