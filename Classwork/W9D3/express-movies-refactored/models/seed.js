/////////////////////////////////////////////
// Import Dependencies
/////////////////////////////////////////////
const mongoose = require("./connection");
const Movie    = require("../models/movie");




/////////////////////////////////////////////
// Seed
/////////////////////////////////////////////
// save the connection in a variable
const db = mongoose.connection;

db.on("open", () => {
    ///////////////////////////////////////////////
    // Write your Seed Code Below
    //////////////////////////////////////////////

    // Run any database queries in this function
    const startMovies = [
        {
            title: "Matrix",
            releaseDate: "1999",
            length: 136,
            genre: "Sci-fi",
            poster: "https://www.themoviedb.org/t/p/original/wIQjszQ0t6lFHjDsbdCxjynEdRB.jpg",
            director: "Lana, Lily Wasoki",
            rating: "R",
            watchAgain: true,
            cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"]
        },
        {
            title: "50 First Dates",
            releaseDate: "2004",
            length: 99,
            genre: "Comedy",
            poster: "https://www.themoviedb.org/t/p/original/zm9dfA5iwq4vGopD86WPoHXO40T.jpg",
            director: "Peter Segal",
            rating: "PG-13",
            watchAgain: true,
            cast: ["Adam Sandler", "Drew Barrymore", "Rob Schneider"]
        },
        {
            title: "The Dark Knight",
            releaseDate: "2008",
            length: 152,
            genre: "Action/Superhero",
            poster: "https://www.themoviedb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
            director: "Christopher Nolan",
            rating: "PG-13",
            watchAgain: true,
            cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"]
        },
        {
            title: "Catwoman",
            releaseDate: "2004",
            length: 104,
            genre: "Action",
            poster: "https://www.themoviedb.org/t/p/original/7D4DHsJ8pJWOTIQoLPfjBOGqhA7.jpg",
            director: "Pitof",
            rating: "PG-13",
            watchAgain: false,
            cast: ["Halle Berry", "Benjamin Bratt", "Sharon Stone"]
        },
        {
            title: "Shawshank Redemption",
            releaseDate: "1994",
            length: 144,
            genre: "Drama",
            poster: "https://image.tmdb.org/t/p/original/lyQBXzOQSuE59IsHyhrp0qIiPAz.jpg",
            director: "Frank Darabont",
            rating: "R",
            watchAgain: true,
            cast: ["Morgan Freeman", "Tim Robbins", "Bob Gunton"]
        },
    ]

    Movie.deleteMany({}).then((data) => {
        // Seed Starter Movies
        Movie.create(startMovies).then((data) => {
            // log new movies
            console.log('data', data);
            db.close();
        })
        .catch((error) => {
            console.log(error);
            db.close();
        })
    });
});