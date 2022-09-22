const tagMenulist = document.querySelectorAll('nav ul li');
const tagSectionlist = document.querySelectorAll('section');
const tagPlist = document.querySelectorAll('ul li p');
const tagPl=[...tagPlist];
const tagMenu = [...tagMenulist];
const tagSection = [...tagSectionlist];
const sectionOffsetTop =[];

tagSection.forEach(v=>sectionOffsetTop.push(v.offsetTop));

const addTagMenu = (index)=>{
    tagMenu.forEach((v)=>{v.classList.remove('select')})
    tagMenu[index].classList.add('select');
}

const addTagSection = (index)=>{
    tagSection.forEach((v)=>{v.classList.remove('scale')})
    tagSection[index].classList.add('scale');
}

const handlerClick = ()=>{
    console.log(sectionOffsetTop);
    tagMenu.forEach((elem,index)=>{
        elem.onclick = (v)=>{
            if(v.currentTarget===elem){
                v.currentTarget.classList.add('select');
                window.scrollTo(0,sectionOffsetTop[index]);
            }
        };
    });
};

const handlerScroll = ()=>{
    const totalHeight = document.scrollingElement.scrollHeight;
    const clientHeight = document.scrollingElement.clientHeight;
    const screenY = document.scrollingElement.scrollTop;
    const maxScroll = totalHeight-clientHeight;
    const percent = (screenY/maxScroll)*100;
    console.log(`scrollHeight : ${totalHeight}`)
    console.log(`clientHeight : ${clientHeight}`)
    console.log(`scrollTop : ${screenY}`)
    for(let i=0; i<=tagMenu.length; i=20){
        if(percent < 20){
            addTagMenu(0);
            addTagSection(0);
        }else if (percent <= 40){
            addTagMenu(1);
            addTagSection(1);
        }else if (percent <= 60){
            addTagMenu(2);
            addTagSection(2);
        }else if (percent <= 80){
            addTagMenu(3);
            addTagSection(3);
        }else if (percent <= 100){
            addTagMenu(4);
            addTagSection(4);
        }
    }
};

const init = ()=>{
    handlerClick();
    window.addEventListener('scroll',handlerScroll);
    
}

window.addEventListener('load',init);