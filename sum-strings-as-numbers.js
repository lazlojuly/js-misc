"use strict";

function sumStrings(a,b) {

  let sum = '';
  let carry = 0;
  a = a.split('').reverse().join('');
  b = b.split('').reverse().join('');

  let cursor = 0;
  while (cursor < a.length || cursor < b.length || carry) {
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

  return sum.split('').reverse().join('').replace(/^0+/g,'');

}

function parseNumString(s) {
  let n = parseInt(s);
  return isNaN(n) ? 0 : n;
}

var res1 = sumStrings('712569312664357328695151392', '8100824045303269669937');
var res2 = sumStrings('800', '9567'); // 10367
var res3 = sumStrings('00103', '08567') // Expected: 8670
var res4 = sumStrings('50095301248058391139327916261', '81055900096023504197206408605'); // Expected: 131151201344081895336534324866

console.log(res1, 'result');
console.log(res2, 'result2');
console.log(res3, 'result3');
console.log(res4, 'result4');

// Why is this needed? .replace(/^0+/g,'')
// Because both `a` and `b` can be `0`(zero) padded integers eg.: `08567`, `0001230` etc.
//
// ```
// // Example1 - all `0`s needs to be used:
//  103
// +206
//  ---
//  309
//
// // Example2 - some `0`s can be ignored (removed):
//  00103
// +  206
//  -----
//    206
// ```
//
// In the latter example the main column-addition algorithm needs to figure out:
//
// * if the addition of two `0`s is happening on a column with padding `0`s
// * or happening on "valueable" `0`(s) (representing decimal powers).
//
// Instead of adding this complication to the main loop, I have decided to trim padding `0`s once the column-addition has completed.
//
// ```