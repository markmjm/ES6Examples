var colors = ['red', 'blue', 'green'];
colors.forEach(function (color) {
    console.log(color);
});
var numbers = [1, 2, 3, 4, 5];
var sum = 0;
numbers.forEach(function (number) { return sum = sum + number; });
console.log(sum);
//
//Anther wat to do same
sum = 0;
var adder = function (number) {
    sum += number;
};
numbers.forEach(adder);
console.log(sum);
//
//
function handlePosts() {
    var posts = [
        { id: 23, title: 'Daily JS News' },
        { id: 52, title: 'Code Refactor City' },
        { id: 105, title: 'The Brightest Ruby' }
    ];
    posts.forEach(function (post) {
        console.log(post);
    });
}
handlePosts();
//
//
//
var images = [
    { height: 10, width: 30 },
    { height: 20, width: 90 },
    { height: 54, width: 32 }
];
var areas = [];
images.forEach(function (image) {
    areas.push(image.height * image.width);
});
console.log(areas);
