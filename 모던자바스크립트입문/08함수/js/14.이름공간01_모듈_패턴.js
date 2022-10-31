let Module = {};
Module || {};
((_Module)=>{
    let name = 'NoName'; // 프라이빗 변수
    getName=()=> name; // return 생략 클로저 상태
    _Module.showName = ()=>console.log('getName() :>> ', getName());
    _Module.setName = (x)=>name = x;
})(Module);
Module.setName('Tom');
Module.showName(); // ->Tom
