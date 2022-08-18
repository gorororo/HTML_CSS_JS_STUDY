'use strict';
//변수선언
let arrRandom = '';

//객체 선택
const tagForm =document.querySelector('form');
const tagInput = document.querySelector('.input');
const tagResult = document.querySelector('.result');

//함수 정의

tagForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log('submit call')
    if(checkInput(tagInput.value)){
        //입력값을 체크
        let str = checkValue(tagInput.value);
        console.log('str: ');
        tagResult.append(str);
        tagResult.append(document.createElement('br'));
        
    }

})

const analysisNumber = ()=>{
    let answer='';
    while(answer.length < 4){
        let temp = Math.floor(Math.random()*10);

        if(!answer.includes(temp)){
            answer+=temp;
        }
    }
    console.log(answer);
    return answer;
    
}


const checkInput =(input) => {
    //길이가 4개인가
    if (input.length !== 4){
        alert('4자리 숫자가 아닙니다.')
        return false;
    }
    return true;
}
console.log(tagForm);

const checkValue = (answer) => {
    let strike = 0;
    let ball=0;
    let out=0;
    for(let i=0; i<answer.length; i++){
        const idx = arrRandom.indexOf(answer[i])
        if(idx>=0){
            //일치하는 값이 있다
            if(idx === i){
                strike++;
            }else{
                ball++;
            }
        }else{
            //일치하지 않는다
            out++;

        }
    }
    return(`strke : ${strike} ball : ${ball} out : ${out}`);
}
const init=()=>{
    arrRandom=analysisNumber();
}
init();