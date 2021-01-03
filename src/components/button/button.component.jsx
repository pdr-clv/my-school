import React from 'react';
import { ButtonStyles } from './button.styles'

const ButtonCustom = (props) => {
  return (
    <ButtonStyles onClick={props.handleClick}>{props.label}</ButtonStyles>
  )
}

export default ButtonCustom;
