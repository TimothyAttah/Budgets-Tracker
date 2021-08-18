import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Header } from './components/header/Header';
import history from './history';
import { Home } from './pages/home/Home';

export const App = () => {
  return (
    <div className="App">
      <Router history={history}>
        <Header />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
        </Switch>
     </Router>
    </div>
  );
}
