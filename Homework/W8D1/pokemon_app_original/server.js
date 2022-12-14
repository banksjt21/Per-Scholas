
/*  ===========================================================================
//  VARIABLES
/*  =======================================================================  */
//  Get the express package
const express    = require("express");

//  Create express application
const app        = express();

//  Set port #
const port       = 3000;

//  Get pokemon model
const pokemon    = require("./models/pokemon");

//  Get express-react-views package
const reactViews = require("express-react-views");


//  Setup view engine
app.set("view engine", "jsx");
app.engine("jsx", reactViews.createEngine());




/*  ===========================================================================
//  MIDDLEWARE
/*  =======================================================================  */
app.use((req, res, next) => {
    console.log("Middleware Running");
    next();
});

app.use(express.urlencoded({extended:false}));




/*  ===========================================================================
//  CONTROLLERS
/*  =======================================================================  */
//  Root
app.get("/", (req, res) => {
    res.send("Welcome to the Pokemon App!");
});


//  Index
app.get("/pokemon", (req, res) => {
    res.render("Index", {pokemon: pokemon});
});


//  New
app.get("/pokemon/new", (req, res) => {
    res.render("New");
});


//  Create
app.post("/pokemon", (req, res) => {
    pokemon.push(req.body);
    res.redirect("/pokemon");
});


//  Show
app.get("/pokemon/:id", (req, res) => {
    res.render("Show", pokemon[req.params.id]);
});






//  Listening on port to make sure server is running
app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});