/*
* setTimeout /clearTimeout
* setInterval /clearInterval
*/
// let count = 0;
// const timerID = setTimeout(()=>{
//     console.log(`count=${count}`);
//     count++;
//     if(count > 4){
//         clearTimeout(timerID)
//     }
// },10000)
// console.log(timerID);

let count = 0;
const timerID = setInterval(()=>{
    console.log(`count=${count}`);
    count++;
    if(count > 4){
        clearInterval(timerID)
    }
},2000)
