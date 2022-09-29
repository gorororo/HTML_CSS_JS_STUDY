var _=require('lodash')

// alert('경고');
// const num = 52000;
// num.원 = function(){
//     return this.valueOf()+'원';
// }

// const num = new Number(52000);
// num.원 = function(){
//     return this.valueOf()+'원';
// }


const num = 52000;
Number.prototype.원 = function(){
    return this.valueOf()+'원';
}
console.log(num.원());

function printLang(code){
    return printLang._lang[code]
}
printLang._lang = {
    ko: '한국어',
    en: '영어',
    ja: '일본어',
    fr: '프랑스',
    es: '스페인',
}
console.log('printLang("ko"):', printLang('ko'))
console.log('printLang("en"):', printLang('en'))

const degree = 90
const rad =degree * Math.PI / 180
console.log((Math.sin(rad)));


;