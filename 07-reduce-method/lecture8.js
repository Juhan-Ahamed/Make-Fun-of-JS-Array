/**
 * @title: Reduce Right 
 */

// Understand Reduce Right
const arr = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
]

const result = arr.reduceRight((acc, cur) => {
    return acc.concat(cur);
}, [])

console.log(result);

// Explain Reduce Right
const nums = [1, 2, 3, 4]

const sum = nums.reduceRight((acc, cur) => {
    console.log(`Acc [${acc}] - Cur [${cur}]`)
    return acc + cur;
}, 0)

console.log(`Sum = ${sum}`);