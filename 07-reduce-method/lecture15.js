/**
 * @title: Grouping Similar Items
 */

const worlds = [
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
    'Eight',
    'Nine', 
    'Ten',
]

const group = worlds.reduce((acc, cur) => {
    const len = cur.length;
    if(acc[len]) {
        acc[len].push(cur);
    } else {
        acc[len] = [cur];
    }
    return acc;
}, {});

console.log(group);