'use strict'
const TOTAL =12;
let color_list = [];
let choiceCard = [];
let success = 0;


const shuffleColors=()=>{
    
    const colors = ['red','orange','indigo','green','royalblue','hotpink']
    const total_colors = colors.concat(colors);
    for(let i = 0 ; total_colors.length>0 ;i++){
        const idx = Math.floor(Math.random()*total_colors.length);
        color_list.push( total_colors[idx]);
        total_colors.splice(idx,1);
        // console.log(idx);
        // console.log('total:'+total_colors);
        // console.log('colorlist:'+color_list);
    }
}
const createDivElem =(divClassName,color='')=>{
    const divElem = document.createElement('div');
    divElem.className = divClassName;
    divElem.style.backgroundColor = color;
    return divElem;
};

const handlerClickCard=(e)=>{
    const obj=e.currentTarget;
    obj.classList.add('open');
    choiceCard.push(obj)
    if(choiceCard.length !== 2) return;
    //색깔이 같은지 다른지 확인
    const first = choiceCard[0].querySelector('.card-front').style.backgroundColor;
    console.log(first)
    const second = choiceCard[1].querySelector('.card-front').style.backgroundColor;
    console.log(second)
    if(first === second){
        //같은색상의 카드 선택
        success++;
        if(success >= (TOTAL/2)){
            setTimeout(()=>{
                alert('축하합니다.');
                init();
            },500)
        }
    }else{
        //다른색상의 카드 선택
        choiceCard.forEach((v)=>{
            setTimeout(()=>{
            v.classList.remove('open');
        },1000)
        })
    }
    //선택된 카드를 초기화
    console.log('초기화전'+choiceCard);
    choiceCard = [];
    console.log('초기화후'+choiceCard);
}
const createCardElem = ()=>{
    for(let i = 0; i<TOTAL;i++){
    const card = createDivElem('card');
    card.appendChild(createDivElem('card-front',color_list[i]));
    card.appendChild(createDivElem('card-back','skyblue'));
    card.addEventListener('click',handlerClickCard);
    document.querySelector('#wrapper').appendChild(card);
    }
};

const startCardRotate=()=>{
    document.querySelectorAll('.card').forEach((v,idx)=>{
        setTimeout(()=>{
        v.classList.add('open');
        },1000+(100*idx));
    });
    startCardGame()
};

const startCardGame =()=>{
    setTimeout(()=>{
        document.querySelectorAll('.card').forEach((v)=>{
        v.classList.remove('open');
    });
    },3000)
}

const init = ()=>{
    color_list=[];
    choiceCard=[];
    success=0;
    document.querySelector('#wrapper').replaceChildren();
    // document.querySelector('#wrapper').innerHTML='';
    shuffleColors(); //무작위 색상 생성 및 배치
    createCardElem(); // 카드 객체를 생성하여 만들어준다
    startCardRotate(); //시작 하면 카드를 순차적으로 보여주는함수
};

init();
