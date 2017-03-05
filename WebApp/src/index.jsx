/**
 * Created by Wayuki on 26-Feb-17.
 */
import React from 'react';
import { Provider } from 'react-redux';

import { feathersServices, feathersAuthentication } from './feathers';

import configureStore from './store/configureStore';

import Routes from './routes.jsx';

const store = configureStore();

if (localStorage['feathers-jwt']) {
  store.dispatch(feathersAuthentication.authenticate()).catch((err) => {
    return err;
  });
}

const Container = () => (
  <Provider store={store}>
    <Routes store={store} />
  </Provider>
);

export default Container;
