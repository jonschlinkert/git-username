/*!
 * git-username <https://github.com/jonschlinkert/git-username>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

var url = require('url');
var chalk = require('chalk');
var origin = require('remote-origin-url');

/**
 * Expose `username`
 */

module.exports = username;

/**
 * Get the username from the GitHub remote origin URL
 */

function username(cwd, verbose) {
  var repo = origin.sync(cwd);
  if (!repo && verbose) {
    console.error(chalk.red('  Can\'t calculate git-username, which probably means that\n  a git remote origin has not been defined.'));
  }

  if (!repo) {
    return null;
  }

  var o = url.parse(repo);
  var path = o.path;

  if (path.length && path.charAt(0) === '/') {
    path = path.slice(1);
  }

  path = path.split('/')[0];
  return path;
}
