"use strict";

function loop_size(node){

  let next = null;
  node.last = true;

  // converting singly-list to doubly-list
  let prevNode = new Node();
  while (node.next && !(next = node.next).prev) {
    node.prev = prevNode;
    prevNode = node;
    node.last = false;
    next.prev = node;
    node = next;
    node.last = true;
  }

  // traversing loop only
  let length = 0;
  let circled = node.next ? (node === node.next.next) : true;
  if (circled) { return 1; }

  while (node.next && (next = node.next) && !circled) {
    // console.log(node.name, node.last);
    node = next;
    circled = node.last;
    length++;
  }

  console.log(length);
  return length;

}
// console.log(next.name, 'nexty');
function Node(name) {
  this.name = name;
  this.next;
  this.getNext = function () {
    return this.next;
    // code
  };
  this.setNext = function (next) {
    this.next = next;
  };
}

let nodeA = new Node('A');
let nodeB = new Node('B');
let nodeC = new Node('C');
let nodeD = new Node('D');
let nodeE = new Node('E');
let nodeF = new Node('F');
// nodeA.next = nodeB;
// nodeB.next = nodeC;
// nodeC.next = nodeD;
// nodeD.next = nodeE;
// nodeE.next = nodeF;
// nodeF.next = nodeC;
nodeA.next = nodeB;
nodeB.next = nodeC;
nodeC.next = nodeD;
nodeD.next = nodeC;

console.log(loop_size(nodeA));