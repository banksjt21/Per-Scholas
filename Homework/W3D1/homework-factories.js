//  W3D1 - Homework - Creating Classes and Factories
//  https://perscholas.instructure.com/courses/1138/assignments/229435


//  Hamster Class
class Hamster {
    // properties
    constructor(hamsterName) {
        this.owner = "",
        this.name  = hamsterName,
        this.price = 15
    }
    
    // methods
    wheelRun() { console.log("squeak squeak"); }
    eatFood()  { console.log("nibble nibble"); }
    getPrice() { return this.price; }
}

// Person Class
class Person {
    // properties
    constructor(personName) {
        this.name        = personName,
        this.age         = 0,
        this.height      = 0,
        this.weight      = 0,
        this.mood        = 0,
        this.hamsters    = [],
        this.bankAccount = 0
    }

    // methods
    getName()        { return this.name;       }
    getAge()         { return this.age;        }
    getWeight()      { return this.weight;     }
    greet()          { console.log(this.name); }
    eat() {
        this.weight++;
        this.mood++;
    }
    exercise() {
        this.weight--;
    }
    ageUp() {
        this.age++;
        this.height++;
        this.weight++;
        this.mood--;
        this.bankAccount = this.bankAccount + 10;
    }
    buyHamster(hamster) {
        this.hamsters.push(hamster);
        this.mood = this.mood + 10;
        this.bankAccount = this.bankAccount - hamster.getPrice();
    }

    // my custom methods
    haveBirthday(numOfTimes) {
        for(let count = 1; count <= numOfTimes; count++) {
            this.ageUp();
        } 
    }

    goEat(numOfTimes) {
        for(let count = 1; count <= numOfTimes; count++) {
            this.eat();
        }
    }

    goExercise(numOfTimes) {
        for(let count = 1; count <= numOfTimes; count++) {
            this.exercise();
        }
    }
}



//  01. Instantiate a new Person named Timmy
const timmy = new Person("Timmy");

//  02. Age Timmy five years
timmy.haveBirthday(5);

//  03. At this point Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. Have him eat five times.
timmy.goEat(5);

//  04. Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good. Have him exercise five times
timmy.goExercise(5);

//  05. Age Timmy 9 years
timmy.haveBirthday(9);

//  06. Create a hamster named "Gus"
const gus = new Hamster("Gus");

//  07. Set Gus's owner to the string "Timmy"
gus.owner = timmy.name;

//  08. Have Timmy "buy" Gus
timmy.buyHamster(gus);

//  09. Age Timmy 15 years
timmy.haveBirthday(15);

//  10. Have Timmy eat twice
timmy.goEat(2);

//  11. Have Timmy exercise twice
timmy.goExercise(2);

console.log(timmy);










//  CHEF MAKE DINNERS
class Dinner {
    constructor(appetizerParam, entreeParam, dessertParm) {
        this.appetizer = appetizerParam;
        this.entree    = entreeParam;
        this.dessert   = dessertParm;
    }

    addToPlate() {
        const dish = [this.appetizer, this.entree, this.dessert];
        return dish;
    }

}

class Chef {
    makeDinner(appetizerOrdered, entreeOrdered, dessertOrdered) {
        const dinner = new Dinner(appetizerOrdered, entreeOrdered, dessertOrdered);
        console.log(dinner);
    }
}

const sam = new Chef();
sam.makeDinner("soup", "salad", "breadsticks");
sam.makeDinner("pancakes", "sausage", "bacon");
sam.makeDinner("skittles", "snickers", "nerds+");