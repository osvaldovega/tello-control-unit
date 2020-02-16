import React from 'react';
import paths from './imgPaths';

interface IProps {
  name: string,
  className?: string,
}

const Image: React.SFC<IProps> = ({ name, className }): JSX.Element => (
  <img className={className} src={paths[name]} alt={name} />
);

export default Image;