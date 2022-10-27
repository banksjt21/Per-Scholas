//  DOM Queries
// const startButton    = document.querySelector('#start-button');
const gameContainer  = document.querySelector('#game-container');
const startContainer = document.querySelector('#start-container');
const createContainer = document.querySelector('#create-container');

// Input Queries
const fName         = document.querySelector('#fname');
const chosenElement = document.querySelector('#chosen-element');

// Player 1
const p1Name    = document.querySelector('#p1-name');
const p1Element = document.querySelector('#p1-element');

// Player 2
const p2Name    = document.querySelector('#p2-name');
const p2Element = document.querySelector('#p2-element');

// Battle
const prompt = document.querySelector('#battle-prompt');
const battleBtn = document.querySelector('#battle-button');


class Player {
    constructor(name, element) {
        this.name    = name;
        this.element = element;
    }
}

const game = {
    players: [],
    playerOneReady: false,

    start: function() {
        // startButton.classList.toggle('hide');
        gameContainer.classList.toggle('hide');
        startContainer.classList.toggle('hide');
    },

    createPlayer: function(currentElement) {
            // console.log('Creating player');
            // console.log(this.players);
        

            if(!this.playerOneReady) {
                console.log("Creating player one");
                this.players.push(new Player(fName.value, currentElement));
                p1Name.textContent = fName.value;
                p1Element.classList.toggle('hide');
                prompt.innerText = "Player 2: Enter name and element";
                this.playerOneReady = true;
            } else {
                console.log("Creating player two");
                this.players.push(new Player(fName.value, currentElement));
                p2Name.textContent = fName.value;
                p2Element.classList.toggle('hide');
                prompt.innerText = "Let's Battle!!!";
                createContainer.classList.toggle('hide');
                battleBtn.classList.toggle('hide');
            }

            this.clearForm();
    },

    checkElement: function() {
        event.preventDefault(); // 'event' is required b/c we used 'onclick' in the html. Or you can add a parameter to the function and use it instead of 'event' on this line.
        // console.log("We clicked submit.");

        // Check input values
        // console.log(fName.value);
        // console.log(chosenElement.value);

        // Edge case
        const currentElement = chosenElement.value.toLowerCase();
        // console.log(currentElement);

        if(currentElement === "water" || currentElement === "fire" || currentElement === "grass") {
            chosenElement.style.backgroundColor = 'white';
            this.createPlayer(currentElement);
        } else {
            chosenElement.style.backgroundColor = '#fd5e53';
        }
        
        // Change player name
        // this.createPlayer(); //This refers to the game object


    },

    clearForm: function() {
        fName.value         = "";
        chosenElement.value = "";
    },

    battle: function() {
        console.log("We are battling!!!", this.players);
        
        console.log("Player One", this.players[0]);
        console.log("Player Two", this.players[1]);

        const p1 = this.players[0].element;
        const p2 = this.players[1].element;
        const pOneName = this.players[0].name;
        const pTwoName = this.players[1].name;


        // Update element displays
        p1Element.src = `images/${p1}.png`;
        p2Element.src = `images/${p2}.png`;

        if(p1 === "fire" && p2 === "grass") {
            prompt.innerText = `${pOneName} wins`;
        } else if(p1 === "grass" && p2 === "water") {
            prompt.innerText = `${pOneName} wins`;
        } else if(p1 === "water" && p2 === "fire") {
            prompt.innerText = `${pOneName} wins`;
        } else if(p1 === p2) {
            prompt.innerText = "Tie! Both of them died!";
        } else {
            prompt.innerText = `${pTwoName} wins!`;
        }
    }
};

// Event Listeners
// startButton.addEventListener('click', function() {
//     console.log("We're starting the game.");
    
// });