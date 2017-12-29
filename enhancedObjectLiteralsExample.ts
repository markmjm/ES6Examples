function createBookShop(inventory){
    return{
        inventory,  // this is same as inventory: inventory, as long as both side of the : are the same
        inventoryValue(){   // this is the same as inventoryValue: function(){
            return this.inventory.reduce((total, book) => total + book.price,0)
        },
        priceForTitle(title){   // this is the same as priceForTitle: function(title){
            return this.inventory.find(book => book.title === title).price;
        }
    };
}

const inventory = [
    {title: 'Harry Potter', price: 10},
    {title: 'Elequent Javascript', price: 15}
];

const bookShop = createBookShop(inventory);
console.log(bookShop)
console.log(bookShop.inventoryValue());
console.log(bookShop.priceForTitle('Harry Potter'));
//
//
const red = '#ff0000';
const blue = '#0000ff';
const COLORS = { red, blue };  // same as const COLORS = { red: red, blue: blue };
console.log(COLORS)
//
//
const fields = ['firstName', 'lastName', 'phoneNumber'];
const props = { fields};  // same as const props = { fields: fields };
console.log(fields)
//
//
const canvasDimensions = function(width, initialHeight) {
    const height = initialHeight * 9 /16;
    return {
        width,
        height
    };
}
console.log(canvasDimensions(12,25))
//
//
const color = 'red';
const Car = {
    color,
    drive() {
        return 'Vroom!';
    },
    getColor() {
        return this.color;
    }
};
console.log(Car)
console.log(Car.drive())
console.log(Car.getColor())