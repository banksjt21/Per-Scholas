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
function randomizer() {
    return Math.random();
}

function randomizerRangeForFloat(min, max) {
    return parseFloat(Number(Math.random() * (max - min) + min).toFixed(1));
}

function randomizerRangeRounded(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}


//  Class Definitions
class Ship {
    // set ship properties
    constructor() {
        this.hull      = 10; // Change back to 20
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
        this.hull      = randomizerRangeRounded(3, 6);
        this.firepower = randomizerRangeRounded(2, 4);
        this.accuracy  = randomizerRangeForFloat(0.6, 0.8);
    }

    // get alien properties
    getAlienStats() {
        console.log(this.hull, this.firepower, this.accuracy);
    }
}





const game = {
    // declare properties
    shipGroup   : [],
    alienGroup  : [],
    shipCount   : randomizerRangeRounded(1, 1),
    alienCount  : randomizerRangeRounded(1, 6),
    currentShip : {},
    currentAlien: {},
    victor      : {},


    // create new ships, add to shipGroup
    createShips() {
        for(let ship = 1; ship <= this.shipCount; ship++) {
            this.shipGroup.push(new Ship());
        }
    },


    // create alien ships, add to alienGroup
    createAliens() {
        for(let alien = 1; alien <= this.alienCount; alien++) {
            this.alienGroup.push(new Alien());
        }
    },


    // show the stats of all actors
    showAllStats() {
        console.log("========================================");
        console.log("PRE-GAME REPORT [ALL ACTORS]");
        console.log("========================================");
        console.log(this.shipGroup);
        console.log(this.alienGroup);
        console.log("========================================\n\n");
    },


    // get the actors for the upcoming battle
    getActors() {
        // remove the first ship from the group, set it as the currentShip
        currentShip = this.shipGroup.shift();

        // if no more ships left, currentShip is 'undefined'
        if(!this.currentShip) {
            console.log("You have no more ships left.");
        }
        console.log(currentShip);


        // remove the first alien from the group, set it as the currentAlien
        currentAlien = this.alienGroup.shift();

        // if no more aliens left, currentAlien is 'undefined'
        if(!this.currentAlien) {
            console.log("There are no more aliens left.");
        }
        console.log(currentAlien);
    },


    // battle logic for the current actors
    duel() {
        
        // while(this.currentShip === true && this.currentAlien === true) {

        // }

        // keep running this loop while the ship's hull is than 0
        while(currentShip.hull > 0) {

            // ship attacks first
            if(randomizer() < currentShip.accuracy) {
                console.log(`You landed an attack for ${currentShip.firepower} damage`);
                currentAlien.hull -= currentShip.firepower;
                console.log(`... Alien has ${currentAlien.hull} remaining`);
            } else {
                console.log("You missed the attack ...");
            }

            // check the alien's hull
            if(currentAlien.hull <= 0) {
                console.log("------------------------------");
                console.log("Hurray!!! You destroyed the evil alien! ☺☺☺");
                this.victor = currentShip;
                console.log(`Your ship has ${this.victor.hull} hull remaining.`);
                break;
            }

            // alien attacks next 
            if(randomizer() < currentAlien.accuracy) {
                console.log(`Alien attacked for ${currentAlien.firepower} damage`);
                currentShip.hull -= currentAlien.firepower;
                console.log(`... Your Ship has ${currentShip.hull} hull remaining`);
            } else {
                console.log("You dodged the attack!");
            }

            // check the ship's hull
            if(currentShip.hull <= 0) {
                console.log("------------------------------");
                console.log("Your ship was DESTROYED!!! ☻☻☻");
                this.victor = currentAlien;
                console.log(`Alien ship had ${this.victor.hull} hull remaining`);
                break;
            }

        }
    },


    // battle logic, run other methods
    battle() {
        console.log("========================================");
        console.log("BATTLE HAS COMMENCED!!!");
        console.log("========================================");


        console.log("------------------------------");
        console.log("Pre-Battle Report [Current Actors]");
        console.log("------------------------------");
        this.getActors();
        console.log("------------------------------\n");


        console.log("------------------------------");
        console.log("In-Battle Report");
        console.log("------------------------------");
        this.duel();
        console.log("------------------------------");


    },


    // start the game
    start() {
        console.log("============================================================");
        console.log("LET THE GAMES BEGIN!!! FOR EARTH!!!");
        console.log("============================================================\n\n");

        // create player and aliens
        this.createShips();
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