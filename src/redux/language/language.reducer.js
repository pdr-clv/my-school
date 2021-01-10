import { SET_LANGUAGE } from './language.types';

import Spanish from '../../languages/es-ES.json';
import English from '../../languages/en-US.json';
import Russian from '../../languages/ru-RU.json';

//asign to localStorage locale, then it will persist.
const locale = localStorage.getItem('locale')
  ? localStorage.getItem('locale')
  : navigator.language;
//navigator.language is like 'es-ES' 'en-US', we are interested in first two leters to set language, and last two letters are interesting for the locale, dates, time, etc.
let lang;
if (locale.split('-')[0] === 'ru') {
  lang = Russian;
} else if (locale.split('-')[0] === 'es') {
  lang = Spanish;
} else {
  lang = English;
}

const INNER_STATE = { locale, lang };
const languageReducer = (state = INNER_STATE, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return action.payload;
    default:
      return state;
  }
};

export default languageReducer;
