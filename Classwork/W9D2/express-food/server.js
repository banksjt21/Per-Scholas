
require("dotenv").config();
const express              = require("express");
const app                  = express();
const PORT                 = 3000;
const Fruit                = require("./models/fruits");
const Vegetable            = require("./models/vegetables");
const reactViews           = require('express-react-views');
const mongoose             = require("mongoose");
const methodOverride       = require('method-override');
const indexController      = require("./controllers/indexController");
const fruitsController     = require("./controllers/fruitsController");
const vegetablesController = require("./controllers/vegetablesController");


//  Connect to Mongoose API
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

mongoose.connection.once("open", () => {
    console.log("Connected to MongoDB");
});

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
app.use(express.urlencoded({extended:false}));
app.use(methodOverride("_method"));


//  Routes
app.use("/", indexController);
app.use("/fruits", fruitsController);
app.use("/vegetables", vegetablesController);


//  Listen on port
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});