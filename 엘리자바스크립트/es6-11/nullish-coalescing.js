// Nullish coalescing operator
// ❌ Bad Code 💩
{
function printMessage(text){
    let message = text ;
    if (text == null || text == undefined){
        message = 'Nothing to display 😜';
    }
    console.log(message);
}
printMessage('안녕');
}

// ⭕ Good code ✨
{
function printMessage(text){
    const message = text ?? 'Nothing to display 😜';
    console.log(message);
}
// 🚨 Default parameter is only for undefined
function printMessage(text='Nothing to display 😜'){
    console.log(text);
}

// 🚨 Logical Or operator ||
function printMessage(text){
    const message =text || 'Nothing to display 😜'
    console.log(message);
}

printMessage('Hello');
printMessage(undefined);
printMessage(null);
printMessage(0);
printMessage('');
printMessage("");
printMessage(``);

}

const result = getInitialState() ?? fetchFromServer();
console.log(result);
function getInitialState(){
    return null;
}
function fetchFromServer(){
    return 'Hiya from 💻';
}