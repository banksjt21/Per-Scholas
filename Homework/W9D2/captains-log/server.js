/*  ===========================================================================
//  DEPENDENCIES
//  =======================================================================  */
require("dotenv").config();
const express         = require("express");
const app             = express();
const port            = 3000;
const reactViews      = require("express-react-views");
const mongoose        = require("mongoose");
const Log             = require("./models/logs");
const seedData        = require("./seedData");
const methodOverride  = require("method-override");




/*  ===========================================================================
//  MONGOOSE
//  =======================================================================  */
//  Global Configuration
const mongoURI = process.env.MONGO_URI;
const database = mongoose.connection;

//  Connect to database
mongoose.connect(mongoURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//  Connection Error/Success
//  Define callback functions for various events
database.on("error", (error) => console.log(error.message + " MongoDB is not running."));
database.on("open",       () => console.log("MongoDB Connected"));
database.on("close",      () => console.log("MongoDB Disconnected"));




/*  ===========================================================================
//  VIEW ENGINE
//  =======================================================================  */
app.set("view engine", "jsx");
app.engine("jsx", reactViews.createEngine());




/*  ===========================================================================
//  MIDDLEWARE
//  =======================================================================  */
app.use(express.urlencoded({extended:false}));
app.use(methodOverride("_method"));




/*  ===========================================================================
//  ROUTES
//  =======================================================================  */
//  Index
app.get("/logs", (req, res) => {
    Log.find({}, (error, allLogs) => {
        if(!error) {
            res.status(200).render("Index", {
                logs: allLogs
            });
        } else {
            res.status(400).send(error);
        }
    })
});


//  New
app.get("/logs/new", (req, res) => {
    res.render("New");
});


//  Delete
app.delete("/logs/:id", (req, res) => {
    Log.findByIdAndDelete(req.params.id, (error, data) => {
        res.redirect("/logs");
    })
});


//  Create
app.post("/logs", (req, res) => {
    req.body.shipIsBroken = req.body.shipIsBroken === "on" ? true : false;

    Log.create(req.body, (error, createdLog) => {
        if(!error) {
            res.status(200).redirect(`/logs`);  // Redirect to Show route???
        } else {
            res.status(400).send(error);
        }
    })
});


//  Show
app.get("/logs/:id", (req, res) => {
    Log.findById(req.params.id, (error, foundLog) => {
        if(!error) {
            res.status(200).render("Show", {
                log: foundLog
            });
        } else {
            res.status(400).send(error);
        }
    });
});




/*  ===========================================================================
//  SEED THE DATABASE
//  =======================================================================  */
async function seedDatabase() {
    try {
        const seededData = await Log.insertMany(seedData.previousLogs);
        console.log(seededData);
    } catch(error) {
        console.log(error);
    } finally {
        database.close();
    }
}
// seedDatabase();




/*  ===========================================================================
//  LISTEN ON PORT
//  =======================================================================  */
app.listen(port, () => {
    console.log(`Listening on Port: ${port}`);
});