# Hash Stream [![Build Status](https://travis-ci.org/stream-utils/hash-stream.png)](https://travis-ci.org/stream-utils/hash-stream)

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

## License

The MIT License (MIT)

Copyright (c) 2013 Jonathan Ong me@jongleberry.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
