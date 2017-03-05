/**
 * Created by Wayuki on 02-Mar-17.
 */
import { CONTAINER_ACTION } from './actionTypes';

export const setNotification = (message) => ({
  type: CONTAINER_ACTION.SET_NOTIFICATION,
  message,
});

export const closeNotification = () => ({
  type: CONTAINER_ACTION.CLOSE_NOTIFICATION,
});

export default {};
