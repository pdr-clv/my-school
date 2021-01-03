import React, { useState, useEffect } from 'react';
import ButtonCustom from '../../../button/button.component';

import { Card, CardContent, Content } from '../../../card/card.styles';
import {  } from './end.styles';

const EndComponent = (props) => {
  const { data, answers, numQuestions } = props;
  const [answersOk, setAnswersOk] = useState(0);
  const [result, setResult] = useState(0);

  useEffect(()=>{
    //to sum Ok values from arrayResultsOK
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const arrayResultsOK = data.map((question,i) => { 
      if (question.answer === answers[i].a) {
        return 1
      } else {
        return 0
      }
    });
    const sumCorrects = arrayResultsOK.reduce(reducer);
    setAnswersOk(sumCorrects);
    setResult(Math.round((sumCorrects / numQuestions)*100));
// eslint-disable-next-line
  },[])

  return (
    <Card>
      <CardContent>
        <Content>
          <h3>Your result</h3>
          <p>{answersOk} corrects of {numQuestions} questions</p>
          <p>{result}%</p>
          <p>Your time 15s</p>
          <ButtonCustom label='End'/>
        </Content>
      </CardContent>  
    </Card>
  );
};

export default EndComponent;
