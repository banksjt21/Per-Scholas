/*  ===========================================================================
    W5D3: Save the Universe
===============================================================================
Build a game of battling alien spaceships using Javascript.
Earth has been attacked by a horde of aliens! You are the captain of the USS HelloWorld, on a mission to destroy every last alien ship.

Battle the aliens as you try to destroy them with your lasers.

There are six alien ships. The aliens' weakness is that they are too logical and attack one at a time: they will wait to see the outcome of a battle before deploying another alien ship. Your strength is that you have the initiative and get to attack first. However, you do not have targeting lasers and can only attack the aliens in order. After you have destroyed a ship, you have the option to make a hasty retreat.

A game round would look like this:
-------------------
- You attack the first alien ship
- If the ship survives, it attacks you
- If you survive, you attack the ship again
- If it survives, it attacks you again … etc
- If you destroy the ship, you have the option to attack the next ship or to retreat
- If you retreat, the game is over, perhaps leaving the game open for further developments or options
- You win the game if you destroy all of the aliens
- You lose the game if you are destroyed




Ship Properties
-------------------
- hull is the same as hitpoints. If hull reaches 0 or less, the ship is destroyed
- firepower is the amount of damage done to the hull of the target with a successful hit
- accuracy is the chance between 0 and 1 that the ship will hit its target


Your spaceship, the USS HelloWorld should have the following properties:
-------------------
- hull - 20
- firepower - 5
- accuracy - .7


The alien ships should each have the following ranged properties determined randomly:
-------------------
- hull - between 3 and 6
- firepower - between 2 and 4
- accuracy - between .6 and .8


You could be battling six alien ships each with unique values.


Example use of accuracy to determine a hit:
-------------------
    if (Math.random() < alien[0].accuracy) {
        console.log('You have been hit!');
    }
===========================================================================  */



//  Function Declarations
function randomizer(min, max) {
    return Math.random() * (max - min) + min;
}

function randomizerRound(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}


//  Class Definitions
class Ship {
    // set ship properties
    constructor() {
        this.hull      = 20;
        this.firepower = 5;
        this.accuracy  = 0.7;
    }

    // get ship properties
    getShipStats() {
        console.log(this.hull, this.firepower, this.accuracy);
    }
}

class Alien {
    // set alien properties
    constructor() {
        this.hull      = randomizerRound(3, 6);
        this.firepower = randomizerRound(2, 4);
        this.accuracy  = randomizer(0.6, 0.8);
    }

    // get alien properties
    getAlienStats() {
        console.log(this.hull, this.firepower, this.accuracy);
    }
}





const game = {
    // declare properties
    playerShip : {},
    alienGroup : [],

    // create player ship
    createShip() {
        playerShip = new Ship();
    },

    // create alien ships
    createAliens() {
        const alienCount = randomizerRound(1, 6);

        alienGroup = [];
        for(let alien = 1; alien <= alienCount; alien++) {
            alienGroup.push(new Alien());
        }
    },

    // show the stats of all actors
    showAllStats() {
        console.log(playerShip);
        console.log(alienGroup);
    },

    battle() {
        console.log("\n----------------------");
        console.log("Battle has commenced!!!");
        console.log("----------------------\n");
    },


    // start the game
    start() {
        console.log("======================");
        console.log("Game Started");
        console.log("======================\n");

        // create player and aliens
        this.createShip();
        this.createAliens();

        // display all stats
        this.showAllStats();

        // commence the battle!!!
        this.battle();

    },

    

};





game.start();



































// const randomizer = Math.random();
// // 0 and 1

// if(randomizer > 0.5) {
//     console.log("Human attacks first");
// } else {
//     console.log("Alien attacks first");
// }






// // Test Ship and Alien classes
// console.log("======================");
// console.log("Ship Test");
// console.log("----------------------");
// let ship = new Ship();
// ship.getShipStats();
// console.log("======================\n");

// console.log("======================");
// console.log("Alien Test");
// console.log("----------------------");
// let alien = new Alien();
// alien.getAlienStats();
// console.log("======================\n");