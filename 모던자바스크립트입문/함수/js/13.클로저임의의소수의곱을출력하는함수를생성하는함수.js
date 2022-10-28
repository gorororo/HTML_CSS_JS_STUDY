function Primes(n){
    // 에라토스테네스의 체로 2~n 사이의 소수 구하기
    let p = [];
    for (let i = 2; i < n; i++) p[i]=true;
        let max = Math.floor(Math.sqrt(n));
        let x = 2;
        while(x<=max){
            for(let i = 2*x; i<=n; i+=x) p[i] = false;
            while(!p[++x]);
        }
        // 소수만 꺼내 배열 primes에 저장
        let primes = [], nprimes = 0;
        for (let i = 2; i<=n; i++) if(p[i]) primes[nprimes++]= i;
        p = null; // 필요 없어진 배열을 메모리에서 해제
        // 소수 m개를 무작위로 선택하여 곱한 값을 반환하는 함수를 반환한다
        return function(m){
            let product;
            let i ;
            for(i = 0 , product=1; i<m; i++){
                product *= primes[Math.floor(Math.random()*nprimes)];
            }
            return product;
    };
}
let primeProduct= Primes(10000);
console.log('primeProduct(2) :>> ', primeProduct(2));
console.log('primeProduct(2) :>> ', primeProduct(2));