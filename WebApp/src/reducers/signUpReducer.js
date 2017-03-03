/**
 * Created by Wayuki on 26-Feb-17.
 */
import initialState from './initialState';
import { SIGN_UP_ACTION } from '../actions/actionTypes';

const signUpReducer = (state = initialState.SignUpPage, action) => {
  switch (action.type) {
    case SIGN_UP_ACTION.TOGGLE_PROCESSING: {
      return {
        ...state,
        processing: {
          ...state.processing,
          [action.key]: action.value,
        },
      };
    }

    case SIGN_UP_ACTION.SET_ERROR_MESSAGE: {
      return {
        ...state,
        errorMsg: action.errorMsg,
      };
    }

    case SIGN_UP_ACTION.HANDLE_FORM_FIELD_CHANGE: {
      return {
        ...state,
        credential: {
          ...state.credential,
          [action.key]: action.value,
        },
      };
    }

    default: {
      return state;
    }
  }
};

export default signUpReducer;
