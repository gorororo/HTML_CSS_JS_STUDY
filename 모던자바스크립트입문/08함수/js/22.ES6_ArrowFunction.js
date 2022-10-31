// 화살표 함수

const square = function(x){ return x*x};
// 위를 화살표로 변환
const squareArrow = x=>{x*x};

// 인수가 여러 개 있으면 인수와 인수를 쉼표로 구분합니다.
const f = (x,y,z)=> x+y+z;

// 인수가 하나만 있으면 괄호를 생략 할수 있습니다.
const square2 = x => x*x;

// 인수가 없으면 인수를 묶는 괄호를 생략할 수 없습니다.
const ex = () => {a+b};

// 식이 return 뿐이라면 중괄호를 생략할수 있습니다.
const ex2 = () => a+b;

// 함수 몸통 안에 return 문장만 있더라도 함수의 반호값이 
// 객체 리터럴이면 객체 리터럴을 그룹연산자인 ()로 묶어야합니다.
const ex3 = (a,b)=> ({x:a,y:b});

// 화살표 함수도 직시 실행 함수로 사용할수 있습니다.
(x=>x*x)(3); // 9

// 함수 리터럴과 화살표 함수의 차이점

// 1. this 값이 함수를 정의할 때 결정된다.
let obj = {
    say : function(){
        console.log(this); // ->[object Object]
        let f = function() {console.log(this)}; // -> [object Window]
        f();
        let g = () => console.log(this); // -> [object Object]
        g();
    }
}
obj.say()

let f2 = function(){ console.log('this.name :>> ', this.name)};
let g = ()=>console.log(this.name);
let tom = {name:'Tom'};
f2.call(tom); // Tom
g.call(tom); // ''

// 2. argumets 변수가 없다

let f3 = ()=> console.log(arguments); 
f3(); // ReferenceError

// 3. 생성자로 사용할수 없다

const Person=(name,age)=>{this.name=name; this.age=age;};
let tom2 = new Person('Tom',17); // TypeError 

// 4. yield 키워드를 사용할수 없다
// 화살표 함수 안에서는 yield 키워드를 사용할 수 업습니다. 따라서 화살표 함수는 제너레이터로 사용할 수 없습니다.