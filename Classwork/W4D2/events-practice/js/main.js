// Events!!

/*
DOM Events are the foundation of interactivity of a website.

We will tell JS to watch for an event (button click) and respond to that event with some kind of functionality

Ref to all events possible:
https://developer.mozilla.org/en-US/docs/Web/Events


The way we respond to events is with callback functions. This function is ran once the event happens

3 ways to add:

1. in the HTML (inline)

2. Assigning to DOM elements' properties:

3. Calling addEventListener()on a DOM element

Option 3 is what we want to use.!!

*/

// 2 other ways to add an event listener
// const testBtn = document.querySelector("#test")

// function reset () {
//   console.log("hi")
// }

// testBtn.onclick = reset
// see button with id="test" in html for other way





//alert("js loaded") //check to see if js is loaded

// Our First Event Listener
// Goal: When we click the Add Comment button, we want to create a new comment with the text entered in the input and then clear the input.

// We will do this by add a 'click' event listener

const btn = document.querySelector('button')
const ulEl = document.querySelector('ul')



btn.addEventListener("click", (evt) => {
  const li = document.createElement("li")
  const input = document.querySelector("input")
  console.dir(input)

  li.textContent = input.value
  // ulEl.append(li) // adds element after the last child
  ulEl.prepend(li) // adds to the top of the ul
  input.value = ""
})

/*
Review Questions

What is the name of the method used to attach event listeners to elements?
  element.addEventListener()

What is that method's signature (a method's name, the number & type of arguments it takes, and what it returns)?
  1st: eventName 2nd: callback

Name three events that might be triggered in the browser.
  click hover drag etc.
*/

// Event Bubbling Example
const p = document.querySelector('p');



p.addEventListener('click', (event) => {
  alert("hi")
  evt.stopPropagation()
})


// Event Delegation
// Uses 
function handleClick (evt) {
  evt.target.style.backgroundColor = "yellow"
}

document.querySelector('ul').addEventListener('click', handleClick);

// Removing a eventListeners
// in order remove an event listener, you need the name of the function that you added. Meaning you should define the function before you add or remove Ex: Look at handleClick
document.querySelector('ul').removeEventListener('click', handleClick)

/*
Essential Questions

What is the argument that JS passes to an event listener when it calls it? 
    the evt object

What is the name of the property on the above argument that represents the DOM element that dispatched the event?
    event.target


Let's say you needed to have an event listener respond to a clickevent on the <td>s within a <table>- would you have to add event listeners to each <td>? Support your answer.

  No because event delegation exists, you will only have to put the eventListener on the table element and use event.target to determine which td was clicked.

*/