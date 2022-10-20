let a = parseInt(prompt('첫번째 숫자를 입력하세요'));
let b = parseInt(prompt('두번째 숫자를 입력하세요'));
let c = parseInt(prompt('세번째 숫자를 입력하세요'));
let arr = ['a','b','c']
if (a>b){
    //a가 큰상태
    if(a>c){
        document.write('큰수는'+a+'입니다');
        
    }else{
        document.write('큰수는'+c+'입니다');
    }
}else{
    if(b>c){
        document.write('큰수는'+b+'입니다');
    }else{
        document.write('큰수는'+c+'입니다')
    }
}