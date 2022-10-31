// 템플릿 리터럴의 태그함수
// 태그가 지정된 템플릿 리터럴 tagged template literal
// func`${a}+${b}+${a+b}`

function list(){ console.log('arguments :>> ', typeof arguments);  return arguments;}
let t = list`a${1}b${2}c${3}`;
console.log('TempletReteral>>', [...t]);
console.log(`Object.value()>>`,Object.values(t));

