// 태그 함수의 첫 번쨰 인수는 callSite 객체라고 하며 다음과 같은 특징이 있습니다.

// 1.동결되어있다. 프로퍼티 추가삭제변경 모두 불가
// 2.callSite 객체는 캐시된다 태그 함수는 이전에 처리했던 
//   리터럴 문자열을 만나면 캐시된 callSite 객체를 첫 번째 인수로 넘깁니다.
// 3.raw 프로퍼티가 있다
//   callSite 객체에는 raw프로퍼티가 있다 값은 배열이며 요소는 
//   첫번째 인수 배열과 마찬가지로 탬플릿 리터럴을 ${...}로 분할한 문자열 입니다
//   이스케이프된 문자열이 들어오지만 raw 프로퍼티에는 이스케이프 되지않은 문자열이 들어옵니다.

function tag(strings,...values){
    console.log('strings :>> ', strings);
    console.log('strings.raw :>> ', strings.raw);
}
tag`a\n${1}b\n${2}c${3}`;