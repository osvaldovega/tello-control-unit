import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  RouteProps,
} from 'react-router-dom';
import routes from './routes';

const RouterConfig: React.SFC<RouteProps> = (): JSX.Element => (
  <Router>
    <Switch>
      {
        routes.map(route => <Route key={route.id} path={route.path} exact={route.exact} component={route.component} />)
      }
    </Switch>
  </Router>
);

export default RouterConfig;
