class Pokemon {
    constructor(hp, power) {
        // this.name = name;
        this.hp = hp;
        this.power = power;
    }
}

// const pikachu = new Pokemon('pikachu', 100, 100);
// const charmander = new Pokemon('charmander', 100, 80);
// const magikarp = new Pokemon('magikarp', 20, 5);

const firstArray = [];
const secondArray = [];

for(let i = 0; i < 3; i++){
    firstArray.push(new Pokemon(Math.ceil(Math.random() * 100), Math.ceil(Math.random() * 100)));
    secondArray.push(new Pokemon(Math.ceil(Math.random() * 100), Math.ceil(Math.random() * 100)));
}
console.log(firstArray);
console.log(secondArray);