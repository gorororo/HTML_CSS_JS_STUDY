const todos = ['우유 구매','업무 메일 확인하기','필라테스 수업',] 

for (const i in todos){
    console.log(`${i}번째 할일 : ${todos[i]}`)
}

const 배열 =['바나나','사과','귤'];
for (const 요소 of 배열 ){
    console.log(요소);
}
for (const 인덱스 in 배열 ){
    console.log(인덱스,배열[인덱스]);
}

//범용적 포문
setTimeout(()=>{for(let i = 0 ; i<5 ; i++) console.log(`1번 : ${i}번째 중입니다.`)},0)
setTimeout(()=>{for(let i = 0 ; i<10 ; i+=2) console.log(`2번 : ${i}번째 중입니다.`)},1000)
setTimeout(()=>{for(let i = 10 ; i<20 ; i+=3) console.log(`3번 : ${i}번째 중입니다.`)},2000)
//역 반복문
setTimeout(()=>{for(let i = 20 ; i>=10 ; i--) console.log(`4번 : ${i}번째 중입니다.`)},3000)

// let i = 0;
//     while(confirm('계속?')){
//         alert(`${i}번째 반복`)
//         i++;
//     }