//  DOM Queries
const gameContainer  = document.querySelector('#game-container');
const startContainer = document.querySelector('#start-container');

// Input Queries
const fName         = document.querySelector('#fname');
const chosenElement = document.querySelector('#chosen-element');

// Player 1
const p1Name = document.querySelector('#p1-name');


class Player {
    constructor(name, element) {
        this.name    = name;
        this.element = element;
    }
}

const game = {
    start: function() {
        gameContainer.classList.toggle('hide');
        startContainer.classList.toggle('hide');
    },

    checkElement: function() {
        event.preventDefault(); // 'event' is required b/c we used 'onclick' in the html. Or you can add a parameter to the function and use it instead of 'event' on this line.
        // console.log("We clicked submit.");

        // Check input values
        console.log(fName.value);
        console.log(chosenElement.value);
        
        // Change player name
        p1Name.textContent = fName.value;
    }
};
