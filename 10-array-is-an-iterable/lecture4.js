/**
 * @title: Array and For of Loop
 */

const array = ['a', 'b', 'c'];
const keys = array.keys(); // 0, 1, 2 Iterator
const values = array.values(); // 'a', 'b', 'c' Iterator
const entries = array.entries(); // [0, 'a'], [1, 'b'], [2, 'c']

const loop = (it, name) => {
    for(let v of it) {
        console.log(`[${name}] - ${v}`);
    }
}

loop(keys, 'KEY');
loop(values, 'VALUE');
loop(entries, 'Entry');

const arr = [3, 5, 7, 9];
// for(let v of arr) {
//     console.log(v);
// }

loop(arr, 'ARRAY');