function makeAjaxRequest(url, method = 'GET') {

    //logic to make the request
    console.log(url)
    console.log(method)
}

makeAjaxRequest('me@me.com');
makeAjaxRequest('me@me.com', 'POST')
//
//
function addNumbers(numbers = [1, 2, 3, 4, 5]) {
    return numbers.reduce((sum, number) => {
        return sum + number

    }, 0)
}
console.log(addNumbers())