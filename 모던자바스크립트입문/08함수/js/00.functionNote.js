// 함수 선언문
// 익명 함수는 호이스팅 하여 사용 가능
console.log(square(2));
function square(x){ return x*x;}

// 이주석 밑 함수선언 부터는 호이스팅 불가능

// 함수 리터럴로 정의하는 방법
const squareliteral = function (x){ return x*x ;}
console.log(squareliteral(2));

// Function 생성자로 정의하는 방법
const squareConstructor = new Function('x','return x*x');
console.log(squareConstructor(2));

// 화살표 함수 표현식으로 정의하는 방법
const squareArrow = x=> x*x;
console.log(squareArrow(2));

// 함수 호출 
let s = square(5);

// 메서드 호출
let obj = {}
obj.m = function(v){console.log('v :>> ', v);};
obj.m();

// 생성자 호출

let obj1 = new Object();

// call, apply 를 사용한 간접 호출
// 9 장에서 자세히 알아보기로

