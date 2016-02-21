// Create a function named divisors that takes an integer and returns an array with
// all of the integer's divisors(except for 1 and the number itself).
// If the number is prime return the string '(integer) is prime' (use Either String a in Haskell).

"use strict";

function divisors(integer) {
  let divisors = [];
  for (let x=integer-1; x>1; x--) {
    if (integer%x === 0) {
      divisors.push(x);
    }
  }
  return divisors.length ? divisors.reverse() : `${integer} is prime`;
};

console.log(divisors(15), "[3, 5]");
console.log(divisors(12), "[2, 3, 4, 6]");
console.log(divisors(13), "13 is prime");