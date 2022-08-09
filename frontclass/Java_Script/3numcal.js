// let a =10;
// let b =5;
// let c =0;

// c=a;
// a=b;
// b=c;
// console.log(`a=${a},b=${b}`);
// console.log('a='+a+' , b='+b);

//if(조건문){조건문이참일경우}
//else{조건문이거짓일경우}


// if (5<3){
//     console.log('네 맞습니다.');
// }
// console.log('출력됩니다.');
let input=parseInt(prompt('검사할 숫자를 입력하세요'))
const elemResult = document.querySelector('#result')
console.log(elemResult)
if(input){
    if (input%3 === 0){
        console.log('3의 배수 입니다')
        elemResult.innerText = '3의 배수 입니다. \n'+'입력한값 : '+input
    } else{
        console.log('3의 배수가 아닙니다.')
        elemResult.innerText = '3의 배수가 아닙니다. \n'+'입력한값'+input
    }
}else if(input ===0){
    elemResult.innerText = '입력하신 숫자는 0 입니다.'
}else{
    elemResult.innerText = '숫자가 아닙니다.'
}

// let input=parseInt(prompt('3배수를 검사할 숫자를 입력하세요'))
// let value = null;
// console.log(value=(input%3==0) ? '3의배수입니다':'3의배수가아닙니다');