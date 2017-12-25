var numbers = [1, 2, 3, 4];
var doubleNumbers = numbers.map(function (number) { return number * 2; });
console.log(doubleNumbers);
//
//
var cars = [
    { model: 'Buick', price: 'Cheap' },
    { model: 'cCamaro', price: 'Expensive' }
];
var prices = cars.map(function (car) {
    return car.price;
});
console.log(prices);
//
//
var images = [
    { height: '34px', width: '39px' },
    { height: '54px', width: '19px' },
    { height: '83px', width: '75px' },
];
var heights = images.map(function (image) { return image.height; });
console.log(heights);
