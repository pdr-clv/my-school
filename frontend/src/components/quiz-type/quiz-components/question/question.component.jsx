import React, { useState, useRef, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';

import ButtonCustom from '../../../button/button.component';
import { Correction } from '../../../../classes';

import CardComponent from '../../../card/card.component';
import { AnswerDiv, ControlDiv, ErrorDiv, LabelQ } from './question.styles';

const InputAnswer = ({ refInput, selected, changeHandler }) => (
  <input
    ref={refInput}
    type='text'
    name='answer'
    value={selected}
    onChange={changeHandler}
    placeholder='Type your answer'
    autoComplete='off'
  />
);

const Question = (props) => {
  const {
    data,
    onAnswerUpdate,
    numberOfQuestions,
    activeQuestion,
    onSetActiveQuestion,
    onSetStep,
  } = props;

  const [selected, setSelected] = useState('');
  const [error, setError] = useState('');
  const [answerCheck, setAnswerCheck] = useState({
    answered: false,
    isCorrect: false,
  });
  const [fullAnswer, setFullAnswer] = useState('');
  const refInput = useRef(null);
  const radiosWrapper = useRef();

  useEffect(() => {
    const refTarget = refInput.current;
    const checkedInput = radiosWrapper.current;
    if (checkedInput) {
      const findCheckedInput = checkedInput.querySelector('input:checked');
      if (findCheckedInput) findCheckedInput.checked = false;
    }
    if (refTarget) {
      refTarget.disabled = false;
      refTarget.focus();
    }
  }, [data]);

  const changeHandler = (e) => {
    setSelected(e.target.value);
    if (error) setError('');
  };

  const nextClickHandler = () => {
    onAnswerUpdate((prevState) => [
      ...prevState,
      { q: data.question, a: selected },
    ]);
    setSelected('');
    setFullAnswer('');
    setAnswerCheck({ answered: false, isCorrect: false });
    if (activeQuestion < numberOfQuestions - 1) {
      onSetActiveQuestion(activeQuestion + 1);
    } else {
      onSetStep(3);
    }
  };

  const checkHandler = () => {
    if (selected === '') return setError('Type any answer');
    const correction = new Correction(data, selected);
    if (refInput.current) refInput.current.disabled = true;
    setAnswerCheck((prevState) => ({ ...prevState, answered: true }));
    if (correction.checkAnswer()) {
      setAnswerCheck((prevState) => ({ ...prevState, isCorrect: true }));
      setFullAnswer(correction.getFullUserAnswer());
      return;
    }
    setFullAnswer(correction.getFullStdAnswer());
  };
  return (
    <CardComponent>
      <h2>{data.question}</h2>
      <ControlDiv>
        {data.type === 'selection' ? (
          <div ref={radiosWrapper}>
            {data.choices.map((choice, i) => (
              <LabelQ key={i}>
                <input
                  type='radio'
                  name='answer'
                  value={choice}
                  onChange={changeHandler}
                />
                {choice}
              </LabelQ>
            ))}
          </div>
        ) : (
          <InputAnswer
            refInput={refInput}
            selected={selected}
            changeHandler={changeHandler}
          />
        )}
      </ControlDiv>
      {answerCheck.answered && (
        <AnswerDiv isCorrect={answerCheck.isCorrect}>
          {answerCheck.isCorrect ? (
            <span>{fullAnswer}</span>
          ) : (
            <span>
              <strong>--Error--</strong>
              {fullAnswer}
            </span>
          )}
        </AnswerDiv>
      )}
      {error && (
        <ErrorDiv>
          <FormattedMessage
            id='quiz.question.error'
            defaultMessage='Type one answer'
          />
        </ErrorDiv>
      )}

      <ButtonCustom
        hidden={answerCheck.answered}
        width='w95'
        label='check'
        handleClick={checkHandler}
      ></ButtonCustom>
      <ButtonCustom
        hidden={!answerCheck.answered}
        width='w95'
        label='next'
        handleClick={nextClickHandler}
      ></ButtonCustom>
    </CardComponent>
  );
};

export default Question;
