/**
 * @title: Map vs Filter
 */

const studentArray = [
    { id: 1, name: 'Hm Nayem', gpa: 3.99, email: 'nayem@gmail.com'},
    { id: 2, name: 'Shegufa Taraanjum', gpa: 3.87, email: 'shegufa@gmail.com'},
    { id: 3, name: 'Tamim', gpa: 3.8, email: 'tamim@gmail.com'},
    { id: 4, name: 'Asief Mahir', gpa: 2.99, email: 'mahir@gmail.com'},
    { id: 5, name: 'Abir Azim', gpa: 2.6, email: 'abirAzim@gmail.com'},
]


const emailTemplates = studentArray.filter(value => value.gpa < 3).map((value) => {
    return {
        ...value,
        title: "Result Published",
        msg: "You have failed"
    }
})

console.log(emailTemplates);