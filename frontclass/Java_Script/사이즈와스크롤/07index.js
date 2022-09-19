const tagBox = document.querySelectorAll("section div");
const tagSection = document.querySelectorAll("section");
const MAX_MARGEN = 200;
console.log('scrollTop : '+document.scrollingElement.scrollTop);
console.log('scrollY : '+window.scrollY);
console.log('screenY : '+window.screenY);
console.log('scrollHeight : '+document.scrollingElement.scrollHeight);
console.log('clientHeight : '+document.scrollingElement.clientHeight);
console.log('DO scrollHeight : '+document.documentElement.scrollHeight);
console.log('DO offsetHeight : '+document.documentElement.offsetHeight);
console.log('DO clientHeight : '+document.documentElement.clientHeight);
console.log('innerHeight : '+window.innerHeight);
console.log('outerHeight : '+window.outerHeight);
const handlerScroll = () => {
    tagSection.forEach((elem) => {
        const boxTop = elem.getBoundingClientRect().top;
        // console.log('boxTop : '+boxTop);
        // console.log('scrollTop : '+document.scrollingElement.scrollTop);
        // console.log('clientHeight : '+document.scrollingElement.clientHeight);
        // console.log('innerHeight : '+window.innerHeight);
        // console.dir(elem.parentNode.children[2].children[0].getBoundingClientRect().top);
        if (window.innerHeight > boxTop + MAX_MARGEN) {
            elem.childNodes.forEach(v => v.className = "show");
        }
        if (boxTop > document.scrollingElement.scrollTop/2+MAX_MARGEN) {
            // location.replace(location.href);
            // history.go(0);
            elem.childNodes.forEach(v => v.className = "");
            // elem.children[0].classList.add("box-up");
            // elem.children[1].classList.add("box-up");
            // elem.children[2].classList.add("box-up");
            // elem.children[3].classList.add("box-up");
            tagBox[0].classList.add("box-up");
            tagBox[1].classList.add("box-up");
            tagBox[2].classList.add("box-up");
            tagBox[3].classList.add("box-up");
            tagBox[4].classList.add("box-down");
            tagBox[5].classList.add("box-up");
            tagBox[6].classList.add("box-right");
            tagBox[7].classList.add("box-left");
            tagBox[8].classList.add("box-rotateR");
            tagBox[9].classList.add("box-rotateL");
            tagBox[10].classList.add("box-scaleL");
            tagBox[11].classList.add("box-scaleR");
        }
    });
};

const init = () => {
    window.addEventListener("scroll", handlerScroll);
    window.addEventListener("scroll", (event)=>{
        let y =this.scrollY;
        let x =this.scrollX;
        console.log(y);
        console.log(x);

    });

};
window.addEventListener("load", init);
