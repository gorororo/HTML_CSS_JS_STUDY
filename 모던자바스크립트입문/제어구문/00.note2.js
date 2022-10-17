let a = [[2,4,6,8],[1,5,12,3],[7,6,8,5],[5,15,3,4],[3,2,9,4]];
let max = Number.NEGATIVE_INFINITY;
mainloop: for(let i=0; i<a.length;i++){
    let average = 0;
    for(let j=0; j<a[i].length; j++){
        if(a[i][j]>10) continue mainloop;
        average += a[i][j];
    }
    average /= a[i].length;
    console.log(`i= ${i}+:평균값=${average}`);
    if(max<average) max = average;
}
console.log(`최대 평균값=${max}`);