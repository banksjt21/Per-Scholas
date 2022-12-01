/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////
const express          = require("express");
const morgan           = require("morgan");
const methodOverride   = require("method-override");
const moviesController = require("./controllers/movie");
const userController   = require("./controllers/user");
// const path             = require("path");
// const Movie            = require("./models/movie");




/////////////////////////////////////////////////
// Create our Express Application Object Bind Liquid Templating Engine
/////////////////////////////////////////////////
const app = express();
app.engine('jsx', require('express-react-views').createEngine());
app.set('view engine', 'jsx');




/////////////////////////////////////////////////////
// Middleware
/////////////////////////////////////////////////////
app.use(morgan("tiny")); //logging
app.use(methodOverride("_method")); // override for put and delete requests from forms
app.use(express.urlencoded({ extended: true })); // parse urlencoded request bodies
app.use(express.static("public")); // serve files from public statically




/////////////////////////////////////////////////
// Routes
/////////////////////////////////////////////////
app.use("/movies", moviesController); // send all "/movies" routes to movies router
app.use("/user",   userController); // send all "/user" routes to user router

app.get("/", (req, res) => {
    res.send("your server is running... better catch it.");
});




//////////////////////////////////////////////
// Server Listener
//////////////////////////////////////////////
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Now Listening on port ${PORT}`));