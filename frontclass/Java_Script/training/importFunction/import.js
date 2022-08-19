// const str1 = 'javascript'
// const str2 = new String('javascript')

// console.log(typeof str1 ,str1)
// console.log(typeof str2 ,str2)

// console.log(str1 === 'javascript')
// console.log(str2 === new String('javascript'))

// console.log(str1.valueOf() === str2.valueOf())

//string -> trim(공백을 없애주는 매서드)

// const str = '              abc ABC               k';

// console.log(str.trim()) 

// const sentence = 'the sun shine'
// console.log(sentence.slice(4,7));
// console.log(sentence.slice(-5));
// console.log(sentence.substr(4,3));
// const arr = [1,2,3]
// const bool = true;
// console.log(arr.toString());
// console.log(typeof bool.toString(),bool.toString());
// console.log(sentence.replace('shine','rain'))
// console.log(sentence.charAt(4))

// console.log(sentence.indexOf('w'));
// console.log(sentence.toUpperCase());
// console.log(sentence.toLowerCase());

// const str = '123456789';
// console.log(b = str.split(''),typeof b)
// const arr = Array.from(str);
// const arrtemp = Array.from(str, el=>el**2)
// console.log(arrtemp);

// const data = ['a','b','c','d','e','f'];
// console.log(data.join(':'));
// const won = '1,234,567';
// console.log(won.split(','));
// console.log(won.endsWith('7'));


// let fruits = ['apple','banana'];
// console.log(fruits);
// fruits[2] = 'orange';
// fruits.push('melon');//맨뒤 추가
// fruits.pop();//맨뒤 삭제
// fruits.unshift('first'); //첫번째 추가
// fruits.shift()//첫번째 삭제
// fruits[fruits.length] ='berry';
// fruits.splice(1,2)
// fruits.splice(1,0,'apple','banana')
// console.log(fruits);
// console.log(fruits.lastIndexOf('apple'))

// fruits.forEach((v,idx)=>{
//     console.log(`v=${v} \t i=${idx}`);
// })

// const arr = [
//     {id:0 , name:'aaa',age:6},
//     {id:1 , name:'bbb',age:3},
//     {id:2 , name:'ccc',age:5},
//     {id:3 , name:'ddd',age:2},
// ];

// let here = arr.some(el => el.name==='bbb');
// here = arr.some(el => el.age > 5);
// here = arr.every(el => el.name ==='bbb');

// here= arr.filter(el => el.age>=5);
// console.log(here)

const value = [[1,[2,3]],[4,5,6],['a','b',['a','b','c']]];
// console.log(value);
const result = value.reduce( (arr,el)=>arr.concat(el),[]);
const result2 = result.reduce( (arr,el)=>arr.concat(el),[]);
console.log(result);
console.log(result2);