

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




  function getRandomQuote (array) {
    return array[Math.floor(Math.random() * array.length)];
  }

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



document.getElementById('load-quote').addEventListener("click", printQuote, false);