
const express    = require("express");
const app        = express();
const PORT       = 3000;
const fruits     = require("./models/fruits");
const vegetables = require("./models/vegetables");
const reactViews = require('express-react-views');


//  Set view engine to jsx. If excluded, the file extension is required like "Show.jsx"
app.set("view engine", "jsx");

//  Create engine. If excluded, we wouldn't be able to render jsx files
app.engine("jsx", reactViews.createEngine());



//  Controllers
app.get("/fruits", (req, res) => {
    res.render("fruits/Index", {fruits: fruits});
});

app.get("/fruits/:indexOfFruit", (req, res) => {
    // res.send(fruits[req.params.indexOfFruit]);
    res.render("fruits/Show", fruits[req.params.indexOfFruit]);
});


//  Veggies
app.get("/vegetables", (req, res) => {
    res.render("vegetables/Index", {vegetables: vegetables});
});

app.get("/vegetables/:indexOfVegetables", (req, res) => {
    res.render("vegetables/Show", vegetables[req.params.indexOfVegetables]);
});



app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});