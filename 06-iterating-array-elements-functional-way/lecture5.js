/**
 * @title: Some and Every
 */

let productReview = [
    { name: 'md Ashraf', response: 'positive', rating: '5'},
    { name: 'Jalal Uddin', response: 'positive', rating: '4'},
    { name: 'Sakib Al Hasan', response: 'negative', rating: '4'},
    { name: 'Tamim Iqbal', response: 'positive', rating: '3'},
]

const positive = productReview.every((value) => value.rating > 3);

if (positive) {
    console.log('100% positive reviews');
} else {
    console.log('some customer not satisfied');
}

let testRunsInASingleMatch = [
    { name: 'DPMD Jayawardene', runs: 374 },
    { name: 'BC Lara', runs: 375 },
    { name: 'ML Hayden', runs: 380 },
    { name: 'BC Lara', runs: 400 },
]

const atLeastOne = testRunsInASingleMatch.some((value) => value.runs >= 400)
console.log(atLeastOne);