// ES6 에서 추가된 제너레이터
// 제너레이터란?
// - 반복 가능한 이터레이터 값으로 반환한다
// - 작업의 일시 정지와 재시작이 가능하며 자신의 상태를 관리한다.

function* gen(){
    yield 1;
    yield 2;
    yield 3;
}
let iter = gen();
console.log('iter.next() :>> ', iter.next());
console.log('iter.next() :>> ', iter.next());
console.log('iter.next() :>> ', iter.next());
console.log('iter.next() :>> ', iter.next());

// 1 제너레이터 함수인 gen은 호출해도 바로 실행되지 않습니다. 대신 이터레이터를 반환합니다.
// 2 next 메서드가 호출되면 첫 번째 yield연산자의 위치 까지 실행하며 결과값으로 이터레이터 리절트를 반환
//   제너리이터 함수는 반환하고 동시에 일시 정지 상태가 된다
// 3 또 다시 이터레이터의 next 가 호출되면 일시정지한 위치에 있는 처리를 재개합니다
// 4 마지막까지 진행하면 value 프로퍼티는 undefined 이고 done 의 프로퍼티 값은 true 로 반환된다
//   done 은 마지막까지 다 실행했는가를 확인하는 메서드

// m부터 n까지의 정수 값을 순서대로 꺼내는 이터레이터를 생성하는 제너레이터

function* crateNumbers(from,to){
    while(from < to) yield from++;
}
let iterCreateNumber = crateNumbers(10,20);
for(let v of iterCreateNumber) console.log(v); // 10~20 사이의 정수를 순서대로 출력한다.
