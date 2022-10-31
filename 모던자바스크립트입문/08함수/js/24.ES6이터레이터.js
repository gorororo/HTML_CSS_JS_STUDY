// 이터레이션(iteration)은 반복 처리라는 뜻 
// 데이터 안의 요소를 연속적으로 꺼내는 행위를 말합니다.
let a = [5,4,3];
a.forEach((val)=>{
    console.log(val);
})

// 이터레이터
// 이터레이터(iterater)란 반복처리(iteration)가 가능한객체를 말하며
// 한국어로는 반복기
// 기존 이작업은 내부적으로 처리되므로 개발자는 각 처리 단계를 제어할수는 없습니다.
// ES6 추가된 이터레이터를 사용하면 개발자가 반복처리를 단계별로 제어할 수 있습니다.

let iter = a[Symbol.iterator]();
console.log('iter.next() :>> ', iter.next());
console.log('iter.next() :>> ', iter.next());
console.log('iter.next() :>> ', iter.next());
console.log('iter.next() :>> ', iter.next());
console.log('iter.next() :>> ', iter.next());

// next를 호출할때 마다 이터레이터 리절트(iterator result)라는 객체를 반환 합니다.
// 이터레이터 리절트는 value(꺼내진값) 와 done(꺼냇는지아닌지논리값) 프로퍼티를 갖는 객체 입니다.

// 배열의 이터레이터를 반환하는 함수

const makeIterator=(array)=>{
    let index = 0;
    return {
        next : ()=>{
            if (index < array.length){
                return {value: array[index++],done: false};
            } else{
                return {value: undefined , done : true};
            }
        }
    };
}
let iterMake = makeIterator(["A","B","C"]);
console.log(iterMake.next());
console.log(iterMake.next());
console.log(iterMake.next());
console.log(iterMake.next());

for(let v of a) console.log(v);

// for of 는 다음 두가지 조건을 만족하는 객체를 반복 처리합니다.
// -Symbol.iterator 메서드를 가지고 있다.
// -Symbol.iterator 메서드는 반환값으로 이터레이터를 반환한다.

// Symbol.iterator 메서드를 가진 객체를 반복 가능(iterable)한 객체라고 합니다.
// Array,String,TypedArray,Map,Set

for (let v of "ABC") console.log(v);

// 반복 가능한 객체는 for/of 문 , 전개 연산자, yield*, 비구조화 할당 등에 활용할 수 있습니다.