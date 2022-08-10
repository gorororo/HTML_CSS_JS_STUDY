// for(let i=0 ;i<5 ;i++ ){
//     if (i>2) break;
//     console.log(`안녕하세요${i}`)
// }

// continue문

// for(let i=0 ; i<5; i++){
//     console.log(`i=${i}`);
//     if (i<2) continue;
//     console.log(`안녕하세요${i}`);
// }

//while 문
// while(조건식===true){
//     반복한 명령문;
// }
// let i = 0;
// while(i<10){
//     console.log(`안녕하세요~~${i}`);
//     i++;
// }
// let i = 0;
// while(true){
//     console.log(`안녕하세요~~${i}`);
//     i++;
//     if (i>=10) break;
// }

/**사용자로부터 정수를 입력받아서 각 자리수 합을 구하세요 */

// let value = '3849'
// let idx = 0;
// let sum = 0;
// while(idx < value.length){
//     sum += parseInt(value[idx]);
//     console.log(value[idx])
//     idx++;

// }
// console.log(`각자리수의 합은=${sum}`)
// value+='';

// let value = 3849;
// let sum =0;


// while(value>1){
//     sum += value %10;
//     value = parseInt(value/10);
// }
// console.log(`각자리수의 합은 = ${sum}`)

// let i = 1;
// let sum = 0;
// while(i<=100){
    
//     if (i%2===0){
//         //짝수
//         sum -= i;
//     }else{
//         //홀수
//         sum += i;
//     }
//     i++;
// }
// console.log(`계산값=${sum}`)

// let sum =0;
// for(let i=1; i<=100 ; i++){
//     if (i%2){
//         sum += i;
//     }else{
//         sum -= i;
//     }
// }
// console.log(sum);

/*시작값 10  끝값은 15
*/
// let startNum =10;
// let value = startNum;
// let sum =0;
// while(startNum<=15){
//     while(value>0){
//     sum += value%10;
//     value = parseInt(value/10);
//     }
    
//     value = ++startNum;
// }
// console.log(`각자리수 합은 : ${sum}`)

// do{
//     반복문;
// }while(조건문);

// let i =0;
// do{
//     console.log(`안녕하세요 ${i}`);
//     i++;
// }while(i<5);

// while(false){
//     console.log('***** while 문 *****');
// }
// do{
//     console.log('***** do문 *****');
// }while(false);

// let = max =5;
// let = value =1;

// for(let i=max ; i>=1; i--){
//     value *=i
// }
// console.log(`${max}!=${value}`)

// let num = 10;
// for (let i = 1; i<=num ; i++){
//     if (num%i===0){
//         console.log(i)
//     }
// }


// 소수 구하기
for (let i=2; i<=10;i++){
    let count=0;
    for(let j = 2; j<=10; j++){
        if(i % j === 0){
            count++;
        }
    }
    if (count===1){
        console.log(i);
    }
}

// 합성수 구하기
// for (let i=2; i<=10;i++){
//     let count=0;
//     for(let j = 2; j<=10; j++){
//         if(i % j === 0){
//             count++;
//         }
//     }
//     if (count===1){
//     }else{
//         console.log(i);
//     }
// }