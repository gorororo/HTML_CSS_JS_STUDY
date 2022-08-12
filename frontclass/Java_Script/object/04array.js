let inputBox = document.getElementById('inputField');//할일 입력창
let addToDo = document.getElementById('addToDo');//버튼
let toDoList = document.getElementById('toDoList');//할일 리스트창

addToDo.addEventListener('click',function(){//버튼에 클릭 이벤트가 발생하면

    let list = document.createElement('li');//li태그 만들기
    if (!inputBox.value){//할일 입력창에 내용이 없으면 alert 발생
        alert('내용을 입력해 주세요!');
    }else{
        list.innerHTML = inputBox.value;//입력된 할일
        toDoList.appendChild(list); //자식으로 붙이기
        inputBox.value=''; //할일 입력창 초기화
    }

    list.addEventListener('click',function(){
        list.style.textDecoration = 'line-through';
    })
    list.addEventListener('dblclick',function(){ //리스트에 더블클릭 삭제
        toDoList.removeChild(list);
    })
})