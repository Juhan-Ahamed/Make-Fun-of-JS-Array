/**
 * @title: Hand on Reduce
 */

let numbers = [1, 2, 3, 4, 5];

// Implementing Sum
function sumfunc(a, b) {
    return a + b;
}

const sum = numbers.reduce(sumfunc);
console.log(sum);

// Implementing Average
const avg = numbers.reduce((acc, cur, index, arr) => {
    acc += cur
    if(index === arr.length -1) {
        return acc / arr.length;
    }
    return acc;
})
console.log(avg);