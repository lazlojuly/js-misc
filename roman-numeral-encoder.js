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

  symbols.forEach(function(symbol, index) {
    let quotient = Math.floor(n/symbol.num);
    console.log(quotient, 'quotient');
    if (quotient >= 1) {
      if (quotient <= 3) {
        // look ahead
        let n2 = n - quotient*symbol.num;
        let next = symbols[index+1];
        if (next && (Math.floor(n2/next.num) > 3)) {
          // more than 3 symbols would be needed for next value
          result.push(symbols[index+1].rom);
          result.push(symbols[index-1].rom);
          n = n - (symbols[index-1].num - symbols[index+1].num);
        } else {
          // safe to turn current value to symbol(s)
          let syms = [];
          for (let x=1;x<=quotient;x++) {
            syms.push(symbol.rom);
          }
          result = result.concat(syms);
          n = n - (quotient * symbol.num);
        }
      }
    }
  });

  return result.join('');
}

console.log(solution(4), 'IV');
// console.log(solution(1990), 'MCMXC');
// console.log(solution(2008), 'MMVIII');
// console.log(solution(1666), 'MDCLXVI');