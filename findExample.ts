//
//find first only
var users = [
    {name: 'Jill', id: 1},
    {name: 'Alex', id: 2},
    {name: 'Bill', id: 3},
    {name: 'Alex', id: 4}
]

var user = users.find((u) => u.name === 'Alex')
console.log(user)
//
//
function Car(model) {
    this.model = model;
}

var cars = [
    new Car('Buick'),
    new Car('Camaro'),
    new Car('Focus'),
];

var car = cars.find(c => c.model === 'Focus')
console.log(car)
//
//
var posts = [
    {id: 1, title: 'New Post'},
    {id: 2, title: 'Old Post'},
];
var comment = { postId:1, content: 'Great Post'};

var post = posts.find( p => p.id === comment.postId)
console.log(post)
//
//
var users = [
    { id: 1, admin: false },
    { id: 2, admin: false },
    { id: 3, admin: true }
];

var admin = users.find(u => u.admin)
console.log(admin)
//
//
var accounts = [
    { balance: -10 },
    { balance: 12 },
    { balance: 0 }
];

var account = accounts.find(a => a.balance === 12);
console.log(account)
//
//
var ladders = [
    { id: 1, height: 20 },
    { id: 3, height: 25 }
];
function findWhere(array, criteria) {
    var key = Object.keys(criteria);
    return array.find(a => a[key] === criteria[key]);
}
var ladder = findWhere(ladders, { height: 25 });
console.log(ladder)