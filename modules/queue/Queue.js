class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }
    //make the new node the last item on the queue
    this.last = node;
  }

  dequeue() {
    //if the queue is empty, there is nothing to return
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    //if this is the last item in the queue
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }

  show() {
    if (!this.first) {
      return;
    }

    return this.first.value;
  }

  all() {
    const array = [];

    if (this.first === null) {
      return array;
    }

    let currNode = this.first;
    while (currNode.next !== null) {
      array.push(currNode.value);
      currNode = currNode.next;
    }

    array.push(currNode.value);
    return array;
  }
}

module.exports = Queue;
