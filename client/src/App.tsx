import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Router, Switch } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Header } from './components/header/Header';
import history from './history';
import { Budgets } from './pages/budgets/Budgets';
import { Signin } from './pages/user/Signin';
import { Signup } from './pages/user/Signup';
import { getUsers } from './redux/actions/auth';

export const App = () => {
	toast.configure();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getUsers());
	}, [dispatch]);
  return (
		<Router history={history}>
			<Header />
			<div style={{ paddingTop: '100px' }}>
        <Switch>
          <Route path='/' exact component={Budgets} />
					<Route path='/users/signup' component={Signup} />
					<Route path='/users/signin' component={Signin} />
				</Switch>
			</div>
		</Router>
	);
}
