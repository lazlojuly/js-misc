"use strict";

// Write push() and buildOneTwoThree() functions to easily update and initialize linked lists. Try to use the push() function within your buildOneTwoThree() function.

function Node(data) {
	this.data = data;
	this.next = null;
}

function push(head, data) {
	if (!head) {
		let head = new Node(data);
	}
	let node = new Node(data);
	node.next = head;
	return node;
}

var chained = null
chained = push(chained, 3)
chained = push(chained, 2)
chained = push(chained, 1)

// console.log(chained);

function buildOneTwoThree() {
	var head = null;
	for (var x=3; x>=1; x--) {
		head = push(head, x);
	}
	return head;
}

console.log(buildOneTwoThree());


// crazy
var push = (head, data) => new Node(data, head);
var build = (...args) => args.reduce(push, null);
var buildOneTwoThree = build.bind(null, 3, 2, 1);
var Node = (data, next = null) => ( {data, next} );

// sensible
function push(head, data) {
	return new Node(data, head);
}
function buildOneTwoThree() {
	return [3, 2, 1].reduce( (head, data) => push(head, data), null );
}
function Node(data, next = null) {
	this.data = data;
	this.next = next;
}