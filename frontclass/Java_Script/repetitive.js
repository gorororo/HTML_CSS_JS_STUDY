// let cond = true;
// let value = '';

/**if문 */
// if (cond){
//     //true
//     value = '참'
// }else{
//     //false
//     value = '거짓'
// }
// console.log(`value 값은 : ${value}`)

/*스위치문*/
// switch (cond){
//     case true:
//         value = '참'
//         break
//     default:
//         value = '거짓'
//         break
// }
// console.log(`value 값은 : ${value}`)

/**삼항연산자 */
// value = (cond) ? '참' : '거짓';

//변수에 숫자를 입력을 하고 그 숫자가 홀수인지 짝수인지 알아보는
// let number= 8;
// let value =null;

// value = (number%2===0) ? `${number}값은 짝수 ` : `${number}값은 홀수 ` ;
// console.log(value)

/**3개의 문장이 동시에 작성 초기값 ; 조건식 ;증가값 */
// for (let i=2; i <= 10; i+=2){
//     console.log(`${i} hello, for!`);
// }

/*for */
// let text = ['A','B','C','D'];
// for(let i in text){
//     console.log(i)
// }

// for(let i of text){
//     console.log(i)
// }
// for(let i=0; i<text.length ;i++){
//     console.log(text[i]);
//     console.log(i);
// }

/*1부터 100까지 더하는 프로그램 작성*/
// let result=null;
// for(let i=1; i<=100; i++){
//     result =result+i;
//     result += i ;
// }
// console.log(result);

// for (let i=10; i>=0 ; i--){
//     console.log(i)
// }

// let inputNum= parseInt(prompt('숫자를 써주세요'))
// let sum=0
// for(let i=1; i<=inputNum ; i++){
//     sum += i
// }
// document.write(`입력하신${inputNum}까지의 합은 ${sum}`)
// console.log(`입력하신${inputNum}까지의 합은 ${sum}`)

// for (let i=2 ; i>=9 ; i++){
//     console.log(i);
// }

// for (let i=0 ; i<5; i++){
//     for(let j=0; j<=i; j++){
//         console.log(`*`)
//     }
//     console.log(`\n`)
// }
// let result = '';
// let star ='';
// for(let i=0 ; i<5 ; i++){
//     star += '*';
//     result += star + '\n';
// }
// console.log(result)

// for(let i=6; i>=1; i--){
//     console.log('*'.repeat(i-1))
// }

// for(let i = 1; i <= 9; i+=2 ){  
//     console.log(' '.repeat( (9-i)/2 ) + '*'.repeat(i))
// }

/**피라미드 */
// let star ='';
// for(let i=1 ; i<=4 ; i++){
//     // for(let j=i; j<4;j++){
//     //     star += ' ';
//     // }
//     for (let j=4; j>i ; j--){
//         star += ' ';
//     }
//     for(let k=1 ; k<=(i*2)-1 ;k++){
//         star += '*';
//     }
//     console.log(star);
//     star='';
// }

