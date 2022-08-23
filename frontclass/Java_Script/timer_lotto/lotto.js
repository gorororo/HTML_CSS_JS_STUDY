//6개의 추첨번호를 추출
let bonus = 0;
let winresult=[];


//함수정의
const addRandom = (value,objParent) =>{
    const drawNum = document.createElement('div');
    // const temp = Math.round(Math.random()*0xffffff)
    const colorCode = '#'+ Math.ceil(Math.random()*0xffffff).toString(16)
    drawNum.className= 'ball';
    drawNum.textContent = value;
    drawNum.style.backgroundColor = colorCode;
    drawNum.style.color = '#333'
    objParent.appendChild(drawNum);
}

const shuffleData =()=>{
    let result = [];
    const number = new Array(45).fill().map((v,i)=>i+1);
    console.log(number)

    for(let i=0; i<7; i++){
        const idx = Math.floor(Math.random()*number.length);
        result.push(number[idx]);
        number.splice(idx,1);
    }
    result.sort((a,b)=>a-b);
    bonus = result[6];
    winresult = result.splice(0,6);
    // bonus=number[Math.floor(Math.random()*number.length)]
    console.log(winresult)
    console.log('보너스는: ' +bonus)

}

const drawBoll = ()=>{

    //객체를 생성하고 추가
    const tagResult = document.querySelector('#result');

    winresult.forEach((v,idx)=>{
    // addRandom(v,tagResult);
        setTimeout(()=>{
            addRandom(v,tagResult);
        },(idx++)*1000);
    })

    //보너스
    // const drawNum = document.createElement('div');
    // drawNum.className ='ball'
    // drawNum.textContent = bonus;
    // tagBonus.appendChild(drawNum)

    

}

const drawBonus = ()=>{
    const tagBonus = document.querySelector('#bonus')
    setTimeout(()=>{
        addRandom(bonus,tagBonus);
    },7000);
}

const init =()=>{
/**숫자 6개를 추출한다 */
shuffleData();
/**화면에 6개를 그려준다 */
drawBoll();
/**보너스를 그린다 */
drawBonus();
}


init()

