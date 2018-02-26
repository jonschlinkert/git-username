/*!
 * git-username <https://github.com/jonschlinkert/git-username>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

require('mocha');
var assert = require('assert');
var username = require('./');

describe('username', function() {
  it('should return the username from a git remote origin url', function() {
    assert.equal(username(), 'jonschlinkert');
    assert.equal(username('.git'), 'jonschlinkert');
    assert.equal(username('.git/config'), 'jonschlinkert');
  });

  it('should return null when not found', function() {
    assert.equal(username('foo'), null);
    assert.equal(username('bar/baz'), null);
  });

  it('should return throw an error when not found and options.strict is true', function() {
    assert.throws(function() {
      username('foo', { strict: true });
    }, /cannot resolve/);

    assert.throws(function() {
      username('bar/baz', { strict: true });
    }, /cannot resolve/);
  });
});
