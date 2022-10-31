function memorize(f){
    var cache = {};
    return function(x){
        // 인수를 쉼표로 연결한 문자열을만들어서 캐스의 키 값으로 사용한다.
        var key  = "";
        for(var i=0; i<arguments.length; i++) key += arguments[i] + ',';
        if(cache[key] == undefined) cache[key] = f.apply(null,arguments);
        return cache[key];
    }
}

var fibonacci = memorize(function(n){
    if(n<2) return n;
    return fibonacci(n-1)+fibonacci(n-2);
});
for(var i=0;i<20;i++){
    console.log(`${(' '+i ).slice(-2)} : ${fibonacci(i)}`);
} 