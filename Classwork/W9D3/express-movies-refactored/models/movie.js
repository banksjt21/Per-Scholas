/////////////////////////////////////////////
// Import Dependencies
/////////////////////////////////////////////
const mongoose = require("mongoose");




////////////////////////////////////////////////
// Define Models
////////////////////////////////////////////////
// pull schema and model from mongoose using object destructuring
const { Schema, model } = mongoose;

// make movies schema
const movieSchema = new Schema({
    title: { type: String, required: true },
    releaseDate: String,
    length: Number,
    genre: String,
    poster: { type: String, required: true },
    director: { type: String, required: true },
    rating: String,
    watchAgain: Boolean,
    cast: [{ type: String }]
});

// make movie model
const Movie = model("Movie", movieSchema);




////////////////////////////////////////////////////
// Export Movie
////////////////////////////////////////////////////
module.exports = Movie;