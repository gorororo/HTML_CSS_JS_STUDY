// const test = function(name, age,color,status = '이상 없음'){
//     return `${name} : ${age} : ${color} : ${status}`
// }

// console.log(test('구름','7','갈색'))

const test = function(object){
    //과거(1)
    object.status = object.status !== undefined ? object.status : '이상없음'
    //과거(2)
    object.status = object.status ? object.status : '이상 없음'
    //과거(3)
    object.status = object.status || '이상 없음'
    //현대(1)
    object = {status: '이상 없음',...object}
    //현대(2)
    fun = function ({name,age,color,status = '이상없음'}){
        return  `${object.name} : ${object.age} : ${object.color} : ${object.status}`
    }
    return `${object.name} : ${object.age} : ${object.color} : ${object.status}`
}

console.log(test({
    name : '구름',
    age: 7,
    color:'갈색',
    status : '이상없음'
}))
