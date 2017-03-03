'use strict';

// src\services\user\hooks\validation.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

module.exports = function() {

  return function(hook) {
    return new Promise((resolve, reject) => {
      hook.data.profile = {
        playerName: hook.data.playerName,
      };
      delete hook.data['playerName'];
      console.log(hook.data);
      resolve(hook);
    });
  };
};
