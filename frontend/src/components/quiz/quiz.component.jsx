import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Start from './quiz-components/start/start.component';
//import quizData from '../../data/quiz.data';
import Question from './quiz-components/question/question.component';
import EndComponent from './quiz-components/end/end.component';

import { QuizContainer } from './quiz.styles';

let interval;

const Quiz = () => {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [time, setTime] = useState(0);

  const questions = useSelector((state) => state.quizReducer);

  useEffect(() => {
    if (step === 3) {
      clearInterval(interval);
    }
  }, [step]);

  const QuizStartHandler = () => {
    setStep(2);
    interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const resetClickHandler = () => {
    setActiveQuestion(0);
    setAnswers([]);
    setStep(2);
    setTime(0);
    interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  return (
    <QuizContainer>
      {step === 1 && <Start onQuizStart={QuizStartHandler} />}
      {step === 2 && (
        <Question
          data={questions[activeQuestion]}
          onAnswerUpdate={setAnswers}
          numberOfQuestions={questions.length}
          activeQuestion={activeQuestion}
          onSetActiveQuestion={setActiveQuestion}
          onSetStep={setStep}
        />
      )}
      {step === 3 && (
        <EndComponent
          data={questions}
          answers={answers}
          onReset={resetClickHandler}
          time={time}
        />
      )}
    </QuizContainer>
  );
};

export default Quiz;
