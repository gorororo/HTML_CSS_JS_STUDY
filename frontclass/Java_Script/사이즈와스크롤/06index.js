const tagBox = document.querySelectorAll('section div');
console.log(tagBox);
const MAX_MARGEN =300;

const handlerScroll = ()=>{
    tagBox.forEach((elem)=>{
        const boxTop = elem.getBoundingClientRect().top;
        if(window.innerHeight > boxTop+MAX_MARGEN){
            elem.classList.add('show');
        };
    });
}

const init = () =>{
    window.addEventListener('scroll',handlerScroll);
}
window.addEventListener('load',init);