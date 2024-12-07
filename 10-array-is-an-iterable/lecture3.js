/**
 * @title: Keys, Values & Entries
 */

// Keys
const array = ['a', 'b', 'c'];
const keys = array.keys(); // 0, 1, 2 Iterator
const values = array.values(); // 'a', 'b', 'c' Iterator
const entries = array.entries(); // [0, 'a'], [1, 'b'], [2, 'c']

console.log(keys);
console.log(keys.next());
console.log(keys.next());
console.log(keys.next());
console.log(values);
console.log(values.next());
console.log(values.next());
console.log(values.next());
console.log(entries);
console.log(entries.next());
console.log(entries.next());
console.log(entries.next());