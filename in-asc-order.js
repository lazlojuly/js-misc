"use strict";

function isAscOrder(arr) {
	let inOrder = true;
	arr.forEach((value, index) => {
		if ((arr[index-1] && value < arr[index-1]) ||
			(arr[index+1] && value > arr[index+1]))
		{
			inOrder = false;
			return;
		}
	})
	return inOrder;
}

Test.expect(inAscOrder([1,3,5,7,34,765]), 'in asc order');
Test.expect(!inAscOrder([23,12,3,1]), 'not in asc order');
Test.expect(!inAscOrder([234,334,12,34,56]), 'not in asc order');


// clever as well as shortest
function inAscOrder(arr) {
  return arr.every((_,i)=>i==0||arr[i]>arr[i-1]);
}
