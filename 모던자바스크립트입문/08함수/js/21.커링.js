const pow = (exponent)=>{
    return (base)=>{
        return Math.pow(base, exponent)
    }
}

// 위에 정의한 함수 pow 는 Math.pow 를 커링한것 입니다.
// Math.pow(base,exponet) = pow(exponet)(base)

let square = pow(2);
let sqrt = pow(.5);
let cubicroot = pow(1/3);

console.log('square :>> ', square(10));
console.log('sqrt :>> ', sqrt(10));
console.log('cubicroot :>> ', cubicroot(10));

let sum = (a,b)=>a+b;
let a = [1,2,3,4];
let abs_a = pow(.5)(a.map(pow(2)).reduce(sum));

console.log('sum :>> ', sum);
console.log('a :>> ', a);
console.log('abs_a :>> ', abs_a);