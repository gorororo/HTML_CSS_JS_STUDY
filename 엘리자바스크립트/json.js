'use strict'
// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple','banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size : null,
    birthDate: new Date(),
    // Symbol: Symbol('id'),
    jump: ()=>{
        console.log(`${rabbit.name} can jump!`);
    },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit,['name','color','size']);
console.log(json);

json = JSON.stringify(rabbit,(key,value)=>{
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'rak' : value;
});
console.log(json);

//2. JSON to Object
// parse(json)

console.clear()

json = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json, (key,value)=>{
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate);

//유용한 사이트
// JSON Diff 문제를 디버그할때 유용
// JSON Beautifier 포멧 재정의
// JSON Parser 제이선 파일 더보기좋게 보는사이트
// Json Validator 제이슨이 이상할때 확인해보는 사이트