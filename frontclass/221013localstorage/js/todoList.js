const tagTodoForm = document.querySelector('#todoForm');
const tagTodoInput = document.querySelector('#todoForm>input');
const tagTodoList = document.querySelector('.todoList');
const TODO_KEY = 'todos';
let todos = [];

const handlerDelete = (event)=>{
    console.log('delete item');
    // console.log(event);
    // console.log(event.path);
    // console.dir(event.currentTarget.parentElement);
    console.log(event.target.parentElement);
    const delObj =event.target.parentElement;
    const delID = event.target.parentElement.id;
    todos = todos.filter((elem)=>{
        return elem.id !== delID
    });
    delObj.remove();
    saveLocalStorage(todos);
    
}

const saveLocalStorage = () =>{
    const strSave = JSON.stringify(todos);
    // console.log(strSave);
    localStorage.setItem(TODO_KEY,strSave);
}

const saveToDos = (id,value)=>{
    const newObj={
        id,
        value,
    };
    // console.log(newObj);
    todos.push(newObj);
    saveLocalStorage();
}

const addTodoList = (id,value)=>{
    const btn = document.createElement('button');
    btn.textContent = '❌';
    btn.addEventListener('click',handlerDelete);
    const span = document.createElement('span');
    span.textContent = value;
    const li = document.createElement('li');
    // li.id = todos.length +1;
    li.id = id;
    li.appendChild(btn);
    li.appendChild(span);
    tagTodoList.appendChild(li);
    saveToDos(li.id,value);
}

const handlerTodoSubmit = (event)=>{
    event.preventDefault();
    //input 값 제거
    addTodoList(Date.now(),tagTodoInput.value);
    tagTodoInput.value = ''; 
}   

const todoList_init = ()=>{
    //localstorage 값을 읽어오기
    const strRead = localStorage.getItem(TODO_KEY);
    if(strRead){
        // console.log(strRead);
        const objs = JSON.parse(strRead);
        objs.forEach((elem) => {
            addTodoList(elem.id , elem.value);
        });
    }
    tagTodoForm.addEventListener('submit',handlerTodoSubmit);
}

todoList_init();