const express     = require("express");
const router      = express.Router();
const Vegetable   = require("../models/vegetables");



//  =====================================
//  VEGGIES
//  =====================================
//  INDEX
router.get("/", (req, res) => {
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
router.get("/new", (req, res) => {
    res.render("vegetables/New");
});



//  CREATE
router.post("/", (req, res) => {
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
router.get("/:id", (req, res) => {
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



module.exports = router;