// 생성자 안에서 메서드를 정의하는 방식의 문제점
// this뒤에 메서드를 정의하면 그 생성자로 생성한 모든 인스턴스에 똑같은 메서드가 추가됩니다. 따라서 메서드를 포함한 생성자로 인스턴스를 여러 개 생성하면 
// 같은 작업을 하는 메서드를 인스턴스 개수만큼 생성하게 되어 결과적으로 메모리를 소비하게 됩니다.

// function Circle(center, radius){
//     this.center = center;
//     this.radius = radius;
//     this.area = function(){
//         return Math.PI*this.radius*this.radius;
//     }
// }
// let c1 = new Circle({x:0,y:0},2.0);
// let c2 = new Circle({x:0,y:1},3.0);
// let c3 = new Circle({x:1,y:0},1.0);

// 위 문제는 프로토타입 객체에 메서드를 정의하는 방식으로 해결할수 있습니다.


// 프로토타입 객체
// 자바스크립트에서는 함수도 객체이므로 함수 객체가 기본적으로 prototype 프로퍼티를 갖고 있습니다

class F{};
console.log(F.prototype); // Object {}

F.prototype.prop = "prototype value";
let obj = new F();
console.log('obj.prop :>> ', obj.prop);

obj.prop = "instance value";
console.log('obj.prop :>> ', obj.prop);
console.log('F.prototype.prop :>> ', F.prototype.prop);

// Circle 생성자를 정의할때 area 메서드를 생성자 Circle의 메서드로 추가했던 코드를 
// Circle.prototype에 추가하는 코드로 바꾸어 봅시다.

function Circle(center, radius){
        this.center = center;
        this.radius = radius;
    }
    // Circle 생성자의 prototype 프로퍼티에 area 메서드를 추가
    Circle.prototype.area=function(){
        return Math.PI*this.radius*this.radius;
    };
    let c1 = new Circle({x:0,y:0},2.0);
    let c2 = new Circle({x:0,y:1},3.0);
    let c3 = new Circle({x:1,y:0},1.0);
    console.log('넓이 :>> ', c1.area());
