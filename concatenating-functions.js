// Functional programming thrives from the reuse of functions. One core feature to extend the reuse is the concatenation of functions.
//
// You probably know this feature from your favorite shell: ls -la | sort | head lists the top lines of the sorted result of ls -la
//
// Build a function pipe to achieve this with JS. An example use could be:

// Extend the Function prototype with a method pipe

 // [1,2,3,4,5].map(addOne.pipe(square))

"use strict";

Function.prototype.pipe = function (f) {
	var self = this;
	return function () {
		return f(self.apply(self, arguments));
	};
};

var test = function(e) {
	console.log(e, 'test');
	return e+1;
};
var test2 = function(e) {
	console.log(e, 'test2');
	return e+2;
};

var newfunc = test.pipe(test2);
console.log(newfunc(3));


// var addOne = function(e) {
//     return e + 1;
// };
//
// var square = function(e) {
//     return e * e;
// };
//
// var result = [1,2,3,4,5].map(addOne.pipe(square)) //-> [4,9,16,25,36]
//
// console.log(result)
//
//
//
//
//
//
//
//
//
//
//
//
// // just a small amount of possible functions to start testing with.
// var addOne = function(e) {return e + 1;};
// var square = function(e) {return e * e;};
