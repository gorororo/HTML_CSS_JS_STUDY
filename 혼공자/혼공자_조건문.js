const month = new Date().getMonth() + 1;

if (3 <= month && month <= 5) {
    console.log("봄 입니다.");
} else {
    if (6 <= month && month <= 8) {
        console.log("여름 입니다.");
    } else if (9 <= month && month <= 11) {
        console.log("가을 입니다.");
    } else {
        console.log("겨울 입니다.");
    }
}
let 자료 = 81;
switch (자료 % 2) {
    case 0:
        console.log(`입력된 값은 : ${자료} 짝수`);
        break;
    case 1:
        console.log(`입력된 값은 : ${자료} 홀수`);
        break;
    default:
        console.log(`${자료} 은 숫자가 아닙니다`);
        break;
}
//삼항 연산자
// 조건식 ? true : false
let 자료2 = 255;
자료2 > 300 ? console.log("더 큽니다.") : console.log("더 작습니다.");

//논리 연산자
// 또는 (||) 둘중 하나가 true 이면 -> 전체가 true
console.log("시작");
true || console.log("1 : 또는 연산자");
false || console.log("2 : 또는 연산자");

//그리고(&&) 둘 중 하나가 false 이면 -> 전체가 false
false && console.log("1 : 그리고 연산자");
true && console.log("2 : 그리고 연산자");
console.log("종료");

let 학점 = 4.2;

if (학점 === 4.5) {
    console.log("신");
} else if (학점 >= 4.2) {
    console.log("교수님의 사랑");
} else if (학점 >= 3.5) {
    console.log("현 체제의 수호자");
} else if (학점 >= 2.8) {
    console.log("일탈을 꿈꾸는 소시민");
} else if (학점 >= 2.3) {
    console.log("오락문화의 선구자");
} else if (학점 >= 1.75) {
    console.log("불가촉천민");
} else if (학점 >= 1.0) {
    console.log("자벌레");
} else if (학점 >= 0.5) {
    console.log("플랑크톤");
} else {
    console.log("시대를 앞서가는 혁명의 씨앗");
}

let 태어난연도 = "1987";
const year = Number(태어난연도);
const e = year % 12;

let result;
// if (e === 0) {
//     result = "원숭이";
// } else if (e === 1) {
//     result = "닭";
// } else if (e === 2) {
//     result = "개";
// } else if (e === 3) {
//     result = "돼지";
// } else if (e === 4) {
//     result = "쥐";
// } else if (e === 5) {
//     result = "소";
// } else if (e === 6) {
//     result = "호랑이";
// } else if (e === 7) {
//     result = "토끼";
// } else if (e === 8) {
//     result = "용";
// } else if (e === 9) {
//     result = "뱀";
// } else if (e === 10) {
//     result = "말";
// } else if (e === 11) {
//     result = "양";
// }

// console.log(`${year}년에 태어났다면 ${result}띠 입니다.`)
// const tti = '원숭이,닭,개,돼지,쥐,소,호랑이,토끼,용,뱀,말,양'.split(',')
// console.log(`${year}년에 태어났다면 ${tti[year % 12]}띠 입니다.`)
// console.log(tti);


    switch(e){
        case 0 :
            result = '원숭이';
            break
        case 1 :
            result = '닭';
            break
        case 2 :
            result = '개';
            break
        case 3 :
            result = '돼지';
            break
        case 4 :
            result = '쥐';
            break
        case 5 :
            result = '소';
            break
        case 6 :
            result = '호랑이';
            break
        case 7 :
            result = '토끼';
            break
        case 8 :
            result = '용';
            break
        case 9 :
            result = '뱀';
            break
        case 10 :
            result = '말';
            break
        case 11 :
            result = '양';
            break
        }
console.log(`${year}년에 태어났다면 ${result}띠 입니다.`)

const rowInput = 2022;
const years = Number(rowInput);

let result1 
const e1 = years % 12;
if      (e === 0)   {result1 = "신"} 
else if (e1 === 1)  {result1 = "유"} 
else if (e1 === 2)  {result1 = "술"} 
else if (e1 === 3)  {result1 = "해"} 
else if (e1 === 4)  {result1 = "자"} 
else if (e1 === 5)  {result1 = "축"} 
else if (e1 === 6)  {result1 = "인"} 
else if (e1 === 7)  {result1 = "묘"} 
else if (e1 === 8)  {result1 = "진"} 
else if (e1 === 9)  {result1 = "사"} 
else if (e1 === 10) {result1 = "오"} 
else if (e1 === 11) {result1 = "미"}

let result2
const e2 = years % 10
if      (e2 === 0)  {result2 = "경"} 
else if (e2 === 1)  {result2 = "신"} 
else if (e2 === 2)  {result2 = "임"} 
else if (e2 === 3)  {result2 = "계"} 
else if (e2 === 4)  {result2 = "갑"} 
else if (e2 === 5)  {result2 = "을"} 
else if (e2 === 6)  {result2 = "병"} 
else if (e2 === 7)  {result2 = "정"} 
else if (e2 === 8)  {result2 = "무"} 
else if (e2 === 9)  {result2 = "기"} 

console.log(`${year}년에 태어났다면 ${result1+result2}띠 입니다.`)

true ? console.log('A1') : console.log('B1');
false ? console.log('B2') : console.log('A2');
true || console.log('A3');
true && console.log('A4');