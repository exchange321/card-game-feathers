/**
 * Created by Wayuki on 26-Feb-17.
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { feathersServices, feathersAuthentication } from '../feathers';

import container from './containerReducer';

import signUpPage from './signUpReducer';

const rootReducer = combineReducers({
  container,
  signUpPage,
  auth: feathersAuthentication.reducer,
  users: feathersServices.users.reducer,
  routing: routerReducer,
});

export default rootReducer;
