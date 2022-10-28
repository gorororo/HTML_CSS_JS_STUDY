import {useState} from 'react';

const AddInput = () =>{
    const [strInput,setStrInput] = useState('');
    const [strList,setStrList] = useState([]); 
    const handlerClick = () =>{
        setStrList((prevList)=>{
            return [...prevList,strInput];
            // return prevList.push(strInput);
        });
        setStrInput('');
    };
    const handlerInput = (event) =>{
        setStrInput(event.target.value);
    }
    return (
        <>
            <input value={strInput} onChange={handlerInput}/>
            <button onClick={handlerClick}>등록</button>
            {
                strList.map((v,i)=>{
                    return <li key={i}>{v}</li>;
                })
            }
        </>
    )
}

export default AddInput;