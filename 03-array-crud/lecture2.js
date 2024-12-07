/**
 * @Title: Update Existing Elements
 */

// Easy One
const numbers = [1, 2, 7, 4, 5];
numbers[2] = 3;
// console.log(numbers);


// Array of Objects
const students = [
    { id: 1, name: 'Nayem' },
    { id: 2, name: 'Shegufa' },
    { id: 3, name: 'Shayaike' },
    { id: 4, name: 'Setu' },
    { id: 5, name: 'Mehedi' },
]

const givenID = 3;
const updatedName = 'Shakyike Salvy';

for(let i = 0; i < students.length; i++) {
    if(givenID === students[i].id) {
        students[i].name = updatedName
        break;
    }
}

console.log(students);