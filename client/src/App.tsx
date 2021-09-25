import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { Header } from './components/header/Header';
import history from './history';
import { Budgets } from './pages/budgets/Budgets';
import { Signin } from './pages/user/Signin';
import { Signup } from './pages/user/Signup';

export const App = () => {
  return (
		<Router history={history}>
			<Header />
			<div style={{ paddingTop: '150px' }}>
        <Switch>
          <Route path='/' exact component={Budgets} />
					<Route path='/users/signup' component={Signup} />
					<Route path='/users/signin' component={Signin} />
				</Switch>
			</div>
		</Router>
	);
}
