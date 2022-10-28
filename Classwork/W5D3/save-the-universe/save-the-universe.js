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
        this.hull      = 5; // Change back to 20
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


    // // get the actors for the upcoming battle
    // getActors() {
    //     // remove the first ship from the group, set it as the currentShip
    //     currentShip = this.shipGroup.shift();

    //     // if no more ships left, currentShip is 'undefined'
    //     // if(!currentShip) {
    //     //     console.log("You have no more ships left.");
    //     // }
    //     console.log(currentShip);


    //     // remove the first alien from the group, set it as the currentAlien
    //     currentAlien = this.alienGroup.shift();

    //     // if no more aliens left, currentAlien is 'undefined'
    //     // if(!currentAlien) {
    //     //     console.log("There are no more aliens left.");
    //     // }
    //     console.log(currentAlien);
    // },

    getNextShip(groupOfShips) {
        return groupOfShips.shift();
    },

    getNextAlien(groupOfAliens) {
        return groupOfAliens.shift();
    },

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
            while(currentShip.hull > 0) {

                // ship attacks first
                if(randomizer() < currentShip.accuracy) {
                    console.log(`You landed an attack for ${currentShip.firepower} damage`);
                    currentAlien.hull -= currentShip.firepower;
                    console.log(`... Alien has ${currentAlien.hull} hull remaining`);
                } else {
                    console.log("You missed the attack ...");
                }

                // check the alien's hull
                if(currentAlien.hull <= 0) {
                    console.log("------------------------------");
                    console.log("\n------------------------------");
                    console.log("Post-Battle Report");
                    console.log("------------------------------");
                    console.log("Hurray!!! You destroyed the evil alien! ☺☺☺");
                    this.victor = currentShip;
                    console.log(`Your ship had ${this.victor.hull} hull remaining.`);
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
                    console.log("\n------------------------------");
                    console.log("Post-Battle Report");
                    console.log("------------------------------");
                    console.log("Your ship was DESTROYED!!! ☻☻☻");
                    this.victor = currentAlien;
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


    // battle logic, run other methods
    battle() {
        console.log("========================================");
        console.log(`BATTLE # ${this.count++} HAS COMMENCED!!!`);
        console.log("========================================");


        this.showCurrentActors(currentShip, currentAlien);


        console.log("------------------------------");
        console.log("In-Battle Report");
        console.log("------------------------------");
        this.duel();
        console.log("------------------------------\n\n");
        // this.promptUser();

    },


    // start the game
    start() {
        console.log("================================================================================");
        console.log("LET THE BATTLE FOR EARTH BEGIN!!!");
        console.log("================================================================================\n\n");

        // create player and aliens
        this.createShips();
        this.createAliens();

        // display all stats
        this.showAllStats();

        // get current ship and current alien
        currentShip  = this.getNextShip(this.shipGroup);
        currentAlien = this.getNextAlien(this.alienGroup);

        do {
            this.battle();
        }

        while (this.shipGroup.length > 0 && this.alienGroup.length > 0) {
            // this.battle();
            // console.log(this.victor)
            // console.log(currentShip)
            // console.log(currentAlien);


            if(this.victor === currentShip) {
                while (this.alienGroup.length >= 0) {
                    if(this.alienGroup.length === 0) {
                        console.log("============================================================");
                        console.log("POST-GAME REPORT");
                        console.log("============================================================");
                        console.log(`You defeated all ${this.count-1} aliens! You win!!!`);
                        console.log("============================================================");
                        break;
                    } else {
                        // console.log(this.alienGroup.length);
                        // console.log(currentAlien);
                        if(currentAlien.hull <= 0) {
                            currentAlien = this.getNextAlien(this.alienGroup);
                            // console.log(currentAlien);
                            if(currentAlien) {
                                this.battle();
                                if(this.victor === currentAlien) {
                                    console.log("============================================================");
                                    console.log("POST-GAME REPORT");
                                    console.log("============================================================");
                                    console.log(`You only defeated ${this.count-2} of the aliens. Earth is lost ... better luck next time`);
                                    console.log("============================================================");
                                    break;
                                }
                            } 

                        }
                    }
                }
            } else if (this.victor === currentAlien) {
                console.log("============================================================");
                console.log("POST-GAME REPORT");
                console.log("============================================================");
                console.log(`All ${this.alienGroup.length} have invaded Earth. Earth is lost ... What were you doing?`);
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



