// // const tagFruits = document.getElementById('fruits')
// const tagFruits = document.querySelector('#fruits')
// //tagFruits 요소의 자식 노드의 정보를 읽기
// console.log(tagFruits.childNodes);
// //자식 노드만 읽기
// console.log(tagFruits.children);
// console.log(tagFruits.firstChild);
// console.log(tagFruits.firstElementChild);

// //자식 노드 확인하기
// // console.log(tagFruits.hasChildNodes())
// console.log(tagFruits.childElementCount);

// //부모 노드 확인하기
// console.log(tagFruits.parentNode);
// console.log(tagFruits.parentElement);
// //형제 노드의 정보 열기
// console.log(tagFruits.previousSibling);
// console.log(tagFruits.previousElementSibling);
// console.log(tagFruits.nextSibling);
// console.log(tagFruits.nextElementSibling);

// const tagBanana = document.querySelector('.banana');
// console.log(tagBanana.previousElementSibling);
// console.log(tagBanana.nextElementSibling)
// console.log(tagBanana.nodeName.toLowerCase())

const tagFruits = document.querySelector('#fruits');
tagFruits.style.backgroundColor = 'green';
tagFruits.style.border = '2px dotted red';
console.log(tagFruits);

// tagFruits.innerHTML += `<li class="apple">Apple</li>`
// tagFruits.innerHTML += `<li class="banana">Banana</li>`
// tagFruits.innerHTML += `<li class="orange">Orange</li>`

// const tagApple = document.createElement('li');
// console.log(typeof tagApple);
// tagApple.innerText = 'Apple';
// tagApple.textContent = 'Apple';
// tagApple.className = 'apple';
// tagFruits.appendChild(tagApple);

let fruitsList = ['Apple','Banana','Orange'] ;
let child = null;

// for (let i = 0; i<fruitsList.length; i++){
//     child = document.createElement('li');
//     child.className = fruitsList[i].toLowerCase();
//     child.innerText = fruitsList[i];
//     tagFruits.append(child);
// }

fruitsList.forEach((el,idx)=>{
    const tagli = document.createElement('li');
    tagli.textContent = el;
    // let text = el[0].toLowerCase() + el.slice(1,el.length);
    tagli.className = fruitsList[idx].toLowerCase();
    tagFruits.append(tagli);
})
const tagCherry = document.createElement('li');
// tagcherry.textContent = 'Cherry'
const tagMelon = document.createElement('li');
tagMelon.textContent = 'Melon';
tagMelon.className = 'melon';
tagFruits.appendChild(tagMelon);
// tagFruits.append(tagMelon,tagFruits.lastElementChild);
// tagFruits.insertBefore(tagMelon,tagFruits.lastElementChild);
// value = tagFruits.appendChild(tagcherry);
// console.log(value);
tagCherry.append('Cherry');
tagFruits.append(tagCherry);


const copyNode = tagFruits.cloneNode(true);
console.log(copyNode);
copyNode.id = 'aaa';
tagFruits.appendChild(copyNode);


const tagPlum = document.createElement('li');
tagPlum.textContent ='Plum';

tagFruits.replaceChild(tagPlum,tagFruits.firstElementChild);
tagFruits.removeChild(tagFruits.lastElementChild);

const tagClass = document.querySelector('.banana');
console.dir(tagClass.classList);
// tagClass.classList[1] = 'add';
tagClass.classList.toggle('add',true); //강제추가
tagClass.classList.toggle('add',false); //강제삭제

tagClass.classList.toggle('add'); //없으면 추가 있으면 삭제
tagClass.classList.toggle('add');
tagClass.classList.toggle('add');
tagClass.classList.toggle('add');
console.log(tagClass.classList.contains('add'))