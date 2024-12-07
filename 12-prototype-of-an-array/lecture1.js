/**
 * @title: Prototype of An Array
 */

const arr = [1, 2, 3];

console.log(arr.constructor.prototype);
console.log(Array.prototype);

console.log(Object.getOwnPropertyNames(Array.prototype));

Array.prototype.log = function() {
    console.log(this.join(' | '))
}

arr.log();
const  names = ['Nayem', 'Shegufa', 'Salvy', 'Abir'];
names.log();

Array.prototype.loop = function(cb) {
    for(let i = 0; i < this.length; i++) {
        cb(this[i], i, this)
    }
}

names.loop((v) => {
    console.log(`My Name is ${v}`)
})

arr.loop((v) => {
    console.log(`V=${v}, V*2= ${v*2}`)
})