const tagMenulist = document.querySelectorAll('nav ul li');
const tagSectionlist = document.querySelectorAll('section');
const tagMenu = [...tagMenulist];
const tagSection = [...tagSectionlist];
const sectionOffsetTop =[];
const tagSectionpos = tagSectionlist.length*100/tagSectionlist.length/tagSectionlist.length;

tagSection.forEach(v=>sectionOffsetTop.push(v.offsetTop));

const addAndRemoveTag = (array,index,text)=>{
    array.forEach((v)=>{v.classList.remove(text)})
    array[index].classList.add(text);
}

const handlerClick = ()=>{
    tagMenu.forEach((elem,index)=>{
        elem.onclick = (v)=>{
            if(v.currentTarget===elem){
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
    // console.log(`scrollHeight : ${totalHeight}`)
    // console.log(`clientHeight : ${clientHeight}`)
    // console.log(`scrollTop : ${screenY}`)
    // console.log(`percent : ${percent}`)
    for(let i=0; i<=tagMenu.length; i=tagSectionpos){
        console.log(i)
        if(percent < tagSectionpos){
            addAndRemoveTag(tagMenu,0,'select');
            addAndRemoveTag(tagSection,0,'scale')
            tagSectionpos+tagSectionpos
        }else if (percent <= tagSectionpos*2){
            addAndRemoveTag(tagMenu,1,'select');
            addAndRemoveTag(tagSection,1,'scale')
        }else if (percent <= tagSectionpos*3){
            addAndRemoveTag(tagMenu,2,'select');
            addAndRemoveTag(tagSection,2,'scale')
        }else if (percent <= tagSectionpos*4){
            addAndRemoveTag(tagMenu,3,'select');
            addAndRemoveTag(tagSection,3,'scale')
        }else if (percent <= tagSectionpos*5){
            addAndRemoveTag(tagMenu,4,'select');
            addAndRemoveTag(tagSection,4,'scale')
        }
    }
};

const init = ()=>{
    handlerClick();
    window.addEventListener('scroll',handlerScroll);
    
}

window.addEventListener('load',init);