import { SET_LANGUAGE } from './language.types';

import Spanish from '../../languages/es-ES.json';
import English from '../../languages/en-US.json';
import Russian from '../../languages/ru-RU.json';

export const setLanguage = (locale) => {
  localStorage.setItem('locale', locale);
  let lang;
  if (locale.split('-')[0] === 'ru') {
    lang = Russian;
  } else if (locale.split('-')[0] === 'es') {
    lang = Spanish;
  } else {
    lang = English;
  }
  const payload = { locale, lang };

  return { type: SET_LANGUAGE, payload };
};
