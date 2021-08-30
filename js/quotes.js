const quotes = [
    {
        quote: "The people who are crazy enough to think they can change the world are the ones who do.",
        author: "Steve Jobs"
    },
    {
        quote: "Let's go invent tomorrow rather than worrying about what happened yesterday.",
        author: "Steve Jobs"
    },
    {
        quote: "If you want it, you can fly, you just have to trust you a lot.",
        author: "Steve Jobs"
    },
    {
        quote: "Done is better than perfect.",
        author: "Mark Zuckerberg"
    },
    {
        quote: "The tragedy of life is what dies in the hearts and souls of people while they live.",
        author: "Albert Einstein"
    },
    {
        quote: "Life is like playing a violin in public and learning the instrument as one goes on.",
        author: "Samuel Butler"
    },
    {
        quote: "The only thing worse than starting something and failing is not starting something.",
        author: "Seth Godin"
    },
    {
        quote: "Security is mostly a superstition. It does not exist in nature.... Life is either a daring adventure or nothing.",
        author: "Helen Keller"
    },
    {
        quote: "Nothing is a waste of time if you use the experience wisely.",
        author: "Auguste René Rodin"
    },
    {
        quote: "Try not to become a man of success but rather try to become a man of value.",
        author: "Albert Einstein"
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];  //0~9 사이의 숫자

quote.innerText = todaysQuote.quote;
author.innerText = ` / ${todaysQuote.author}`;