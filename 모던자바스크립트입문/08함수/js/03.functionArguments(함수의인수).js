/*
함수 정의에 작성된 인자 개수보다 인수를 적게 전달하면 여타 언어는 
에러를 뱉지만 자바스크립트는 undefined 를 반환한다
*/
const f = (x, y) => {
    console.log("x :>> ", x, "y :>> ", y);
};
f(2);

// 이런 성질을 이용해서 호출할때 인수를 생략할수 있는함수를 정의 할수 있다.
// 이를 구현 하려면 함수 정의식에서 인수를 생략했을 때 사용할 초기값을 설정해야 한다
const multiply = (a, b) => {
    b = b || 1; // b에 인수가 들어오면 인수로 안들어오면 undefined(0으로 평가) 가 값이되므로 초기값 1로 계산
    return a * b;
};
console.log(multiply(2, 3));
console.log(multiply(2));

/*
가변길이 인수 목록(Arguments 객체)
모든 함수에서 사용할수있는 지역변수 arguments
변수값은 Arguments 객체 이다 함수에 인수 n개를 넘겨서 호출하면 인수 값이 다음과 같이 arguments에 저장됩니다.
*/
// arguments[0] : 첫 번째 인수 값
// arguments[1] : 두 번째 인수 값
// ...
// arguments[n-1] : n번째 번째 인수 값

// arguments.length : 인수 개수
// arguments.callee : 현재 실행되고 있는 함수의 참조

// Argument 객체는 '유사 배열 객체 ' 입니다 자세한 설명은 10.3절에서

function fc(x, y) {
    arguments[1] = 3;
    console.log("x :>> ", x, "y :>> ", y);
}
fc(1, 2);

// 앞의 코드는 argument[1]값을 바꾸면 함수의 인자 y 값이 함께 바뀝니다 일반적인 배열에는 이러한 성질이 없습니다.
// argument 변수를 활용하면 인수 개수가 일정하지 않은 가변 인수 함수를 정의할수 있습니다

function myConcat(separator){
    let s = '';
    for(let i=1; i<arguments.length; i++){
        s += arguments[i];
        if(i<arguments.length-1) s+= separator;
    }
    return s;
}
console.log('myConcat :>> ', myConcat('/','apple','orange','peach'));


// spread 연산자를 이용한 가변인자 함수
// arguments 객체는 function으로 정의한 함수에서만 사용할 수 있습니다.
// array function에서는 가변인자 함수를 작성하기 위해 spread 연산자를 사용할 수 있습니다.

const test = (...args) => {
    if (args.length === 0) {
        return 0;
    } else if (args.length === 1) {
        return 1;
    } else if (args.length === 2) {
        return 2;
    } else {
        return -1;
    }
};
