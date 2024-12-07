/**
 * @title: Find Method in Javascript
 */

// The find() method returns the value of the first element in the provided array that satisfies the provided testing function.
// Suppose we have a array of todos. now we want to know which task is to be done at the particular time of a day

let todos = [
    { id: '123', task: 'Eat', time: 'Morning' },
    { id: '234', task: 'Code!', time: 'Afternoon' },
    { id: '532', task: 'Coffee Beeak', time: 'Evening' },
    { id: '121', task: 'Sleep', time: 'Night' },
]

const todo = todos.find((item) => item.time === 'Afternoon');
todo.task = 'Debugging!!😔'
console.log(todo);


// Let assume that there is an array of results of the students  in a class with their name. We just know the Highest number that has been obtained by a student. We need to find who got the highest Number.

let result = [
    { name: 'Tamim', score: 89 },
    { name: 'Reya', score: 85 },
    { name: 'Sakib', score: 96 },
    { name: 'Mehedi', score: 90 },
]

const highest = 96
const student = result.find((item) => item.score === highest)
console.log(student);

const ourFind = (arr, cb) => {
    for(let i = 0; i < arr.length; i++) {
        if(cb(arr[i])) {
            return arr[i]
        }
    }
    return undefined;
}

const lowest = 85
const student1 = ourFind(result, (item) => item.score === lowest)
console.log(student1);