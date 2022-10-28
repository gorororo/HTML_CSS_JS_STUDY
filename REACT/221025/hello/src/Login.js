import {useState} from 'react';

const Login = () =>{
    const [nick,setNick] = useState('');
    const [age,setAge] = useState('');
    const handlerNickChange = (event) =>{
        setNick(event.target.value);
    }
    const handlerAgeChange = (event) =>{
        setAge(event.target.value);
    }
    return (
        <>
            <input value={nick} onChange={handlerNickChange}/>
            <input value={age} onChange={handlerAgeChange}/>
            <p>이름 : {nick}</p>
            <p>나이 : {age}</p>
        </>
    );
}

export default Login;