let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];



// Part 1
function shortenTitle() {
  let mainTitleEl = document.getElementById('main-title');  // 1.0
  mainTitleEl.textContent = "Welcome to the DOM!";          // 1.1
}
shortenTitle();

// Part 2
function changeBodyColor() {
  let bodyEl = document.querySelector('body');              // 2.0
  bodyEl.style.backgroundColor = 'tan';                     // 2.1
}
changeBodyColor();

// Part 3
function removeLastFavThing() {
  let favThingsEl = document.getElementById('favorite-things');  // 3.0
  favThingsEl.lastElementChild.remove();                         // 3.1
}
removeLastFavThing();

// Part 4
function changeSpecialTitleSize() {
  let specialTitleEl = document.querySelectorAll('.special-title'); // 4.0
  specialTitleEl.forEach(function(elem) {                           // 4.0
  elem.style.fontSize = '2rem';
});
};
changeSpecialTitleSize();

// Part 5
function removeChicago() {
  let pastRacesListArray = document.querySelectorAll('#past-races > li'); // 5.0
  pastRacesListArray.forEach(function(liEl) {                             // 5.1
  if(liEl.textContent === 'Chicago') {
    liEl.remove();
    return;
  }
});

}
removeChicago();

// Part 6
function addMiami() {
  let newLiEl = document.createElement('li');                             // 6.0
  newLiEl.textContent = 'Miami';                                          

  let pastRacesULEl = document.getElementById('past-races');
  pastRacesULEl.append(newLiEl);                                          // 6.1

  return newLiEl;
}
let newLiElement = addMiami();



// Part 7
function createBlogPost(newLiElment) {
  let mainEl = document.querySelector('.main');       // 7.0
  
  let newBlogDiv = document.createElement('div');
  newBlogDiv.classList.add('blog-post', 'purple');
  
  let newBlogH1 = document.createElement('h1');
  newBlogH1.textContent = newLiElment.textContent;
  
  let newBlogP = document.createElement('p');
  newBlogP.textContent = "I RACED ACROSS THE BEACHES!";
  
  newBlogDiv.append(newBlogH1,newBlogP);
  mainEl.append(newBlogDiv);
}
createBlogPost(newLiElement);

// Part 8
function getRandomQuote() {
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').innerText = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  
  let quoteTitleEl = document.getElementById('quote-title');
  quoteTitleEl.addEventListener('click', function() {
    randomQuote();
  });
}
getRandomQuote();



// Part 9
function addMouseEvents() {
  let allBlogPosts = document.querySelectorAll('.blog-post');
  console.log(allBlogPosts);
  allBlogPosts.forEach(function(blogpost) {
    console.log()
    blogpost.addEventListener('mouseout', function() {
      // blogpost.classList.toggle('purple'); // <-- This is what the instructions indicate. Doesn't work as well
      blogpost.classList.toggle('red');
    });
    blogpost.addEventListener('mouseenter', function() {
      blogpost.classList.toggle('red');
    });
  });
}
addMouseEvents()





// node list is static (querySelector)
// html collection is dynamic (getElementBy)