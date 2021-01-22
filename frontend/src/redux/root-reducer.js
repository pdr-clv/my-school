import { combineReducers } from 'redux';

import unitReducer from './unit/unit.reducer';
import quizReducer from './quiz/quiz.reducer';
import languageReducer from './language/language.reducer';

const rootReducer = combineReducers({
  quizReducer,
  languageReducer,
  unitReducer,
});

export default rootReducer;
