//https://googlechrome.github.io/samples/classes-es6/
class Car {
    constructor( options ){
        this.title = options.title
    }

    drive(){
        return 'vroom'
    }
}

class Toyota extends Car {
    constructor(options) {
        super(options);
        this.color = options.color;
    }
    honk(){
        return 'beep';
    }
}

const  car = new Car({title:'Toyota'});
console.log(car);
console.log(car.drive());
const toyota = new Toyota({color: 'red', title: 'Toyota'});
console.log(toyota);
console.log(toyota.drive());
console.log(toyota.honk());

class Monster {
    constructor(options){
        this.health = 100;
        this.name = options.name;
    }
}

class Snake extends Monster{
    constructor(options){
        super(options);
    }

    bite(snake){
        return snake.health -= 10;
    }
}

const snake1 = new Snake({name: 'Nagini'});
const snake2 = new Snake({name: 'Snek'});

snake1.bite(snake2);
console.log(snake1);
console.log(snake2);