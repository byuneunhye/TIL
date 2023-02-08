const quotes =  [
    {
        quote: "The way to get satrted is to quit talking and begin doing.",
        author: "Walt Disney",
    },
    {
        quote : "When you have faults, do not fear to abandon them.",
        author: "confucius"
    },
    {
        quote : "You will face many defeats in life, but never let yourself be defeated.",
        author: "Maya Angelou"
    },
    {
        quote : "The greatest glory in living lies not in never falling, but in rising every time we fall. ",
        author: "Nelson Mandela"
    },
    {
        quote : "YLife is either a daring adventure or nothing at all. ",
        author: "Helen Keller"
    },
    {
        quote : "The goal of life is living in agreement with nature. ",
        author: "Zeno"
    },
    {
        quote : "YThis too shall pass. ",
        author: "Et hoc transibit"
    },
    {
        quote : "Only I can change me life, no one can do it for me. ",
        author: "Carol Burnett"
    },
    {
        quote : "When in doubt, choose change.",
        author: "Lily leung "
    },
    {
        quote : "All you need in this life is ignorance and confidence, then success is sure. ",
        author: "Mark Twain "
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

//console.log(quote[0]);
//Math.random() : JS에서 기본으로 제공하는 함수, 0부터 1까지 랜덤으로 돌아감 => 곱하기 연산을 해서 1보다 큰 숫자까지 랜덤을 돌려줄거임

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;