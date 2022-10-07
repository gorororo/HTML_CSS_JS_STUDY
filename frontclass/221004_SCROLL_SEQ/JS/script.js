const setCurrentScene = () => {
    yOffset = window.scrollY || window.pageYOffset;
    let total = 0;
    for (let i = 0; i < sceneInfo.length; i++) {
        total += sceneInfo[i].scrollHeight;
        if (total >= yOffset) {
            currentScene = i;
            break;
        }
    }
};

const partAniPlay = (values,currentYoffset)=>{
    let calc = 0;
    const scrollHeight = sceneInfo[currentScene].scrollHeight;
    const scrollRatio = currentYoffset / scrollHeight;
    if(values.length >= 3){
        const start = values[2].start * scrollHeight;
        const end = values[2].end * scrollHeight;
        const partHeight = end - start;
        const partRatio =  (currentYoffset-start)/partHeight ;
        if(currentYoffset >= start && currentYoffset <= end){
            calc = partRatio*(values[1]-values[0])+values[0];
        }else if (currentYoffset < start){
            calc = values[0];
        }else if (currentYoffset > end){
            calc = values[1];
        }
    }else{
        calc = scrollRatio*(values[1]-values[0])+values[0];
    }

    return calc;
}

const sectionAniPlay = (prevHeight) =>{
    const currentYoffset = yOffset-prevHeight;
    let scrollRatio= currentYoffset / sceneInfo[currentScene].scrollHeight;
    const tagObjs = sceneInfo[currentScene].objs;
    const values = sceneInfo[currentScene].values;
    switch(currentScene){
        case 0 : //section-0
            // canvas load
            let seq = Math.floor(partAniPlay(values.imges_seq,currentYoffset));
            (seq < 0) ? seq = 0: false;
            
            tagObjs.context.drawImage(tagObjs.videoImages[seq],0,0);
            tagObjs.canvas.style.opacity = partAniPlay(values.cavas_opcity_out,currentYoffset)
            // message
            if(scrollRatio < 0.22){
                tagObjs.msgA.style.opacity = partAniPlay(values.msgA_opcity_in,currentYoffset);
                tagObjs.msgA.style.transform = `translateY(${partAniPlay(values.msgA_position_in,currentYoffset)}px)`;
            }else{
                tagObjs.msgA.style.opacity = partAniPlay(values.msgA_opcity_out,currentYoffset);
                tagObjs.msgA.style.transform = `translateY(${partAniPlay(values.msgA_position_out,currentYoffset)}px)`;
            }
            if(scrollRatio < 0.42){
                tagObjs.msgB.style.opacity =  partAniPlay(values.msgB_opcity_in,currentYoffset);
                tagObjs.msgB.style.transform = `translateY(${partAniPlay(values.msgB_position_in,currentYoffset)}px)`;
            }else{
                tagObjs.msgB.style.opacity = partAniPlay(values.msgB_opcity_out,currentYoffset);
                tagObjs.msgB.style.transform = `translateY(${partAniPlay(values.msgB_position_out,currentYoffset)}px)`;
            }
            if(scrollRatio < 0.62){
                tagObjs.msgC.style.opacity =  partAniPlay(values.msgC_opcity_in,currentYoffset);
                tagObjs.msgC.style.transform = `translateY(${partAniPlay(values.msgC_position_in,currentYoffset)}px)`;
            }else{
                tagObjs.msgC.style.opacity = partAniPlay(values.msgC_opcity_out,currentYoffset);
                tagObjs.msgC.style.transform = `translateY(${partAniPlay(values.msgC_position_out,currentYoffset)}px)`;
            }
            if(scrollRatio < 0.85){
                tagObjs.msgD.style.opacity =  partAniPlay(values.msgD_opcity_in,currentYoffset);
                tagObjs.msgD.style.transform = `translateY(${partAniPlay(values.msgD_position_in,currentYoffset)}px)`;
            }else{
                tagObjs.msgD.style.opacity = partAniPlay(values.msgD_opcity_out,currentYoffset);
                tagObjs.msgD.style.transform = `translateY(${partAniPlay(values.msgD_position_out,currentYoffset)}px)`;
            }
            break;
        case 1 : //section-1
            break;
        case 2 : //section-2
            let seq2 = Math.floor(partAniPlay(values.imges_seq,currentYoffset));
            (seq2 < 0) ? seq2 = 0 : false ;
            tagObjs.context.drawImage(tagObjs.videoImages[seq2],0,0);
            if(scrollRatio < 0.1){
                tagObjs.canvas.style.opacity = partAniPlay(values.cavas_opcity_in,currentYoffset)
            }
            // message
            if(scrollRatio < 0.25){
                tagObjs.msgA.style.opacity =  partAniPlay(values.msgA_opcity_in,currentYoffset);
                tagObjs.msgA.style.transform = `translateY(${partAniPlay(values.msgA_position_in,currentYoffset)}px)`;
            }else{
                tagObjs.msgA.style.opacity = partAniPlay(values.msgA_opcity_out,currentYoffset);
                tagObjs.msgA.style.transform = `translateY(${partAniPlay(values.msgA_position_out,currentYoffset)}px)`;
            }
            if(scrollRatio < 0.50){
                tagObjs.msgB.style.opacity =  partAniPlay(values.msgB_opcity_in,currentYoffset);
                tagObjs.msgB.style.transform = `translateY(${partAniPlay(values.msgB_position_in,currentYoffset)}px)`;
            }else{
                tagObjs.msgB.style.opacity = partAniPlay(values.msgB_opcity_out,currentYoffset);
                tagObjs.msgB.style.transform = `translateY(${partAniPlay(values.msgB_position_out,currentYoffset)}px)`;
            }
            if(scrollRatio < 0.75){
                tagObjs.msgC.style.opacity =  partAniPlay(values.msgC_opcity_in,currentYoffset);
                tagObjs.msgC.style.transform = `translateY(${partAniPlay(values.msgC_position_in,currentYoffset)}px)`;
            }else{
                tagObjs.msgC.style.opacity = partAniPlay(values.msgC_opcity_out,currentYoffset);
                tagObjs.msgC.style.transform = `translateY(${partAniPlay(values.msgC_position_out,currentYoffset)}px)`;
                tagObjs.canvas.style.opacity = partAniPlay(values.cavas_opcity_out,currentYoffset)
            }
            break;
        case 3 : //section-3
            const heightRatio = window.innerHeight / 1080;
            tagObjs.canvas.style.transform = `scale(${heightRatio}px)`
            tagObjs.videoImages[0].onload = () =>{
                tagObjs.context.drawImage(tagObjs.videoImages[0],0,0);
            }
            break;
    }
}
const handlerScroll = () => {
    yOffset = window.scrollY || window.pageYOffset;
    document.body.setAttribute('id',`show-section-${currentScene}`);

    //스크롤이 발생될 때 현재 보여지는 section 값을 가져오도록 함
    let prevHeight = 0;
    for(let i = 0 ; i<currentScene ; i++){
        prevHeight += sceneInfo[i].scrollHeight;
    }
    if(yOffset > prevHeight + sceneInfo[currentScene].scrollHeight){
        currentScene++;
    }
    if(yOffset < prevHeight){
        currentScene--;
    }
    sectionAniPlay(prevHeight);
};
const setSecHeight = () => {
    for (let i = 0; i < sceneInfo.length; i++) {
        sceneInfo[i].scrollHeight = sceneInfo[i].heightCnt * window.innerHeight;
        sceneInfo[i].objs.container.style.height = sceneInfo[i].scrollHeight + 'px';
    }
    setCurrentScene();
};

const drawFirstImages = () => {

}

const setCanvasImages = () => {
    let imgElem;
    let heightRatio;
    
    for(let j = 0 ; j<sceneInfo.length ; j++){
        //이미지 객체 삽입
        let count = sceneInfo[j].imgCount;
        if(count <= 0) continue ;
        for(let i = 0 ; i<count; i++){
            imgElem = new Image();
            imgElem.src = `./IMG/seq_${j}/${i}.jpg`;
            sceneInfo[j].objs.videoImages.push(imgElem);
        }
        heightRatio = window.innerHeight / sceneInfo[j].objs.canvas.height;
        if(j === 3 ){
            sceneInfo[j].objs.canvas.style.transform = `scale(${heightRatio})`;
            
        }else{
            sceneInfo[j].objs.canvas.style.transform = `translate(-50%,-50%) scale(${heightRatio})`;
        }
        
        sceneInfo[j].objs.videoImages[0].onload = () =>{
            sceneInfo[j].objs.context.drawImage(sceneInfo[j].objs.videoImages[0],0,0);
    }
}
}

const menuCheck = () =>{
    const tagLocalNav = document.querySelector('.local-nav');
    if(yOffset>0){
        tagLocalNav.classList.add('local-nav-fixed');
    }else{
        tagLocalNav.classList.remove('local-nav-fixed');
    }
}
const init = () => {
    //각각의 section 의 height값 설정
    setSecHeight();
    // 이미지 로드
    setCanvasImages();


    //초기화
    // console.log(currentScene);
    window.addEventListener("scroll", ()=>{
        //스크롤이 발생될 때 현재 보여지는 section 값을 가져오도록 함
        handlerScroll()
        menuCheck();
    });
};

window.addEventListener("load", init);
window.addEventListener("resize",setSecHeight);