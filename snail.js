"use strict";

var snail = function(array) {
  let result = [];

  while (array.length) {

    // take top array
    array.splice(0,1)[0].forEach((v)=>{
      result.push(v);
    });

    // take off last value at each array - except from last array
    for (var x=0; x<array.length-1; x++) {
      result.push(array[x].pop());
    }

    // check if finished
    if (!array.length) break;

    // take bottom array and reverse it
    array.splice(-1,1)[0].reverse().forEach((v)=>{
      result.push(v);
    });

    // take off first value at each array - except from first array
    for (var x=array.length-1; x>0; x--) {
      result.push(array[x].shift());
    }
  }

  return result;
};


var array = [[1,2,3],
         [4,5,6],
         [7,8,9]];
console.log(snail(array), "1,2,3,6,9,8,7,4,5");

var array2 = [[1,2,3],
         [8,9,4],
         [7,6,5]];
console.log(snail(array2), "1,2,3,4,5,6,7,8,9");