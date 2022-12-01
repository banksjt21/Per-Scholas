/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////
const express          = require("express");
const morgan           = require("morgan");
const methodOverride   = require("method-override");
const path             = require("path");
const Movie            = require("./models/movie");
const moviesController = require("./controllers/movie");




/////////////////////////////////////////////////
// Create our Express Application Object Bind Liquid Templating Engine
/////////////////////////////////////////////////
const app = express();
app.engine('jsx', require('express-react-views').createEngine());
app.set('view engine', 'jsx');




/////////////////////////////////////////////////
// Use the Movies Controller
/////////////////////////////////////////////////
app.use("/movies", moviesController);




/////////////////////////////////////////////////////
// Middleware
/////////////////////////////////////////////////////
app.use(morgan("tiny")); //logging
app.use(methodOverride("_method")); // override for put and delete requests from forms
app.use(express.urlencoded({ extended: true })); // parse urlencoded request bodies
app.use(express.static("public")); // serve files from public statically




//////////////////////////////////////////////
// Server Listener
//////////////////////////////////////////////
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Now Listening on port ${PORT}`));