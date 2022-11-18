//  Require mongoose package
const mongoose = require("mongoose");

//  Create the Vegetable Schema
const vegetableSchema = new mongoose.Schema({
    name:         { type: String, required: true },
    color:        { type: String, required: true },
    readyToEat: Boolean
},
{
    timestamps: true
});

//  Create the Vegetable model
const Vegetable = mongoose.model("Vegetable", vegetableSchema);

//  Export the Vegetable model
module.exports = Vegetable;