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

function length(head) {
	let length = 0;
	if (head instanceof Node) {
		for (let node of head) {
			length++;
		}
	}
	return length;
}

function count(head, integer) {
	let count = 0;
	if (head instanceof Node) {
		for (let node of head) {
			if (node.data === integer) count++;
		}
	}
	return count;
}



// best practice as well as most clever
function Node(data) {
  this.data = data
  this.next = null
}

function length(head) {
  return head ? 1 + length(head.next) : 0
}

function count(head, data) {
  if (!head) return 0
  return (head.data === data ? 1 : 0) + count(head.next, data)
}


// basic, easy to understand
function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  let length = 0;
  let current = head;

  while ( current != null ) {
    current = current.next
    length++;
  }

  return length;
}

function count(head, data) {
  let current = head;
  let count = 0;

  while ( current != null ) {
    if ( current.data === data )
      count++;

    current = current.next;
  }

  return count;
}
