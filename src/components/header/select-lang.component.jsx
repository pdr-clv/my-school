import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactCountryFlag from 'react-country-flag';

import { setLanguage } from '../../redux/language/language.actions';
import { SelectLangDiv, UlLanguages } from './header.styles';

const SelectLang = (props) => {
  const dispatch = useDispatch();
  const locale = useSelector((state) => state.languageReducer.locale);
  const [showDropDown, setShowDropDown] = useState(false);
  const dropdownEl = useRef(null);
  const countryFlagCode = locale.split('-')[0].toUpperCase();

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
    props.setShowNav(false);
    setShowDropDown(false);
    dispatch(setLanguage(lang));
  };

  return (
    <SelectLangDiv>
      <div>
        <p onClick={() => setShowDropDown(true)}>
          <ReactCountryFlag
            countryCode={countryFlagCode === 'EN' ? 'GB' : countryFlagCode}
          />
          &nbsp;
          {countryFlagCode}
        </p>
        <UlLanguages ref={dropdownEl} showDropDown={showDropDown}>
          <li onClick={() => chooseLang('es-ES')}>
            <ReactCountryFlag countryCode='ES' />
            &nbsp;ES
          </li>
          <li onClick={() => chooseLang('ru-RU')}>
            <ReactCountryFlag countryCode='RU' />
            &nbsp;RU
          </li>
          <li onClick={() => chooseLang('en-US')}>
            <ReactCountryFlag countryCode='GB' />
            &nbsp;EN
          </li>
        </UlLanguages>
      </div>
    </SelectLangDiv>
  );
};

export default SelectLang;
