const isDom = require('is-dom')
const test = require('tape')

const domStub = require('./')

global.window = {}

test('should return a dom node stub', function (t) {
  t.plan(2)
  t.ok(isDom(domStub()), 'is dom node')
  t.notOk(isDom({}), 'is not a dom node')
})
