var test = document.getElementById("content");
var quotes = [
  {
    author: "Oscar Wilde",
    quote: "“Be yourself; everyone else is already taken.”",
  },
  {
    author: "Marilyn Monroe",
    quote:
      "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
  },
  { author: "Frank Zappa", quote: "“So many books, so little time..”" },
  {
    author: "Albert Einstein",
    quote: "“A room without books is like a body without a soul”",
  },
  {
    author: "Marcus Tullius Cicero",
    quote:
      "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
  },
];
var usedQuotes = [];

function showQoutes() {
  if (usedQuotes.length === quotes.length) {
    usedQuotes = [];
  }

  var randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (usedQuotes.includes(randomIndex));

  var quote = quotes[randomIndex];

  usedQuotes.push(randomIndex);

  var cartonna = `<div class="shadow-lg rounded-3 bg-opacity-50 bg-white p-3">
    <p class="text-capitalize">${quote.quote}</p>
    <h1 class="text-capitalize">${quote.author}</h1>
  </div>`;

  test.innerHTML = cartonna;
}
