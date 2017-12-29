//
//
//Rest operator
function addNumbers(...numbers) {
    return numbers.reduce((sum, number) => {
        return sum + number

    }, 0)
}

console.log(addNumbers(1, 2, 3, 4))
console.log(addNumbers(1, 2, 3, 4, 5, 6, 7))
//
//Spread Operator
const defaultColors = ['red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];
console.log([...defaultColors, ...userFavoriteColors])
const fallColors = ['fire red', 'fall orange'];
console.log([...defaultColors, ...userFavoriteColors, ...fallColors])
console.log(['velvet', ...defaultColors, ...userFavoriteColors, ...fallColors])
//
//
function validateShoppingList(...items) {
    if (items.indexOf('milk') < 0) {
        return (['milk', ...items])
    }
}
console.log(validateShoppingList('oranges', 'bread', 'eggs'));
//
//
function product(...numbers) {

    return numbers.reduce(function(acc, number) {
        return acc * number;
    }, 1)
}
console.log(product(1,2,3,4,5));
//
//
function join(array1, array2) {
    return [...array1,...array2];
}
console.log(join([1,2,3,4,5],[6,7,8,9]));
//
//
function unshift(array, ... data) {
    console.log(data)
    return [...data, ...array];
}
let  array = [1,2,3,4]
console.log(unshift(array, 8, 9, 0))