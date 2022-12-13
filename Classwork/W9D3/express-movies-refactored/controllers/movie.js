/////////////////////////////////////////////
// Import Dependencies
/////////////////////////////////////////////
const express = require("express");
const Movie   = require("../models/movie");




////////////////////////////////////////////
// Create Route
////////////////////////////////////////////
const router  = express.Router(); // middleware




////////////////////////////////////////
// Router Middleware
////////////////////////////////////////
// Authorization Middleware
router.use((req, res, next) => {
    if (req.session.loggedIn) {
      next();
    } else {
      res.redirect("/user/login");
    }
  });




////////////////////////////////////////////
// Routes
////////////////////////////////////////////
// Home
// router.get("/", (req, res) => {
//     res.send("your server is running... better catch it.");
// });


// Index route
// router.get("/", (req, res) => {
//     // find all the movies
//     Movie.find({})
//       // render a template after they are found
//       .then((movies) => {
//         res.render("movies/Index", { movies });
//       })
//       // send error as json if they aren't
//       .catch((error) => {
//         res.json({ error });
//       });
// });


// Index route
router.get("/", async (req, res) => {
    try {
        const movies = await Movie.find({ username: req.session.username });
        res.render("movies/Index", { movies });
    } catch (err) {
        res.json({ err });
    }
});


// New
router.get("/new", (req, res) => {
    res.render("movies/New");
});


// Delete
router.delete("/:id", (req, res) => {
    // get the id from params
    const id = req.params.id;
    // delete the movie
    Movie.findByIdAndRemove(id)
      .then((movie) => {
        // redirect to main page after deleting
        res.redirect("/movies");
      })
      // send error as json
      .catch((error) => {
        console.log(error);
        res.json({ error });
      });
  });


// Update
router.put("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        req.body.watchAgain = req.body.watchAgain === "on" ? true : false; 
        req.body.cast = req.body.cast.split("|");
        await Movie.findByIdAndUpdate(id, req.body);
        res.redirect(`/movies/${id}`)
    } catch(error) {
        console.log(error);
        res.json({ error });
    }
});


// Create
router.post("/", async (req, res) => {
    try {
        // check if the watchAgain property should be true or false
        req.body.watchAgain = req.body.watchAgain === "on" ? true : false; 
        // add username to req.body to track related user
        req.body.username = req.session.username;
        // create the New movie
        req.body.cast = req.body.cast.split("|");
        console.log(req.body);
        const createdMovie = await Movie.create(req.body);
        // redirect user to Index page if successfully created item
        res.redirect("/movies");
    } catch (error) {
        console.log(error);
        // send error as json
        res.json({ error });
    }
});


// Edit route
router.get("/:id/edit", (req, res) => {
    // get the id from params
    const id = req.params.id;
    // get the movie from the database
    Movie.findById(id)
      .then((movie) => {
        // render Edit page and send movie data
        res.render("movies/Edit", { movie });
      })
      // send error as json
      .catch((error) => {
        console.log(error);
        res.json({ error });
      });
  });


// Show route
router.get("/:id", async (req, res) => {
    const id = req.params.id;

    try {
        const movie = await Movie.findById(id);
        res.render("movies/Show", { movie });
    } catch (error) {
        console.log(error);
        res.json(error);
    }
});




////////////////////////////////////////////
// Export Router
////////////////////////////////////////////
module.exports = router;