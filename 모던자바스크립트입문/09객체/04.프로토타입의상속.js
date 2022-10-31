// 상속(inheritance)
// 특정 객체가 다른 객체로부터 기능을 이어받는 것을 말한다
// 프로토타입 체인 이라 부르는 객체 자료 구조로 구현되어 있으며
// 프로토타입 상속 이라 부른다
// 프로토타입 언어구문으로 상속을 제공하지는 않지만
// 몇 가지 기법을 활용하면 상속과 비슷한 것을 흉내낼수 있다.
// ECMAScript 6 부터는 생성자 정의를 더 간결하고 명료하게 표현하는
// 클래스 구문이 추가되었습니다

// 하는 이유?
// 상속을 사용하면 이미 정의된 프로퍼티 메서드의 코드를 재사용할수 있고
// 새로운 기능을 추가해서 확장된 객체로 만들수 있다
// 중복 코드를 없애고 유지보수성이 높은 프로그램을 만들수있다

// 프로토타입 체인
// 내부 프로퍼티[[Prototype]]
// 모든 객체는 내부 프로퍼티[[Prototype]]을 가지고 있습니다.
// 이것은 함수 prototype 프로퍼티와는 다른 객체 이다.
// ECMA5까지는 사용자가 내부 프로퍼티를 읽거나 쓸수 없었지만
// ECMA6부터는 __proto__ 프로퍼티를 지원합니다.

let obj = {};
console.log('obj.__proto__ :>> ', obj.__proto__);
console.log('[[Prototype]] :>> ', obj.prototype);
console.clear();

// [[Prototype]] === __proto__

//객체의__proto__프로퍼티는 그 객체에게 상속을 해준 부모객체를 가르킵니다. 따라서 객체는
// __proto__프로퍼티가 가리키는 부모 객체의 프로퍼티를 사용할수 있습니다.

let objA = {
    name: "Tom",
    sayHello: function(){console.log('Hello!' + this.name);}
};
let objB ={
    name: "Huck"
};
objB.__proto__=objA;
let objC={};
objC.__proto__=objB;
objC.sayHello();

// 1 objC.sayHello() 가호출디면 먼저 자신이 가지고있는 함수인지 확인 없으니
// 2 다음으로 objB에 있는지 확인 역시 없고
// 3 이제 objB가 가르키는 objA 가 sayHello()를 가지고 있는지 확인 찾았으면 이제 사용

// 함수호출이후 objA.sayHello() 안에있는 this.name을 검색해 봅니다.

// 1 objC 스스로 name 이라는 프로퍼티 를 가지고 있는지 확인 없으면
// 2 objC.__proto__ 이 가르키는 objB__proto__가 name 프로퍼티 가지고 있는지 확인
// 3 있으므로 objB.name 프로퍼티를 사용한다

// 위 예시처럼 자신이 가지고 있지 않는 프로퍼티를 가리키고 있는 객체를 차례대로 거슬러 올라가며 검색 
// 이와 같은 객체의 연결 고리를 프로토타입 체인 이라고 합니다.

// 여기에서 객체의 __proto__프로퍼티가 가리키는 객체가 바로 상속을 해 준 객체이며
// 이 객체를 그객체의 프로토타입이라고 합니다
// 객체는 자신이 가지고 있지 않은 특성(프로퍼티와 메서드)을 프로토타입 객체에 위임(delegate) 한다고 할수 있습니다.

// 이처럼 자바스크립트는 프로토타입 체인을 사용하여 객체의 프로퍼티를 다른 객체로 전파합니다.
// 이를 프로토타입 상속이라고 합니다 
// 프로토타입 상속을 하는 객체 지향 언어를 가리켜 프로토타입 기반 객체 지향 언어라고 합니다,

// 지금까지 프로토타입 상속에 관해 설명했지만 실제로 프로그래밍 할 떄는 __proto__프로퍼티 값을 직접 입력해서 상속하지는 않습니다.
// 일반적으로 사용하는 방법을 알아봅시다.

// - 생성자로 객체를 생성할 떄 생성자의 prototype 프로퍼티에 추가하는 방법
// - Object.crate 메서드로 상속 받을 프로토타입을 지정하여 객체를 생성하는 방법

// 프로토타입 가져오기

function F(){};
let objAdd = new F();
console.log('Object.getPrototypeOf(objAdd) :>> ', Object.getPrototypeOf(objAdd));
console.log('objAdd.__proto__ :>> ', objAdd.__proto__);
console.log('Object.getPrototypeOf :>> ', Object.getPrototypeOf(objAdd));
console.log('Object.setPrototypeOf() :>> ', Object.setPrototypeOf(objAdd,__proto__));