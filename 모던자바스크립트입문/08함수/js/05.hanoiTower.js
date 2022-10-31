// 하노이의 탑
// 1. 원반은 한번에 한 개만 옮길 수 있다.
// 2. 원반은 막대기 A, B ,C 이외의 장소에는 놓을 수 없다.
// 3. 원반을 옮길 떄는 작은 원반 위에 그보다 큰 원반을 쌓을 수 없다.

// n(원판) 3이라면
// 막대 A B C 
// 원반 c b a
// 1 . a 를 C => 2. b 를 B => 3. a 를 B => 4. c 를 C => 5. a 를 A => 6. b 를 C => 7. a 를 C


// n이 4인 하노이의탑
let count = 1;
function hanoi(n,a,b,c){
    if (n<1) {return};
    hanoi(n-1,a,c,b);
    console.log(`${n}번째 원반: ${a} -> ${c} ${count++}`);
    hanoi(n-1,b,a,c)
}
hanoi(4,'A','B','C'); // n의 숫자가 1씩 늘때마다 실행횟수는 n*2+1