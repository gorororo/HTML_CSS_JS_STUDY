// 4-1 문제
// 3
// 바나나
// 32

// 4

// 5 틀림

// 1
// 0
// 1
// 0 틀림

// 0,1,2,3,
// 사과 배 귤 바나나

//369

let output = ' ';

for (let index = 0; index <6; index++) {
    for(let k =0 ; k<5-index ; k++){
    output += '  ';
    } 
    for(let j = 0; j <(2*index+1) ; j++){
        output += '⭐';
    }
    output += '\n';
}
for (let index = 0; index <5; index++) {
    for(let k =0 ; k<index+1 ; k++){
    output += '  ';
    } 
    for(let j = 0; j <2*(4-index)+1 ; j++){
        output += '⭐';
    }
    output += '\n';
}
console.log(output);


let ouput = 1
for (let i = 1 ; i<101; i++){
    ouput *= i
} 
console.log(`1~100의 숫자를 모두 곱하면, ${ouput}`)