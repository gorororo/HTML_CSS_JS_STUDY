const compose=(f,g)=>{
    return (x)=>{
        return f(g(x));
    }
}

const square = x=>x*x;
const add1 = x=>x+1;
let h = compose(square,add1);

console.log(h(2));
