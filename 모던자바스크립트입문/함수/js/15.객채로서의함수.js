// apply call
const tom = { name : 'Tom Sawyer'};
const becky = { name : 'Becky Thatcher'};

function say(greeting,honorifics){
    console.log(`${greeting} ${honorifics }${ this.name}`);
};
say.apply(tom,['Hello!','Mr.']); // 배열로 받는다.
say.apply(becky,['Hi!','Ms.']);
say.call(tom,'Hello','Mr.'); // , 로 받는다
say.call(becky,'Hi!','Ms.');

// bind
// 묶다, 속박하다 이코드는 tom 객체를 함수 say의 this 로 설정한 새로운 함수를 만들어서 반환
let sayToTom = say.bind(tom); 
sayToTom('Hello','Mr.'); 

console.log(say.call(tom,'Hello','Mr.')===sayToTom('Hello','Mr.'));

