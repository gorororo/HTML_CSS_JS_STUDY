(function(){
    'use strict';
    let displayCalc ='';
    const tagBtnWrap =document.querySelector('.buttons');
    const tagInput = document.querySelector('#result');
    console.log(tagInput);

    const updateDisplay= () =>{
        tagInput.value =displayCalc;
    };
    const displayClear = () =>{
        displayCalc = '';
        updateDisplay();
        
    }
    const addDisplay = (text) => {
        displayCalc += text;
        updateDisplay();
    }
    const calc = () =>{
        let value = eval(displayCalc);
        displayCalc += '=';
        displayCalc += value;
        updateDisplay();
    }
    const onBtnClick = (event) => {
        // console.log(event.target.textContent);
        // console.dir(event.target)
        let type = event.target;
        
        // console.log(type)
        switch(type.className){
            case 'AC':
                //입력된 계산식을 초기화
                displayClear();
                break;
            case 'same':
                //입력된 계산식을 계산
                calc();
                break;
            default:
                //textContent 로 받아와서 입력창에 추가 결합
                addDisplay(type.textContent);
                break;
        }
    }
    tagBtnWrap.addEventListener('click',onBtnClick);
})();