function MyStack() {
  this.q1 = [];
  this.q2 = [];
}

MyStack.prototype.push = function (x) {
  this.q1.push(x);
};

MyStack.prototype.pop = function () {
  let n = this.q1.length;

  for (let i = 0; i < n - 1; i++) {
    this.q2.push(this.q1.shift());
  }

  let result = this.q1.shift();

  let temp = this.q1;
  this.q1 = this.q2;
  this.q2 = temp;

  return result;
};

MyStack.prototype.top = function () {
  let n = this.q1.length;

  for (let i = 0; i < n - 1; i++) {
    this.q2.push(this.q1.shift());
  }

  let result = this.q1.shift();
  this.q2.push(result);
  let temp = this.q1;
  this.q1 = this.q2;
  this.q2 = temp;

  return result;
};

MyStack.prototype.empty = function () {
  return this.q1.length === 0;
};

// Approach 2

function Stack() {
  this.q = [];
}

Stack.prototype.push = function (x) {
  this.q.push(x);
};

Stack.prototype.pop = function () {
  let n = this.q.length;

  for (let i = 0; i < n - 1; i++) {
    this.q.push(this.q.shift());
  }

  return this.q.shift();
};

Stack.prototype.top = function () {
  let n = this.q.length;

  for (let i = 0; i < n - 1; i++) {
    this.q.push(this.q.shift());
  }

  let result = this.q.shift();
  this.q.push(result);

  return result;
};

Stack.prototype.empty = function () {
  return this.q.length === 0;
};
