import React from 'react' 
import "@progress/kendo-theme-bootstrap/dist/all.css";
import '@progress/kendo-theme-default/dist/all.css';
import './App.css';
import './AfterMe.scss';
import { Switch, Route, Redirect, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from '@pages/Home';
import SimpleLayout from '@layouts/SimpleLayout';
import SignInPage from '@pages/SignIn';

const browserHistory = createBrowserHistory();

function App() {
  return (
    <Router history={browserHistory}>
      <Switch>
        <SimpleLayout>
          <Route
            component={Home}
            exact
            path="/home"
          />
          <Route
            component={SignInPage}
            exact
            path="/signin"
          />
        </SimpleLayout>

        <Redirect to="/home" />
      </Switch>
    </Router>
  );
}

export default App;
