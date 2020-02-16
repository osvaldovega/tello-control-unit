import React from 'react';
import { RouteProps } from 'react-router';

import Image from '../../shared/Image';
import StyleText from '../../shared/StyleText';
import style from './styles.module.scss';

const Splash: React.SFC<RouteProps | any> = ({ history }): JSX.Element => {
  setTimeout(() => history.push('/home'), 6000);

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <Image name="tello" className={style.image} />
        <StyleText text="Tello" size={35} />
        <StyleText text="Remote Control Unit" size={35} />
      </div>
    </div>
  );
}

export default Splash;

