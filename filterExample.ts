var products = [
    {name: ' cucumber', type: 'vegetable',  quantity: 0, price: 1},
    {name: ' banana', type: 'fruit',  quantity: 10, price: 15},
    {name: ' celery', type: 'vegetable',  quantity: 30, price: 14},
    {name: ' orange', type: 'fruit',  quantity:3, price: 1},
]

var f = products.filter(product => product.type === 'fruit'
    && product.quantity > 0
    && product.price < 10);
var v = products.filter(product => product.type === 'vegetable'
    && product.quantity > 0
    && product.price < 10);
console.log(v);
console.log(f);
//
//
var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers = numbers.filter(number => number > 50);
console.log(filteredNumbers);
//
//
var users = [
    { id: 1, admin: true },
    { id: 2, admin: false },
    { id: 3, admin: false },
    { id: 4, admin: false },
    { id: 5, admin: true },
];

var filteredUsers = users.filter(u => u.admin);
console.log(filteredUsers)
//
//
function reject(array, iteratorFunction) {
    return array.filter(a => (a < 15))
}
var numbers = [10, 20, 30];
var lessThanFifteen = reject(numbers, function(number){
    return number > 15;
});
console.log(lessThanFifteen )// [ 10 ];