
var fs = require('fs')
var Promise = require('native-or-bluebird')
var createHash = require('crypto').createHash

module.exports = function (stream, method, done) {
  var promise = new Promise(function (resolve, reject) {
    if (typeof stream === 'string')
      stream = fs.createReadStream(stream)
      
    var hasher = createHash(method)
    .once('error', finish)
    .once('readable', onReadable)

    stream
    .once('error', finish)
    .pipe(hasher)

    function onReadable() {
      finish(null, this.read())
    }

    function finish(err, hash) {
      stream.removeListener('error', finish)
      hasher.removeListener('error', finish)
      hasher.removeListener('readable', onReadable)
      if (err) reject(err)
      else resolve(hash)
      stream = hasher = null
    }
  })

  if (done) {
    promise.then(function (buf) {
      done(null, buf)
    }, done)
  }

  return promise
}
