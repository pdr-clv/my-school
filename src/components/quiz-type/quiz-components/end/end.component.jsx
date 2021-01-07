import React, { useState, useEffect } from 'react';
import ButtonCustom from '../../../button/button.component';
import Modal from '../../../modal/modal.component';
import { formatTime } from '../../../../utils/indexUtils';
import { Correction } from '../../../../classes';

import CardComponent from '../../../card/card.component';
import { SectionAnswers, PAnswer, PCorrectAnswer } from './end.styles';

const EndComponent = (props) => {
  const { data, answers, onReset, time } = props;
  const [answersOk, setAnswersOk] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const checkQuestions = () => {
    setShowModal(true);
  }

  useEffect(()=>{
    //to sum Ok values from arrayResultsOK
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const arrayResultsOK = answers.map((answer,i) => { 
      const correction = new Correction(data[i], answer.a)
      if (correction.checkAnswer()) {
        return 1;
      } else {
        return 0;
      }
    });
    const sumCorrects = arrayResultsOK.reduce(reducer);
    setAnswersOk(sumCorrects);
// eslint-disable-next-line
  },[])

  return (
    <div>
    <CardComponent>
      <h3>Your result</h3>
      <p>{answersOk} corrects of {data.length} questions</p>
      <p><strong>{Math.floor((answersOk / data.length) * 100)}%</strong></p>
      <p>Your time: {formatTime(time)}</p>
      <ButtonCustom type='info' label='Check your answers' handleClick={checkQuestions}/>
      <ButtonCustom type='success' label='Try again' handleClick={onReset}/>
    </CardComponent>
    <Modal onClose={()=>setShowModal(false)} show={showModal} title='Your answers'>
      <SectionAnswers>
        <ol>
          {
            answers.map((answer,i) => {
              let answerIsOk;
              const correction = new Correction(data[i],answer.a)
              if (correction.checkAnswer()) { 
                answerIsOk = true;
              } else {
                answerIsOk = false;
              }
              return <li key={i}>
                <p><strong>{answer.q}</strong></p>
                <PAnswer answerIsOk = {answerIsOk}>{correction.getFullUserAnswer()}</PAnswer>
                <PCorrectAnswer showCorrection = {!answerIsOk}>{correction.getFullStdAnswer()}</PCorrectAnswer>
              </li>
              }
            )
          }
        </ol>
      </SectionAnswers>
    </Modal>
    </div>
  );
};

export default EndComponent;
