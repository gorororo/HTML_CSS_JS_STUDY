const END_POSITION = -500;
const SEC_GAP = 200;
const BOX_WIDTH = 1000;
const tagFront = document.querySelectorAll('.front');
const tagProgress = document.querySelector('.progress-bar');
const tagBox = document.querySelector('.box');
const tagNav = document.querySelector('nav');
const tagStage = document.querySelector('.stage');
let totalScroll = 0;
// const zSecPos = [-500,0,200,400,500];
const zSecPos = [];

const getIdxSection = (zPos)=>{
    for(let i = 0 ; i<zSecPos.length; i++){
        if(zPos >= zSecPos[i] && zPos<zSecPos[i+1]){
            return i;
        }
    }
    return 0;
}
const setSectionPos = ()=>{
    let endPos = END_POSITION;
    for (let i=1 ; i<=tagFront.length; i++){
        tagFront[tagFront.length-i].style.transform = `translateZ(${endPos}vw)`;
        endPos+=SEC_GAP;
    };
    //menu gap zSecPos = [-500,0,200,400,500]
    endPos = END_POSITION + BOX_WIDTH +(SEC_GAP*0.5);
    for(let i=tagFront.length; i>0; i--){
        zSecPos[i] = endPos;
        endPos -= SEC_GAP;
    }
    zSecPos[0]=END_POSITION;
};

const setMenuActive = (idx)=>{
    const tagActive = document.querySelector('.active');
    tagActive.classList.remove('active');
    tagNav.children[idx].classList.add('active');
}

const handlerResize=()=>{
    totalScroll = document.scrollingElement.scrollHeight-window.innerHeight;
}

const handlerScroll = ()=>{
    const screenTop = window.scrollY;
    const scrollPer = screenTop/totalScroll;
    const zPos = scrollPer*(BOX_WIDTH-20)-(500);
    tagProgress.style.width = `${scrollPer*100}%`;
    tagBox.style.transform = `translateZ(${zPos}vw)`;
    const idx = getIdxSection(zPos);
    setMenuActive(idx);
};

const handlerMouseMove = (event)=>{
    const posX = -1 + (event.clientX/window.innerWidth)*2;
    const posY = 1 - (event.clientY/window.innerHeight)*2;
    tagStage.style.transform = `rotateX(${posY*10}deg) rotateY(${posX*10}deg)`;
}

// const handlerClick = (event)=>{
//     event.preventDefault();
//     [...tagNav.children].forEach((elem,index)=>{
//         elem.onclick = (v)=>{
//             const tagActive = document.querySelector('.active');
//             tagActive.classList.remove('active');
//             if(v.currentTarget===elem){
//                 console.log(elem);
//                 tagBox.style.transform = `translateZ(${zSecPos[index]}vw)`;
//                 tagNav.children[index].classList.add('active');
//                 window.scrollTo(0,2000*[index]);
//             }
//         }
//     })
// }
const handlerMenuClick = (event)=>{
    event.preventDefault();
    const target = event.target;
    if(target.tagName === 'A'){
        //메뉴 이동
        const idx= target.getAttribute('href');
        tagBox.style.transform = `translateZ(${zSecPos[idx]}vw)`;
        setMenuActive(idx);
    }
}

const init = ()=>{
    setSectionPos();
    window.addEventListener('resize',handlerResize());
    window.addEventListener('scroll',handlerScroll);
    window.addEventListener('mousemove',handlerMouseMove);
    tagNav.addEventListener('click',handlerMenuClick);
};
window.addEventListener('load',init);