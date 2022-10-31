function partial(f){
    // 중첩 함수에서 arguments를 사용하기 위해 저장해 둠
    let args = arguments;
    return function(){
        // 외부 함수의 두 번째 인수를 변수 a에 복사
        let a = Array.prototype.slice.call(args,1);
        for (let i=0, j=0; i < a.length; i++) {
            // 외부 함수의 두번째 인수가 undefined 면 이 함수의 arguments를 사용한다
            if(a[i]==undefined) a[i] = arguments[j++];
        }
        return f.apply(this, a);
    };
}
let square = partial(Math.pow, undefined,2); //제곱을 곱하는 함수
let sqrt = partial(Math.pow, undefined , .5); // 제곱근을 구하는 함수
let cubicroot = partial(Math.pow, undefined, 1/3); // 세제곱근을 구하는 함수
let exp = partial(Math.pow, Math.E, undefined); // exp(x) : 지수 함수