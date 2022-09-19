// Don`t give up
// 포기하지 말자 ✋🤚

// 함수 선언

function doSomething(add){
    console.log(add);
    const result = add(3,3);
    console.log(result);
}

function add(a , b){
    const sum = a + b;
    return sum;

}

// 함수 호출

const addFun = add;
console.log(add);
console.log(addFun(1,2));
// doSomething(add);

// console.log(add(1,2));
// const result = add(4,5);
// console.log(result);