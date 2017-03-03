/**
 * Created by Wayuki on 02-Mar-17.
 */
import io from 'socket.io-client';

import feathers from 'feathers-client';
import reduxifyServices  from 'feathers-reduxify-services';
import reduxifyAuthentication from 'feathers-reduxify-authentication';
import rx from 'feathers-reactive';
import RxJS from 'rxjs';

import { mapServicePathsToNames } from './feathersServices';

const socket = io('http://localhost:3030');

const app = feathers()
  .configure(feathers.socketio(socket))
  .configure(rx(RxJS))
  .configure(feathers.hooks())
  .configure(feathers.authentication({
    storage: window.localStorage,
  }));

export default app;

export const feathersAuthentication = reduxifyAuthentication(app, {
  isUserAuthorized: user => user.isVerified,
});

export const feathersServices = reduxifyServices(app, mapServicePathsToNames);
