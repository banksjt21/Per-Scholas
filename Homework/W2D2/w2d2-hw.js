//  W2D2: Classes Homework 

/*  ===========================================================================
    You will be working with this class

        class Cat {}

    - give the class at least 3 properties
    - give the class at least 3 methods
    - create two instances of the class (two cats)
    - log both instances to see their properties
    - invoke each method from both instances
===========================================================================  */
class Cat {
    // give the class at least 3 properties
    constructor(name, color, age) {
        this.catName  = name;
        this.catColor = color;
        this.catAge   = age;
    }

    // give the class at least 3 methods
    sleep() {
        console.log("ZzZzZz ... mmm FoOoOod ... ZzZzZz");
    }

    wakeUp() {
        console.log("Yawnnnnn ... I think it's almost time to eat and take a nap.");
    }

    eat() {
        console.log("So full ... Time to go to sle... ZzZzZzZz");
    }

    speakAge(otherCat) {
        console.log(`Purrrr ... Hey ${otherCat.catName}. I'm ${this.catAge} years old.`)
    }

    speakColor(otherCat) {
        console.log(`Meowww ... Hi ${otherCat.catName}. I'm ${this.catColor}.`)
    }
}

// instantiate 2 new Cats
const garfield = new Cat("Garfield", "orange", 6);
const tom = new Cat("Tom", "gray", 5);

// create two instances of the Cat class
console.log("\n=====================================================");
console.log("create two instances of the Cat class");
console.log("=====================================================");
console.log(garfield);
console.log(tom)
console.log("=====================================================\n");

// invoke each method from both instances (Garfield)
console.log("=====================================================");
console.log("test garfield methods");
console.log("=====================================================");
garfield.wakeUp();
garfield.eat();
garfield.sleep();
garfield.speakAge(tom);
garfield.speakColor(tom);
console.log("=====================================================\n");

// invoke each method from both instances (Tom)
console.log("=====================================================");
console.log("test tom methods");
console.log("=====================================================");
tom.wakeUp();
tom.eat();
tom.sleep();
tom.speakAge(garfield);
tom.speakColor(garfield);
console.log("=====================================================\n\n\n\n");







/*  ===========================================================================
    Here is a class to work with

        class Pirate {
                constructor(){
            }
        }

    - create 3 properties that are set by the constructor
    - create 3 methods
    - instantiate 2 arrays of 3 pirates, name the arrays after your favorite 
      pirate ships, jollyRoger and blackPearl
    - loop over each array and print 3 properties of each pirate
===========================================================================  */
class Pirate {
    // create 3 properties that are set by the constructor
    constructor([nameOfShip, colorOfShip, numOfCrewMembers]) {
        this.shipName       = nameOfShip;
        this.shipColor      = colorOfShip;
        this.shipPopulation = numOfCrewMembers;
    }

    // create 3 methods
    rowForward()  { console.log("Aye matey ... Keep moving forward!!!");}
    rowBackward() { console.log("Ahoy ... Backwards we go!!!");}
    rowStop()     { console.log("Why did we stop rowing?!?!? Arghh!!!");}
}

const shipOne = ["Jolly Roger", "black", 22];
const shipTwo = ["Black Pearl", "red",   29];

// instantiate 2 arrays of 3 pirates, name the arrays after your favorite pirate ships, 
// jollyRoger and blackPearl
const jollyRoger = new Pirate(shipOne);
const blackPearl = new Pirate(shipTwo);

console.log("\n=====================================================");
console.log("create two instances of the Pirate class");
console.log("=====================================================");
console.log(jollyRoger);
console.log(blackPearl);
console.log("=====================================================\n");

// loop over each array and print 3 properties of each pirate
let arrayOfShips = [jollyRoger, blackPearl];

arrayOfShips.forEach(function(ship) {
    console.log(ship)
})

// looping thru the object
// for(const shipProperty in jollyRoger) {
//     console.log(jollyRoger[shipProperty]);
// }