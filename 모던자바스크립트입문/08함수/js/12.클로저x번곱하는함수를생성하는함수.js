const makeMultiplier=(x)=>{
    return (y)=>x+y;
}
let multi2 = makeMultiplier(2);
let mulit10 = makeMultiplier(10);
console.log('multi2(3) :>> ', multi2(3));
console.log('multi10(3) :>> ', mulit10(3));