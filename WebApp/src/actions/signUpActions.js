/**
 * Created by Wayuki on 26-Feb-17.
 */
import { routerActions } from 'react-router-redux';

import { feathersServices } from '../feathers';
import { SIGN_UP_ACTION } from './actionTypes';

import { setNotification } from './containerActions';

const toggleProcessing = (key, value) => ({
  type: SIGN_UP_ACTION.TOGGLE_PROCESSING,
  key,
  value,
});

export const setErrorMessage = errorMsg => ({
  type: SIGN_UP_ACTION.SET_ERROR_MESSAGE,
  errorMsg,
});

export const handleFormFieldChange = (key, value) => ({
  type: SIGN_UP_ACTION.HANDLE_FORM_FIELD_CHANGE,
  key,
  value,
});

export const handleFormSubmit = () => (
  (dispatch, getState) => {
    dispatch(toggleProcessing('processingSubmit', true));

    const { credential } = getState().signUpPage;
    dispatch(feathersServices.users.create(credential))
      .then(() => {
        dispatch(setNotification(true, 'success', 'Your account has been created. Please sign in.'));
        dispatch(setErrorMessage({}));
        dispatch(toggleProcessing('processingSubmit', false));
        dispatch(routerActions.replace('/login'));
      })
      .catch((err) => {
        dispatch(setNotification(true, 'error', 'It seems like there is something wrong. Please try again.'));
        dispatch(setErrorMessage(err.errors || {}));
        dispatch(toggleProcessing('processingSubmit', false));
      });
  }
);

export default () => {};
