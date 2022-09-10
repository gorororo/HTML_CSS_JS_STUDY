'use strict'
// Object-oriented programming
// class : template
// object : instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
    //constructor
    constructor(name, age){
        //fields
        this.name = name;
        this.age = age;
    }

    //methods
    speak(){
        console.log(`${this.name}: hello!`);
    }
}

const rak = new Person('Rak',20);
console.log(rak.name);
console.log(rak.age);
rak.speak();

// 2. Getter and setters
class User {
    constructor(firstName,LastName,age){
        this.firstName = firstName;
        this.LastName  = LastName;
        this.age = age;
    }

    get age(){
        return this._age;
    }

    set age(value){
        // if(value <0){
        //     throw Error(`age can not be neagative `)
        // }
        this._age = value <0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'j',-1);
console.log(user1.age);

// 3. Fields (public,Private)
// Too soo!
// https://developer.mozilla.org

class Experiment {
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4 .Static properties ad methods
// Too soon!
class Article{
    static publisher = 'Rak';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublisher(){
        console.log(Article.publisher)
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();


// 5. Inheritance
// a way for oe class to exten another class.
class Shape {
    constructor(width,height,color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        console.log(`drawing ${this.color} color!`);
    }

    getArea(){
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw(){
        super.draw();
        console.log('🔺');
    }

    getArea(){
        return (this.width * this.height)/2;
    }

    toString(){
        return `Trinangle color:${this.color}`;
    }
}

const rectangle = new Rectangle(20,20,'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20,20,'red');
console.log(triangle.getArea());
triangle.draw(); 

// 6. Class instanceOf
console.log(rectangle instanceof Rectangle); // T
console.log(triangle instanceof Rectangle); //  F
console.log(triangle instanceof Triangle); // T
console.log(triangle instanceof Shape); // T
console.log(triangle instanceof Object); // T

console.log(triangle.toString());