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
        this.hull      = randomizerRangeRounded(4, 7);      // Default = 20
        this.firepower = randomizerRangeRounded(3, 5);      // Default = 5
        this.accuracy  = randomizerRangeForFloat(0.6, 0.8); // Default = 0.7
    }

    // get ship properties
    getShipStats() {
        console.log(this.hull, this.firepower, this.accuracy);
    }
}

class Alien {
    // set alien properties
    constructor() {
        this.hull      = randomizerRangeRounded(3, 6);      // Default = (3, 6)
        this.firepower = randomizerRangeRounded(2, 4);      // Default = (2, 4)
        this.accuracy  = randomizerRangeForFloat(0.6, 0.8); // Default = (0.6, 0.8)
    }

    // get alien properties
    getAlienStats() {
        console.log(this.hull, this.firepower, this.accuracy);
    }
}





const game = {
    // arrays for actor objects
    shipGroup   : [],
    alienGroup  : [],

    // number of actors
    shipCount   : randomizerRangeRounded(3, 4), // Default = 1
    alienCount  : randomizerRangeRounded(3, 6), // Default = 6

    // curent actor objects used in duel()
    currentShip : {},
    currentAlien: {},

    // values are set in the duel()
    victor          : {},
    vanquished      : {},
    victorGroup     : [],
    vanquishedGroup : [],

    // number of rounds
    count       : 1,


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
        console.log("============================================================");
        console.log("PRE-GAME REPORT [ALL ACTORS]");
        console.log("============================================================");
        console.log(this.shipGroup);
        console.log(this.alienGroup);
        console.log("=============================================================\n\n");
    },


    // get the next ship from the shipGroup
    getNextShip(groupOfShips) {
        return groupOfShips.shift();
    },

    // get the next alien from the alienGroup
    getNextAlien(groupOfAliens) {
        return groupOfAliens.shift();
    },

    // display all actors in the game
    showCurrentActors(theCurrentShip, theCurrentAlien) {
        console.log("------------------------------");
        console.log("Pre-Battle Report [Current Actors]");
        console.log("------------------------------");
        console.log(theCurrentShip);
        console.log(theCurrentAlien);
        console.log("------------------------------\n");
    },


    // battle logic for the current actors
    duel() {
    
            // keep running this loop while the ship's hull is than 0
            while(this.currentShip.hull > 0) {

                // ship attacks first
                if(randomizer() < this.currentShip.accuracy) {
                    console.log(`You landed an attack for ${this.currentShip.firepower} damage`);
                    this.currentAlien.hull -= this.currentShip.firepower;
                    console.log(`... Alien has ${this.currentAlien.hull} hull remaining`);
                } else {
                    console.log("You missed the attack ...");
                }

                // check the alien's hull
                if(this.currentAlien.hull <= 0) {
                    console.log("------------------------------");
                    console.log("\n------------------------------");
                    console.log("Post-Battle Report");
                    console.log("------------------------------");
                    console.log("Hurray!!! You destroyed the evil alien! ☺☺☺");
                    this.victor          = this.currentShip;
                    this.vanquished      = this.currentAlien;
                    this.victorGroup     = this.shipGroup;
                    this.vanquishedGroup = this.alienGroup;
                    console.log(`Your ship had ${this.victor.hull} hull remaining.`);
                    break;
                }

                // alien attacks next 
                if(randomizer() < this.currentAlien.accuracy) {
                    console.log(`Alien attacked for ${this.currentAlien.firepower} damage`);
                    this.currentShip.hull -= this.currentAlien.firepower;
                    console.log(`... Your Ship has ${this.currentShip.hull} hull remaining`);
                } else {
                    console.log("You dodged the attack!");
                }

                // check the ship's hull
                if(this.currentShip.hull <= 0) {
                    console.log("------------------------------");
                    console.log("\n------------------------------");
                    console.log("Post-Battle Report");
                    console.log("------------------------------");
                    console.log("Your ship was DESTROYED!!! ☻☻☻");
                    this.victor          = this.currentAlien;
                    this.vanquished      = this.currentShip;
                    this.victorGroup     = this.alienGroup;
                    this.vanquishedGroup = this.shipGroup;
                    console.log(`Alien ship had ${this.victor.hull} hull remaining`);
                    break;
                }

            }

    },

    // prompt the user to continue
    // promptUser() {
    //     const readline = require('readline');
    //     const rl = readline.createInterface({input : process.stdin,
    //                                         output : process.stdout});

    //     rl.question(`Would you like to continue?\n`, function(userInput) {
    //         userInput = userInput.trim();
    //         if(userInput === "y") {
    //             console.log("Here we go again ...");
    //             rl.close();
    //         }
    //         else if(userInput === "n") {
    //             console.log("Good choice! Live to fight another day.");
    //             rl.close();
    //         } else {
    //             rl.setPrompt('Invalid response. Please try again.\n');
    //             rl.prompt();
    //             rl.on('line', function(userInput) {
    //                 if(userInput === "y") {
    //                     console.log("Here we go again!");
    //                     rl.close();
    //                 }
    //                 else if(userInput === "n") {
    //                     console.log("Good choice! Live to fight another day.");
    //                     rl.close();
    //                 } else {
    //                     rl.setPrompt(`Your answer of ${userInput} is not valid. Try again\n`);
    //                     rl.prompt();
    //                 }
    //             })
    //         }
    //     });

    //     // rl.on('close', function() {
    //     //     console.log("Time for the next round!");
    //     // });

    // },


    // prepare the battle, then run duel()
    battle() {
        console.log("========================================");
        console.log(`BATTLE # ${this.count++} HAS COMMENCED!!!`);
        console.log("========================================");

        this.showCurrentActors(this.currentShip, this.currentAlien);

        console.log("------------------------------");
        console.log("In-Battle Report");
        console.log("------------------------------");

        this.duel();

        console.log("------------------------------\n\n");
        // this.promptUser();
    },


    // start the game
    start() {
        // display title
        console.log("================================================================================");
        console.log("LET THE BATTLE FOR EARTH BEGIN!!!");
        console.log("================================================================================\n\n");

        // create player and aliens
        this.createShips();
        this.createAliens();

        // display all stats
        this.showAllStats();

        // get current ship and current alien
        this.currentShip  = this.getNextShip(this.shipGroup);
        this.currentAlien = this.getNextAlien(this.alienGroup);

        // while both actor groups are not empty, run this code
        while (this.shipGroup.length > 0 && this.alienGroup.length > 0) {

            // make sure that the battle occurs at least once
            if(this.count === 1) {
                this.battle();
            }            

            // while the vanquished (losing) group still has actors left, run this code
            while(this.vanquishedGroup.length > 0) {
                // if the alien was vanquished, get the next alien from the group
                if(this.vanquished === this.currentAlien) {
                    this.currentAlien = this.getNextAlien(this.alienGroup);
                } else {
                    // the ship was vanquished, so get the next ship from the group
                    this.currentShip  = this.getNextShip(this.shipGroup);
                }

                // if we were able to successfully get the next actor, battle() again
                if(this.currentShip && this.currentAlien) {
                    this.battle();
                } else {
                    // exit this while loop
                    break;
                }
            }

            // if the losing group has no more actors left, the game is over
            if(this.vanquishedGroup.length === 0) {
                console.log("============================================================");
                console.log("POST-GAME REPORT");
                console.log("============================================================");
                if(this.victor === this.currentShip) {
                    console.log(`You defeated all of the aliens! You win!!!`);
                } else {
                    console.log(`You didn't defeat enough of the aliens. Earth is lost ... better luck next time`);
                }
                console.log("============================================================");
            }

        }
  
    }
};


game.start();








/*

// get victor from battle()
// ship destroys alien, try to get the next alien from aliengroup
if (victor === ship) {
    let alienReady = getAlien()
    if alienReady === true {
        start new battle round
    }
    else // alienReady must be false b/c no more aliens left {
        ship wins the game
    }
}

// (victor === alien) b/c alien destroyed the ship, so try to get another ship from shipgroup
else {
        let shipReady = getShip()
        if shipReady === true
            start new battle round
        else // shipReady must be false b/c no more ships left
            alien wins the game
}

*/



