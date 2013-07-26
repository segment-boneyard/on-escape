
var bind = require('event').bind;


/**
 * Handlers.
 */

var fns = [];


/**
 * Bind to `document` once.
 */

bind(document, 'keydown', function (e) {
  if (27 !== e.keyCode) return;
  for (var i = 0, fn; fn = fns[i]; i++) fn(e);
});


/**
 * Escape binder.
 *
 * @param {Function} fn
 */

module.exports = function onEscape (fn) {
  fns.push(fn);
};