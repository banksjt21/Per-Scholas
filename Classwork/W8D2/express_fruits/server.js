
const express = require("express");
const app     = express();
const PORT    = 3000;
const fruits  = require("./models/fruits");
const reactViews = require('express-react-views');


//  Set view engine to jsx. If excluded, the file extension is required like "Show.jsx"
app.set("view engine", "jsx");

//  Create engine. If excluded, we wouldn't be able to render jsx files
app.engine("jsx", reactViews.createEngine());


//  Create our own middelware
app.use((req, res, next) => {
    console.log("I'm running for all routes.");
    console.log("1. middleware");
    next();
});

//  Express Built-in middleware
app.use(express.urlencoded({extended:false}))


//  Controllers
app.get("/fruits", (req, res) => {
    console.log("2. controller");
    res.render("Index", {fruits: fruits});
});

app.get("/fruits/new", (req, res) => {
    res.render("New");
});

app.post("/fruits/", (req, res) => {
    console.log("2. controller");
    if(req.body.readyToEat === "on") {
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    fruits.push(req.body);
    console.log(fruits);
    //  redirects after creating fruit, to the Index page
    res.redirect("/fruits");
});

app.get("/fruits/:indexOfFruit", (req, res) => {
    res.render("Show", fruits[req.params.indexOfFruit]);
});

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});