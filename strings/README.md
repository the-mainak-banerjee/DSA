## Few Important Points

* If I need to repeatedly search for something in an array or string, think about using a **hash-based data structure** for faster lookup. The average time complexity of finding something in a `Set` or `Map` is `O(1)` because they use hashing internally.

### What is a Hash-Based Data Structure?

A hash-based data structure uses a **hash function** to convert a key or value into a number that helps determine where the data should be stored.

Instead of searching through every element one by one:

```text
Array
↓
Check → Check → Check → Check
```

a hash-based structure uses the key to quickly find the location where the data should be:

```text
Key
 ↓
Hash Function
 ↓
Storage Location
 ↓
Data
```

This is why operations such as `Set.has()` and `Map.get()` can be **O(1) on average**.

Common examples of hash-based data structures are:

* `Set` — useful when we mainly need to check whether something exists.
* `Map` / `HashMap` — useful when we need to store a key along with a value.

The main mental model is:

> **Repeated searching → Think about hashing → Trade some extra space for faster lookup.**
