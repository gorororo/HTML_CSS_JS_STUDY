a = 123.4456
console.log(a.toFixed(3));

Number.isNaN()

const input = `
일자,달러,엔,유로
02,1141.8,1097.36,1262.37
03,1148.7,1111.36,1274.65
04,1140.6,1107.81,1266.58
07,1143.4,1099.58,1267.8
08,1141.6,1091.97,1261.07
`

console.log(input.trim().split('\n').map((l)=>l.split('\n')));
console.log(Math.E);
console.log(Math.PI);
console.log(Math.floor(10.1));
console.log(Math.ceil(10.1));
console.log(Math.round(10.1));
console.log(Math.max(52,273,103));
console.log(Math.min(52,273,103));
console.log(Math.min(...[52,273,103]));
console.log(Math.max(...[52,273,103]));

console.log(Math.random());

console.log(Math.floor(Math.random() *50));
