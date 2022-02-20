const quotes = [
  {
    quote: "Do not busy, be productive.",
    author: "Karen McKenna",
  },
  {
    quote:
      "Don't compare yourself with anyone in this world. If you do so, you are insulting yourself.",
    author: "Bill Gates",
  },
  {
    quote:
      "If you don't want to do something that you have to, just start the task for 20 minutes and do something fun to reward yourself.",
    author: "Tess Hellebrekers",
  },
  {
    quote: "Nothing is impossible.",
    author: "Nike",
  },
  {
    quote: "Everything you can imagine is real.",
    author: "Pablo Picasso",
  },
  {
    quote: "Nothing happens unless first we dream.",
    author: "Carl Sandburg",
  },
  {
    quote: "Live as if you were to die tomorrow.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "Never put off till tomorrow.",
    author: "Mark Twain",
  },
  {
    quote: "Knowledge has to be improved challenged.",
    author: "Peter Drucker",
  },
  {
    quote: "All our dreams can come true.",
    author: "Walt Disney",
  },
  {
    quote: "The only thing we have to fear is fear itself.",
    author: "Franklin Roosevelt",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    quote:
      "The world is a book and those who do not travel read only one page.",
    author: "Saint Augustine",
  },
  {
    quote: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller",
  },
  {
    quote: "To travel is to live.",
    author: "Hans Christian Andersen",
  },
  {
    quote: "Only a life lived for others is a life worthwhile.",
    author: "Albert Einstein",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    quote: "Never go on trips with anyone you do not love.",
    author: "Hemmingway",
  },
  {
    quote: "We wander for distraction, but we travel for fulfilment.",
    author: "Hilaire Belloc",
  },
  {
    quote: "Travel expands the mind and fills the gap.",
    author: "Sheda Savage",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
