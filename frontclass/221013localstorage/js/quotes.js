const quotes = [
    {
        quote: "삶이 있는 한 희망은 있다.",
        author: "키케로",
    },
    {
        quote: "산다는것 그것은 치열한 전투이다.",
        author: "로망로랑",
    },
    {
        quote: "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.",
        author: "사무엘존슨",
    },
    {
        quote: "진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해 ",
        author: "찰리 채플린",
    },
    {
        quote: "행복의 문이 하나 닫히면 다른 문이 열린다 그러나 우리는 종종 닫힌 문을 멍하니 바라보다가 우리를 향해 열린 문을 보지 못하게 된다",
        author: "헬렌켈러",
    },
];
const tagQuote = document.querySelector(".quote");
const tagQuoteBtn = document.querySelector(".quotebtn");

const handlerQuote = () => {
    let randomNum = Math.floor(Math.random() * quotes.length);
    tagQuote.children[0].textContent = quotes[randomNum].quote;
    tagQuote.children[1].textContent = `--${quotes[randomNum].author}--`;
};

const quotesInit = () => {
    handlerQuote();
    tagQuoteBtn.addEventListener("click", handlerQuote);
};

quotesInit();
