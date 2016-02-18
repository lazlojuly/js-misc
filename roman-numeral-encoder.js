// Create a function taking a positive integer as its parameter and
// returning a string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately
// starting with the left most digit and skipping any digit with a value of zero.

// In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC.
// 2008 is written as 2000=MM, 8=VIII; or MMVIII.
// 1666 uses each Roman symbol in descending order: MDCLXVI.
"use strict";

let symbols = {
  1:'I',
  5:'V',
  10:'X',
  50:'L',
  100:'C',
  500:'D',
  1000:'M'
};

function solution(n) {

  let result = [];

  // iterate symbols
  Object.keys(symbols).forEach(function(int) {
    let symbol = symbols[int];
      
  });

  let thousands = n/1000;
  let times = Math.floor(thousands);
  if (thousands >= 1) {
    result = result.concat(Array(times).fill(symbols[1000]));
  }

  n = n - (times*1000);

  console.log(n, 'n');

  let fivehundreds = n/500;
  if (fivehundreds >= 1) {
    result = result.concat(Array(Math.floor(fivehundreds)).fill(symbols[500]));
  }


  return result.join('');
}

// console.log(solution(1990), 'MCMXC');
// console.log(solution(2008), 'MMVIII');
console.log(solution(1666), 'MDCLXVI');