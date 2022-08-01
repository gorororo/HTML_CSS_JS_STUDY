// let loginName = prompt(`이름을 입력 하세요`);

// // let tagTrans = document.write(`${loginName}님이 로그인 하셨습니다.`);

// let newDiv= document.createElement("div");
// newDiv.innerHTML = `${loginName}님이 로그인 하셨습니다.`

// const num3 = 3,num5 = 5;

// console.log(`덧셈결과 : ${num3+num5} \n곱셈결과 : ${num3*num5}`);


/**
 * 두 수를 입력받아 사칙연산의 값을 출력하세요.
 */

let startNum1 = parseInt(prompt('첫번째 숫자를 입력하세요'));
let startNum2 = parseInt(prompt('두번째 숫자를 입력하세요'));

function calculate(){
    console.log(`덧샘: ${startNum1+startNum2}`);
    console.log(`뺄샘: ${startNum1-startNum2}`);
    console.log(`곱셈: ${startNum1*startNum2}`);
    console.log(`나눗셈: ${startNum1/startNum2}`);
}

calculate();