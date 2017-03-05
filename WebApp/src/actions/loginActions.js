/**
 * Created by Wayuki on 03-Mar-17.
 */
import { routerActions } from 'react-router-redux';

import { feathersAuthentication } from '../feathers';
import { LOGIN_ACTION } from './actionTypes';

import { setNotification } from './containerActions';

const toggleProcessing = (key, value) => ({
  type: LOGIN_ACTION.TOGGLE_PROCESSING,
  key,
  value,
});

export const setErrorMessage = errorMsg => ({
  type: LOGIN_ACTION.SET_ERROR_MESSAGE,
  errorMsg,
});

export const handleFormFieldChange = (key, value) => ({
  type: LOGIN_ACTION.HANDLE_FORM_FIELD_CHANGE,
  key,
  value,
});

export const handleFormSubmit = () => (
  (dispatch, getState) => {
    const { loginPage: { credential }, auth: { isSignedIn } } = getState();
    if (isSignedIn) {
      dispatch(routerActions.replace('/'));
    } else {
      dispatch(toggleProcessing('processingSubmit', true));
      dispatch(feathersAuthentication.authenticate({
        type: 'local',
        ...credential,
      })).then((user) => {
        const { playerName } = user.value.data.profile;
        dispatch(setNotification(`Welcome back! ${playerName}`));
        dispatch(routerActions.replace('/'));
        dispatch(setErrorMessage(''));
        dispatch(toggleProcessing('processingSubmit', false));
      }).catch((err) => {
        dispatch(setNotification(err.message));
        dispatch(setErrorMessage('Your email and password do not match...Please try again.'));
        dispatch(toggleProcessing('processingSubmit', false));
      });
    }
  }
);

export const resetForm = () => ({
  type: LOGIN_ACTION.RESET_FORM,
});

export default {};
