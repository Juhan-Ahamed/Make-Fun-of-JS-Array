/**
 * @title: Implement Bubble Sort
 */

let myArray = [1, 3, 78, 39, 22, 34, 2, 11, 30, 567, 19, 90]

const bubbleSort = (array) => {
    for(let i = 0; i < array.length - 1; i++) {
        for(let j = 0; j < array.length - 1; j++) {
            if(array[j] > array[j + 1]) {
                let temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }
}

console.log('[Unsorted]', myArray);
bubbleSort(myArray);
console.log('[Sorted]', myArray);