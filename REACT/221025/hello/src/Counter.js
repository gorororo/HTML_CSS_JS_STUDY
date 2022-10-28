import {useState} from 'react';

export default function Counter(){
    const [num,countUp] = useState(0);
    const handlerUpClick = () => {
        countUp((prevNum)=>{ return prevNum + 1; });
    };
    return(
        <>
            <button onClick={ handlerUpClick }>증가</button>
            <button onClick={ ()=>countUp(num-1) }>감소</button>
            <p>Value 값은 : {num<0 ? 0 : num} </p>
        </>
    );
};