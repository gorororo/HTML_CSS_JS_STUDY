// const tagBox = document.querySelectorAll('section div');
// console.log(tagBox);
const tagSection = document.querySelectorAll('section')
console.dir(tagSection[0]);
const MAX_MARGEN =300;

const handlerScroll = ()=>{
    tagSection.forEach((elem)=>{
        const boxTop = elem.getBoundingClientRect().top;
        if(window.innerHeight > boxTop+MAX_MARGEN){
            elem.childNodes.forEach((v)=>{
                v.className = 'show';
            });
        }else if(window.innerHeight === window.innerHeight){
            elem.childNodes.forEach((v)=>{
                v.className = '';
            });
        }
    });
}

const init = () =>{

    window.addEventListener('scroll',handlerScroll);
}
window.addEventListener('load',init);