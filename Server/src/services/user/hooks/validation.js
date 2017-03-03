'use strict';
const errors = require('feathers-errors');

// src\services\user\hooks\validation.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

module.exports = function() {

  return function(hook) {
    return new Promise((resolve, reject) => {

      const { email } = hook.data;

      // Validate Email
      hook.app.service('users').find({
        query: {
          email,
        },
      }).then((data) => {
        if (data.total > 0) {
          const emailExisted = new errors.BadRequest({
            errors: {
              email: 'Your email has been used. Please try another one.',
            },
          });
          reject(emailExisted);
        } else {
          resolve(hook);
        }
      });
    });
  };
};
