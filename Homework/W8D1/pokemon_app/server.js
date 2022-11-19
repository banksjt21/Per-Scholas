
/*  ===========================================================================
//  VARIABLES
/*  =======================================================================  */
//  Get the dotenv file
require("dotenv").config();

//  Get the express package
const express    = require("express");

//  Create express application
const app        = express();

//  Set port #
const port       = 3000;

//  Get pokemon model
const Pokemon    = require("./models/pokemon");

//  Get express-react-views package
const reactViews = require("express-react-views");

//  Get the mongoose package
const mongoose = require("mongoose");


//  Connect to Mongoose API
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//  Test the MongoDB connection
mongoose.connection.once("open", () => {
    console.log("Connected to MongoDB");
});




//  Setup view engine
app.set("view engine", "jsx");
app.engine("jsx", reactViews.createEngine());




/*  ===========================================================================
//  MIDDLEWARE
/*  =======================================================================  */
app.use((req, res, next) => {
    next();
});

app.use(express.urlencoded({extended:false}));




/*  ===========================================================================
//  CONTROLLERS
/*  =======================================================================  */
//  Root
app.get("/", (req, res) => {
    res.send("<h1>Welcome to the Pokemon App!</h1>" + 
             '<a href="/pokemon/">Go To The Pokemon Index</a>');
});


//  Index
app.get("/pokemon", (req, res) => {
    Pokemon.find({}, (error, allPokemon) => {
        if(!error) {
            res.status(200).render("Index", {
                pokemon: allPokemon
            });
        } else {
            res.status(400).send(error);
        }
    });
});


//  New
app.get("/pokemon/new", (req, res) => {
    res.render("New");
});


//  Create
app.post("/pokemon", (req, res) => {
    Pokemon.create(req.body, (error, createdPokemon) => {
        if(!error) {
            res.status(200).redirect("/pokemon");
        } else {
            res.status(400).send(error);
        }
    });
});


//  Show
app.get("/pokemon/:id", (req, res) => {
    Pokemon.findById(req.params.id, (error, foundPokemon) => {
        if(!error) {
            res.status(200).render("Show", {
                pokemon: foundPokemon
            });
        } else {
            res.status(400).send(error);
        }
    });
});






//  Listening on port to make sure server is running
app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});