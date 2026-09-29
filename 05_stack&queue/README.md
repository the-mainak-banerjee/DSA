# Stack and Queue

## Stack

A **Stack** is a linear data structure that follows the **LIFO (Last In, First Out)** principle.

A stack has only **one accessible end**, called the **top**.

We can:

* Add an element only from the `top`.
* Remove an element only from the `top`.
* View the top element using `peek` or `top`.

Because the last element we add is the first element we can remove, it follows **LIFO**.

### Stack Operations

| Operation      | Description                              |
| -------------- | ---------------------------------------- |
| `push`         | Add an element to the top                |
| `pop`          | Remove the top element                   |
| `peek` / `top` | View the top element without removing it |

### Real-Life Examples

* Stack of books
* Undo functionality
* Browser history
* Function call stack

---

## Queue

A **Queue** is a linear data structure that follows the **FIFO (First In, First Out)** principle.

A queue has two ends:

* **Rear** — where we add new elements.
* **Front** — where we remove elements.

So the first element that enters the queue is the first element that comes out.

### Queue Operations

| Operation | Description                                |
| --------- | ------------------------------------------ |
| `enqueue` | Add an element to the rear                 |
| `dequeue` | Remove an element from the front           |
| `peek`    | View the front element without removing it |

### Real-Life Examples

* People waiting in a ticket counter queue
* Bus or train ticket counters
* Printer queue
* CPU task scheduling

---

## Why Do We Need Stack and Queue If We Already Have Arrays?

An array allows us to access and modify elements from **any index**.

For example:

```js
arr[0]
arr[5]
arr[10]
```

We can also modify any position:

```js
arr[2] = 100
```

But Stack and Queue intentionally **restrict how we access the data**.

### Stack

```text
       TOP
        ↓
      [ C ]  ← remove/add
      [ B ]
      [ A ]
```

We can only access the element from the `top`.

### Queue

```text
FRONT                 REAR
  ↓                     ↓
[ A ][ B ][ C ][ D ][ E ]
  ↑                     ↑
remove                 add
```

We remove from the `front` and add from the `rear`.

So a useful mental model is:

> **Stack and Queue can be implemented using arrays, but they restrict how we access and modify the data.**

They are useful when we **don't want arbitrary/random access** and want to enforce a particular order of processing.

---

## Stack vs Queue

| Feature          | Stack          | Queue          |
| ---------------- | -------------- | -------------- |
| Principle        | LIFO           | FIFO           |
| Add element      | Top            | Rear           |
| Remove element   | Top            | Front          |
| Accessible ends  | One            | Two            |
| Add operation    | `push`         | `enqueue`      |
| Remove operation | `pop`          | `dequeue`      |
| View operation   | `peek` / `top` | `peek`         |
| Example          | Stack of books | Ticket counter |

---

## Stack vs Array vs Queue vs Linked List vs Hash Map

| Feature       | Array                | Stack           | Queue           | Linked List              | Hash Map         |
| ------------- | -------------------- | --------------- | --------------- | ------------------------ | ---------------- |
| Main idea     | Indexed collection   | LIFO            | FIFO            | Nodes connected together | Key-value lookup |
| Access        | Random/index-based   | Top only        | Front/rear      | Sequential               | By key           |
| Add           | Anywhere             | Top             | Rear            | Anywhere with reference  | By key           |
| Remove        | Anywhere             | Top             | Front           | Anywhere with reference  | By key           |
| Search        | `O(n)`               | `O(n)`          | `O(n)`          | `O(n)`                   | `O(1)` average   |
| Random access | Yes                  | No              | No              | No                       | No               |
| Main use      | General-purpose data | LIFO processing | FIFO processing | Dynamic sequential data  | Fast lookup      |
