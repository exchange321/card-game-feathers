/**
 * Created by Wayuki on 26-Feb-17.
 */
import React from 'react';
import { Router, Route, Redirect, browserHistory } from 'react-router';

import App from './components/App.jsx';
import LobbyPage from './components/lobby/LobbyPage.jsx';

import LoginPage from './components/login/LoginPage.jsx';
import SignUpPage from './components/signup/SignUpPage.jsx';

const routes = () => (
    <Router history={browserHistory}>
        <Route component={App}>
            <Route path="/" component={LobbyPage} />
        </Route>
        <Route path="login" component={LoginPage} />
        <Route path="signup" component={SignUpPage} />
        <Redirect from="*" to="/login" />
    </Router>
);

export default routes;
