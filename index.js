/*!
 * git-username <https://github.com/jonschlinkert/git-username>
 *
 * Copyright (c) 2014-2018, Jon Schlinkert.
 * Released under the MIT License.
 */

var url = require('url');
var path = require('path');
var origin = require('remote-origin-url');

module.exports = function(cwd, options) {
  if (typeof cwd !== 'string') {
    options = cwd;
    cwd = (options && options.cwd) || process.cwd();
  }

  var dir = path.join(stripGitConfig(cwd), '.git/config');
  var repoPath = origin.sync(dir);

  if (!repoPath) {
    if (options && options.strict === true) {
      throw new Error('cannot resolve git remote origin url, this probably means one does not exist or .git has not been initialized');
    }
    return null;
  }

  var parsed = url.parse(repoPath);
  var parsedPath = parsed.path;

  if (parsedPath.length && parsedPath.charAt(0) === '/') {
    return parsedPath.slice(1, parsedPath.indexOf('/', 1));
  }

  var match = /^git@[^\s:]+:([^\s/]+)\//.exec(parsedPath);
  if (match && match[1]) {
    return match[1];
  }

  return null;
};

function stripGitConfig(filepath) {
  if (path.basename(filepath) === 'config') {
    filepath = path.dirname(filepath);
  }
  if (path.basename(filepath) === '.git') {
    filepath = path.dirname(filepath);
  }
  return filepath;
}
