'use strict'
// Objects
// one of the JavaScript`s data types.
// a collection of related data and/or functionality
// Nearly all objects in JavaScript are instances of Object


// 1. Literals and properties
const obj1 = {}; // `Object literal` syntax
const obj2 = new Object(); // 'Object constructor' syntax


function print1(person){
    console.log(person.name);
    console.log(person.age);
}
const rak = {name : 'rak', age : 35};
print1(rak);

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
// 5. in operator : property existence check (key in obj)
console.log('name' in rak);
console.log('age' in rak);
console.log('random' in rak);
console.log(rak.random);

// 6. for..in vs for..of
// console.clear();
for(let key in rak){
    console.log(key);
}

// for (value of iterable)
const array = [1,2,4,5];
for (let i = 0 ; i<array.length ; i++ ){
    console.log(array[i]);
}
for(let value of array){
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest,[obj1,obj2,obj3...])
const user = {name: 'rak',age:'20'};
const user2 = user;

// user2.name='coder';
console.log(user);

//old way
const user3 = {};
for(let key1 in user){
    user3[key1] = user[key1];
}
// console.clear();
console.log(user3);

//new way
const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = {color : 'red'};
const fruit2 = {color : 'blue', size : 'big'};
const mixed = Object.assign({},fruit1,fruit2);
console.log(mixed.color);
console.log(mixed.size);