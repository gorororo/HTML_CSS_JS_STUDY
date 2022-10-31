// new 연산자를 알아보자!

function Circle(center,radius){
    this.center=center;
    this.radius=radius;
}

Circle.prototype.area = function(){
    return Math.PI * this.radius * this.radius
}

let c = new Circle({x:0,y:0},2.0);
// console.log('c :>> ', c);

// 1 빈 객체 생성
let newObj = {};
// 2 Circle.prototype을 생성된 객체의 프로토타입으로 설정.
newObj.__proto__= Circle.prototype;
// 3 Circle 생성자를 실행하고 newObj를 초기화 이때 this는 1로 생성한 객체로 설정합니다
Circle.apply(newObj,arguments);
return newObj;

// 2에서 생성자의 prototype 프로퍼티 값을 인스턴스의 __proto__ 를 대입하여
// 프로토타입 체인이 정의 되며 생성자로 생성한 
// 모든 인스턴스가 생성자 프로토타입 객체의 프로퍼티를 사용할수 있게됩니다.


