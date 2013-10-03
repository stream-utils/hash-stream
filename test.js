var fs = require('fs')
var crypto = require('crypto')
var path = require('path')
var assert = require('assert')

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
})