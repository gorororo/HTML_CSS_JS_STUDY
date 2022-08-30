const tagDoor = document.querySelectorAll('.door');
console.log(tagDoor)

const handelerOpen = (e)=>{
    e.target.parentNode.classList.add('door-open');
    console.log(e.target);
}
const handelerClose = (e)=>{
    e.target.parentNode.classList.remove('door-open');
}
tagDoor.forEach((value)=>{
    value.addEventListener('mouseover',handelerOpen);
    value.addEventListener('mouseout',handelerClose);
});
// const tagWrapper = document.querySelector('.wrapper');
// const removeElem =document.querySelector('.door-open');
// let currentObj = null;
// const activeDoor = (obj)=>{
//     console.log(obj)
//     obj.classList.add('door-open');
//     currentObj = obj;
// }
// const inactiveDoor = (obj)=>{
//     obj.classList.remove('door-open')
// }
    
// const handlerClick=(e)=>{
//     const targetElem = e.target;
//     if(targetElem.classList.contains('door-front')){
//         if(currentObj){
//             inactiveDoor(currentObj);
//         }
//         activeDoor(targetElem.parentNode);
//     }

// }

// tagWrapper.addEventListener('click',handlerClick);
// activeDoor(document.querySelector('.door:nth-child(2)'))