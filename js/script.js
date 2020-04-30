/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array is an array of object literals consisting of a quote value, source value, and sometimes a citation and year value. 
***/

var quotes = [
  {
  quote: "Adopt the pace of nature: her secret is patience.",
  source: "Ralph Waldo Emerson"
  },
  {
  quote: "Brute animals are the most healthy, and they are exposed to all weather, and of men, those are healthiest who are the most exposed.",
  source: "Thomas Jefferson"
  },
  {
  quote: "The mountains are calling and I must go.",
  source: "John Muir"
  },
  {
  quote: "Thousands of tired, nerve-shaken, over-civilized people are beginning to find out that going to the mountains is going home; that wildness is a necessity",
  source: "John Muir",
  citation: "Our National Parks"
  },
  {
  quote: "The lack of power to take joy in outdoor nature is as real a misfortune as the lack of power to take joy in books",
  source: "Theodore Roosevelt",
  
  },
  {
  quote: "If you have built castles in the air, your work need not be lost; that is where they should be. Now put the foundations under them." ,
  source: "Henry David Thoreau"
 
  },
  {
  quote: "All good things are wild and free." ,
  source: "Henry David Thoreau"  
  },
  {
  quote: "These woods are lovely, dark and deep, But I have promises to keep, And miles to go before I sleep, And miles to go before I sleep." ,
  source: "Robert Frost",
  year: "1923"
  },
];
  // console.log(quotes);

/***
 * `getRandomQuote` function returns a random quote from the quotes array
***/

/***I struggled with understanding the purpose of parameters in a function, but with some help from a friend of mine I realized that the parameter is the information I put into
 the function in order for the argument to pull from the array. Aka by making the parameter the array, I am telling the getRandomQuote function to return a random object from the 
 array parameter, which is what getRandomQuote below does.
*/
  function getRandomQuote (array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  // stringQuote stylizes postedQuote (which is a pull from getRandomQuote) into the html
/***
 * `printQuote` function - this took the help of several folks in the Slack but I eventually figured out that for printQuote to work properly, I had to first declare a new variable
 * that would be a concatination of the quote, source, etc. I already knew I needed an if else conditional in order to add the citations but had difficulty understanding the specific
 * html instructions to give it. After some trial and error I realized that I had closed off the <p> prematurely and that was affecting format. Now printQuote will print the quote
 * pulled from getRandomQuote into the "quote" class section within the "quote-box", the source into the "source" class, and where applicable, the citation and year in their respective
 * span classes.
***/
function printQuote () {
  var postedQuote= getRandomQuote (quotes);
  var stringQuote =  
    `<p class ="quote"> ${postedQuote.quote}</p>
      <p class ="source"> ${postedQuote.source}`;
  // if the postedQuote has a citation or year value, this if else if conditional adds it to the html.
    if (postedQuote.citation) 
     {stringQuote += `<span class="citation">
      ${postedQuote.citation}`;
    }
      else if (postedQuote.year)
    {stringQuote += `<span class "year">  ,    
     ${postedQuote.year} </span> </p>`;};
  
  document.getElementById('quote-box').innerHTML = stringQuote; 
};



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);