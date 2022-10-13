const THEME_KEY = 'darkTheme';
const tagTheme = document.querySelector('.theme');

const handlerThemeClick = ()=>{
    const htmlElem = document.documentElement;
    console.log(htmlElem);

    if(htmlElem.classList.contains('dark')){
        //dark 모드
        htmlElem.classList.remove('dark');
        window.localStorage.setItem(THEME_KEY,'false')
    }else{
        //dark 아님
        htmlElem.classList.add('dark');
        window.localStorage.setItem(THEME_KEY,'ture')
    }
}

const themeInit = ()=>{
    //초기 설정
    const saveTheme = window.localStorage.getItem(THEME_KEY);
    if(saveTheme !== null){
        if(saveTheme === 'ture'){
            document.documentElement.classList.add('dark');
        }
    }
    tagTheme.addEventListener('click',handlerThemeClick);
}
themeInit();