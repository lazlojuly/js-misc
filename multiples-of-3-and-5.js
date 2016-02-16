// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
// The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

"use strict";

function solution(number){
	let total = 0;
	for (let x=3; x<number; x++) {
		total = isMultipleOf(x, 3) || isMultipleOf(x, 5) ? total+x : total;
	}
	return total;
}

function isMultipleOf(subject, value) {
	return (subject % value === 0);
}

console.log(solution(10));
console.log(solution(15));


// best practice
function solution(number){
  var sum = 0;

  for(var i = 1;i< number; i++){
    if(i % 3 == 0 || i % 5 == 0){
      sum += i
    }
  }
  return sum;
}
