var numbers = [1, 2, 3, 4];

var doubleNumbers = numbers.map(number => number * 2)
console.log(doubleNumbers)
//
//
var cars = [
    {model: 'Buick', price: 'Cheap'},
    {model: 'cCamaro', price: 'Expensive'}
];
var prices = cars.map(car => {
    return car.price;
})
console.log(prices)
//
//
var images = [
    {height: '34px', width: '39px'},
    {height: '54px', width: '19px'},
    {height: '83px', width: '75px'},
];

var heights = images.map(image => image.height);
console.log(heights);
//
//
var trips = [
    {distance: 34, time: 10},
    {distance: 90, time: 50},
    {distance: 59, time: 25}
];

var speeds = trips.map(trip => trip.distance / trip.time);
console.log(speeds);
//
//
var pluck = function (objectArr, attr) {
    return objectArr.map(object => object[attr]);
}
var paints = [{color: 'red'}, {color: 'blue'}, {color: 'yellow'}];
var p = pluck(paints, 'color'); // returns ['red', 'yellow', 'blue'];
console.log(p);