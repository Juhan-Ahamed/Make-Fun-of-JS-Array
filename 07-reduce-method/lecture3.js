/**
 * @title: Anatomy of Reduce Method
 */

// Accumulate - gather together or aquire an increasing number of quantity of

let numbers = [1, 2, 3, 4, 5];

// Implementing Sum
function sumfunc(accumulator, currentValue) {
    return accumulator + currentValue;
}

const sum = numbers.reduce(sumfunc, 10);
console.log(sum);