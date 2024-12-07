/**
 * @title: Map Method
 */

let names = [
    'Stack Learner',
    'Stack School',
    'Stack Consultancy',
    'Stack Solution',
    'Stack Tech',
]

// Extract Length -> [13, 12, 17, 14, 10]
// Get UpperCase Version -> ['STACK LEARNER', 'STACK SCHOOL', 'STACK CONSULTANCY', 'STACK SOLUTION', 'STACK TECH']
// Get Sliced Version -> [ 'Learner', 'School', 'Consultancy','Solution', 'Tech',]


// We have reuse function
//  function reuse(arr, logic) {
//     for(let i = 0; i < arr.length; i++) {
//         logic(arr[i], i, arr);
//     }
// }

// Example One
// const result1 = [];
// reuse(names, value => {
//     result1.push(value.length)
// })
// console.log(result1);

// Example Two
// const result2 = [];
// reuse(names, value => {
//     result2.push(value.toUpperCase());
// })
// console.log(result2);

// Example Three
// const result3 = [];
// reuse(names, value => {
//     result3.push(value.substr(6));
// })
// console.log(result3);

function reuseAndMap(arr, logic) {
    const result = []
    for(let i = 0; i < arr.length; i++) {
       result.push(logic(arr[i], i, arr));
    }
    return result;
}

const lengths = reuseAndMap(names, (value) => value.length);
const uppers = reuseAndMap(names, (value) => value.toUpperCase());
const sliced = reuseAndMap(names, (value) => value.substr(6));

// console.log(lengths);
// console.log(uppers);
// console.log(sliced);

const lengths1 = names.map((value) => value.length);
const uppers1 = names.map((value) => value.toUpperCase());
const sliced1 = names.map((value) => value.substr(6));

// console.log('[Array]', lengths1);
// console.log('[Array]', uppers1);
// console.log('[Array]', sliced1);

const studentArray = [
    { id: 1, name: 'Hm Nayem', gpa: 3.99, email: 'nayem@gmail.com'},
    { id: 2, name: 'Shegufa Taraanjum', gpa: 3.87, email: 'shegufa@gmail.com'},
    { id: 3, name: 'Tamim', gpa: 3.8, email: 'tamim@gmail.com'},
    { id: 4, name: 'Asief Mahir', gpa: 2.99, email: 'mahir@gmail.com'},
    { id: 5, name: 'Abir Azim', gpa: 2.6, email: 'abirAzim@gmail.com'},
]

const mappedStudents = studentArray.map((value) => {
    return {
        ...value,
        title: `Hello ${value.name} - Your result has been published`,
        msg: `Hello ${value.name}, Your result has been published and You have got ${value.gpa}. You have ${value.gpa >= 3 ? 'Passed': 'Failed'}`
    }
})

console.log(mappedStudents);

// suppose this people have participated for their fourth semister and we want to send them email
// but first we have to extract them email of everyone + name
// for sending greetings via email