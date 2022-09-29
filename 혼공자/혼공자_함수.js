// 윤년 만들기
// 4로 나누어 떨어지는 해는 윤년이다
// 하지만 100으로 나누어 떨어지는 해는 윤년이 아니다.
// 하지만 400 으로 나누어 떨어지는 해는 윤년이다.

const isLeapYear = (연도)=>{
    return (연도 % 4 === 0)//윤년
        &&(연도 % 100 !== 0) //윤년이아니다
        ||(연도 % 400 === 0) //윤년이다.


}
console.log(isLeapYear(2020));
console.log(isLeapYear(2010));
console.log(isLeapYear(2000));
console.log(isLeapYear(1900));


const min = (배열)=>{
    let result = 배열[0];
    console.log(`처음 실행 때의 값 ${result}`);
    for(const value of 배열){
        console.log(`현재 비교 대상${result} 과 ${value} 중에 작은것은?`);
        (result > value) ? result = value : null ;
    }
    console.log(`=${typeof result}`);
    return result;
}
console.log(min([52,273,32,103,275,24,57]));

const min2 = (배열)=>{
    const min = Math.min.apply(null, 배열);
    const max = Math.max.apply(null, 배열);

    return [min,max];
}
console.log(min2([52,273,32,103,275,24,57]));

//나머지 매개변수
const 함수 =function (...매개변수){}
// ->배열
함수(1,2,3,4,5) //값을 기본자료형으로 적어도 배열로 전달
//전개 연산자
let arr1= [1,2,3,4,5]
const 함수1 = (배열1)=>{}

함수1(...arr1) // 배열안에 자료를 하나씩 매개변수로 전달

// const 잘못된함수 = (...배열 ,a,b)=>{} // 어디까지 배열에 넣고 나머지 매개변수에 할당하는지 명확치않아서 오류 
// 잘못된함수(1,2,3,4,5,6,7,8)

const 잘된함수 = (a,b,...배열)=>{
    console.log(a); //1
    console.log(b); //2
    console.log(배열); //3...7
}
잘된함수(1,2,3,4,5,6,7);

const multiplyAll = (a,b)=>{
    return a**b;
}
const multiplyAllBasic = (start,end)=>{
    let output = 1;
    for (let index = start; index <= end; index++) {
        output *= index;
    }
    
    return output
}
console.log(multiplyAll(1,2));
console.log(multiplyAll(5,8));
console.log(multiplyAllBasic(7,9.5));
console.log(multiplyAllBasic(2,5.5));
console.log(multiplyAllBasic(3,8));

const max = (arr)=>{
    let  output = arr[0];
    for(const value of arr){
        // if(output<value){
        //     output = value
        // }
        (output<value) ? output=value : true;
    }    
    return output
}
const maxs = (...arr)=>{
    let  output = arr[0];
    for(const value of arr){
        // if(output<value){
        //     output = value
        // }
        (output<value) ? output=value : true;
    }    
    return output
}
// const maxall = (array,...arr)=>{
//     let  output = array[0] || arr[0];
//     for(const value of array){
//         // if(output<value){
//         //     output = value
//         // }
//         (output<value) ? output=value : true;
//     }    
//     return output;
// }

// const maxall2 = (a,...bcde)=>{
//     if(Array.isArray(a)){
//         let output = a[0]
//         for (const value of a) {
//             if(output < value){
//                 output = value;
//             }
//         }
//         return output;
//     }else{
//         let output = a;
//         for (const value of bcde) {
//             if(output < value){
//                 output = value;
//             }
//         }
//         return output;
//     }
    
// }

// console.log(maxall2([1,2,3,4]));
// console.log(maxall2(1,2,3,4));


// const max2 = (arr)=>{
//     const max = Math.max.apply(null,arr);
//     return max;
// }






// console.log(max([1,200,3,100,5,6]));
// console.log(maxs(1,200,3,100,5,6));
// console.log(maxall([1,2,3,4,5,1050]));
// console.log(max2([1,200,3,100,5,6]));