(()=>{
    'use strict'
    const tagPrev = document.querySelector('.prev');
    const tagNext = document.querySelector('.next');
    const tagSlideWrap = document.querySelector('.slidelist');
    const tagSlideImg =document.querySelectorAll('.slidelist>img');
    
    let tagDot;
    const SLIDE_LEN =tagSlideImg.length;
    const IMAGE_WIDTH = tagSlideImg[0].clientWidth;
    const SLIDE_SPEED = 200;
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
        if(currentIdx <0 ) currentIdx=0;
        tagSlideWrap.style.transform = `translateX(-${(currentIdx+1)*IMAGE_WIDTH}px)`;
    }
    const handlerClickPrev=()=>{
        currentIdx--;
        if(currentIdx < 0){
            setTimeout(() => {
                tagSlideWrap.style.transition = '0';
                tagSlideWrap.style.transform = `translateX(-${SLIDE_LEN*IMAGE_WIDTH}px)`;
            }, 200);
            currentIdx = SLIDE_LEN -1;
        }
        // if(currentIdx === 0 ){
        //     tagPrev.setAttribute('disabled','ture');
        // }
        // tagNext.removeAttribute('disabled')
        if(currentIdx<=SLIDE_LEN){
        tagSlideWrap.style.transition = SLIDE_SPEED+'ms'
        tagSlideWrap.style.transform = `translateX(-${(currentIdx+1)*IMAGE_WIDTH}px)`;}
        drawClickDot(tagDot[currentIdx]);
    }
    const handlerClickNext=()=>{
        
        currentIdx++;
        if(currentIdx > SLIDE_LEN-1){
            setTimeout(() => {
                tagSlideWrap.style.transition = '0';
                tagSlideWrap.style.transform = `translateX(-${IMAGE_WIDTH}px)`;
            }, 200);
            currentIdx=0;
        }
        // if(currentIdx === SLIDE_LEN-1){
        //     tagNext.setAttribute('disabled','ture');
        // }
        // tagPrev.removeAttribute('disabled');
        tagSlideWrap.style.transition = SLIDE_SPEED+'ms'
        tagSlideWrap.style.transform = `translateX(-${(currentIdx+1)*IMAGE_WIDTH}px)`;
        drawClickDot(tagDot[currentIdx]);
    }

    const cloneImageNode=()=>{
        const firstNode = tagSlideWrap.firstElementChild;
        const lastNode =tagSlideWrap.lastElementChild;

        const cloneFirst = firstNode.cloneNode(true);
        const cloneLast = lastNode.cloneNode(true);
        tagSlideWrap.appendChild(cloneFirst);
        tagSlideWrap.insertBefore(cloneLast,firstNode);
    }


    const init = ()=>{
        createElemDot();
        cloneImageNode();
        tagPrev.addEventListener('click',handlerClickPrev);
        tagNext.addEventListener('click',handlerClickNext);
        // tagPrev.setAttribute('disabled','ture');
    }


    init()

})()