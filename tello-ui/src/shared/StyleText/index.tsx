import React from 'react';
import style from './style.module.scss';

interface IProps {
  text: string,
  size: number,
}

const StyleText: React.SFC<IProps> = ({ text, size }): JSX.Element => (
<span className={style.text} style={{ fontSize: size }}>{text}</span>
);

export default StyleText;

