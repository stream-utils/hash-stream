var fs = require('fs')
var createHash = require('crypto').createHash

module.exports = function (stream, method, callback) {
  if (typeof stream === 'string')
    stream = fs.createReadStream(stream)

  var hasher = createHash(method)

  stream
  .once('error', finish)
  .pipe(hasher)

  hasher
  .once('error', finish)
  .once('readable', onReadable)

  function onReadable() {
    finish(null, this.read())
  }

  function finish(err, hash) {
    stream.removeListener('error', finish)
    hasher.removeListener('error', finish)
    hasher.removeListener('readable', onReadable)
    callback(err, hash)
  }
}