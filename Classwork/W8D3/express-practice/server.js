/*
===Greetings===
Make a route '/greeting' that sends a generic greeting to the screen like "Hello, stranger".

Give the greeting route a param /:name

When hitting the route, the page should display a message such as "Hello, ", or "What's up, <name>", or "<name>! It's so great to see you!" (ex. hitting '/greeting/Jimmy-boy' should display Wow! Hello there, Jimmy-boy on the page).



===Tip Calculator===
Your app should have a route of '/tip' and it should expect 2 params. One should be total and one should be tipPercentage.

When hitting the route, the page should display how much your tip will be based on the total amount of the bill and the tip percentage. (ex. hitting '/tip/100/20' should display 20 on the page).
*/




const express    = require("express");
const app        = express();   //  Create express application
const PORT       = 3000;


//  Routes
app.get("/greeting", (req, res) => {
    res.send("Hello, stranger!");
});


app.get("/greeting/:name", (req, res) => {
    res.send(`What's up, ${req.params.name}! It's so great to see you!`);
});


app.get("/tip/:total/:tipPercentage", (req, res) => {
    res.send("Total: $" + req.params.total + "<br>" + 
             "Tip: " + req.params.tipPercentage + "%<br>" +
             "Tip Amount: $" + (req.params.tipPercentage / 100) * req.params.total);
});


//  Magic 8-Ball
const responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];

app.get("/magic/:magicQuestion", (req, res) => {
    let magicAnswer = responses[Math.floor(Math.random() * responses.length)];
    res.send(`${req.params.magicQuestion}<br><br>${magicAnswer}`);
});


//  Pass It Around
app.get("/", (req, res) => {
    res.send(`<h1>9 Bottles of beer on the wall ...</h1>
              <a href="/8">Take one down, pass it around</a>`);
});

app.get(`/:number_of_bottles`, (req, res) => {
    if(req.params.number_of_bottles === "0") {
        res.send(`<h1>No more bottles of beer on the wall.</h1>
                  <a href="/">Start Over</a>`);
    } else {
        res.send(`<h1>${req.params.number_of_bottles} Bottles of beer on the wall ...</h1>
              <a href="${req.params.number_of_bottles - 1}">Take one down, pass it around</a>`);
    }
});






app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});