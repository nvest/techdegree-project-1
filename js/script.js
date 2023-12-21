/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 * An array containing objects of quotes with 
 * quote, source, citation, year, tags
***/

const quotes = [
  {
    quote: 'I\'ve Been Called The Songbird Of My Generation.',
    source: 'Brennan',
    citation: 'Step Brothers',
    year: '2008',
    tags: [ 'Birds' ]
  },
  {
    quote: 'That rug really tied the room together.',
    source: 'The Dude',
    citation: 'The Big Lebowski',
    year: '1998'
  },
  {
    quote: 'On Wednesdays, we wear pink.',
    source: 'Karen',
    citation: 'Mean Girls',
    tags: [ 'Days of the Week', 'Colors' ]
  },
  {
    quote: 'How much cheese is too much cheese?',
    source: 'Charlie',
    citation: "It's Always Sunny in Philidelphia"
  },
  {
    quote: "You stink! You smell like beef and cheese, you don\'t smell like Santa.",
    source: 'Buddy the Elf',
    citation: 'Elf',
    year: '2003'
  }
];


/***
 * `getRandomQuote` function
 * `lastIndex` = find the index of the last item in the array `quotes`
 * `randomNumber` = generate a random number ranging from 0 to `lastIndex`
 * `randomQuote` = return the object that has the index of `randomNumber`
***/

function getRandomQuote() {
  let lastIndex = quotes.length - 1;
  let randomNumber = Math.floor( Math.random () * lastIndex );
  let randomQuote = quotes[randomNumber];
  return randomQuote;
}; 

/***
 * `randomColor` function
 * `randomValue` = store a random value between 0 and 255
 * `randomRGB` = create a random rgb color using 3 different values for `randomValue`
***/

const randomValue = () => Math.floor( Math.random () * 256 );
function randomRGB(value) {
  let color = `rgb(${value()}, ${value()}, ${value()})`
  return color;
};


/***
 * `printQuote` function
 * print a new quote to the page every 10 seconds
 * `quoteObject` = store a random quote object returned from the `getRandomQuote()` function.
 * `html` = store a string of html with `quote` and `source` properties.
 * concatinate citation to `html` if it exists.
 * concatinate year to `html` if it exists.
 * add a closing paragraph tag
 * replace the HTML inside the `quote-box` to the string stored in `html`
 * style the background color of the body to a random color.
***/
setInterval(printQuote, 10000);
function printQuote() {
  let quoteObject = getRandomQuote();   
  let html = `
    <p class="quote">${quoteObject.quote}</p>
    <p class="source">${quoteObject.source}`;
  if ( 'citation' in quoteObject ) {
    html += `, <span><i>${quoteObject.citation}</i></span>`;
  };
  if ( 'year' in quoteObject ) {
    html += `, <span>${quoteObject.year}</span>`;
  };
  if ( 'tags' in quoteObject ) {
    html += `, <span>${quoteObject.tags.join(', ')}</span>`;
  };
  html += `</p>`
  document.getElementById('quote-box').innerHTML = html; 
  document.body.style.backgroundColor = randomRGB(randomValue);
};


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);