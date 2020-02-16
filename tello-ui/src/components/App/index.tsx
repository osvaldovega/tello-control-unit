import React from 'react';
import RoutingConfig from '../RoutingConfig';
import styles from './style.module.scss';

const App: React.SFC = (): JSX.Element => (
  <div className={styles.wrapper}>
    <RoutingConfig />
  </div>
);

export default App;
