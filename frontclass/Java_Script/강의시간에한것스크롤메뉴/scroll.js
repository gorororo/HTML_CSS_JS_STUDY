const tagSection = document.querySelectorAll('section');
const tagMenu = document.querySelector('nav');
const sectionPos = [];

const saveSectionPos = ()=>{
    tagSection.forEach((elem,idx)=>{
        sectionPos[idx] = elem.offsetTop - (window.innerHeight*0.5);
    });
    sectionPos[tagSection.length] = document.documentElement.scrollHeight;
    console.log(sectionPos);
};
const setMenuActive = (idx)=>{
    const prevObj = document.querySelector('.active');
    prevObj.classList.remove('active');
    tagMenu.children[idx].classList.add('active');
}

const handlerScroll =() =>{
    const scroll = window.pageYOffset || window.screenY;
    tagSection.forEach((elem,idx)=>{
        if(scroll > sectionPos[idx] && scroll < sectionPos[idx+1]){
            setMenuActive(idx);
        }
    });
};

const init = ()=>{
    saveSectionPos()
    window.addEventListener('scroll',handlerScroll)
}
window.addEventListener('load',init);