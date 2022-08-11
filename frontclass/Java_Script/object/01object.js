// function 함수명(){
//     명령들;
// };
// 함수명();
// let value = addNumber(9,50);
// console.log(value)


function addNumber(a,b=10,c=30){
    if(a >=11){
        return false;
    }else{
        return a+b+c;
    }
}

//익명함수


// let fnCall=function(){
//     console.log('funtion call')
// };



// fnCall();

//arrow 함수
// let fnCall=()=>{
//     console.log('function call');
// };
// fnCall();

// let hi = ()=>'hi js'

// const add = (a,b)=>`sum = ${a+b}`;

// console.log(add(10,20));
//즉시실행함수
(function(a,b){
    console.log(a+b+ 'fn call---1');
})(10,20);

(function(a,b){
    console.log(a+b+ 'fn call---2');
}(30,40));

((a,b)=>{
    console.log(a+b+ 'fn call---3')
})(50,60);

