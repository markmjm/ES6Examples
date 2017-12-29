`
Destructuring is a convenient way of extracting multiple values from data stored in (possibly nested) objects and Arrays. 
It can be used in locations that receive data (such as the left-hand side of an assignment). 
How to extract the values is specified via patterns (read on for examples).
`
const expense = {
    type: 'Business',
    amount: '$45 dollars'
}
//
//Declaration ... not assignment
const {type, amount} = expense;
//
//access the values in the object
console.log(type)
console.log(amount)
//
//
const savedFiled = {
    extension: 'jpg',
    name: 'repost',
    size: 14040
}
const Color = {color: 'red'}

function fileSummary({name, extension, size}, {color}) {
    return `${color.toUpperCase()} the file ${name}.${extension} has a size of ${size}`
}

console.log(fileSummary(savedFiled, Color))
//
//
const companies = [
    'Google',
    'Facebook',
    'Uber',
    'IBM'
]
const [name, name2, ...rest] = companies;
console.log(name)
console.log(name2)
console.log(rest)
//
//
const companies = [
    {name:'Google', location: 'Mountain View'},
    {name:'Facebook', location: 'Menlo Park'},
    {name:'Uber', location: 'San Fransicao'},
    {name:'IBM', location: 'Atlanta'}
];
const [{location}] = companies;
location