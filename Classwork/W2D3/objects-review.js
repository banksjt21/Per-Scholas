// ==============================
// OBJECTS and ARRAYS
// ==============================

// Why should we write our objects with const?
// So we don't change the data type of the variable
// const arr = []
// const obj = {}

const adventurer = {
    name:       "Timothy",
    hitpoints:  10,
    belongings: ["sword", "potion", "Tums"]
}

// Access Timothy
console.log(adventurer.name);

// Access hitpoints
console.log(adventurer.hitpoints);

// Print out "My name is Timothy. I have 99 Tums in my adventurer's bag." using string interpolation.
console.log(`My name is ${adventurer.name}. I have 99 ${adventurer.belongings[2]} in my adventurer's bag.`)

// Iterate over an array
for (let i = 0; i < adventurer.belongings.length; i++) {
    console.log(adventurer.belongings[i]);
}




// ==== USE AN OBJECT WITH AN OBJECT ====
const newAdventurer = {
    name       : "Timothy",
    hitpoints  : 10,
    belongings : ["sword", "potion", "Tums"],
    companion  : {
        name: "Velma",
        type: "Bat",
        companion: {
            name: "Tim",
            type: "Parasite",
            belongings: ["SCUBA tank", "Rogan josh", "health insurance"]
        }
    }
}

// Access companion obj
console.log(newAdventurer.companion);

// Access name and type
console.log(newAdventurer.companion.name + " is a " + newAdventurer.companion.type);

// Access Tim's type
console.log(newAdventurer.companion.companion.type);

// Access health insurance
console.log(newAdventurer.companion.companion.belongings[2]);




// ===== ARRAY OF OBJECTS =====
const movies = [
    { title: "Tokyo Story" },
    { title: "Paul Blart: Mall Cop" },
    { title: "L'Avventura"}
];

// Access the title L'Avventura
console.log(movies[2].title);

// Iterate over the movies array printing all of the titles
for (let i = 0; i < movies.length; i++) {
    console.log(movies[i].title);
}




// ===== COMBINE OBJECTS, ARRAYS, AND FUNCTIONS =====
const foo = {
    someObject: {
        someProperty: 'Oh, hai!'
    }
}

console.log(foo.someObject.someProperty);

// Writing a method inside an object
// We call functions inside objects methods
// If we write a method using an arrow function, we lose access to 'this' keyword
const bar = {
    name: 'Teo',
    sayGreeting: function () {
        console.log(`Oh, hello ${this.name}!`);
    },
    sayGoodbye: () => {
        console.log(`Oh, goodbye ${this.name}`);
    }
}

bar.sayGreeting();
bar.sayGoodbye.bind();