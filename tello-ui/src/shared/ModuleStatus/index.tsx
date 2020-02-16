import React from 'react';
import style from './style.module.scss';

interface IProps {
  title: string,
  status: boolean,
  data?: string,
  className?: string,
}

const ModuleStatus: React.SFC<IProps> = ({ title, data, status, className }): JSX.Element => (
<div className={`${style.wrapper} ${className}`}>
  <label>{title.split(' ')[0]} <span>{title.split(' ')[1]}</span></label>
  <hr />
  <span className={`${status ? style.online : style.offline}`}>
    {data}
  </span>
</div>
);

export default ModuleStatus;

