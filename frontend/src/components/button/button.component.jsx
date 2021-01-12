import React from 'react';
import { ButtonStyles } from './button.styles';
import { FormattedMessage } from 'react-intl';

const ButtonCustom = (props) => {
  return (
    <ButtonStyles
      onClick={props.handleClick}
      type={props.type}
      width={props.width}
      hidden={props.hidden}
    >
      <FormattedMessage
        id={`button.${props.label}`}
        defaultMessage={`${props.label}`}
      />
    </ButtonStyles>
  );
};

export default ButtonCustom;
