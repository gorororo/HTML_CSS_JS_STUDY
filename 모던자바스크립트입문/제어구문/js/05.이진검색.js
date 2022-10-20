const binarySearch=(x,a)=>{
    let n=a.length;
    let left = 0,right = n-1;
    while(left<right){
        let middel = Math.floor((left+right)/2);
        if(x<=a[middel]){
            right=middel
        }else{
            left=middel+1
        }
    }
    if(x==a[right]) return right;
    return null;
}
let a = [2,4,7,12,15,21,34,35,46,57,70,82,86,92,99];
console.log(binarySearch(35,a));