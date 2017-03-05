/**
 * Created by Wayuki on 03-Mar-17.
 */
import initialState from './initialState';
import { APP_ACTION } from '../actions/actionTypes';

const appReducer = (state = initialState.App, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default appReducer;
