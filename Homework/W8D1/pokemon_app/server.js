
/*  ===========================================================================
//  VARIABLES
/* ========================================================================  */

//  Get the express package
const express    = require("express");

//  Create express application
const app        = express();

//  Set port #
const port       = 3000;

//  Get pokemon model
const pokemon    = require("./models/pokemon");




/*  ===========================================================================
//  CONTROLLERS
/* ========================================================================  */

app.get("/", (req, res) => {
    res.send("Welcome to the Pokemon App!");
});

app.get("/pokemon", (req, res) => {
    res.send(pokemon);
});






//  Listening on port to make sure server is running
app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});