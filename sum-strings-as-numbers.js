"use strict";

function sumStrings(a,b) {

  let sum = '';
  let carry = 0;
  a = a.split('').reverse().join('');
  b = b.split('').reverse().join('');

  let cursor = 0;
  while (cursor < a.length || cursor < b.length) {
    let total = parseNumString(a.charAt(cursor)) + parseNumString(b.charAt(cursor)) + carry;
    if (total > 9) {
      carry = 1;
      sum += (total - 10).toString();
    } else {
      carry = 0;
      sum += total.toString();
    }
    cursor++;
  }

  return sum.split('').reverse().join('');

}

function parseNumString(s) {
  let n = parseInt(s);
  return isNaN(n) ? 0 : n;
}

// var res1 = sumStrings('123', '123');
var res1 = sumStrings('712569312664357328695151392', '8100824045303269669937');
var res2 = sumStrings('800', '9567');
// Expected: 712577413488402631964821329, instead got: 7.125774134884027e+26
// 712577413488402631964821329
// 7125774134884027e+26

// var num = 712577413488402631964821329;
// var numString = num.toString();
// console.log(numString);
console.log(res1, 'result');
console.log(res2, 'result2');

// 712577413488402631964 - after 22

