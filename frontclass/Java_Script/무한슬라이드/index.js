(()=>{
    'use strict'
    const tagPrev = document.querySelector('.prev');
    const tagNext = document.querySelector('.next');
    const tagSlideList = document.querySelector('.slidelist');
    const tagSlideImg =document.querySelectorAll('.slidelist>img');
    const tagPlay = document.querySelector('.play');
    const tagStop = document.querySelector('.stop');
    let tagDot;
    let intervalID;
    const SLIDE_LEN =tagSlideImg.length;
    const IMAGE_WIDTH = tagSlideImg[0].clientWidth;
    const MOVE_TIME = 300;
    let currentIdx = 0;
    
    const getChildIndex =(obj)=>{
        const elem = obj.parentNode.childNodes;
        for(let i = 0; i<elem.length;i++){
            if(elem[i]===obj){
                return i;
            }
        }
        return -1;
    }

    const createElemDot=()=>{
        let dotTag = '';
        const tagCircle = document.querySelector('.circle');
        for(let i=0; i<SLIDE_LEN; i++){
            // dottag = document.createElement('p')
            dotTag += `<p class="dot" data-idx=${i}></>`;
            tagCircle.innerHTML = dotTag;
            tagDot = document.querySelectorAll('.dot');
            tagDot[0].classList.add('active');
            tagDot.forEach((v)=>{
                v.addEventListener('click',handlerClickDot)
            })
        }
    }
    const drawClickDot = (obj)=>{
        const curDot =document.querySelector('.active');
        curDot.classList.remove('active');
        obj.classList.add('active');
    }
    const handlerClickDot=(e)=>{
        let obj =e.target;
        drawClickDot(obj);
        // currentIdx = parseInt(obj.dataset.idx);
        // tagSlideWrap.style.transform = `translateX(-${currentIdx*IMAGE_WIDTH}px)`;
        currentIdx = getChildIndex(obj);
        tagSlideList.style.transition = MOVE_TIME+'ms';
        if(currentIdx <0 ) currentIdx=0;
        tagSlideList.style.transform = `translateX(-${(currentIdx+1)*IMAGE_WIDTH}px)`;
    }
    const handlerClickPrev=()=>{
        currentIdx--;
        if(currentIdx >= -1){
            tagSlideList.style.transition = MOVE_TIME+'ms';
            tagSlideList.style.transform = `translateX(-${(currentIdx+1)*IMAGE_WIDTH}px)`;
        }
        if(currentIdx === -1){
            setTimeout(()=>{
                tagSlideList.style.transition = '0ms';
                tagSlideList.style.transform = `translateX(-${SLIDE_LEN*IMAGE_WIDTH}px)`;
            },MOVE_TIME)
            currentIdx = SLIDE_LEN-1;
        }
        drawClickDot(tagDot[currentIdx]);
        // setTimeout(() => {
        //     tagSlideWrap.style.transition = '0';
        //     tagSlideWrap.style.transform = `translateX(-${SLIDE_LEN*IMAGE_WIDTH}px)`;
        // }, 200);
        // currentIdx = SLIDE_LEN -1;
        // if(currentIdx === 0 ){
        //     tagPrev.setAttribute('disabled','ture');
        // }
        // tagNext.removeAttribute('disabled')
    }

    const handlerClickNext=()=>{
        
        currentIdx++;
        if(currentIdx <=SLIDE_LEN){
            tagSlideList.style.transition = MOVE_TIME+'ms';
            tagSlideList.style.transform = `translateX(-${(currentIdx+1)*IMAGE_WIDTH}px)`;
        }
        if(currentIdx === SLIDE_LEN){
            setTimeout(()=>{
                tagSlideList.style.transition = '0ms';
                tagSlideList.style.transform = `translateX(-${IMAGE_WIDTH}px)`;
            },MOVE_TIME);
            currentIdx = 0;
        }
        drawClickDot(tagDot[currentIdx]);
        // if(currentIdx > SLIDE_LEN-1){
        //     setTimeout(() => {
        //         tagSlideWrap.style.transition = '0';
        //         tagSlideWrap.style.transform = `translateX(-${IMAGE_WIDTH}px)`;
        //     }, 200);
        //     currentIdx=0;
        // }
        // if(currentIdx === SLIDE_LEN-1){
        //     tagNext.setAttribute('disabled','ture');
        // }
        // tagPrev.removeAttribute('disabled');
        // tagSlideWrap.style.transition = SLIDE_SPEED+'ms'
        // tagSlideWrap.style.transform = `translateX(-${(currentIdx+1)*IMAGE_WIDTH}px)`;
        // drawClickDot(tagDot[currentIdx]);
    }

    const cloneImageNode=()=>{
        const firstNode = tagSlideList.firstElementChild;
        const lastNode =tagSlideList.lastElementChild;
        const cloneFirst = firstNode.cloneNode(true);
        const cloneLast = lastNode.cloneNode(true);
        tagSlideList.appendChild(cloneFirst);
        tagSlideList.insertBefore(cloneLast,firstNode);
    }

    const handlerClickPlay=()=>{
        intervalID=setInterval(handlerClickPrev,1000);
    }

    const handlerClickStop=()=>{
        clearInterval(intervalID)
    }


    const init = ()=>{
        cloneImageNode();
        createElemDot();
        tagPrev.addEventListener('click',handlerClickPrev);
        tagNext.addEventListener('click',handlerClickNext);
        tagPlay.addEventListener('click',handlerClickPlay);
        tagStop.addEventListener('click',handlerClickStop);
        // tagPrev.setAttribute('disabled','ture');
    }


init()

})()