import React from 'react';

import { SelectQuestion } from './select.styles';

const SelectComponent = ({value, handleChange, options, id, disabled}) => {

  return(
    <SelectQuestion
      value={value}
      onChange={handleChange}
      id={id}
      disabled={disabled}
    >
    {
      options.map((option,j) => (
        <option key={j} value={option.val}>
          {option.text}
        </option>
      ))
    }
    </SelectQuestion>
  )
}

export default SelectComponent;