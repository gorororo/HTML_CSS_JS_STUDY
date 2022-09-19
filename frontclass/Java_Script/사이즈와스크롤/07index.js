const tagBox = document.querySelectorAll("section div");
const tagSection = document.querySelectorAll("section");
const MAX_MARGEN = 300;

const handlerScroll = () => {
    tagSection.forEach((elem) => {
        const boxTop = elem.getBoundingClientRect().top;
        // console.dir(elem.parentNode.children[2].children[0].getBoundingClientRect().top);
        if (window.innerHeight > boxTop + MAX_MARGEN) {
            elem.childNodes.forEach(v => v.className = "show");
        }
        if (window.scrollY === 0) {
            // location.replace(location.href);
            // history.go(0);
            elem.childNodes.forEach(v => v.className = "");
            elem.children[0].classList.add("box-up");
            elem.children[1].classList.add("box-up");
            elem.children[2].classList.add("box-up");
            elem.children[3].classList.add("box-up");
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
};
window.addEventListener("load", init);
