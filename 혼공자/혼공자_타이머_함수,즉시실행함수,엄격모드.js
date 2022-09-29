const a = setTimeout(()=>console.log(`setTimeout 함수 입니다!`),1000)
const b = setInterval(()=>console.log(`setTimeout 함수 입니다!`),1000)


console.log(a,b)

clearTimeout(a);
clearInterval(b);
//즉시실행함수 전역변수가 겹치는것을 방지하기위에 서 쓰인다 함수안에서는 모두 지역변수 처리가 되기떄문
(()=>{

})();

(function(){

})();

//엄격모드
'use strict'

(function(){
    'use strict' // 함수내에서만 엄격모드
})();
