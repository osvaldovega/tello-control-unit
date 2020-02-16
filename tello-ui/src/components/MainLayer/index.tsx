import React from 'react';
import styles from './styles.module.scss';

const MainLayer = ({ children }: { children: React.ReactNode }): JSX.Element => (<div className={styles.wrapper}>{children}</div>);

export default MainLayer;
