/**
 * Created by Wayuki on 26-Feb-17.
 */
import React from 'react';
import { Router, Route, Redirect, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import { PageForUserOnly, PageForGuestOnly } from './auth';

import AppContainer from './components/AppContainer.jsx';
import App from './components/App.jsx';
import LobbyPage from './components/lobby/LobbyPage.jsx';

import LoginPage from './components/login/LoginPage.jsx';
import SignUpPage from './components/signup/SignUpPage.jsx';

import NotFound from './components/404/NotFound.jsx';

const routes = ({ store }) => {
  const history = syncHistoryWithStore(browserHistory, store);
  return (
    <Router history={history}>
      <Route component={AppContainer}>
        <Route component={PageForUserOnly(App)}>
          <Route path="/" component={LobbyPage} />
        </Route>
        <Route path="login" component={PageForGuestOnly(LoginPage)} />
        <Route path="sign-up" component={SignUpPage} />
        <Route path="404" component={NotFound} />
        <Redirect from="*" to="404" />
      </Route>
    </Router>
  );
};

export default routes;
