function* g(){
    yield 1;
    yield 2;
    yield 3;
}
let iter = g();
console.log('object :>> ', iter.next());
console.log('object :>> ', iter.return(10));
console.log('object :>> ', iter.next());

// 제너레이터 예외던지기: throw 메서드

function* idMaker(){
    let count = 0;
    while(true){
        try{
            yield count++;
        }catch(e){
            console.log('오류가 발생했습니다');
        }
    }
}
let iter2 = idMaker();
console.log('iter.next() :>> ', iter2.next());
console.log('iter.next() :>> ', iter2.next());
iter2.throw(new Error('오류'));

// 반복 가능한 객체에 위임하기 :yield*

function* f(){
    yield "X";
    yield "Y";
}
function* gf(){
    yield 0;
    yield* [2,4];
    yield* "AB";
    yield* f();
}
let iter3 = gf();
for (let v of iter3) console.log(v);
