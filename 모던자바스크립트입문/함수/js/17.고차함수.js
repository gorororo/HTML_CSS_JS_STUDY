// digits = '';
// for (let i = 0; i <10 ; i++) {
//     digits += i;
// }
// console.log('digits :>> ', digits);

// randomChars = "";
// for (let i = 0; i<8; i++){
//     randomChars += String.fromCharCode(Math.floor(Math.random()*26) + 'a'.charCodeAt(0));
// }
// console.log('randomChars :>> ', randomChars);

// 공통 부분을 고차함수로 만들어 사용해보기

const joinStrings=(n,f)=>{
    let s = '';
    for (let i = 0; i < n; i++) {
        s += f(i);
    }
    return s;
}

let digits = joinStrings(10,i=>i);
let randomChars = joinStrings(8,(i)=>{
    return String.fromCharCode(Math.floor(Math.random()*26) + 'a'.charCodeAt(0));
})
console.log('digits :>> ', digits);
console.log('randomChars :>> ', randomChars);
