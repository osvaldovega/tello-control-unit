import React from 'react';
import style from './style.module.scss';

interface IProps {
  title: string,
  data?: string,
  className?: string,
}

const ModuleB: React.SFC<IProps> = ({ title, data, className }): JSX.Element => (
<div className={`${style.wrapper} ${className}`}>
  <label>{title.split(' ')[0]} <span>{title.split(' ')[1]}</span></label>
  <span>{data}</span>
</div>
);

export default ModuleB;

