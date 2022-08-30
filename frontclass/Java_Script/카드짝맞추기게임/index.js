const TOTAL =12;
let color_list = [];


const shuffleColors=()=>{
    
    const colors = ['red','orange','indigo','green','royalblue','hotpink']
    const total_colors = colors.concat(colors);
    for(let i = 0 ; total_colors.length>0 ;i++){
        const idx = Math.floor(Math.random()*total_colors.length);
        color_list.push( total_colors[idx]);
        total_colors.splice(idx,1);
        console.log(idx);
        console.log('total:'+total_colors);
        console.log('colorlist:'+color_list);
    }
}
const createDivElem =(divClassName,color='none')=>{
    const divElem = document.createElement('div');
    divElem.className = divClassName;
    divElem.style.backgroundColor = color
    return divElem;
}

const createCardElem = ()=>{
    for(let i = 0; i<TOTAL;i++){
    const card = createDivElem('card');
    card.appendChild(createDivElem('card-front',color_list[i]));
    card.appendChild(createDivElem('card-back','skyblue'));
    document.querySelector('#wrapper').appendChild(card);
    }
}
const init = ()=>{
    shuffleColors();
    createCardElem();
}
init()
