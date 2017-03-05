/**
 * Created by Wayuki on 26-Feb-17.
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { feathersServices, feathersAuthentication } from '../feathers';

import container from './containerReducer';
import app from './appReducer';

import signUpPage from './signUpReducer';
import loginPage from './loginReducer';

const rootReducer = combineReducers({
  container,
  app,
  signUpPage,
  loginPage,
  auth: feathersAuthentication.reducer,
  routing: routerReducer,
});

export default rootReducer;
