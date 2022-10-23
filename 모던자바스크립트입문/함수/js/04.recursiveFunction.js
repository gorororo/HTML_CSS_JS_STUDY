// 자기 자신을 호출하는 함수를 재귀 호출(recursivecall)이라고 부른다.
// 이러한 재귀 호출을 수행하는 함수를 재귀 함수라고 부른다.

const fact=(n)=>{
    if(n <= 1) return 1;
    return n*fact(n-1);
}
console.log('fact(5) :>> ', fact(5));

const fact1 = function f(x){
    if(x <= 1) return 1;
    return x*f(x-1);
}
console.log('fact1 :>> ', fact1`5`);

// 'use strict' //
const fact2 = function(n){
    if ( n <= 1) return 1;
    return n*arguments.callee(n-1); //엄격모드에서 caller , callee , arguments 속성을 사용할수 없다.
}
console.log('fact2(5) :>> ', fact2(5));

// 제귀 호출은 반드시 멈추는 코드가 있어야 한다.
// 재귀 호출은 while for 문에 비해 메모리 사용이 많고 이해하기도 어렵다
// 간단히 해결되는 문제 에서만 사용되는것을 권장한다.