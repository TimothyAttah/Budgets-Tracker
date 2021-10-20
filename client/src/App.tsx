import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { Header } from './components/header/Header';
import history from './history';

export const App = () => {
  return (
    <Router history={history}>
      <Header />
      <div style={{paddingTop: '100px'}}>
        <h1>hello world</h1>
      </div>
    </Router>
  )
}
