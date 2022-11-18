//  Require mongoose package
const mongoose = require("mongoose");

//  Create the Fruit Schema
const fruitSchema = new mongoose.Schema({
    name:         { type: String, required: true },
    color:        { type: String, required: true },
    readyToEat: Boolean
},
{
    timestamps: true
});

//  Create the Fruit model
const Fruit = mongoose.model("Fruit", fruitSchema);

//  Export the Fruit model
module.exports = Fruit;