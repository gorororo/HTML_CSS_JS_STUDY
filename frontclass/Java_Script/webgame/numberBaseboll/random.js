// const number = [1,2,3,4];
// const answer= [];

// // for (let obj in number){
// //     answer[obj] = number[obj]**2
// // }
// // const returnValue=number.forEach((value,index,arr)=>{
// //     // console.log(value);
// //     // console.log(index);
// //     // console.log(arr);
// //     answer[index] =value**2;
// // })
// // const returnValue = number.map((value,index,arr)=>{
// //     // console.log(value);
// //     // console.log(index);
// //     // console.log(arr);
// //     // console.log('------------')
// //     return value**2;
// //     answer[index] =value**2;
// // })


// for(let obj of number){
//     console.log(obj);
//     answer.push(obj**2)
// }console.log(answer);

// 0 <= num<10
for (let i =0 ; i <10 ; i++){
    let num = Math.random()
    // console.log(num*10)
    console.log(Math.floor(num*9+1))
}
// const choiseNumber = ()=>{
//     //0보다 크거나 같고 10보다 작은수 0<= random <10
//     const number=[]; //0~9
//     for (let i=0 ; i<10 ; i++){
//         number.push(i);
//     }

//     // const number = Array(10).fill().map((value,index)=>index);
//     // console.log(number)
    
//     // const number =new Array(10).fill(1)
//     // console.log(number)
//     // number.forEach((value,index)=>{
//     //     number[index] = index;
//     //     console.log(value,index)
//     // });


//     const answer=[]; //4개 저장
//     for(let n=0 ; n<4 ; n++){
//         const idx = Math.floor(Math.random()*number.length);
//         console.log(idx);
//         answer.push(number[idx]);
//         number.slice(idx,1);
//     }
//     console.log(answer);
// };
// choiseNumber();

const analysisNumber = ()=>{
    // console.log('call fn');
    // const answer = [];
    
    // let i = 0;
    // while (i < 4){
    //     let n = Math.floor(Math.random() * 10);
    //     if(notSame(n)){
    //         answer.push(n);
    //         i++;
    //     }
    // }
    // function notSame(n){
    //     return answer.every((e)=> n !== e);
    // }
    // console.log(answer)
    // return answer;


    let answer = [];

    while(answer.length < 4){
        let temp = Math.floor(Math.random()*10);

        if(!answer.includes(temp)){
            answer.push(temp); 
        }
    }
    console.log(answer);
    
};


const arrIncludes= (arr,value) =>{
    for(let i = 0 ; i<arr.length; i++){
        if(arr[i]==value){
            return true;
        }
    }
    return false;
}
let data = arrIncludes([1,2,3,4,5],6);
console.log(data)

analysisNumber()