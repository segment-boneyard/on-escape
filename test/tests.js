describe('on-escape', function () {

var assert = require('assert')
  , escape = require('on-escape')
  , trigger = require('trigger-event');

it('should add a handler', function (done) {
  escape(function (e) {
    done();
  });
  trigger('keydown', { key: 'esc' });
});

it('should remove a handler', function () {
  var handler = function () { assert(false); };
  escape(handler);
  escape.unbind(handler);
  trigger('keydown', { key: 'esc' });
});

});