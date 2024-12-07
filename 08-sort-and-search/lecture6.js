/**
 * @title: Understand and Implement Linear Search
 */

let arr = [1, 3, 78, 39, 22, 34, 2, 11, 30, 567, 19, 90]

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

const linearSearch = (arr, key) => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === key) {
            return i
        }
    }
    return -1;
}

const s1 = linearSearch(arr, 39);
console.log(s1);

const s2 = linearSearch(team, 'Mehedi');
console.log(s2);

const linearSearchCB = (arr, cb) => {
    for(let i = 0; i < arr.length; i++) {
        if(cb(arr[i])) {
            return i
        }
    }
    return -1;
}

const s3 = linearSearchCB(team, (item) => item.name === "Mehedi")
console.log(s3);

const s4 = linearSearchCB(team, (item) => item.id === 4)
console.log(s4);