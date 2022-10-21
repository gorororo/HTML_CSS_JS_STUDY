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
            //가로와 세로 사이즈를 꽉 차게 하기 위해서
            const widthRatio = document.body.offsetWidth / tagObjs.canvas.width;
            const heightRatio = window.innerHeight / tagObjs.canvas.height;
            let canvasRatio;
            if (widthRatio <= heightRatio){ //브라우저 길게 가는 경우
                canvasRatio = heightRatio;
            }else{
                canvasRatio = widthRatio;
            }
            tagObjs.canvas.style.transform = `scale(${canvasRatio})`;
            tagObjs.context.fillStyle = 'gray';
            tagObjs.context.drawImage(tagObjs.videoImages[0],0,0);

            // 캔버스 사이즈에 맞춘  width, height
            const rectInnerWidth = document.body.offsetWidth / canvasRatio;
            const rectInnerHeight = window.innerHeight / canvasRatio;
            if( !values.rectStartY ){
                // values.rectStartY = tagObjs.canvas.getBoundingClientRect().top;
                values.rectStartY = tagObjs.canvas.offsetTop + (tagObjs.canvas.height*canvasRatio)/2;
                const temp = sceneInfo[currentScene].scrollHeight;
                values.rectL[2].start = (window.innerHeight/2) / temp;
                values.rectL[2].end = values.rectStartY / temp;
                values.rectR[2].start = (window.innerHeight/2) / temp;
                values.rectR[2].end = values.rectStartY / temp;
            }
            const rectWidth = rectInnerWidth * 0.15;
            values.rectL[0] = (tagObjs.canvas.width-rectInnerWidth)/2;
            values.rectL[1] = values.rectL[0] - rectWidth;
            values.rectR[0] = values.rectL[0] + rectInnerWidth - rectWidth;
            values.rectR[1] = values.rectR[0] + rectWidth;

            tagObjs.context.fillRect( 
                parseInt(partAniPlay(values.rectL,currentYoffset)),
                0,
                parseInt(rectWidth),
                tagObjs.canvas.height
                );
            tagObjs.context.fillRect( 
                parseInt(partAniPlay(values.rectR,currentYoffset)),
                0,
                parseInt(rectWidth),
                tagObjs.canvas.height
                );
            
            //이미지 고정
            if(scrollRatio < values.rectR[2].end){
                //캔버스에 닿기 전
                tagObjs.canvas.classList.remove('fixed');
            }else{
                //캔버스에 닿은 후
                //이미지가 바뀌어서 보여야 함.
                values.blendHeight[0] = 0;
                values.blendHeight[1] = tagObjs.canvas.height;
                values.blendHeight[2].start = values.rectR[2].end;
                values.blendHeight[2].end = values.blendHeight[2].start + 0.3;
                const blendH = partAniPlay(values.blendHeight,currentYoffset);
                tagObjs.context.drawImage( tagObjs.videoImages[1],
                    0,tagObjs.canvas.height - blendH , tagObjs.canvas.width,blendH,
                    0,tagObjs.canvas.height - blendH , tagObjs.canvas.width,blendH)
                //고정
                tagObjs.canvas.classList.add('fixed');
                tagObjs.canvas.style.top = 
                `${-(tagObjs.canvas.height-tagObjs.canvas.height*canvasRatio)/2}px`

                //고정해제 스케일 지정
                if( scrollRatio > values.blendHeight[2].end){
                    
                    values.canvasScale[0] = canvasRatio;
                    values.canvasScale[1] = canvasRatio*0.7;
                    values.canvasScale[2].start = values.blendHeight[2].end;
                    values.canvasScale[2].end =values.canvasScale[2].start + 0.3;
                    tagObjs.canvas.style.transform = `scale(${partAniPlay(values.canvasScale,currentYoffset)})`
                }
                //fixed 종료
                if (scrollY === document.scrollingElement.scrollHeight-window.innerHeight){
                    tagObjs.canvas.classList.remove('fixed');
                    tagObjs.canvas.style.marginTop = `${sceneInfo[currentScene].scrollHeight*0.6}px`;

                    //canvas and caption position
                    values.canvasPosY[2].start = values.canvasScale[2].end + 0.1;
                    values.canvasPosY[2].end = values.canvasPosY[2].
                    start +0.2;
                    tagObjs.desc.style.transform = `translateY(${partAniPlay(values.canvasPosY,currentYoffset)})`;
                }
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