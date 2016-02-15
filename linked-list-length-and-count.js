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
					let data = current.data;
					current = current.next;
					return {
						value: data
					};
				}
			}
		};
	}
};

function length(head) {
	let length = 0;
	if (head instanceof Node) {
		for (let data of head) {
			length++;
		}
	}
	return length;
}

function count(head, integer) {
	let count = 0;
	if (head instanceof Node) {
		for (let data of head) {
			if (data === integer) count++;
		}
	}
	return count;
}

