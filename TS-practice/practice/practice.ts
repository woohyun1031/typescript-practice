class Queue<T> {
  list: T[] = [];

  get length() {
    return this.list.length;
  }
  enquequ(item: T) {
    this.list.push(item);
  }
  dequeue() {
    return this.list.shift();
  }
}

const queue = new Queue();
queue.enquequ(0);
queue.enquequ(1);
queue.enquequ(2);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

