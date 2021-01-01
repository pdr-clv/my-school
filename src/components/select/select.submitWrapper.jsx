import React from 'react';

import SelectComponent from './select.component';

const SelectSubmitted = ({submitted, value, ...otherProps}) => {
  if (submitted === true){
    return <SelectComponent value={value } {...otherProps} disabled = {true}></SelectComponent>
  } else {
    return <SelectComponent {...otherProps}></SelectComponent>
  }
};

export default SelectSubmitted;
