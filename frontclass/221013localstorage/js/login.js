const LOGIN_KEY = 'username';
const tagP = document.querySelector('.loginName');
const tagForm = document.querySelector('#loginForm');
const tagInput = tagForm.querySelector('input');

const viewUserName = (userName) =>{
    //p태그에 보여주기
    tagP.classList.remove('hidden');
    tagP.textContent = `Hello ${userName}`;
    //form은 보이지 않게
    tagForm.classList.add('hidden');
}

const handlerSubmit = (event)=>{
    event.preventDefault();
    const userName = tagInput.value
    console.log(userName);
    viewUserName(userName);
    //localstorage 에 저장
    window.localStorage.setItem(LOGIN_KEY,userName);
}


const init = ()=>{
    //1. 로컬스토리지에 KEY가 있는지 확인
    const username = localStorage.getItem(LOGIN_KEY) ;
    if(username){
        //값이 있을때
        console.log('값이 있을때');
        viewUserName(username);
    }else{
        //값이 없을때
        tagForm.addEventListener('submit',handlerSubmit);
    }
    console.log(username);
}

window.addEventListener('load',init);