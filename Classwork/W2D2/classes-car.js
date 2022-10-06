class Car {
    constructor(make, model, year, doors, location, price) {
        this.make     = make,
        this.model    = model,
        this.year     = year,
        this.doors    = doors,
        this.location = location,
        this.price    = price
    }
    
    drive = function() {
        console.log(this.make + " is driving.");
    }
}

let vehicle1 = new Car("Dodge", "Magnum", "2006", "4", "Macon,GA", 10000);
let vehicle2 = new Car("Toyota", "Prius", "2012", "4", "Atlanta,GA", 13000);
let vehicle3 = new Car("Chevrolet", "Camaro", "2023", "4", "Miami,FL", 45000);

// console.log(vehicle1);
vehicle3.drive();