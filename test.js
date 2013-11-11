var fs = require('fs')
var crypto = require('crypto')
var path = require('path')
var assert = require('assert')
var co = require('co')
var stream = require('stream')

var getHash = require('./')

var filename = path.join(__dirname, 'index.js')

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

  it('should work as a yieldable with a stream', function (done) {
    co(function* () {
      var res = yield getHash(filename, 'sha256')
      assert.equal(res.toString('hex'), hash)
    })(done)
  })

  it('should work as a yieldable with a stream', function (done) {
    co(function* () {
      var res = yield getHash(fs.createReadStream(filename), 'sha256')
      assert.equal(res.toString('hex'), hash)
    })(done)
  })

  it('should work as a yieldable with a simple stream', function (done) {
    co(function* () {
      var s = new stream()
      process.nextTick(function () {
        s.emit('data', 'asdf')
        s.emit('end')
      })
      var res = yield getHash(s, 'sha256')
    })(done)
  })
})