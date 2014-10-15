var fs = require('fs')
var crypto = require('crypto')
var path = require('path')
var assert = require('assert')
var stream = require('stream')

var getHash = require('..')

var filename = path.join(__dirname, 'test.js')

var hash = crypto.createHash('sha256')
.update(fs.readFileSync(filename))
.digest('hex')

describe('Hash Stream', function () {
  it('should work with a filename', function (done) {
    getHash(filename, 'sha256', function (err, res) {
      assert.ifError(err)
      assert.equal(res.toString('hex'), hash)
      done()
    })
  })

  it('should work with a stream', function (done) {
    getHash(fs.createReadStream(filename), 'sha256', function (err, res) {
      assert.ifError(err)
      assert.equal(res.toString('hex'), hash)
      done()
    })
  })

  it('should work as a promise with a stream', function () {
    return getHash(filename, 'sha256').then(function (res) {
      assert.equal(res.toString('hex'), hash)
    })
  })

  it('should work as a yieldable with a stream', function () {
    return getHash(fs.createReadStream(filename), 'sha256').then(function (res) {
      assert.equal(res.toString('hex'), hash)
    })
  })

  it('should work as a yieldable with a simple stream', function () {
    var s = new stream()
    process.nextTick(function () {
      s.emit('data', 'asdf')
      s.emit('end')
    })
    return getHash(s, 'sha256')
  })
})
