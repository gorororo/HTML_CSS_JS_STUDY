const isLeapyear = (year) => {
    if ((year % 400 ==0) || ((year %4==0) && (year % 100 !=0)) ){
        return true;
    }
    return false;
}

console.log(isLeapyear`2024`);