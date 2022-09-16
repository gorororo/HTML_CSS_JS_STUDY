'use strict'

// 스크롤 이벤트 처리
const handlerScroll = (barElem)=>{
    // const totalHeight = document.documentElement.offsetHeight;
    const totalHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight; //100vh
    const screenY = document.documentElement.scrollTop; //scroll 위치
    // const scrollY = window.pageYOffset || window.screenY;
    // console.log(totalHeight);
    // console.log(clientHeight)
    // if(totalHeight - Math.floor(screenY) === clientHeight){
    //     console.log('------------끝-----------')
    // }
    // console.log(screenY, window.pageYOffset);
    const maxScrollH = totalHeight-clientHeight;
    const percent = ((screenY/maxScrollH)*100);
    console.log(percent);
    barElem.style.width = percent+'%';
barElem.textContent
}

//프로그램 시작
const init = ()=>{
    const tagBar = document.querySelector('#scroll-bar');
    window.addEventListener('scroll',()=>{
        handlerScroll(tagBar);
    });

}
window.addEventListener('load',init)