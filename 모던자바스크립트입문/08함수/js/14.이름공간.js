// 전역 유효 범위의 오염을 방지하기 위한 수단으로 객체를 이름 공간으로 사용하는 방법 함수 를 이름 공간으로 이용하는 방법을 배우겠습니다.

// 타 언어에선 이름공간기능을 제공하지만 자바스크립트에서는 없다 하지만 객체를 이용하여 활용할수있다
let myApp = {};
myApp || {};
// myApp 이 이미 정의 되어 있을 때는 그것을 사용하고 그렇지 않으면 빈 객체를 할당합니다.
console.log('myApp :>> ', myApp);
myApp.name = "Tom";
myApp.showName = ()=>{console.log('myname :>> ', myApp.name);};
console.log(myApp.showName());
// 부분 이름 공간을 만들 수도 있다.
myApp.view = {};
myApp.controls = {};

myApp.view.draw = ()=>{ document.querySelector('.draw')}
myApp.controls.timeInterval = 16;

// 함수를 이름 공간으로 활용하기

let x = 'global x';
(()=>{let x = 'Local x'; let y = 'Local Y'})();
console.log(x); // -> global x 
console.log(y); // -> y is not defined 함수안 지역변수 이름공간에 있으므로 접근할수 없다

// 라이브러리를 읽어서 사용할때 전역 공간과 충돌하지 않도록 하려면
// 즉시 실행 함수 안에 넣어서 실행합니다.
(()=>{
    // 이곳에 프로그램을 작성
})();

