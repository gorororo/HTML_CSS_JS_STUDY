const tagBg = document.querySelectorAll('.bg');
const tagTown = document.querySelectorAll('.move img');
const tagSun = document.querySelector('.sunbox');
const tagMoon = document.querySelector('.moonbox');
const tagCircle = document.querySelector('.circle img');
const tagTownArr = [...tagTown];
const tagBgArr = [...tagBg];


const setBackground = (index)=>{
    tagBgArr.forEach(v=>v.classList.remove('active'));
    tagBgArr[index].classList.add('active');
}
const setTownBackground = (index)=>{
    tagTown.forEach(v=>v.classList.remove('active'));
    tagTownArr[index].classList.add('active');
}
const setSunRotate = (PositonDeg)=>{
    tagSun.style.transform = `rotate(${PositonDeg}deg)`;
}
const changeBackground = (percent)=>{
    if(percent < 25){
        setBackground(0);
        setTownBackground(0);
        setSunRotate(-90);
        tagSun.classList.remove('active');
    }else if (percent >= 25 && percent <50){
        setBackground(1);
        setTownBackground(0);
        setSunRotate(-30);
        tagSun.classList.add('active');


    }else if (percent >= 50 && percent <75){
        setBackground(2);
        setTownBackground(1);
        setSunRotate(30);
        tagMoon.style.transform = 'translateY(0px)'
        tagMoon.classList.remove('active');
        tagSun.classList.add('active');
        tagCircle.style.animation = "";
    }else if (percent >= 75 && percent <100){
        setBackground(3);
        setTownBackground(1);
        setSunRotate(90);
        tagMoon.style.transform = 'translateY(200px)'
        tagMoon.classList.add('active');
        tagSun.classList.remove('active');
        tagCircle.style.animation = "none";
}
}
const handlerScroll = () =>{
    //전체 스크롤에 대한 현재 위치값을 100분율로 표시
    //퍼센트값이 25 이하면 아침 이상이면 점심 75이상이면 저녘
    const totalHeight = document.scrollingElement.scrollHeight;
    const clientHeight = document.scrollingElement.clientHeight;
    const screenY = document.scrollingElement.scrollTop;
    const maxScrollH = totalHeight-clientHeight;
    const percent = ((screenY/maxScrollH)*100);

    // if(percent <= 25){
    //     tagBgArr[0].classList.add('active');
    //     tagBgArr[1].classList.remove('active');
    // }else if(percent <= 50){
    //     tagBgArr[1].classList.add('active');
    //     tagBgArr[2].classList.remove('active');
    // }else if (percent <= 75){
    //     tagBgArr[2].classList.add('active');
    //     tagBgArr[3].classList.remove('active');
    // }else if (percent > 75){
    //     tagBgArr[3].classList.add('active');
    // }
    changeBackground(percent);

}

const init = ()=>{
    window.addEventListener('scroll',handlerScroll)
}
window.addEventListener('load',init);