//  W2D3 HW: Static Methods and Properties

/*  ===========================================================================
    Static Methods and Properties
    class Governor {

    }
    - There is only one Governor in the state, add static methods and properties 
      you'd expect a Governor to have.
    - Log the properties and test the methods (don't instantiate)
===========================================================================  */
// This is the Governor from The Walking Dead
class Governor {
    // add static methods and properties you'd expect a Governor to have
    static age      = 36;
    static behavior = "evil";

    static removeCharacterFromShow() { return "You are the weakest link. Goodbye"; }
    static takeOverBase()            { return "Your home is now my home."; }
}

//  Log the properties 
console.log("=====================================================");
console.log("GOVERNOR");
console.log("=====================================================");
console.log(Governor.age);
console.log(Governor.behavior);

// test the methods (don't instantiate)
console.log(Governor.removeCharacterFromShow());
console.log(Governor.takeOverBase());
console.log("=====================================================\n\n\n\n");



/*  ===========================================================================
    Inheritance
    Your base class

    Person{
        constructor(){

        }
    }

    - Think of three properties all people share, set them with the constructor
    - Think of three methods all people share
    - Create a PostalWorker class that inherits from person, add some methods
    - Create a Chef class that inherits from person, add some methods
    - Create 2 PostalWorkers and 2 Chefs, log them and test all their methods
===========================================================================  */
class Person {
    // Think of three properties all people share, set them with the constructor
    constructor(personName, personAge, personFood) {
        this.name = personName;
        this.age  = personAge;
        this.food = personFood
    }

    // Think of three methods all people share
    dance() { console.log(`I'm ${this.name}. I'm ${this.age}. Yo, I'm dancing!`); }
    eat()   { console.log(`Heyyy, I'm about to eat my favorite food which is ${this.food}!`); }
    rest()  { console.log("I'm going to take a nap ...."); }
}

// Create a PostalWorker class that inherits from person, add some methods
class PostalWorker extends Person {
    deliverMail() { console.log(`I'm going to deliver mail today.`); }
    pickupMail()  { console.log("I will pickup mail after I'm finished delivering."); }
}

// Create a Chef class that inherits from person, add some methods
class Chef extends Person {
    cookMeal()       { console.log("I will cook your favorite dish!"); }
    buyIngredients() { console.log("I need to go to the store to purchase the ingredients first."); }
}

// Create 2 PostalWorkers and 2 Chefs
const postalWorkerBobby = new PostalWorker("Bobby", 23, "pizza");
const postalWorkerRicky = new PostalWorker("Ricky", 22, "hamburger");
const chefRalph         = new Chef("Ralph", 20, "salad");
const chefRonny         = new Chef("Ronny", 25, "ice cream");

// log them
console.log("=====================================================");
console.log("PERSON | POSTAL WORKER | CHEF");
console.log("=====================================================");
console.log(postalWorkerBobby);
console.log(postalWorkerRicky);
console.log(chefRalph);
console.log(chefRonny);
console.log("====================================================\n");

// test all their methods
console.log("=====================================================");
postalWorkerBobby.dance();
postalWorkerBobby.eat();
postalWorkerBobby.rest();
postalWorkerBobby.deliverMail();
postalWorkerBobby.pickupMail();
console.log("====================================================\n");

console.log("=====================================================");
postalWorkerRicky.dance();
postalWorkerRicky.eat();
postalWorkerRicky.rest();
postalWorkerRicky.deliverMail();
postalWorkerRicky.pickupMail();
console.log("====================================================\n");

console.log("=====================================================");
chefRalph.dance();
chefRalph.eat();
chefRalph.rest();
chefRalph.cookMeal();
chefRalph.buyIngredients();
console.log("====================================================\n");

console.log("=====================================================");
chefRonny.dance();
chefRonny.eat();
chefRonny.rest();
chefRonny.cookMeal();
chefRonny.buyIngredients();
console.log("====================================================\n");