// for문을 간편하게 도는함수 리턴하지 않는다 값 인덱스 배열을 받는다
// const 배열0 = [273,52,103,32,57];
// 배열.forEach((value,index,array)=>{
//     console.log(value,index,array);
// })

// let 배열 = [273,52,103,32,57];
// 배열 = 배열.filter((value,index)=>{
//     return value % 2 ===0;
// })
// console.log(배열);

// 배열에서 조건을 걸어 원하는것만 얻고싶을경우 쓰는함수
// 함수뒤에 thisArg가 있으면 콜백함수에서 사용할값을 정해줄수있다 콤마,뒤에 값을 써주면 콜백함수에서 this로 사용할수있다 
// let 배열 = [273,52,103,32,57];
// 배열 = 배열.filter((value,index)=>{
//     return value % 2 ===1;
// })
// console.log(배열);

// 배열 전체를 돌면서 추가 로 다른 명력을 줄때 사용하는 함수
// let 배열 = [273,52,103,32,57];
// 배열 = 배열.map((value,index)=>{
//     return value + '!!';
// })
// console.log(배열);

//매개변수를 받아서 앞에 뒤에를 계산할수 있는함수
// let 배열 = [273,52,103,32,57];
// 배열 = 배열.reduce((prev,current)=>{
//     return prev+current ;
// })
// console.log(배열);

// let 배열2 = [273,52,103,32,57];
// const myMap = (배열, 콜백함수)=>{
//     const output = []
//     for (let i = 0; i < 배열.length; i++) {
//         output.push(콜백함수(배열[i],i,배열))
        
//     }
//     return output;
// };

// myMap(배열2,(배열,인덱스,어레이)=> 
// console.log(배열*2,인덱스,어레이))

// console.log(배열2);


let arr = [273,52,103,32,57];

arr = arr.filter((v)=>{
    console.dir(this);
    return v>50
},50)
console.log(arr);

let arr2 = [273,52,103,32,57];
// 함수뒤에 thisArg가 있으면 콜백함수에서 사용할값을 정해줄수있다 콤마,뒤에 값을 써주면 콜백함수에서 this로 사용할수있다
// filter(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[];
function isBigEnough(value){
    return value >= this
}
let filtered = arr2.filter(isBigEnough,50)
console.log(filtered);

