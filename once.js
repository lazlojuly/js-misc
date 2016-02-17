"use strict";

function once(fn) {
  var called = false;
  return function() {
    if (!called) {
      called = true;
      return fn.apply(this, arguments);
    }
  }
}

let logOnce = once(console.log)
logOnce("foo") // -> "foo"
logOnce("bar") // -> no effect