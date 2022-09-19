// Ternary Operator
// ❌Bad Code 💩
{
function getResult(score){
    let result;
    if(score > 5){
        result = '👍';
    }else if(score <= 5){
        result = '👎';
    }
    return result;
}
}


// ⭕Good Code✨
{
function getResult(score){
    return score > 5 ? '👍' : '👎' ;
}
}
