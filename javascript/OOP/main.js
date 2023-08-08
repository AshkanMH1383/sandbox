// create method and peroperties for object 
const person = {};
person.name = "ashkan";
person.weight = 78;
person.increase = function(){
    this.weight += 5
}
person.increase()
console.log(person.weight);


const person1 = Object.create(null);
person1.name = "ashkan";
person1.weight = 78;
person1.increase = function(){
    this.weight += 5
}
person1.increase()
console.log(person1.weight);




function personCreator(name , weight) {
    const newPerson = Object.create(personFunctions);
    newPerson.name = name;
    newPerson.weight = weight;

    return newPerson;
}

const personFunctions = {
    increase: function(){
        this.weight += 5
    }
}

const user1 = personCreator('ashkan' , 80)
const user2 = personCreator('reza' , 60)

console.log(user1.name , user1.weight)
user2.increase()
console.log(user2.name , user2.weight)



// class

class Person {

    constructor(name , weight) {
        this.name = name;
        this.weight = weight;
    }

    increaseWeight() {
        this.weight += 5;
    }
}

class Player extends Person{

    constructor(name , weight , score) {
        super(name , weight);
        this.score = score;
    }

    increase() {
        this.score++
    }

    decrease() {
        this.score--
    }
}

const p1 = new Person('ashkan', 85)
p1.increaseWeight()
console.log(p1.weight)


const Player1 = new Player('ashkan', 85, 30)
Player1.decrease()
console.log(Player1.score)

// -----------------------------------------------
const _radius = new WeakMap(); // Privet Property
const _move = new WeakMap();  //Privet Method
class Circle {
    constructor(radius) {
        // this.radius = radius;
        _radius.set(this, radius)// Privet Property
        _move.set(this, function(){
            console.log('moved')
        })// Privet Property
        // this.move = () => {
        //     console.log('move')
        // }
    }

    // Instance method
    draw() {
        // console.log('draw')        
    }

    // static method  -  use just in class
    static parse(str) {
        const radius = JSON.parse(str).radius;
        return new Circle(radius);
    }

    get getRadius() {
        return _radius.get(this)
    }

    set setRadius(value) {
         _radius.get(value)
    }
}


const circle = Circle.parse('{"radius":5}')
console.log(circle)
//const c = new Circle(123)





class Shape {

    constructor(color) {
        this.color = color;
    }

    move() {
        console.log('move')
    }
}



class Squere extends Shape {

    constructor(color , radius) {
       super(color);
       this.radius = radius;
    }

    draw() {
        console.log('draw')
    }

    move() {
        super.move()
        console.log('sq move')
    }

}


const s = new Squere();



