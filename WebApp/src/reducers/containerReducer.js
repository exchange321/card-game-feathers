/**
 * Created by Wayuki on 02-Mar-17.
 */
import initialState from './initialState';
import { CONTAINER_ACTION } from '../actions/actionTypes';

const containerReducer = (state = initialState.Container, action) => {
  switch (action.type) {
    case CONTAINER_ACTION.SET_NOTIFICATION: {
      return {
        ...state,
        notification: {
          ...state.notification,
          open: true,
          message: action.message,
        },
      };
    }
    case CONTAINER_ACTION.CLOSE_NOTIFICATION: {
      return {
        ...state,
        notification: {
          ...state.notification,
          open: false,
        },
      };
    }
    default: {
      return state;
    }
  }
};

export default containerReducer;
