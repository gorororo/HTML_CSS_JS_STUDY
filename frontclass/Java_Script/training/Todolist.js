(function(){
    'use strict';
    let itemList = [];
    console.log(itemList);
    // 객체 가져오기
    const tagBtn =document.querySelector('#add');
    const tagUl = document.querySelector('#itemList');
    // tagBtn.onclick = addbtnClick;
    tagBtn.addEventListener('click',addBtnClick);

    function addBtnClick(){
        let value = document.querySelector('#item').value;
        document.querySelector('#item').value='';
        if (value){
            itemList.push(value);
        };
        showList();
    };

    function showList(){
        let strTag='';
        for(let i=0 ; i<itemList.length; i++){
            strTag += `<li id=${i} class=close>`;
            strTag += itemList[i];
            strTag += '<span>X</span>';
            strTag += '</li>';
        }
        tagUl.innerHTML = strTag;
        let bgColor = document.querySelectorAll('.close');
        const colors = ['lightgreen','lightblue','lightyellow','#1abc9c','#2ecc71','#9b59b6','#34495e']
        
        // console.log(Idx);
        // bgColor[0].style.backgroundColor = colors[0]
        // bgColor[1].style.backgroundColor = colors[1]
        
        for (let i = 0 ; i < bgColor.length; i++){
            bgColor[i].style.backgroundColor = colors[i%bgColor.length];
            console.log(`현재 ${i}`);
            
        };
        clickRemove();
        
    };
    function clickRemove(){
        let obj = document.querySelectorAll('.close');
        for(let i of obj){
            i.addEventListener('click',removeList);
        };
    };
    function removeList(){
        let idx = this.getAttribute('id');
        itemList.splice(idx,1);
        showList();
    }
})();