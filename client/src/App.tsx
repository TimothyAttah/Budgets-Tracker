import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Header } from './components/header/Header';
import history from './history';
import { Home } from './pages/home/Home';
import { Profile } from './pages/profile/Profile';

export const App = () => {
	return (
		<div className='App'>
			<Router history={history}>
				<Header />
				<Switch>
					<Route path='/' exact>
						<Home />
					</Route>
					<Route path='/users/profile/:username'>
						<Profile />
					</Route>
				</Switch>
			</Router>
		</div>
	);
};
