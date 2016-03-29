"use strict";

function occurrences(str) {
	var letters = {};
	var result = str.split('').forEach((value) => {
		(letters[value]) ? letters[value]++ : letters[value] = 1;
	});
	console.log(letters);
	return 0;
}

console.log(occurrences('bbaaaccccdddd'));
console.log(occurrences('111223'));