import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setLanguage } from '../../redux/language/language.actions';
import { SelectLangDiv, UlLanguages } from './header.styles';

const SelectLang = () => {
  const dispatch = useDispatch();
  const locale = useSelector((state) => state.languageReducer.locale);
  const [showDropDown, setShowDropDown] = useState(false);
  const dropdownEl = useRef(null);

  const handleClickOutside = useCallback(
    (e) => {
      if (
        showDropDown &&
        e.target.closest('.dropdown') !== dropdownEl.current
      ) {
        setShowDropDown(false);
      }
    },
    [showDropDown, setShowDropDown, dropdownEl]
  );

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside]);

  const chooseLang = (lang) => {
    setShowDropDown(false);
    dispatch(setLanguage(lang));
  };

  return (
    <SelectLangDiv>
      <div className='lang-container'>
        <p className='lang-selected' onClick={() => setShowDropDown(true)}>
          {locale.split('-')[0]}
        </p>
        <UlLanguages ref={dropdownEl} showDropDown={showDropDown}>
          <li onClick={() => chooseLang('es-ES')}>ES</li>
          <li onClick={() => chooseLang('ru-RU')}>RU</li>
          <li onClick={() => chooseLang('en-US')}>EN</li>
        </UlLanguages>
      </div>
    </SelectLangDiv>
  );
};

export default SelectLang;
