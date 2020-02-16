import React, { ReactNode } from 'react';
import StyleText from '../StyleText';
import style from './style.module.scss';

interface IProps {
  title: string,
  className?: string,
  children?: ReactNode,
}

const Box: React.SFC<IProps> = ({ title, className, children }): JSX.Element => (
<div className={`${style.wrapper} ${className}`}>
  <StyleText text={title} size={25} />

  <div className={style.container}>{children}</div>
</div>
);

export default Box;

