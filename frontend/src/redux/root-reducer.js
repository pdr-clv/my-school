import { combineReducers } from 'redux';

import quizReducer from './quiz/quiz.reducer';
import languageReducer from './language/language.reducer';

const rootReducer = combineReducers({
  quizReducer,
  languageReducer,
});

export default rootReducer;
