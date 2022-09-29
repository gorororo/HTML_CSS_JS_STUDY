const cat = {
    name: '밤이',
    age : 2,
    color:'black&white',
}



//과거(1)
console.log(cat.name)//밤이
console.log(cat.age)// 7 
console.log(cat.color)// 색상

cat.status !== undefined ? cat.status : '이상없음'
cat.status === undefined ? '이상없음 ': cat.status

//과거 (2) cat.status 빈문자열 or 0 과 같이 false 변환되는 값이 오지 않는다면!
cat.status = cat.status ? cat.status : '이상없음'

//과거 (3)
// cat.status = cat.status || '이상 없음'
// cat.a = cat.status || '이상 없음'
// cat.b = cat.status || '이상 없음'
// cat.c = cat.status || '이상 없음'

//현대 (1)
const newCat = {
    status : '이상없음',
    ...cat
}
console.log(newCat);
//현대 (2)
const modern = function ({
    name,
    age,
    color,
    status = '이상 없음'
}){
    return  `${name}:${age}:${color}:${status}:`
}
console.log(modern({
    name :'밤이',
    age : 2,
    color : '검/흰',
    status : '겁쟁이',
}));

// const modern2 = (object)=>{
//     object = {status : '이상없음',...object}

//     return `${object.name}:${object.age}:${object.color}:${object.status}:`
// }
const modern2 = (object)=>{
    const {name,age,color,status} = {status : '이상없음',...object}

    return `${name}:${age}:${color}:${status}:`
}


console.log(modern2({
    name :'밤이',
    age : 2,
    color : '검/흰',
    status : '겁쟁이,귀염둥이',
}));