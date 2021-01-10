import { SET_LANGUAGE } from './language.types';

import Spanish from '../../languages/es-ES.json';
import English from '../../languages/en-US.json';
import Russian from '../../languages/ru-RU.json';

const locale = navigator.language;
let lang;
if (locale === 'ru-RU') {
  lang = Russian;
} else if (locale === 'es-ES') {
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
