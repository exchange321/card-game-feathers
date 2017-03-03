/**
 * Created by Wayuki on 02-Mar-17.
 */
import { CONTAINER_ACTION } from './actionTypes';

export const setNotification = (hasNotification, messageType, message) => ({
  type: CONTAINER_ACTION.SET_NOTIFICATION,
  hasNotification,
  messageType,
  message,
});

export default {};
