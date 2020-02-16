import React from 'react';

import Splash from '../Splash';
import Dasboard from '../Dashboard';
import { RouteProps } from 'react-router';

interface IRoute {
  id: number,
  path: string,
  exact: boolean,
  component: React.SFC<RouteProps>,
}

const routes: Array<IRoute>= [
  {
    id: 0,
    path: '/',
    exact: true,
    component: Splash,
  },
  {
    id: 1,
    path: '/home',
    exact: false,
    component: Dasboard,
  }
];

export default routes;
