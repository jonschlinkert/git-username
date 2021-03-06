# git-username [![NPM version](https://img.shields.io/npm/v/git-username.svg?style=flat)](https://www.npmjs.com/package/git-username) [![NPM monthly downloads](https://img.shields.io/npm/dm/git-username.svg?style=flat)](https://npmjs.org/package/git-username) [![NPM total downloads](https://img.shields.io/npm/dt/git-username.svg?style=flat)](https://npmjs.org/package/git-username) [![Linux Build Status](https://img.shields.io/travis/jonschlinkert/git-username.svg?style=flat&label=Travis)](https://travis-ci.org/jonschlinkert/git-username)

> Get the username (or 'owner' name) from a git/GitHub remote origin URL.

Please consider following this project's author, [Jon Schlinkert](https://github.com/jonschlinkert), and consider starring the project to show your :heart: and support.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save git-username
```

## Usage

If no arguments are passed, the `.git/config` in the current working directory is used.

```js
var username = require('git-username');
console.log(username()); //=> jonschlinkert
```

## Options

### options.cwd

**Type**: `string`

**Default**: `process.cwd()`

Set the current working directory (cwd):

**Examples**

```js
username({ cwd: 'some/path' });

// cwd may also be passed as the first argument
username('some/path');
```

### options.strict

**Type**: `boolean`

**Default**: `undefined`

Throw an error when a git config or git remote origin cannot be resolved. Otherwise, when `strict` is not true and a remote origin cannot be resolved, `null` is returned.

**Example**

```js
username({ strict: true });
```

## Release history

### v1.0

**Breaking changes**

* The second argument can no longer be a boolean (for warning when git remote origin is not found). Use [options.strict](#optionsstrict) instead.

## About

<details>
<summary><strong>Contributing</strong></summary>

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

</details>

<details>
<summary><strong>Running Tests</strong></summary>

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm test
```

</details>

<details>
<summary><strong>Building docs</strong></summary>

_(This project's readme.md is generated by [verb](https://github.com/verbose/verb-generate-readme), please don't edit the readme directly. Any changes to the readme must be made in the [.verb.md](.verb.md) readme template.)_

To generate the readme, run the following command:

```sh
$ npm install -g verbose/verb#dev verb-generate-readme && verb
```

</details>

### Related projects

You might also be interested in these projects:

* [git-branch](https://www.npmjs.com/package/git-branch): Get the current branch for a local git repository. | [homepage](https://github.com/jonschlinkert/git-branch "Get the current branch for a local git repository.")
* [git-user-name](https://www.npmjs.com/package/git-user-name): Get a user's name from git config at the project or global scope, depending on… [more](https://github.com/jonschlinkert/git-user-name) | [homepage](https://github.com/jonschlinkert/git-user-name "Get a user's name from git config at the project or global scope, depending on what git uses in the current context.")
* [parse-git-config](https://www.npmjs.com/package/parse-git-config): Parse `.git/config` into a JavaScript object. sync or async. | [homepage](https://github.com/jonschlinkert/parse-git-config "Parse `.git/config` into a JavaScript object. sync or async.")
* [remote-origin-url](https://www.npmjs.com/package/remote-origin-url): Get the git remote origin URL from your local git repository. Remember! A remote origin… [more](https://github.com/jonschlinkert/remote-origin-url) | [homepage](https://github.com/jonschlinkert/remote-origin-url "Get the git remote origin URL from your local git repository. Remember! A remote origin must exist first!")

### Contributors

| **Commits** | **Contributor** | 
| --- | --- |
| 21 | [jonschlinkert](https://github.com/jonschlinkert) |
| 1 | [davisjam](https://github.com/davisjam) |
| 1 | [jamo](https://github.com/jamo) |

### Author

**Jon Schlinkert**

* [LinkedIn Profile](https://linkedin.com/in/jonschlinkert)
* [GitHub Profile](https://github.com/jonschlinkert)
* [Twitter Profile](https://twitter.com/jonschlinkert)

### License

Copyright © 2018, [Jon Schlinkert](http://github.com/https://github.com/jonschlinkert).
Released under the [MIT License](LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.6.0, on March 02, 2018._