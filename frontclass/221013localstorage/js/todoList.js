const tagTodoForm = document.querySelector('#todoForm');
const tagTodoInput = document.querySelector('#todoForm>input');
const tagTodoList = document.querySelector('.todoList');
const TODO_KEY = 'todos';
let todos = [];

const handlerDelete = (e)=>{
    console.log('delete item');
    console.log(e);
    
}

const addTodoList = (value)=>{
    const btn = document.createElement('button');
    btn.textContent = '❌';
    btn.addEventListener('click',handlerDelete);
    const span = document.createElement('span');
    span.textContent = value;
    const li = document.createElement('li');
    li.appendChild(btn);
    li.appendChild(span);
    tagTodoList.appendChild(li);
}

const handlerTodoSubmit = (event)=>{
    event.preventDefault();
    //input 값 제거
    addTodoList(tagTodoInput.value);
    tagTodoInput.value = ''; 
}   

const todoList_init = ()=>{
    tagTodoForm.addEventListener('submit',handlerTodoSubmit);
}

todoList_init();