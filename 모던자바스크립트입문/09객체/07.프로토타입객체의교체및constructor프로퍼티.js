// 프로토타입객체의교체및constructor프로퍼티

//  가진 prototype 프로퍼티 값을 새로운 객체로 교체할 때는 주의해야합니다.

function Circle(center, radius){
    this.center = center;
    this.radius = radius;
}
Circle.prototype = {
    constructor: Circle,
    area : function(){ return Math.PI*this.radius*this.radius}
};
let c = new Circle({x:0,y:0},2.0);
console.log(c.constructor);
console.log(c instanceof Circle);