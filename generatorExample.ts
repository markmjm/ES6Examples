//The function* declaration (function keyword followed by an asterisk) defines a generator function,
// which returns a Generator object.
// https://medium.com/@hidace/javascript-es6-generators-part-i-understanding-generators-93dea22bf1b
function* shopping(){
    //stuff happening on the sidewalk while going to the store

    //walking the sidewalk to the the store

    // go ito the store with cash
    const stuffFromTheStore = yield 'cash';

    // Pick up some laundry
    const cleanClothes = yield 'laundry';

    // walking back home
    return [stuffFromTheStore, cleanClothes];
}

//stuff happening in the store
const gen = shopping();
console.log(gen.next()) // leaving my houses
console.log(gen.next('groceries'))
console.log(gen.next('clean Clothes')) // leaving my houses