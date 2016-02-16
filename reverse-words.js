"use strict";

function reverseWords(str) {
	return str.split(' ').reduce((result,word) => {
		return result.concat(' ', word.split('').reverse().join(''));
	},'').trim();
}

console.log(reverseWords("This is an example!") === "sihT si na !elpmaxe");
console.log(reverseWords("This is an example!"));



// best practice
function reverseWords(str) {
  return str.split(' ').map(function(word){
    return word.split('').reverse().join('');
  }).join(' ');
}