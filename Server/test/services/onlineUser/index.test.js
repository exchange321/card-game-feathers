'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('onlineUser service', function() {
  it('registered the onlineUsers service', () => {
    assert.ok(app.service('onlineUsers'));
  });
});
