class ArrayQueue {
    constructor() {
      this.items = []
    }
  
    get size () {
      return this.items.length
    }
  
    get isEmpty () {
      return this.size === 0
    }
  
    enqueue(element) {
      this.items.push(element)
    }
  
    dequeue() {
      if (this.isEmpty){
        console.error("The stack is empty!")
        return
      }
      this.items.shift()
    }
  
    peek() {
      // Looks and returns top of the queue
      if (this.isEmpty) {
        console.error("The stack is empty!")
        return
      }
      return this.items[0]
    }
  }
  
  const queue = new ArrayQueue()
  
  for (let i = 1; i <= 3; i++){
    queue.enqueue(i)
  }
  
  // queue.dequeue()
  // console.log(queue.isEmpty)
  // console.log(queue.size)
  
  // console.log(queue.peek())
  
  // console.log(queue.items) 
  
  // Stack Implementation with Array
  /////////////////////////////////
  class ArrayStack {
    constructor(){
      this.items = []
    }
  
    get size () {
      return this.items.length
    }
  
    get isEmpty () {
      return this.size === 0
    }
  
    push(element) {
      this.items.push(element)
    }
  
    pop() {
      if (this.isEmpty) {
        console.error("The stack is empty!")
        return
      }
      this.items.pop()
    }
  
    peek() {
      if (this.isEmpty) {
        console.error("The stack is empty!")
        return
      }
      return this.items[this.items.length - 1]
    }
  }
  
  const stack = new ArrayStack()
  
  // for (let i = 0; i < 3; i++){
  //   stack.push(i)
  // }
  
  stack.push(0)
  stack.pop()
  stack.push(2)
  stack.push(4)
  stack.push(6)
  stack.pop()
  stack.push(8)
  
  
  
  console.log(stack.items)