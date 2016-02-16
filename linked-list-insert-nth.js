

// Implement an InsertNth() function which can insert a new node at any index within a list.

// InsertNth() is a more general version of the Push() function that we implemented in the first kata listed below.
// Given a list, an index 'n' in the range 0..length, and a data element,
// add a new node to the list so that it has the given index. InsertNth() should return the head of the list.

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
		throw 'Invalid nodeList';
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
		throw `No node was found at index: ${index}`;
	} else {
		return nthNode;
	}
}

function insertNth(head, index, data) {
	let pointer = null;
	let node = new Node(data);
	if (index > 0) {
		pointer = getNth(head, index-1);
		node.next = pointer.next;
		pointer.next = node;
		return head;
	} else {
		node.next = head;
		return node;
	}
}