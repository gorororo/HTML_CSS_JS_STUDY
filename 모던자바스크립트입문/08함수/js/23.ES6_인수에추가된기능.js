/* 
*
*/
function f(a,b,...args){
    console.log(a,b,...args);
}
f(1,2,3,4,5,6); // -> 12[3,4,5,6]

// ES5 까지 가변인수를 사용하려면 arguments(배열이아닌 유사 배열 객체) forEach등 배열 메서드로 조작하려면
// 변환작업 해야해서 번거로웠지만 ...args 는 나머지 매개변수로 인수를 배열로 받기때문에 덜번거롭습니다.

// 화살표 함수 안에서는 arguments 를 사용할 수 없지만 
// 나머지 매개변수를 사용하면 화살표 함수안에서도 가변 인수를 이용할수 있습니다.

let sum = (...args)=>{
    let i,s;
    for (i = 0, s= 0; i < args.length; i++) s+=args[i];
    return s;
    };
console.log(sum(1,2,3,4,5)); // -> 15

// 인수의 기본값

function multiply(a,b=1){ // b에 기본값 할당 
    return a*b;
}
multiply(3);
multiply(3,2);
console.log('multiply(3) :>> ', multiply(3)); // 호출할때 인수수를 안맞추어도 기본값이 있으니 그걸로 계산
console.log('multiply(3,2) :>> ', multiply(3,2));

// 다른 인자 값도 기본값으로 사용할 수 있습니다.

function add(a,b=a+1){ return a+b;}
add(2);
add(2,1);
console.log('add(2) :>> ', add(2));
console.log('add(2) :>> ', add(2,1));