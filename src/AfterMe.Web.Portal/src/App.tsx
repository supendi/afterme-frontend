import React from 'react'
import './App.css';
import { Switch, Route, Redirect, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from '@pages/Home';

const browserHistory = createBrowserHistory();

function App() {
  return (
    <Router history={browserHistory}>
      <Switch>
        <Route
          component={Home}
          exact
          path="/home"
        />
        <Redirect to="/home" />
      </Switch>
    </Router>
  );
}

export default App;
