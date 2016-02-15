// Implement a GetNth() function that takes a linked list and an integer index and returns the node stored at the Nth index position. GetNth() uses the C numbering convention that the first node is index 0, the second is index 1, ... and so on. So for the list 42 -> 13 -> 666, GetNth() with index 1 should return Node(13);

"use strict";

function Node(data) {
  this.data = data;
  this.next = null;
}

Node.prototype = {
	[Symbol.iterator]() {
		let current = this;
		return {
			next() {
				if (!current) {
					return {
						done: true
					};
				} else {
					let returnNode = current;
					current = current.next;
					return {
						value: returnNode
					};
				}
			}
		};
	}
};

function getNth(nodeList, index) {

	if (!nodeList) {
		throw 'Null linked list should throw error.';
	}

	let currentIndex = 0;
	let nthNode = null;
	for (node of nodeList) {
		if (currentIndex === index) {
			nthNode = node;
		}
		currentIndex++;
	}

	if (!nthNode) {
		throw 'Invalid index value should throw error.';
	} else {
		return nthNode;
	}

}