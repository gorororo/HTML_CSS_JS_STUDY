// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) {body...return;}
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in Js

function printHello(){
    console.log('hello');
}
printHello();

function log(message){
    console.log(message);
}
log('Hello!@@');
log(7);

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference

function changeName(obj){
    obj.name = 'coder';
}
const rak = {name: 'rak'};
changeName(rak);
console.log (rak);

// 3. Default parameters (added in ES6)
// function showMessage(message,from){
//     if(from === undefined){
//         from = 'unknown';
//     }
//     console.log(`${message} by ${from}`)
// }
function showMessage(message,from='unknown'){
    console.log(`${message} by ${from}`)
}
showMessage('HI!','Rak');

// 4. Rest parameters (added in ES6)
function printAll(...args){
    for (let i = 0 ; i< args.length; i++){
        console.log(args[i]);
    }
    for (const arg of args){
        console.log(arg);
    }

    args.forEach((arg)=>console.log(arg));
}
printAll('dream','coding','Rak');

// 5. Local scope
let globalMessage = 'global'; // global variable
function printMassege(){
    let message = 'hello'; // local variable
    console.log(message);
    console.log(globalMessage);
    function printAnother(){
        console.log(message);
        let childMessage='hello';
    }undefined
    // return undefined 가 생략된것 따로지정해 주지 않는다면
    // console.log(childMessage); 
    // 밖에서는 안이 보이지 않고 안에서만 밖을 볼수 있다.
}
printMassege();

// 6. Return a value
function sum(a,b){
    return a+b;
}
const result = sum(1,2); //3
console.log(`sum: ${sum(1,2)}`);

// 7. Early return, early exit

// bad 
function upgradeUser(user){
    if (user.point > 10){
        // long upgrade logic...
    }
}

// good
function upgradeUser(user){
    if (user.point <=10){
        return;
    }
    // long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// a function decalaration can be called earlier than it is defiend. (hoisted)
// a function expression is created when the execution reaches it/
const print = function () { // anonymous function
console.log('print');
};
print();
const printAgain = print;
printAgain();
const  sumAgain = sum;
console.log(sumAgain(1,3));

// 2. Callback function using function expression

function randomQuiz(answer,printYes,printNO){
    if (answer === 'love you'){
        printYes();
    }else{
        printNO();
    }
}

// anonymous function
const printYes= function(){
    console.log('yes!');
}

// named function 
// better debugging in degugger`s stack traces
// recursions
const printNO= function print(){
    console.log('no!');
    // print();
};
randomQuiz('wrong',printYes,printNO);
randomQuiz('love you',printYes,printNO);

// Arrow function
// always anonymous

const simplePrint = ()=> console.log('simplePrint!');
const add = (a,b) => a+b;
const simpleMultiply = ()=>{
    //do something more
    return a* b ;
};

// IIFE : Immediately Invoked Function Expression
(function hello(){
    console.log('IIFE');
})();//즉시실행함수

// Fun quiz time
// function calculate (command, a, b)
// command : (add, substract,divide,multiply,remainder)

const calculate = (command,a,b)=>{
    if (command === 'add'){
        return a+b;
    }else if (command === 'substract'){
        return a-b;
    }else if (command === 'divide'){
        return a/b;
    }else if (command === 'multiply'){
        return a*b;
    }else if (command === 'remainder'){
        return a%b;
    }else{
        throw Error('unKnown command');
    }
};
console.log(calculate('multiply',2,10));


const calculateSwitch = (command,a,b) =>{
    switch(command){
        case 'add' :
            return a+b;
        case 'substract' :
            return a-b;
        case 'divide' :
            return a/b;
        case 'multiply' :
            return a*b;
        case 'remainder' :
            return a%b;
        default :
            throw Error('unknown command');
    }
}
console.log(calculate('add',2,3));