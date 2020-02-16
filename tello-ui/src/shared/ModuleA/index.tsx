import React from 'react';
import style from './style.module.scss';

interface IProps {
  title: string,
  data?: string,
  className?: string,
}

const ModuleA: React.SFC<IProps> = ({ title, data, className }): JSX.Element => (
<div className={`${style.wrapper} ${className}`}>
  <label>{title.split(' ')[0]} <span>{title.split(' ')[1]}</span></label>
  <hr />
  <span>{data}</span>
</div>
);

export default ModuleA;
