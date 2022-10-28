let [a,b,c] = 'abc'
let [one,two,three]= new Set([1,2,3]);

let BBB = new Set([1,2,3,4,5,5,5,1,2,3,4,4,5,6,7]);
console.log(BBB);
console.log([...BBB].reduce(v=>v*2));
console.log('one :>> ', one);
console.log();