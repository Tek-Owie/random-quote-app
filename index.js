/**
 1. fetch array of quotes
 2. click to show a new quote
 */

const quotesArray = [
    {
        "text": "Genius is one percent inspiration and ninety-nine percent perspiration.",
        "author": "Thomas Edison"
    },
    {
        "text": "You can observe a lot just by watching.",
        "author": "Yogi Berra"
    },
    {
        "text": "A house divided against itself cannot stand.",
        "author": "Abraham Lincoln"
    },
    {
        "text": "Difficulties increase the nearer we get to the goal.",
        "author": "Johann Wolfgang von Goethe"
    },
    {
        "text": "Fate is in your hands and no one elses",
        "author": "Byron Pulsifer"
    },
    {
        "text": "Be the chief but never the lord.",
        "author": "Lao Tzu"
    },
    {
        "text": "Nothing happens unless first we dream.",
        "author": "Carl Sandburg"
    }
];
// Variables
const button = document.querySelector('button');
let quote = document.querySelector('#quote');
let author = document.getElementById('author');

// Select and displaying the quotes
function displayNewQuote() {
    // generate random number
    const random = Math.floor(Math.random() * quotesArray.length)

    // select quote from array with random number
    let newQuote = quotesArray[random];

    // Append new quote to text node
    quote.textContent = newQuote.text;

    // Append corresponding author to author node
    author.textContent = newQuote.author;

    // console.log(newQuote);

    // console.log(random)
}

button.addEventListener('click', displayNewQuote);