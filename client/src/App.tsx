import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { Header } from './components/header/Header';
import history from './history';
import { Signup } from './pages/user/Signup';

export const App = () => {
  return (
		<Router history={history}>
			<Header />
			<div style={{ paddingTop: '150px' }}>
				<Switch>
					<Route path='/users/signup' component={Signup} />
				</Switch>
			</div>
		</Router>
	);
}
