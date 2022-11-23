
require("dotenv").config();
const express        = require("express");
const app            = express();
const PORT           = 3000;
const Fruit          = require("./models/fruits");
const Vegetable      = require("./models/vegetables");
const reactViews     = require('express-react-views');
const mongoose       = require("mongoose");
const methodOverride = require('method-override');


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


//  Controllers
app.get("/", (req, res) => {
    res.send("<a href='/fruits/'>Fruits</a><br />" +
             "<a href='/vegetables/'>Vegetables</a>");
});




//  ============================================
//  FRUITS
//  ============================================
//  INDEX
app.get("/fruits", (req, res) => {
    Fruit.find({}, (error, allFruits) => {
      if (!error) {
        res.status(200).render("fruits/Index", {
            fruits: allFruits
        })
      } else {
            res.status(400).send(error);
      }
    });
});
  

//  NEW
app.get("/fruits/new", (req, res) => {
    console.log("2. controller");
    res.render("fruits/New");
});


//  DELETE
app.delete("/fruits/:id", (req, res) => {
    Fruit.findByIdAndDelete(req.params.id, (err, data) => {
        res.redirect("/fruits");
    })
});


//  UPDATE
app.put("/fruits/:id", (req, res) => {
    req.body.readyToEat = req.body.readyToEat === "on" ? true : false;
    Fruit.findByIdAndUpdate(req.params.id, req.body, (err, updatedFruit) => {
        if(!err) {
            res.status(200).redirect(`/fruits/${req.params.id}`);
        } else {
            res.status(400).send(err);
        }
    })
});


//  CREATE
app.post("/fruits", (req, res) => {
    console.log("2. controller")
    if (req.body.readyToEat === "on"){
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    // This does the same thing as the if statement above but with a one line ternary
    //req.body.readyToEat = req.body.readyToEat === 'on' ? true : false;

    // Create 1st arg: the actual object we want to insert inside our database
    // Callback 1st arg: error
    // Callback 2nd arg: the newly created object
    Fruit.create(req.body, (error, createdFruit) => {
        if (!error) {
            // redirects after creating fruit, to the Index page
            res.status(200).redirect("/fruits");
        } else {
            res.status(400).send(error)
        }
    });
});


//  EDIT
app.get("/fruits/:id/edit", (req, res) => {
    Fruit.findById(req.params.id, (err, foundFruit) => {
        if(!err) {
            res.status(200).render("fruits/Edit", {fruit: foundFruit});
        } else {
            res.status(400).send({ msg: err.message });
        }
    });
});


//  SHOW
app.get("/fruits/:id", (req, res) => {
    // findById 1st arg: the id of the fruit we want to find 
    // Callback 1st arg: error
    // Callback 2nd arg: the found fruit object
    Fruit.findById(req.params.id, (error, foundFruit) => {
        if(!error) {
            res.status(200).render("fruits/Show", {
                fruit: foundFruit
            })
        } else {
            res.status(400).send(error);
        }
    });
});




//  =====================================
//  VEGGIES
//  =====================================
//  INDEX
app.get("/vegetables", (req, res) => {
    Vegetable.find({}, (error, allVegetables) => {
        if(!error) {
            res.status(200).render("vegetables/Index", {
                vegetables: allVegetables
            })
        } else {
            res.status(400).send(error);
        }
    });
});


//  NEW
app.get("/vegetables/new", (req, res) => {
    res.render("vegetables/New");
});



//  CREATE
app.post("/vegetables", (req, res) => {
    if(req.body.readyToEat === "on") {
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }

    Vegetable.create(req.body, (error, createdVegetable) => {
        if(!error) {
            res.status(200).redirect("/vegetables");
        } else {
            res.status(400).send(error);
        }
    });
});


//  SHOW
app.get("/vegetables/:id", (req, res) => {
    Vegetable.findById(req.params.id, (error, foundVegetable) => {
        if(!error) {
            res.status(200).render("vegetables/Show", {
                vegetable: foundVegetable
            })
        } else {
            res.status(400).send(error);
        }
    });
});



app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});