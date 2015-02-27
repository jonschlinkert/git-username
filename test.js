/*!
 * git-username <https://github.com/jonschlinkert/git-username>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var assert = require('assert');
var username = require('./');

describe('username', function () {
  it('should return the username from a git remote origin url:', function () {
    assert(username() === 'jonschlinkert');
  });

  it('should return null when not found:', function () {
    assert(username('foo') === null);
  });
});
