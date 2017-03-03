/**
 * Created by Wayuki on 26-Feb-17.
 */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reduxPromiseMiddleware from 'redux-promise-middleware';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';

import rootReducer from '../reducers';

const configureStore = initialState => (
  createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk, reduxPromiseMiddleware(), routerMiddleware(browserHistory)),
      window.devToolsExtension ? window.devToolsExtension() : f => f,
    ),
  )
);

export default configureStore;
