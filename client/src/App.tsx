import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Header } from './components/header/Header';
import history from './history';
import { Home } from './pages/home/Home';
import { Notes } from './pages/notes/Notes';
import { Profile } from './pages/profile/Profile';
import { Signin } from './pages/user/Signin';
import { Signup } from './pages/user/Signup';

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
					<Route path='/users/notes' exact>
						<Notes />
					</Route>
          <Route path='/users/signup'>
            <Signup />
          </Route>
          <Route path='/users/signin'>
            <Signin />
          </Route>
				</Switch>
			</Router>
		</div>
	);
};
