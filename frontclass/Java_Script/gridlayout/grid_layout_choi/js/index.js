(()=>{
    'use strict'
    const tagMenuIcon = document.querySelector('.menu-icon');
    const tagMenu = document.querySelectorAll('.menu-bar>ul>li');
    const tagSection =document.querySelectorAll('section');
    
    const getMenuIndex = (obj) =>{
        const elem = obj.parentNode.children;
        
        for(let i=0; i<elem.length; i++){
            if(elem[i] === obj){
                return i;
            }
        }
        return 0;
    };

    const changeDisplay =()=>{
        const value = tagMenuIcon.style.opacity;
        tagMenuIcon.style.opacity = ''+(value^'1');
        document.querySelector('.menu-bar').classList.toggle('menuoff');
        document.querySelector('main').classList.toggle('menuon');
    }
    
    // const handlerMenuUp = ()=>{        
    //     let value = tagMenuIcon.style.opacity;
    //     console.log(tagMenuIcon);
    //     console.log(value);
    //     if(value == 0 ) return;
    //     // tagMenuIcon.style.display = 'none';
    //     tagMenuIcon.style.cursor = 'inherit';

    // }
    const tagModal = document.querySelector('.modal');
    const tagModalP = document.querySelector('.modalP');
    const tagBtnExit = document.querySelector('.modal button');
    const handlerModalClick = (e)=>{
        tagModal.style.display = "block";
    }

    const handlerModalExit = (e)=>{
        console.log(e.target);
        // tagModal.styel.display = "none";
        if(e.target){
            tagModal.style.display = "none";
        }
    }

    const handlerClickmenu = (e)=>{
        const idx = getMenuIndex(e.currentTarget);
        tagMenuIcon.style.cursor = 'pointer'
        // tagMenuIcon.style.display = '';
        tagSection.forEach((v)=>{
            v.classList.remove('on');
        });

        //main
        changeDisplay();
        tagSection[idx].classList.add('on');
    };

    tagBtnExit.addEventListener('click',handlerModalExit);
    tagModalP.addEventListener('click',handlerModalClick);
    tagMenuIcon.addEventListener('click',changeDisplay);
    tagMenu.forEach((v)=>{
        v.addEventListener('click',handlerClickmenu);
    });

})();