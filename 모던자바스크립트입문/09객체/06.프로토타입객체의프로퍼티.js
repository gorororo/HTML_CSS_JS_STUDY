// 함수를 정의하면 함수 객체는 기본적으로 prototype 프로퍼티를 갖게 됩니다.
// 그리고 이 프로퍼티는 프로토타입 객체를 가리키며
// 이프로토타입객체는 기본적으로 constructor 프로퍼티와 내부 프로퍼티([[prototype]],(__prot__))를 가지고있습니다.

// constructor 프로퍼티

function F() {};
console.log(F.prototype.constructor); // Function F() {}

// 생성자와 생성자의 프로토타입 객체는 서로를 참조 합니다
// 정확히는 생성자의 prototype 프로퍼티가 프로토타입 객체를 가르키며
// 이 프로토타입 객체의 constructor 프로퍼티가 생성자를 가르키는 연결 고리 로 묶여있습니다.

// 단 생성자로 생성한 인스턴스는 생길때 프로토타입 객체의 참조만 가지고 있을뿐 생성자와는 직접적인 연결고리는 없습니다.

obj = new F();
console.dir(obj.constructor)

// 내부 프로퍼티 [[prototype]]
// 함수 객체가 가진 프로토타입 객체의 내부 프로퍼티는 기본적으로 Object.prototype을 가르킵니다

console.log(F.prototype.__proto__);