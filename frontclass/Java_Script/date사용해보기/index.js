//let now = new Date();
// console.log(now.getFullYear())
// console.log(now.getMonth()+1)
// console.log(now.getDay()+1)//0부터 6까지 일주일을 표시
// console.log(now.getDate())
// /**1910년 1월 1일 00:00 ~ 현재까지 밀리초*/
// console.log(now.getHours())
// console.log(now.getMinutes())
// console.log(now.getSeconds())
// console.log(now.getTime())
/*
날짜 설정
*/ 

/*
 * 오늘 날짜로 부터 28일 후 지난후의 날짜 계산
*/ 
// console.log(now);
// a= now.setDate(now.getDate()+28);
// console.log(now);


let firstDay = new Date('2022-05-16');

//몇일이 지났는지day1에 표시
const getPassedDate = () =>{
    let now = new Date();
    let passdTime = now.getTime()- firstDay.getTime();
    let passdDay = Math.round(passdTime /(24*60*60*1000));
    let obj = document.querySelector('.pass')
    obj.textContent = passdDay + '일';

}

//100일 ,200일 ,300일 ,1년
const getSomeDate =(days)=>{
    // const tag

    let someTime =firstDay.getTime()+(1000*60*60*24*days);
    let someDay = new Date(someTime);
    let someDayString = `${someDay.getFullYear()} 년 ${someDay.getMonth()+1}월 ${someDay.getDate()}일`;
    return someDayString;
}
const printDayString = (days) =>{
    let year = Math.floor(days /365);
    let day = days % 365;
    let strYear = year ? year+'년' : '';
    let strDay = day ? day+'일' : '';
    return strYear +strDay

}
const createDay2Date = (days) =>{
    let objP1 = document.createElement('p')
    // objP1.textContent = days+'일'
    objP1.textContent = printDayString(days);
    let objP2 = document.createElement('p')
    objP2.textContent =  getSomeDate(days);
    let objDiv =document.createElement('div');
    objDiv.append(objP1,objP2);
    document.querySelector('.day2').appendChild(objDiv);
}


getPassedDate();
createDay2Date(100);
createDay2Date(200);
createDay2Date(300);
createDay2Date(365);
createDay2Date(365+10);
createDay2Date(365*2);

    /*
 * 날짜를 2022-05-16
    100일이 지났을 때 : 년-월-일
    200일이 지났을 때 : 년-월-일
    300일이 지났을 때 : 년-월-일
 * 
 * */ 