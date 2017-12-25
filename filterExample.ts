var products = [
    {name: ' cucumber', type: 'vegetable'},
    {name: ' banana', type: 'fruit'},
    {name: ' celery', type: 'vegetable'},
    {name: ' orange', type: 'fruit'},
]

var vegetable = products.filter(product => product.type == 'vegetable');
var fruit = products.filter(product => product.type == 'fruit');
console.log(vegetable);
console.log(fruit);
