// 1. 객체 리터럴로 생성하는 방법

let cart = {suit:'하트',rank:'a'};

// 2. 생성자로 생성하는 방법

function Card(suit,rank){
    this.suit = suit;
    this.rank = rank;
}
let cardConstructor= new Card("하트","A");

// 3. Object.create로 생성하는 방법

const card = Object.create(Object.prototype,{
    suit: {
        value : "하트",
        writable: true,
        enumerable: true,
        configurable: true
    },
    rank:{
        value : "a",
        writable: true,
        enumerable: true,
        configurable: true
    },
})