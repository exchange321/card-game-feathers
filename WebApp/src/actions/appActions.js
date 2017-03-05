/**
 * Created by Wayuki on 03-Mar-17.
 */
import { APP_ACTION } from './actionTypes';
import { setNotification } from './containerActions';
import { feathersAuthentication } from '../feathers';

export const handleLogout = () => (
  (dispatch) => {
    dispatch(feathersAuthentication.logout());
    dispatch(setNotification('User logged out.'));
  }
);

export default {};
