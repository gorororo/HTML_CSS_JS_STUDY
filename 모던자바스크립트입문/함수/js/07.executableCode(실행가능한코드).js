// 실행 가능 코드를 만나면 -> 코드를 평가(Evaluation) -> 실행문맥(Execution Context) 로 만든다
/*
* Executable code 의 유형은
* 전역 코드 / 함수 코드 / eval 코드
* 전역코드란?
* -window 아래 정의된 함수를 말한다
* 함수코드란?
* -말그대로 함수코드 ()=>{} ,function(){} 
* eval코드란?
* - 렉시컬환경(Lexical Environment) 이 아니라 별도의 동적 환경에서 실행됩니다.
*/

// 실행 문맥
// ExecutionContext = {
//     // 렉시컬 환경 컴포넌트
//     LexicalEnvironment: {},
//     // 변수 환경 컴포넌트
//     VariableEnvironment: {},
//     // 디스 바인딩 컴포턴트
//     ThisBinding : null,
// }

// 렉시컬 환경 컴포넌트
// LexicalEnvironment: {
//     환경 레코드
//     EnbiromentRecord: {},
//     외부 렉시컬 환경 참조
//     OuterLexicalEnviroment Reference:{}
// }

// 환경 레코드
// EnviromentRecord: {
//     // 선언적 환경 레코드
//     DeclarativeEnviromentRecord: {}, 실제로 함수 변수, catch문의 식별자와 실행 결과가 저장되는 영역입니다.
//     // 객체 환경 레코드
//     objectEnviromentRecord: {} 실행 문맥 외부에 별도로 저장된 객체의 참조에서 데이터를 읽거나 씁니다.
// }

// 전역환경과 전역 객체의 생성
// GlobalEnviroment = {
//     ObjectEnviromentRecord:{
//         bindObject : window
//     },
//     OuterLexicalEnviromentReference:null
// }
// // 전역 실행 문맥
// ExecutionContext = {
//     LexicalEnvironment : GlobalEnviroment,
//     ThisBinding: window,
// }

// 전역 환경
// GlobalEnviroment = {
//     // 전역 환경의 환경 레코드인 객체 환경 레코드에 Window의 참조가 설정되어 있음
//     ObjectEnviromentRecord: {
//         bindObject : window
//     },
//     OuterLexicalEnviromentReference: null
// }

var a = {x: 1,y:2}; // var 의 특징 호이스팅 이랑 연관있는듯
console.log('window.a :>> ', window.a);
function norm(x){console.log('x :>> ', `norm함수의${x}`)};
console.log(window.norm);
a = {x: 1,y:2};
console.log('Object :>> ', Object.getOwnPropertyDescriptor(window,'a'));
delete a;
console.log('a :>> ', a);

// 자바스크립트는 싱글 스레드 이지만 API Web Workers 를 이용하거나 최신 노드에서는 멀티스레드를 지원한다
