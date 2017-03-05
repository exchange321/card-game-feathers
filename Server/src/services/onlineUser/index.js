'use strict';

const service = require('feathers-mongoose');
const onlineUser = require('./onlineUser-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: onlineUser,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/onlineUsers', service(options));

  // Get our initialize service to that we can bind hooks
  const onlineUserService = app.service('/onlineUsers');

  // Set up our before hooks
  onlineUserService.before(hooks.before);

  // Set up our after hooks
  onlineUserService.after(hooks.after);
};
