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
const logsController  = require("./controllers/logsController");




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
app.use(express.static('public')); // Tells express to try to match requests with files in the directory called 'public'




/*  ===========================================================================
//  ROUTES
//  =======================================================================  */
app.use("/logs", logsController);




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