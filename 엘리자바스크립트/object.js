'use strict'
// Objects
// one of the JavaScript`s data types.
// a collection of related data and/or functionality
// Nearly all objects in JavaScript are instances of Object


// 1. Literals and properties
const obj1 = {}; // `Object literal` syntax
const obj2 = new Object(); // 'Object constructor' syntax


function print(person){
    console.log(person.name);
    console.log(person.age);
}
const rak = {name : 'rak', age : 35};
print(rak);

// with JavaScript magic (dynamically typed language)
// can add properties late
rak.hasjob = false;
console.log(rak.hasjob);
// can delete properties later
delete rak.hasjob;
console.log(rak.hasjob);

// 2. Computed properties
// key should be always string
console.log(rak.name);
console.log(rak['name']); 
rak['hasjob'] = true;
console.log(rak.hasjob);

function printValue(obj,key){
    console.log(obj[key]);
}
printValue(rak,'name');
printValue(rak,'age');


// 3. property value shorthand
const person1 = {name : 'bob',age:13};
const person2 = {name : 'steve',age:23};
const person3 = {name : 'ron',age:53};
const person4 = new Person('rak',30);
console.log(person4);

// 4. Constructor Function 
function Person (name,age){
    //this ={}
    this.name = name;
    this.age = age;
    //return
}