import React, { useState, useEffect, useRef } from 'react';
import ButtonCustom from '../../../button/button.component';

import CardComponent from '../../../card/card.component';
import { ControlDiv, ErrorDiv, LabelQ } from './question.styles';

const Question = (props) => {
  const { data, onAnswerUpdate, numberOfQuestions, activeQuestion, onSetActiveQuestion, onSetStep} = props;
  
  const [selected, setSelected] = useState('');
  const [error, setError] = useState('');
  const radiosWrapper = useRef();

  useEffect(() => {
    const findCheckedInput = radiosWrapper.current.querySelector('input:checked');
    if (findCheckedInput) findCheckedInput.checked = false;
  }, [data])

  const changeHandler = (e) => {
    setSelected(e.target.value);
    if (error) setError('');
  }

  const nextClickHandler = e => {
    if (selected ==='') return setError('Please, select one option');
    onAnswerUpdate(prevState => [...prevState, { q: data.question, a: selected }]);
    setSelected('');
    if (activeQuestion < numberOfQuestions - 1 ) {
      onSetActiveQuestion(activeQuestion + 1)
    } else {
      onSetStep(3);
    }
  }
  return (
    <CardComponent>
      <h2>{data.question}</h2>
      <ControlDiv ref={radiosWrapper}>
        {
          data.choices.map((choice, i)=>
            <LabelQ key={i}>
            <input type='radio' name='answer' value={choice} onChange={changeHandler} />
            {choice}
            </LabelQ>
          )
        }
      </ControlDiv>
      {error && <ErrorDiv>{error}</ErrorDiv>}
      <ButtonCustom width='w95' label='Next' handleClick = {nextClickHandler}></ButtonCustom>
    </CardComponent>
  );
};

export default Question;
