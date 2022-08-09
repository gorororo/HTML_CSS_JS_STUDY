/*
*   switch = case 문
    switch(조건문){
        case 값1 : //조건문장 값 === 값1
            명령문장;
            break; //continue;
        }
*/

// let subject = 'JS';

// if(subject == 'C'){
//     console.log('C언어입니다.');
// }else if(subject == 'js'){
//     console.log('Javascript 입니다.');
// }else if(subject == 'java'){
//     console.log('Java 언어 입니다');
// }else {
//     console.log('선택언어 없습니다.');
// }

// let subject = 'js';
// switch (subject){
//     case 'C' :
//         console.log('C언어입니다');
//         break;
//     case 'js' :
//         console.log('JavaScript 언어 입니다');
//         break;
//     case 'java' :
//         console.log('Java 언어 입니다');
//         break;
//     default :
//         console.log('선택언어가 없습니다.')
//         break;
// }  

let n = 8;
let result = n%5;
// switch(result){
//     case 0:
//         console.log('5의 배수 입니다');
//         break;
//     default:
//         console.log('5의 배수가 아닙니다.');
//         break;
// }
switch(result){
    case 1:
    case 2:
    case 3:
    case 4:
        console.log('5의 배수가 아닙니다.');
        break;
    default:
        console.log('5의 배수 입니다');
        break;
}