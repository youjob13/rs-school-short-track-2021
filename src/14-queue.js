const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.head = null;
  }

  get size() {
    throw new Error('Not implemented');
  }

  enqueue(element) {
    const newNode = new ListNode(element);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    return this.head;
  }

  dequeue() {
    throw new Error('Not implemented');
  }
}
// const obj = new Queue();
// obj.enqueue(3);
// console.log(obj.enqueue(4));
// obj.dequeue();
// console.log(obj.enqueue(2));
module.exports = Queue;
