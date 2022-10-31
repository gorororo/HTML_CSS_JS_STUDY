// if(!name){
//     name = '';
//     message= '이름을 입력하십시오';
// }
x = 0
if(x>=0)
    console.log('Positive or Zero');
else
    console.log('Negative');

a= 10
b= 51
c = 11
    
if(a>b)
    if(a>c)
        console.log('a가 가장 크다');
    else 
        console.log('c가 가장 크다');
else
    console.log('a는 b 이하');

if(a>b){
    if(a>c){
        console.log('a가 가장크다');
    }else{
        console.log('a는 b 이하');
    }
}
num=2
if(num == 1){
    console.log('One');
}else{
    if(num== 2){
        console.log('Two');
    }else{
        console.log('Other');
    }
}
console.log(typeof num);

if(num==1){
    console.log('One');
}else if(num==2){
    console.log('Two');
}else{
    console.log('Other');
}

for(let i = 0 ; i < 10 ; i++){
    console.log('i :>> ', i);
}

for(let i = 0 ,sum=0 ; i<=10 ; i++){
    console.log('sum+=i :>> ', sum+=i);
}

let obj0 = {a:1,b:2,c:3};
for (let p in obj0) console.log('p :>> ', p);

let obj = {a:1,b:2,c:3};
for (let p in obj) console.log('p :>> ', obj[p]);

var $a =[2,4,6,8,10],$b=[1,3,5,6,9,11];
loop: for(var i=0; i<$a.length; i++){
    for(var j=0; j<$b.length; j++){
        if($a[i]==$b[j]) break loop;
    }
}
console.log(`a[${i}]=b[${j}]`);

// let $a =[2,4,6,8,10],$b=[1,3,5,6,9,11];
// loop: for(let i=0; i<$a.length; i++){
//     for(let j=0; j<$b.length; j++){
//         ($a[i]==$b[j]) ? console.log(`$a[${i}]=b[${j}]`):null;
//     }
// }

let a = [2,5,-1,7,-3,6,9];
let result;
for(let i = 0, sum = 0; i<a.length; i++){
    if(a[i]<0)continue;
    result = sum+=a[i];
}
console.log(result);

