# Hash Stream

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependency Status][david-image]][david-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]
[![Gittip][gittip-image]][gittip-url]

Simple wrapper around `crypto.createHash()` for files and streams.

## Installation

```shell
$ npm install hash-stream
```

## API

```js
var getHash = require('hash-stream')
```

## getHash(filename || stream, algorithm, callback)

- `filename` - path of the file
- `stream` - a readable stream
- `algorithm` - any defined by `crypto.getHashes()`

Returns a `hash` as a raw `Buffer`, so if you want a hex:

```js
getHash('image.png', 'sha256', function (err, hash) {
  hash = hash.toString('hex')
})
```

## [CLI](http://en.wikipedia.org/wiki/Command-line_interface)

You can use `nhash` to hash a file and get the output instantly. The usage options are simple:
```
$ nhash --help
Usage: nhash [options] [file]

Options:

  -h, --help              output usage information
  -V, --version           output the version number
  -a, --algorithm <sha1>  the hash alorithm
  -e, --encoding <hex>    the encoding of output
```

[npm-image]: https://img.shields.io/npm/v/hash-stream.svg?style=flat-square
[npm-url]: https://npmjs.org/package/hash-stream
[github-tag]: http://img.shields.io/github/tag/stream-utils/hash-stream.svg?style=flat-square
[github-url]: https://github.com/stream-utils/hash-stream/tags
[travis-image]: https://img.shields.io/travis/stream-utils/hash-stream.svg?style=flat-square
[travis-url]: https://travis-ci.org/stream-utils/hash-stream
[coveralls-image]: https://img.shields.io/coveralls/stream-utils/hash-stream.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/stream-utils/hash-stream
[david-image]: http://img.shields.io/david/stream-utils/hash-stream.svg?style=flat-square
[david-url]: https://david-dm.org/stream-utils/hash-stream
[license-image]: http://img.shields.io/npm/l/hash-stream.svg?style=flat-square
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/hash-stream.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/hash-stream
[gittip-image]: https://img.shields.io/gratipay/jonathanong.svg?style=flat-square
[gittip-url]: https://gratipay.com/jonathanong/
