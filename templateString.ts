function getMessage(){
    const year = new Date().getFullYear();
    //instead of "this year is " + year
    //use           return `This year is ${year}`;
    //or
    return `This year is ${new Date().getFullYear()}`
}

console.log(getMessage())

function doubleMessage(number) {
    return `Your number doubled is ${(2 * number)}`;
}

function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

