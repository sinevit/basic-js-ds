// const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
 class Queue {
  queue = [];

  getUnderlyingList() {
    let list = this.queue;

    function listout(arr, i) {
      let arr1 = arr;
      let obj = {};
      if (i == arr.length - 1) {
        obj.value = arr[i];
        obj.next = null;
      }
      else {
        obj.value = arr[i];
        obj.next = listout(arr1, i+1);
      }
      return obj
    }
    console.log(listout(list, 0));
    return listout(list, 0);
  }

  enqueue(el) {
    this.queue.push(el);
    return this;
  }

  dequeue() {
    return this.queue.shift();
  }
}

module.exports = {
  Queue
};
