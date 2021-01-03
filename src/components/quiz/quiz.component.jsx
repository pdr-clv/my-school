import React, { useState, useEffect } from 'react';
import Start from './quiz-components/start/start.component';
import quizData from '../../data/quiz.data';
import Question from './quiz-components/question/question.component';
import EndComponent from './quiz-components/end/end.component';

import { QuizContainer } from './quiz.styles';


const Quiz = () => {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const QuizStartHandler = () => {
    setStep(2);
  }

  return (
    <QuizContainer>
      { step === 1 && <Start onQuizStart = {QuizStartHandler}/>}
      { step === 2 && <Question 
        data = {quizData.data[activeQuestion]}
        onAnswerUpdate = {setAnswers}
        numberOfQuestions = {quizData.data.length}
        activeQuestion = {activeQuestion}
        onSetActiveQuestion = {setActiveQuestion}
        onSetStep = {setStep}
      />}
      {step === 3 && <EndComponent 
        data = {quizData.data}
        answers = {answers}
        numQuestions = {quizData.data.length}
      />}
    </QuizContainer>
  );
};

export default Quiz;
