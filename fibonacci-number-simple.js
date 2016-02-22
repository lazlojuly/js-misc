"use strict";

let fib = function (steps) {
  if (!steps) return 0;

  let fib = [0,1];
  for (let x=1; x<steps; x++) {
    fib.push(fib[x-1]+fib[x]);
  }
  return fib.pop();
}

// 0,0,1,2,3,5,8,13
console.log(fib(4));