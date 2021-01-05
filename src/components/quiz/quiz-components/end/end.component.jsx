import React, { useState, useEffect } from 'react';
import ButtonCustom from '../../../button/button.component';
import Modal from '../../../modal/modal.component';
import { formatTime } from '../../../../utils/indexUtils';

import CardComponent from '../../../card/card.component';
import {  } from './end.styles';

const EndComponent = (props) => {
  const { data, answers, onReset, onAnswersCheck, time } = props;
  const [answersOk, setAnswersOk] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const checkQuestions = () => {
    setShowModal(true);
    onAnswersCheck();
  }

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
    <Modal onClose={()=>setShowModal(false)} show={showModal} title='Modal Form with props'>
      <p>Here it goes the modal content passed by props</p>
    </Modal>
    </div>
  );
};

export default EndComponent;
