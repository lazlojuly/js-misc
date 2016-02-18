"use strict";

function validateHello(greetings) {
  var res =  /h[ea]llo|ciao|salut|hola|ahoj|czesc/i.test(greetings)
  return res;
}

console.log(validateHello('ahoj'), 'ahoj');
console.log(validateHello('hello'), 'hello');
console.log(validateHello('hallo'), 'hallo');
