var numbers = [10, 20, 30];
var total = numbers.reduce((sum, num) => {
    return sum + num;
}, 0)
//retuns 60.   the 2nd param (0) is the initial value
console.log(total)
//
//
total = numbers.reduce((sum, num) => {
    return sum + num;
}, 10)
//retuns 70
console.log(total)
//
//
var primaryColors = [
    {color: 'red'},
    {color: 'yellow'},
    {color: 'blue'}
]
var colors = primaryColors.reduce(function (accumulator, primaryColor) {
    ////see https://stackoverflow.com/questions/41890545/why-cant-i-return-the-result-of-pushing-to-the-accumulator-in-a-reduce-funct
    accumulator.push(primaryColor.color.toUpperCase());
    return accumulator;
}, []);
console.log(colors)
//
//
var isBalanced = function (string) {
    return !string.split('').reduce((prev, char) => {
        if (prev < 0) {
            return prev
        }
        if (char === '(') {
            return ++prev
        }
        if (char === ')') {
            return --prev
        }
        console.log(prev + " " + char)
    }, 0)
}
var testString = '((((';
console.log(isBalanced(testString));
var testString = '((()))';
console.log(isBalanced(testString));
var testString = ')(';
console.log(isBalanced(testString));
var testString = '()';
console.log(isBalanced(testString));
//
//
var trips = [{distance: 34}, {distance: 12}, {distance: 1}];

var totalDistance = trips.reduce((accumlator, prev) => {
    return accumlator += prev.distance;
}, 0);
console.log(totalDistance);
//
//
var desks = [
    {type: 'sitting'},
    {type: 'standing'},
    {type: 'sitting'},
    {type: 'sitting'},
    {type: 'standing'}
];

var deskTypes = desks.reduce(function (accum, prev) {
    if (prev.type === 'sitting') {
        accum.sitting++;
        return accum;
    }
    else if (prev.type === 'standing') {
        accum.standing++;
        return accum;
    }
}, {sitting: 0, standing: 0});
console.log('sitting: ' + deskTypes.sitting)
console.log('standing: ' + deskTypes.standing)
//
//
//https://stackoverflow.com/questions/41890545/why-cant-i-return-the-result-of-pushing-to-the-accumulator-in-a-reduce-funct
var numbers = [1, 1, 2, 3, 4, 4];
function unique(array) {
    return array.reduce((accum, prev) => {
        if (!accum.find(v => v === prev)) {
            accum.push(prev)
        }
        return accum;
    }, []);
}

unique(numbers);
console.log(unique(numbers));
