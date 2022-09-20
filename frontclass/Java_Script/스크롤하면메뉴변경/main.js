const tagMenuli = document.querySelectorAll('nav ul li');
const tagSectionli = document.querySelectorAll('section');
const tagMenu = [...tagMenuli];
const tagSection = [...tagSectionli];
const MAX_MARGEN = 300;
// console.log(tagMenu);
// console.log(tagSection);

const handlerScroll = ()=>{
    const totalHeight = document.scrollingElement.scrollHeight;
    const clientHeight = document.scrollingElement.clientHeight;
    const screenY =document.scrollingElement.scrollTop;
    const maxScroll = totalHeight-clientHeight;
    const percent = (screenY/maxScroll)*100;
    tagSection.forEach((elem)=>{
        const sectionTop = elem.getBoundingClientRect().top;
        const base = elem.getBoundingClientRect().bottom
        console.log(base/100);
        if(base < percent){
            tagMenu.forEach(v=>v.classList.remove('select'));
        }

    });
}


const init = ()=>{
    window.addEventListener('scroll',handlerScroll);

}

window.addEventListener('load',init);