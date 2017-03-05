'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('userStatus service', function() {
  it('registered the userStatuses service', () => {
    assert.ok(app.service('userStatuses'));
  });
});
