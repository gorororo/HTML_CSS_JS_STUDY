(function(){
    'use strict'
    const tagNumber =document.querySelectorAll('.num-');
    const tagSet = document.querySelectorAll('.set-');
    const tagAc=document.querySelector('.AC');
    const tagEquals=document.querySelector('.equals');
    const tagInput = document.querySelector('#result');
    let num1='';
    let num2='';
    let op='';
    let inputCalc='';
    let isChange = false;
    console.log(isChange);
    // 함수 정의
    
    const displayCalc = (text) =>{
        inputCalc += text;
        tagInput.value= inputCalc;

        // console.log(`inputCalc 는 ${inputCalc}`)
    };
    const changeNuber =(result) =>{
        num1 = inputCalc = ''+result;
        num2 = op = '';
        isChange = true;
        console.log(isChange);
    }
    const onClickNumber = (e) =>{
        console.log('Number click',e.target.textContent);
        if (op && num1){
            // 있다면 num2
            num2 += e.target.textContent;
        }else{
            //없다면 num1
            if(isChange){
                //변경이 된상태
                onClickAC()
                isChange =false;
                console.log(isChange);
            }
            op='';
            num1 += e.target.textContent;
        }
        displayCalc(e.target.textContent)
        // console.log(`num1=${num1} num2=${num2} op=${op}`)
    };
    const onClickOperator = (e) => {
        console.log('Set click',e.target.textContent);
        if(num1){
            if(op){
                onClickEquals();
            }
            op += e.target.textContent;
            displayCalc(e.target.textContent)
            isChange = false;
        }else{
            alert('숫자를 먼저 입력하세요');
        }
    };
    const onClickAC =() =>{
        inputCalc=num1=num2=op='';
        displayCalc('');
    }
    const onClickEquals = () =>{
        if(num2){
            //있다면 계산
            let value1 =parseInt(num1);
            let value2 =parseInt(num2);
            let result = 0;
            switch(op){
                case '+': result = value1 + value2;
                    break;
                case '-': result = value1 - value2;
                    break;
                case '*': result = value1 * value2;
                    break;
                case '/': 
                    result = value1 / value2;
                    result = result.toFixed(2);
                    break;
                default:
                    alert('숫자입력하세요')
                    onClickAC();
                    return false;
            }
            
            displayCalc('='+result);
            changeNuber(result);
        }else{
            //없다면 
            alert('계산할 숫자를 먼저 입력하세요')
        }
    }
    // 함수 실행
    tagNumber.forEach(obj=>obj.addEventListener('click',onClickNumber));
    tagSet.forEach(obj=>obj.addEventListener('click',onClickOperator));
    tagAc.addEventListener('click',onClickAC);
    tagEquals.addEventListener('click',onClickEquals)
})();