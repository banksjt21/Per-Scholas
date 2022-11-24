/*  ===========================================================================
//  DEPENDENCIES
//  =======================================================================  */
require("dotenv").config();
const express         = require("express");
const app             = express();
const port            = 3000;
const reactViews      = require("express-react-views");
const mongoose        = require("mongoose");




/*  ===========================================================================
//  VIEW ENGINE
//  =======================================================================  */
app.set("view engine", "jsx");
app.engine("jsx", reactViews.createEngine());




/*  ===========================================================================
//  MIDDLEWARE
//  =======================================================================  */
app.use(express.urlencoded({extended:false}));




/*  ===========================================================================
//  ROUTES
//  =======================================================================  */
//  New
app.get("/logs/new", (req, res) => {
    res.render("New");
});


//  Create
app.post("/logs", (req, res) => {
    req.body.shipIsBroken = req.body.shipIsBroken === "on" ? true : false;
    res.send(req.body);
});




/*  ===========================================================================
//  LISTEN ON PORT
//  =======================================================================  */
app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});