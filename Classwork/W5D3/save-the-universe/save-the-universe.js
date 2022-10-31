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

function checkForBrowser() {
    if(typeof window === 'undefined') {
        return false;
    } else {
        return true;
    }
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




//  game object
const game = {
    // arrays for actor objects
    shipGroup   : [],
    alienGroup  : [],

    // number of actors
    shipCount   : randomizerRangeRounded(1, 3), // Default = 1
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

    // set the intial state of the actors to false
    shipReady : false,
    alienReady: false,

    // these two properties are only used if the game is run in the browser
    // otherwise the game runs until either all ships or all aliens are destroyed
    continueGame : null,
    browserPresent : checkForBrowser(),

    // this method is only used if the game is run in the broswer
    resetGame() {
        this.currentShip     = {};
        this.currentAlien    = {};
        this.victor          = {};
        this.vanquished      = {};
        this.victorGroup     = [];
        this.vanquishedGroup = [];
        this.count           = 1;
        this.shipReady       = false;
        this.alienReady      = false;
        this.continueGame    = null;
        this.start();
    },



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
        if(this.currentShip) {
            this.shipReady = true
        }
        return groupOfShips.shift();
    },

    // get the next alien from the alienGroup
    getNextAlien(groupOfAliens) {
        if(this.currentAlien) {
            this.alienReady = true;
        }
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
    duelBetweenCurrentActors() {
    
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
                    this.alienReady      = false;
                    this.continueGame    = false;
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
                    this.shipReady       = false;
                    console.log(`Alien ship had ${this.victor.hull} hull remaining`);
                    break;
                }

            }

    },



    // prepare the battle, then run duel() to determine victor
    startBattleRound() {
        console.log("========================================");
        console.log(`BATTLE # ${this.count++} HAS COMMENCED!!!`);
        console.log("========================================");

        this.showCurrentActors(this.currentShip, this.currentAlien);

        console.log("------------------------------");
        console.log("In-Battle Report");
        console.log("------------------------------");

        this.duelBetweenCurrentActors();

        console.log("------------------------------\n\n");


    },


    // run battle at least once, check for victor, update vanquished with next actor in group, loop until game over
    battleItOut() {
 
        // this while loop only handles the initial battle and is only run once ...
        // so it can either be turned into an IF statement or deleted
        while (this.shipReady === true && this.alienReady === true) {

            // this makes sure that the battle occurs at least once
            if(this.count === 1) {
                this.startBattleRound();
            }   
            
            // this while loop handles all subsequent battles
            // while the vanquished (losing) group still has actors left, run this code
            while(this.vanquishedGroup.length > 0) {

                // if the alien was vanquished, get the next alien from the group
                if(this.vanquished === this.currentAlien) {
                    if(this.browserPresent === true){
                        this.continueGame = confirm("You defeated an alien!\nWould you like to continue?");

                        if(!this.continueGame) {
                            console.log("============================================================");
                            console.log("POST-GAME REPORT");
                            console.log("============================================================");
                            console.log("You live to fight another day!");
                            console.log("============================================================");
                            break;
                        }
                    }
                    this.currentAlien = this.getNextAlien(this.alienGroup);
                    if(this.currentAlien) {
                        this.alienReady = true;
                    }
                } else {
                    // the ship was vanquished, so get the next ship from the group
                    

                    if(this.browserPresent === true){
                        this.continueGame = confirm("One of your ships was destroyed!\nPrepare the next ship?");

                        if(!this.continueGame) {
                            console.log("============================================================");
                            console.log("POST-GAME REPORT");
                            console.log("============================================================");
                            console.log("You live to fight another day!");
                            console.log("============================================================");
                            break;
                        }
                    }
                    this.currentShip  = this.getNextShip(this.shipGroup);
                    if(this.currentShip) {
                        this.shipReady = true;
                    }
                }

                // if we were able to successfully get the next actor, battle() again
                if(this.currentShip && this.currentAlien) {
                    this.startBattleRound();
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

                // if running in the browser, ask user if they would like to play again
                if(this.browserPresent === true){
                    this.continueGame = confirm("New Game?");

                    if(this.continueGame) {
                        this.resetGame();
                    }
                }
            }

        }
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

        // get current ship and current alien for first battle
        this.currentShip  = this.getNextShip(this.shipGroup);
        this.currentAlien = this.getNextAlien(this.alienGroup);

        // battle it out
        this.battleItOut();
  
    },

    
    // prompt the user to continue (NOT USED)
    // could not figure out how to get the script to pause execution for userInput
    // promptUser() {
    //     const readline = require('readline');
    //     const rl = readline.createInterface({input : process.stdin,
    //                                         output : process.stdout});

                                            
    //     rl.question(`Would you like to continue? Type 'y' or 'n'\n`, function(userInput) {
    //         userInput = userInput.trim();
    //         if(userInput === "y") {
    //             console.log("Into the battle we fly!");
    //             this.continueGame = true;
    //             console.log(this.continueGame);
    //             rl.close();
    //             return;
    //         }
    //         else if(userInput === "n") {
    //             console.log("Good choice! Live to fight another day.");
    //             this.continueGame = false;
    //             console.log(this.continueGame);
    //             rl.close();
    //             return;
    //         } else {
    //             rl.setPrompt(`Invalid response. Please type 'y' or 'n'\n`);
    //             rl.prompt();
    //             rl.on('line', function(userInput) {
    //                 if(userInput === "y") {
    //                     console.log("Into the battle we fly!");
    //                     this.continueGame = true;
    //                     console.log(this.continueGame);
    //                     rl.close();
    //                     return;
    //                 }
    //                 else if(userInput === "n") {
    //                     console.log("Good choice! Live to fight another day.");
    //                     this.continueGame = false;
    //                     console.log(this.continueGame);
    //                     rl.close();
    //                     return;
    //                 } else {
    //                     rl.setPrompt(`Your answer of ${userInput} is not valid. Please type 'y' or 'n'\n`);
    //                     rl.prompt();
    //                 }
    //             })
    //         }

    //     });

    //     // rl.on('close', function() {
    //     //     console.log("Time for the next round!");
    //     // });

        
    // },
};


game.start();

