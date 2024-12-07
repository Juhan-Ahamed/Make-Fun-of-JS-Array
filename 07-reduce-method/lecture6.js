/**
 * @title: Example Frequency Checker
 */

const votes = [
    'Java',
    'Java',
    'Python',
    'Java',
    'Javascript',
    'Python',
    'Javascript',
]

const result = votes.reduce((acc, cur) => {
    if(acc[cur]) {
        acc[cur]++
    } else {
        acc[cur] = 1
    }
    return acc;
}, {})

console.log(result);