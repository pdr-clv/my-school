import React from 'react';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';

const IntlWrapper = (props) => {
  const { locale, lang } = useSelector((state) => state.languageReducer);

  return (
    <IntlProvider locale={locale} messages={lang}>
      {props.children}
    </IntlProvider>
  );
};

export default IntlWrapper;
