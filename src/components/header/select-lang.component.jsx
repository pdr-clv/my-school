import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setLanguage } from '../../redux/language/language.actions';

const SelectLang = () => {
  const dispatch = useDispatch();
  const locale = useSelector((state) => state.languageReducer.locale);

  const onChangeHandler = (e) => {
    dispatch(setLanguage(e.target.value));
  };

  return (
    <select value={locale} onChange={onChangeHandler}>
      <option value='ru-RU'>RUS</option>
      <option value='es-ES'>ESP</option>
      <option value='en-US'>ENG</option>
    </select>
  );
};

export default SelectLang;
