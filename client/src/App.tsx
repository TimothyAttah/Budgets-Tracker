import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Header } from './components/header/Header';
import history from './history';
import { Home } from './pages/home/Home';
import { Notes } from './pages/notes/Notes';
import { NotesCreate } from './pages/notes/NotesCreate';
import { Profile } from './pages/profile/Profile';
import { Signin } from './pages/user/Signin';
import { Signup } from './pages/user/Signup';

export const App = () => {
	return (
		<>
			<Router history={history}>
				<Header />
				<Switch>
					{/* <Route path='/' exact>
						<Home />
					</Route>
					<Route path='/users/profile/:username'>
						<Profile />
					</Route>
					<Route path='/users/notes' exact>
						<Notes />
					</Route>
					<Route path='/users/notes/create/note' component={NotesCreate} />
					<Route path='/users/notes/create/note'>
						<NotesCreate />
					</Route>
					<Route path='/users/signup'>
						<Signup />
					</Route>
					<Route path='/users/signin'>
						<Signin />
					</Route> */}
					<Route path='/' exact component={Home} />
					<Route path='/users/signin' exact component={Signin} />
					<Route path='/users/signup' exact component={Signup} />
					<Route path='/users/notes' exact component={Notes} />
					<Route
						path='/users/notes/create/note'
						exact
						component={NotesCreate}
					/>
					<Route path='/users/profile/:username' exact component={Profile} />
				</Switch>
			</Router>
		</>
	);
};
