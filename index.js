/*!
 * git-username <https://github.com/jonschlinkert/git-username>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

var url = require('url');
var red = require('ansi-red');
var origin = require('remote-origin-url');
var parse = require('parse-github-url');

/**
 * Expose `username`
 */

module.exports = username;

/**
 * Get the username from the GitHub remote origin URL
 */

function username(cwd, verbose) {
  var url = origin.sync(cwd);
  if (!url && verbose) {
    console.error(red('  Can\'t calculate git-username, which probably means that\n  a git remote origin has not been defined.'))
  }
  if (!url) {
    return null
  }

  var json = parse(url)
  return json ? json.user : null;
}
