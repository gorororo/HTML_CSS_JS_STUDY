// Spread Syntax - Object
const item = {type : '👔' , size: 'M'};
const detail = {price: 20, made:'korea',gender:'M'};

// ❌ Bad Code💩
item['price'] = detail.price;

// ❌ Bad Code💩
const newObject = new Object();
newObject['type'] = item.type;
newObject['size'] = item.size;
newObject['price'] = item.price;
newObject['made'] = item.made;
newObject['gender'] = item.gender;

// ❌ Bad Code💩
const newObject2 = {
    type : item.type,
    size: item.size,
    price: item.price,
    made: item.made,
    gender: item.gender,
}

// ⭕ Good Code✨
const shirt0 = Object.assign(item, detail);

// ⭕Better! Code✨
const shirt = {...item,...detail,price: 40};

//Spread Syntax - Array

let fruits = ['🍎','🍇','🍌'];

// fruits.push('🍓');
fruits = [...fruits,'🍓'];

// fruits.unshift('🍇');
fruits = ['🍇',...fruits];

const  fruits2 = ['🍒','🍐','🍏'];


let combinedBasic = fruits.concat(fruits2);
let combined = [...fruits,'🥕',...fruits2];

console.log(combinedBasic);
console.log(combined);

