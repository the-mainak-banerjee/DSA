function MyQueue() {
  this.s1 = []
  this.s2 = []
}

MyQueue.prototype.push = function (x) {
  this.s1.push(x)
}

MyQueue.prototype.pop() = function(){
  let stack1 = this.s1
  let stack2 = this.s2

  if (stack2.length === 0) {
    while (stack1.length) {
      stack2.push(stack1.pop())
    }
  }

  return stack2.pop()
}

MyQueue.prototype.peek = function () {
  let stack1 = this.s1
  let stack2 = this.s2

  if (stack2.length === 0) {
    while (stack1.length) {
      stack2.push(stack1.pop())
    }
  }

  return stack2[stack2.length - 1]
}

MyQueue.prototype.empty = function () {
  return this.s1.length === 0 && this.s2.length === 0
}