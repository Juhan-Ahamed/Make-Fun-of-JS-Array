/**
 * @title: Implement Bubble Sort with Callback
 */

const team = [
    { id: 2, name: 'Shegufa'},
    { id: 4, name: 'Badhon'},
    { id: 10, name: 'Setu'},
    { id: 1, name: 'Nayem'},
    { id: 8, name: 'Tamim'},
    { id: 3, name: 'Salvy'},
    { id: 6, name: 'Sakib'},
    { id: 5, name: 'Asief'},
    { id: 9, name: 'Riya'},
    { id: 7, name: 'Mehedi'},
]

const bubbleSort = (array, cb) => {
    for(let i = 0; i < array.length - 1; i++) {
        for(let j = 0; j < array.length - 1; j++) {
            if(cb(array[j], array[j + 1]) > 0) {
                let temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }
}

let myArray = [1, 3, 78, 39, 22, 34, 2, 11, 30, 567, 19, 90]

bubbleSort(myArray, (a, b) => a - b);
console.log(myArray);

bubbleSort(team, (a, b) => a.id - b.id)
console.log(team);

bubbleSort(team, (a, b) => {
    if(a.name > b.name) return 1;
    if(a.name < b.name) return -1;
    return 0;
})
console.log(team);