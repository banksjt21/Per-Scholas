//  Load .env file for configuration
require("dotenv").config()

//  Dependencies
const mongoose = require("mongoose");
const Tweet    = require("./tweet");
const data     = require("./data");

//  Global Configuration
const mongoURI = process.env.MONGO_URI
const db       = mongoose.connection

//  Connect to database
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

//  Connection Error/Success
//  Define callback functions for various events
db.on("error", (err) => console.log(err.message + " is mongod not running?"));
db.on("open",     () => console.log("mongo connected: "));
db.on("close",    () => console.log("mongo disconnected"));


//  Automatically close after 5 seconds
//  for demonstration purposes to see that you must use `db.close()` in order to regain control of Terminal tab
// setTimeout(() => {
//   db.close();
// }, 5000);


//  =======================================================
//  create
//  =======================================================

//  CHAINING THEN METHOD
// Tweet.create(data.myFirstTweet)
//     // if database transaction succeeds
//     .then((tweet) => {
//         console.log(tweet)
//     })
//     // if database transaction fails
//     .catch((error) => {
//         console.log(error)
//     })
//     // close db connection either way
//     .finally(() => {
//         db.close()
//     });


// //  AWAIT VERSION
// async function createTweet() {
//     try {
//         const createdTweet = await Tweet.create(data.myFirstTweet); // promise
//         console.log(createdTweet);
//     } catch {
//         console.log(error);
//     } finally {
//         db.close();
//     }
// }
// createTweet();


//  =======================================================
//  insertMany
//  =======================================================

// Tweet.insertMany(data.manyTweets)
// // if database transaction succeeds
// .then((tweets) => {
//     console.log(tweets);
// })
// // if database transaction fails
// .catch((err) => {
//     console.log(err);
// })
// // close db connection either way
// .finally(() => {
//     db.close()
// });



// ========================================================


//  Find all documents in collection
//  second argument, filter out properties
//  "-_id" to return result without the id
// Tweet.find({}, "title body -_id")
// // if database transaction succeeds
// .then((tweets) => {
//   console.log(tweets)
// })
// // if database transaction fails
// .catch((error) => {
//   console.log(error)
// })
// // close db connection either way
// .finally(() => {
//  db.close()
// });


// ========================================================

//  Find with the filter object
// Tweet.find({ title: "Water"})
// // if database transaction succeeds
// .then((tweet) => {
//   console.log(tweet)
// })
// // if database transaction fails
// .catch((error) => {
//   console.log(error)
// })
// // close db connection either way
// .finally(() => {
//   db.close()
// })



// ========================================================

/*
$eq
$gt / $gte
$lt / $lte
$in (works with arrays ... is this in this array)
$and
$or
*/


//  Find with advanced queries

// Tweet.find({ likes: { $gte: 20 } })
// Tweet.find({$and: [{likes: 2}, {title: "Vespa"}] })
// // if database transaction succeeds
// .then((tweet) => {
//     console.log(tweet)
//   })
//   // if database transaction fails
//   .catch((error) => {
//     console.log(error)
//   })
//   // close db connection either way
//   .finally(() => {
//     db.close()
//   })



// ========================================================

  // Removing document
  // can use findOneAndRemove or findOneAndDelete
// Tweet.findOneAndRemove({ title: "Deep Thoughts" })
//   // if database transaction succeeds
// .then((tweet) => {
//     console.log(tweet)
//   })
//   // if database transaction fails
//   .catch((error) => {
//     console.log(error)
//   })
//   // close db connection either way
//   .finally(() => {
//     db.close()
//   })




// ========================================================

//  Update
//  new: true shows the updated tweet
// Tweet.findOneAndUpdate({title: "Vespa"}, {sponsored: true}, {new: true})
//   // if database transaction succeeds
//   .then((tweet) => {
//     console.log(tweet)
//   })
//   // if database transaction fails
//   .catch((error) => {
//     console.log(error)
//   })
//   // close db connection either way
//   .finally(() => {
//     db.close()
//   })


// ========================================================

// Count
// Tweet.countDocuments({ likes: { $gte: 20 } })
Tweet.countDocuments({ sponsored: true})
// if database transaction succeeds
.then((count) => {
  console.log(count)
})
// if database transaction fails
.catch((error) => {
  console.log(error)
})
// close db connection either way
.finally(() => {
 db.close()
})








// CHEAT-SHEET

/*
CREATE
  .create(data, callback function(error, new doc){})
  .insertMany([data], callback function(error, new docs){})

READ
  .find({filter}, callback function(err, docs){})
  .findOne({filter}, callback function(err, doc){})
  .findById("id", callback function(err, doc){})

UPDATE
  .findByIdAndUpdate("id", data, {new:true}, callback function)
  .updateOne({filter}, data, {new:true, multi: true}, callback function)

DELETE
  this is the method you should use when delete
  .findByIdAndDelete("id", callback function(error, deleted doc){})

  another one you COULD use
  .deleteOne({filter}, callback function(error, deleted doc){})

  only use this IF you know exactly what you are doing
  .deleteMany({filter}, callback function(error, deleted docs){})

*/




// Populating a user's tweets
// User.findById("637d0e934854d8722648077c"),populate("tweets")

// .then((user) => {
//   console.log(user)
// })
// .catch((err) => {
//   console.log(err)
// })
// .finally(() => {
//   db.close()
// })