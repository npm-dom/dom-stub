# dom-stub
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]
[![js-standard-style][standard-image]][standard-url]

A minimal dom node stub for testing purposes.

## Installation
```bash
$ npm install dom-stub
```

## Usage
```js
const domStub = require('dom-stub')
const assert = require('assert')
const isDom = require('is-dom')

global.window = {}

assert.ok(isDom(domStub()), 'is dom node')
// => ok
```

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/dom-stub.svg?style=flat-square
[npm-url]: https://npmjs.org/package/dom-stub
[travis-image]: https://img.shields.io/travis/npm-dom/dom-stub.svg?style=flat-square
[travis-url]: https://travis-ci.org/npm-dom/dom-stub
[coveralls-image]: https://img.shields.io/coveralls/npm-dom/dom-stub.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/npm-dom/dom-stub?branch=master
[downloads-image]: http://img.shields.io/npm/dm/dom-stub.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/dom-stub
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
