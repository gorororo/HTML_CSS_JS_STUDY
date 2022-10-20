const sumArray=(a)=>{
    let sum = 0;
    for(let i = 0; i < a.length; i++){ // i<=a.length-1 과 같지만 보통 명시적으로 보여주는a.length가 관례이다.
        sum += a[i];
    }
    return sum;
}
let a = [3,5,1,2,6,7];
console.log(sumArray(a));