const add = (a, b) => a + b;
console.log(add(1, 2));
//
//
const doubleIt = number => 2 * number;
console.log(doubleIt(5));
//
//
const noArg = () => 2;
console.log(noArg());
//
//
const numbers = [1, 2, 3]
const doubleIt2 = numbers.map(number => number * 2);
console.log(doubleIt2)
//
//
const team = {
    members: ['Jane', 'Bill'],
    teamName: 'Super Squad',
    teamSummary: function () {
        return this.members.map((member) => {
            return `${member} is on team ${this.teamName}`;
        });
    }
};
console.log(team.teamSummary())
//
//
// const fibonacci = function(n) {
//     if (n < 3) return 1;
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }
const  fibonacci = n => n < 3 ? 1 :  fibonacci(n - 1) + fibonacci(n - 2);
console.log(fibonacci(11))
//
//
const profile = {
    name: 'Alex',
    getName: function(){
        return this.name;
    }
};
console.log(profile.getName());
