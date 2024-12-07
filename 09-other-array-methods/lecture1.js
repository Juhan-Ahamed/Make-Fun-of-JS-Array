/**
 * @title: Static Methods vs Instance  Methods
 */

// What is Static Mehtod
// - This Methods are class method but accessible every where without creating instance
const arr = []
// arr.concat(); // Instance Method
// Array.from(); // Static Method


// Example of Javascript Static Method
// Array.from();
const s = Array.from('Stack Learner');
console.log(s);

const set = new Set(['foo', 'bar', 'baz', 'foo']);
const s1 = Array.from(set);
console.log(s1);


// Array.isArray();


// Array.of();