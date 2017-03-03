/**
 * Created by Wayuki on 03-Mar-17.
 */
import initialState from './initialState';
import { LOGIN_ACTION } from '../actions/actionTypes';

const loginReducer = (state = initialState.LoginPage, action) => {
  switch (action.type) {
    case LOGIN_ACTION.TOGGLE_PROCESSING: {
      return {
        ...state,
        processing: {
          ...state.processing,
          [action.key]: action.value,
        },
      };
    }
    case LOGIN_ACTION.SET_ERROR_MESSAGE: {
      return {
        ...state,
        errorMsg: {
          error: action.errorMsg,
        },
      };
    }
    case LOGIN_ACTION.HANDLE_FORM_FIELD_CHANGE: {
      return {
        ...state,
        credential: {
          ...state.credential,
          [action.key]: action.value,
        },
      };
    }
    case LOGIN_ACTION.RESET_FORM: {
      return {
        ...state,
        credential: initialState.LoginPage.credential,
      };
    }
    default: {
      return state;
    }
  }
};

export default loginReducer;
