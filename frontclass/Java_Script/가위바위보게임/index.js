/**
 * 가위 : 0 바위는 : 1 보는 :2
 */
(()=>{
    'use strict'
    const tagCom =document.querySelector('#com');
    const tagBtn =document.querySelectorAll('#self>button');
    const tagSelf=document.querySelector('#self');
    let choice = 0;
    let user = 0;
    let intervalId =null;
    let comCount =0;
    let userCount =0;

    

    const handlerInterval= ()=>{
        choice++;
        if(choice > 2) choice=0;
        // console.log(choice);
        tagCom.style.backgroundPosition = `${choice*(-220)}px`;
    }
    intervalId = setInterval(handlerInterval,500);
    
    const handlerBtnClick =(e)=>{
        user = parseInt(e.target.dataset.num)
        
        // if(obj.className === 'scissors') {number = 0;}
        // else if(obj.className === 'rock') {number = 1;}
        // else if(obj.className === 'paper') {number = 2;}
        tagSelf.style.backgroundPosition = `${user*(-220)}px`;
        clearInterval(intervalId)
        compareNum();
        setTimeout(()=>{
            intervalId = setInterval(handlerInterval,500);
        },1000);
    }

    const drawSumju =(msg,user,com) =>{
        /**<p>msg</p>
         * body 아래에 추가
         */
        const obj = document.createElement('p');
        obj.textContent = msg ;
        obj.className = 'result bg'
        document.querySelector('body').appendChild(obj);
        if (user === 3){
            obj.textContent = `나의 승리 ${user}:${com}`
        }else if(com ===3){
            obj.textContent = `컴퓨터의 승리 ${user}:${com}`
        }else{
            obj.textContent = `${msg} ${user}:${com}`
        }
    }


    const compareNum =()=>{
        let result = choice-user;
        let massege ='무승부';
        if([-1,2].includes(result)){
            massege = '이겼다'
            userCount++;
        }else if([-2,1].includes(result)){
            massege = '졌다'
            comCount++;
        }
        drawSumju(massege,userCount,comCount)
        // if (result === -1 || result === 2){
        //     massege ='이겼다'
        // }else if (result === 2 || result === 1){
        //     massege ='졌다'
        // }
        // switch(choice){
        //     // 가위0 바위1 보2
        //     case 0 : //가위
        //         if(result=== -1) massege = '이겼다';
        //         if(result=== -2) massege = '졌다';
        //         break;
        //     case 1 : //바위
        //         if(result=== -1) massege = '이겼다';
        //         if(result=== 1) massege = '졌다';
        //         break;
        //     case 2 : //보
        //         if(result=== 2) massege = '이겼다.';
        //         if(result=== 1) massege = '졌다.';
        //         break;
        }


    tagBtn.forEach((v)=>{
        v.addEventListener('click',handlerBtnClick)
    })
})();

window.addEventListener('blur',(e)=>{
    console.log(e+'떠납니다.');
})
window.addEventListener('focus',(e)=>{
    console.log(e+'돌아왔습니다.');
})

window.addEventListener('beforeunload',()=>{
    event.preventDefault();
    event.returnValue = '';
})