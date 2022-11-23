/*  ===========================================================================
//  DEPENDENCIES
//  =======================================================================  */
require("dotenv").config();
const { application } = require("express");
const express         = require("express");
const app             = express();
const port            = 3000;
const reactViews      = require("express-react-views");




/*  ===========================================================================
//  VIEW ENGINE
//  =======================================================================  */
app.set("view engine", "jsx");
app.engine("jsx", reactViews.createEngine());



/*  ===========================================================================
//  MIDDLEWARE
//  =======================================================================  */
// app.use(express.urlencoded({extended:false}));
// app.use(methodOverride("_method"));





//  Routes
app.get("/", (req, res) => {
    res.render("New");
});




//  Listen on port
app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});