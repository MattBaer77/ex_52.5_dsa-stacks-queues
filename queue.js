/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {

    const newNode = new Node(val)

    if(!this.first){
      this.first = newNode
    }

    if(this.first && this.first == this.last){
      this.first.next = newNode
    }

    if(this.last){
      this.last.next = newNode
    }
    
    this.last = newNode
    this.size ++

    // console.log(this)

  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {

    if(!this.first){
      throw new Error("No Items left In Queue")
    }

    const nextInQueueValue = this.first.val

    this.first = this.first.next

    this.size --

    return nextInQueueValue

  }

  /** peek(): return the value of the first node in the queue. */

  peek() {

  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {

  }
}

module.exports = Queue;
