import React from 'react';
import { ButtonStyles } from './button.styles'

const ButtonCustom = (props) => {
  return (
    <ButtonStyles 
      onClick={props.handleClick} 
      type={props.type} 
      width={props.width}
      hidden={props.hidden}
    >{props.label}</ButtonStyles>
  )
}

export default ButtonCustom;
