var computers = [
    {name: 'Apple', rams: 24},
    {name: 'Compaq', rams: 4},
    {name: 'Acer', rams: 32}
];
//
//This would return FALSE, since not all rams are > 12
var canRunProgram = computers.every(c => c.rams > 12)
console.log(canRunProgram);
//
//This would return TRUE, since not all rams are > 12
canRunProgram = computers.some(c => c.rams > 12)
console.log(canRunProgram);
//
//
var users = [
    {id: 21, hasSubmitted: true},
    {id: 62, hasSubmitted: false},
    {id: 4, hasSubmitted: true}
];

var hasSubmitted = users.every(u => u.hasSubmitted === true)
console.log(hasSubmitted)
//
//
var requests = [
    {url: '/photos', status: 'complete'},
    {url: '/albums', status: 'pending'},
    {url: '/users', status: 'failed'}
];

var inProgress = requests.some(r => r.status === 'pending');
console.log(inProgress);