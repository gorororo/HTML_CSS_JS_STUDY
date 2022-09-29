const object = {
    //식별자(key)는 1.숫자로 시작하지 않는다. 2. 기호는 $와 _만 포함한다.
    name : '구름',
    age : 7,
}

console.log(object.name)
object.name = '별'
object.age = 1
console.log(object.name)
console.log(object.age)

//요소(element)
const array = [100,20,'문자열',true,function(){},()=>{}]

//속성(property)
//메서드(method) 오브젝트 안에 함수자료형인 속성일뿐
const dog = {
    name:'구름',
    age:7,
    bark: ()=> console.log(`${this.name} 이/가 짖습니다!`),//화살표함수는 바인딩 되지 않는다
    sleep : function() {console.log(`${this.name} 이/가 잡니다!`)}, //바인딩 되었다 
    // this 바인딩: this를 현재 객체와 연결하는 행위
}
dog.bark()
dog.sleep()
//객체의 키와 값을 정적으로 생성한다!
const pet = {
    name: '구름',
    age : 8,
}
//객체의 키와 값을 동적으로 생성한다!
pet.color = 'brown';
//객체의 키와 값을 동적으로 제거한다!
delete pet.color;
// 출력
console.log(pet);

const thisBook = {
    name : '혼자 공부하는 파이썬',
    price : 18000,
    publisher : '한빛미디어'
}
thisBook.month = 9;
thisBook.read = true;
console.log(thisBook);


const objectQ ={
    ko : '빵',
    en : 'bread',
    ja : 'パン',
    fr : 'pain',
    es : 'pan',
    lang:{
        ko : '한국어어',
        en : '영어',
        ja : '일본어',
        fr : '프랑스어',
        es : '스페인어',
    },
    print : function(lang){
        console.log(`${this.ko}는 ${this.lang[lang]}로 ${this[lang]}입니다.`)
    }
}
objectQ.print('es')

const tagLi = document.querySelectorAll('li');

console.log(Array.isArray(tagLi));
const tagLiarr=[...tagLi];
console.log(Array.isArray(tagLiarr));

//함수는 일급 객체(first-class object)다!

