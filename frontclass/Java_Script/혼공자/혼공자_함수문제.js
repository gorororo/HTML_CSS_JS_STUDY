let numbers = [273,25,75,52,103,32,57,24,76]

numbers = numbers.filter((v)=>v % 2 == 1)
console.log('홀수만')
console.log(numbers);
numbers = numbers.filter((v)=>v <= 100)
console.log('100보다 크거나 같다면')
console.log(numbers);
numbers = numbers.filter((v)=>v % 5 ===0)
console.log('5로나눈 나머지가 0인수만 추출')
console.log(numbers);

const array = ['사과','배','귤','바나나']
array.forEach((v,i)=>console.log(i));
array.forEach(v=>console.log(v));