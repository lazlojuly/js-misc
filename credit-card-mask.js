"use strict";

// return masked string
function maskifyEs6(cc) {
	let len = cc.length;
	return (len < 4) ? cc : '#'.repeat(cc.len-4)+cc.substring(len-4, len);
}

function maskify(cc) {
	let len = cc.length;
	return (len < 4) ? cc : new Array(len-3).join('#')+cc.substring(len-4, len);
}

console.log(maskify('4556364607935616'), '--> ############5616');
console.log(maskify('1'), '--> 1');
console.log(maskify('11111'), '--> #1111');

