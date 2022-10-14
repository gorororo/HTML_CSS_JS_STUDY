const url = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

fetch(url).then((response)=>{
    //첫번째 데이터 실행
    return response.json();
}).then((data)=>{
    // console.log(typeof data);
    // console.log(data);
});