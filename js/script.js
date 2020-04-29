/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

var quotes = [
  {
  quote: "I consider looseness with words no less of a defect than looseness of the bowels.",
  source: "John Calvin"
  },
  {
  quote: "God chooses us, not because we believe, but that we may believe.",
  source: "Augustine of Hippo"
  },
  {
  quote: "A believer's dying day is his ascension day to glory.",
  source: "Thomas Watson"
  },
  {
  quote: "If the final decision for the salvation of fallen sinners were left in the hands of fallen sinners, we would despair all hope that anyone would be saved.",
  source: "R.C. Sproul"
  },
  {
  quote: "It is evident, by both Scripture and reason, that God is infinitely, eternally, unchangeably, and independently glorious and happy: that He cannot be profited by, or receive any thing from, the creature.",
  source: "Jonathan Edwards",
  citation:" citation",
  
  },
  {
  quote: "The love of God in our culture has been purged of anything the culture finds uncomfortable. The love of God has been sanitized, democratized, and above all sentimentalized." ,
  source: "D.A. Carson",
  year: "year"  
 
  },
  {
  quote: "No matter how intense our experiences, no matter how acute our perceptions of what we think God would have us do, we cannot be certain God has spoken unless our revelation is based on Scripture." ,
  source: "James Montgomery Boice"  
  },
  {
  quote: "Rythyms of piety, soccer, Lord's Day Worship, Clemson, and Warm Greetings." ,
  source: "John D Payne"
  },
];
  // console.log(quotes);

/***
 * `getRandomQuote` function returns a random quote from the quotes array
***/
  function getRandomQuote (array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  // stringQuote stylizes postedQuote (which is a pull from getRandomQuote) into the html
  

   
/***
 * `printQuote` function
***/
function printQuote () {
  var postedQuote= getRandomQuote (quotes);
  var stringQuote = 
    `<p class= "quote"> ${postedQuote.quote}</p>
    <p class = "source"> ${postedQuote.source}</p>`;
  // if the postedQuote has a citation or year value, this if else if conditional adds it to the html.
    if (postedQuote.citation) 
     {stringQuote += `<span class="citation"> ${postedQuote.citation} </span> </p>`;
    }
      else if (postedQuote.year)
    {stringQuote += `<span class"year"> ${postedQuote.year} </span> </p>`;};
  
  document.getElementById('quote-box').innerHTML = stringQuote; 
};



// getRandomQuote(quotes).quote, getRandomQuote(quotes).source

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);