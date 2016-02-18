// Create a function taking a positive integer as its parameter and
// returning a string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately
// starting with the left most digit and skipping any digit with a value of zero.

// In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC.
// 2008 is written as 2000=MM, 8=VIII; or MMVIII.
// 1666 uses each Roman symbol in descending order: MDCLXVI.
"use strict";

let symbols = [
  { num: 1000, rom: 'M' },
  { num: 500, rom: 'D' },
  { num: 100, rom: 'C' },
  { num: 50, rom: 'L' },
  { num: 10, rom: 'X' },
  { num: 5, rom: 'V' },
  { num: 1, rom: 'I' }
];

function solution(n) {

  let result = [];

  symbols.forEach(function(symbol) {
    let quotient = Math.floor(n/symbol.num);
    if (quotient >= 1) {
      result = result.concat(Array(quotient).fill(symbol.rom));
      n = n - quotient*symbol.num;
    }
  });

  return result.join('');
}

console.log(solution(1990), 'MCMXC');
console.log(solution(2008), 'MMVIII');
console.log(solution(1666), 'MDCLXVI');