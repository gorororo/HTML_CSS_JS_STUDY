//즉시실행 함수
(function(){
    "use strict";
    // const elemSpan = document.getElementsByTagName('span');

    //쿼리 셀럭터
    // const elemSpan = document.querySelectorAll('span');
    // for(let i =0; i<elemSpan.length ; i++){
    //     console.log(elemSpan[i].innerText)
    // }
    // for (let value of elemSpan){
    //     value.style.fontWeight ='bolder';
    // }
    // elemSpan[0].style.fontWeight ='bolder';
    // for (let idx in elemSpan){
    //     console.log(idx);
    // }
    const tagImg = document.querySelectorAll(".small-wrap>img");
    const tagBig = document.querySelector(".big-wrap>img");
    const slideBtnNext = document.querySelector(".slide_btn_next");
    console.log(slideBtnNext);
    const slidebtnPrev = document.querySelector(".slide_btn_prev");
    console.log(slidebtnPrev);
    const MAX = tagImg.length;
    console.log(` MAX:${MAX} `);
    let currentIdx = 0;

    //큰이미지를 변경하는 함수
    const smallImgClick = function () {
        //클릭이 되면
        showBigImage(this);
    };
    const showBigImage = function (obj) {
        let path = obj.getAttribute("src");
        tagBig.setAttribute("src", path);
        showImgBorder(obj);
    };
    const showImgBorder = function (obj) {
        for (let elemimg of tagImg) {
            elemimg.style.outline = "none";
        }
        obj.style.outline = "2px solid blue";
    };

    //이벤트 등록

    for (let elemimg of tagImg) {
        elemimg.onclick = smallImgClick;
    };
    showImgBorder(tagImg[currentIdx]);
    slideBtnNext.addEventListener("click", function () {
        // console.log(slideBtnNext);
        if (currentIdx <= 0) {
            currentIdx = 0;
        } else {
            currentIdx--;
        };
        // let path = tagImg[currentIdx].getAttribute('src');
        // tagBig.setAttribute('src',path);
        showBigImage(tagImg[currentIdx]);
    });
    slidebtnPrev.addEventListener("click", function () {
        // console.log(slideBtnNext);
        if (currentIdx < MAX - 1) {
            currentIdx++;
        } else {
            currentIdx = MAX - 1;
        }
        // let path = tagImg[currentIdx].getAttribute('src');
        // tagBig.setAttribute('src',path)
        showBigImage(tagImg[currentIdx]);
    });
})();
// function changeBigpic(){
//     let small =this.src;
//     console.log(this)
//     tagBig.setAttribute('src',small);
// };

// for(let i=0; i<tagImg.length; i++ ){
//     tagImg[i].addEventListener('click',changeBigpic);
// };
// tagBig.src = 'gal2.png';
// tagBig.setAttribute('src','gal3.png');

// let init=()=>{

// };
// init();
