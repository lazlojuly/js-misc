"use strict";

function lowercaseCount(str){
  let matches = str.match(/[a-z]/g);
  return (matches) ? matches.length : 0;
}

// clever
function lowercaseCount(str){
    return (str.match(/[a-z]/g) || []).length
}

console.log(lowercaseCount("abc"), 3);
console.log(lowercaseCount("abcABC123"), 3);