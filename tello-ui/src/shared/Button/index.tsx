import React from 'react';
import style from './style.module.scss';

interface IProps {
  text: string,
  type: string,
  className?: string,
}

const Button: React.SFC<IProps> = ({ text, type, className }): JSX.Element => (
  <button className={`${style.wrapper} ${style[type]} ${className}`} type="button">
    {text}
  </button>
);

export default Button;
