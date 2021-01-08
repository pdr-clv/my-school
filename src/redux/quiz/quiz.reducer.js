import { FETCH_QUESTIONS } from './quiz.types';

const quizReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_QUESTIONS:
      return action.payload;
    /*case CREATE_QUESTION:
      return {
        state,
      }*/
    default:
      return state;
  }
}

export default quizReducer; 