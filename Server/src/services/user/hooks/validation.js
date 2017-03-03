'use strict';
const request = require('request');
const errors = require('feathers-errors');

// src\services\user\hooks\validation.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const postRequest = (uri, body) => {
  return new Promise((resolve, reject) => {
    request.post({uri, form: body, json: true}, (err, res, body) => {
      if (err) {
        return reject(err);
      } else if (res.statusCode !== 200) {
        const err = new Error(`Unexpected status code: ${res.statusCode}`);
        err.res = res;
        return reject(err);
      }
      resolve(body);
    });
  });
};

module.exports = function() {

  return function(hook) {
    return new Promise((resolve, reject) => {

      const { email, recaptcha } = hook.data;

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
          const body = {
            secret: '6LdQhRcUAAAAAC6Q5rsP_U1GzYyXpyKVk6qSNNsr',
            response: recaptcha,
          };
          const uri = 'https://www.google.com/recaptcha/api/siteverify';
          return postRequest(uri, body);
        }
      }).then((body) => {
        if (body.success) {
          resolve(hook);
        } else {
          reject(new errors.BadRequest({
            errors: {
              recaptcha: 'Your validation is failed. Please try again.',
            },
          }));
        }
      }).catch((err) => {
        reject(new errors.BadRequest({
          errors: err,
        }));
      });
    });
  };
};
