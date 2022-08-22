// const number = prompt('몇 명이 참가하나요?');
// const realNumber = Number(number);
// console.log(typeof realNumber);
// alert(number);
// const yesOrno = confirm('확인이나 취소를 눌러보세요');

(function(){
    'use strict';
    /**변수정의**/
    const MAX = Number(prompt('몇 명이 참가하나요?'));
    const tagInput = document.querySelector('input');
    const tagBtn = document.querySelector('button');
    const tagOrder = document.getElementById('order');
    const tagWord = document.getElementById('word');
    const tagHistory = document.querySelector('#history');
    console.log(tagHistory);
    let inputWord = '';
    let preWord = '';
    let arrWord = [];
    
    /**함수 정의**/
    // function onInputKeypress(event){
    //     if (event.key === 'Enter'){
    //         event.preventDefault();
    //     }
    // }
    const onInputKeypress = (event)=>{
        if (event.key === 'Enter'){
            event.preventDefault();
            onBtnClick();
        }
    };
    const onTextInput = (event)=>{
        console.log(event.target.value);
    }
    function onBtnClick(){
        preWord = inputWord;
        console.log(inputWord);
        if(tagInput.value){ 
            //단어가 들어가 있는 상태
            if( !preWord || preWord [preWord.length-1]===tagInput.value[0]){
            inputWord = tagInput.value;
            let number = Number(tagOrder.textContent);
            // if(number+1 > MAX){
            //     tagOrder.textContent = number=1;
            // }else{
            //     tagOrder.textContent = number+1;
                
            // }
            tagOrder.textContent = (number+1>MAX)? 1 : number+1;
            tagWord.textContent = inputWord;
            tagInput.value='';
            tagInput.focus();
            //history 등록
            // let text = tagHistory.textContent;
            // tagHistory.textContent = (text) ? text+number+'번'+'=>'+inputWord :inputWord;
            // tagHistory.innerHTML = '<li>'+tagOrder+inputWord+'</li>'
            arrWord.push(inputWord);
            console.log(arrWord);
            let viewText=''
            for(let text of arrWord){
                viewText += '사용자 :'+number+' '+text+'=>';
            }
            tagHistory.textContent = viewText;
            }else{
                alert('올바르지 않은 단어 입니다.')
                tagInput.value='';
                tagInput.focus();
            }
        }else{
            //단어가 들어가 있지 않은 상태
            alert('올바르지 않은 단어 입니다.')
            tagInput.value='';
            tagInput.focus();
        }

    };
    // function trueFalse(){
    //     if (preWord[preWord.length-1]===inputWord[0]){
    //         console.log(preWord[preWord.length-1])
    //         console.log(inputWord[0])
    //         alert('정답입니다.')
    //     }else{
    //         alert('오답입니다.')
    //     }
    // }
    /***********/ 

    /**함수 실행**/ 
    tagInput.focus();
    tagInput.addEventListener('keypress',onInputKeypress);
    tagInput.addEventListener('input',onTextInput);
    tagBtn.addEventListener('click',onBtnClick);
    // tagBtn.addEventListener('click',trueFalse);

})();

// $(function(){
//     $('.mainmenu').mouseenter(function(){
//     // $('header nav >ul').mouseenter(function(){
//         // $('.submenu').stop().slideDown('slow')
//         $(this).find('.submenu').stop().slideDown('slow')
//     })
//     $('header nav > ul').mouseleave(function(){
//         $('.submenu').stop().slideUp('slow')
    
//     })

//     $('.slide:gt(0)').hide()
//     setInterval(function(){
//         $('slide:first').fadeOut(1500).next().fadeIn(1500)
//         $('slidelist').appendTo('slide:first')
//     },3000)
//     setInterval(() => {
//         $('.slidelist').animate({'marginTop':'-300px'},function(){
//             $('.slide:first').appendTo('.slidelist')
//             $('slidelist').css({'marginTop':'0px'})
//         })
        
//     }, 3000);
//     $('.tablist h3').click(function(){
//         $('.tablist h3').removeClass('on')
//         $(this).addClass('on')

//         let idx = (this).index()
//         $('.tabitem >*').hide().removeClass('on')
//         $('.tabitem >*').eq(idx).show().addClass('on')
//     })

//     $('.notice li:nth-child(1)').click(function(){
//         $('.popupbox').show()
//     })
//     $('.popupitem button').click(function(){
//         $('.popupbox').hide()
//     })

// })