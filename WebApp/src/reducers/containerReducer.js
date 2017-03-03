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
          hasNotification: action.hasNotification,
          messageType: action.messageType,
          message: action.message,
        },
      };
    }
    default: {
      return state;
    }
  }
};

export default containerReducer;
