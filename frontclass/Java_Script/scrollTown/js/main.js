const tagBg = document.querySelectorAll('.bg');
console.log(tagBg);
const tagBgArr = [...tagBg];
const handlerScroll = () =>{
    //전체 스크롤에 대한 현재 위치값을 100분율로 표시
    //퍼센트값이 25 이하면 아침 이상이면 점심 75이상이면 저녘
    const totalHeight = document.scrollingElement.scrollHeight;
    const clientHeight = document.scrollingElement.clientHeight;
    const screenY = document.scrollingElement.scrollTop;
    const maxScrollH = totalHeight-clientHeight;
    const percent = ((screenY/maxScrollH)*100);

    if(percent <= 25){
        tagBgArr[0].classList.add('active');
        tagBgArr[1].classList.remove('active');
    }else if(percent <= 50){
        tagBgArr[1].classList.add('active');
        tagBgArr[2].classList.remove('active');
    }else if (percent <= 75){
        tagBgArr[2].classList.add('active');
        tagBgArr[3].classList.remove('active');
    }else if (percent > 75){
        tagBgArr[3].classList.add('active');
    }


}

const init = ()=>{
    window.addEventListener('scroll',handlerScroll)
}
window.addEventListener('load',init);