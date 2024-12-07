/**
 * @title: Array Push and Shift Methods
 */

const Queue = require('./lecture2');
// const queue = new Queue();

// queue.enqueue('Task One');
// queue.enqueue('Task Two');
// queue.enqueue('Task Three');
// queue.showQueue();
// queue.dequeue();
// queue.dequeue();
// console.log(queue);
// console.log(queue.next());

const q = []
q.push('Item One');
q.push('Item Two');
q.push('Item Three');
console.log(q);
q.shift();
q.shift();
console.log(q);