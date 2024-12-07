/**
 * @title: Example Array Flatten
 */

let nestedArray = [[1, 2], 3, [4, 5]];
// [1, 2, 3, 4, 5]

// Array Flat Method
const flatArray1 = nestedArray.flat();
console.log(flatArray1);

// We can do the same using reduce method
const flatArray2 = nestedArray.reduce((acc, cur) => {
    return acc.concat(cur);
}, [])
console.log(flatArray2);