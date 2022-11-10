
// Load express
const express = require('express');

// Set port #
const port    = 3000;

// Create the express app
const app     = express();

// Load file system module
const fs      = require('fs');


app.engine('website', (filePath, options, callback) => {
    fs.readFile(filePath, (err, content) => {
        if(err) return callback(err)

        const rendered = content.toString()
            .replace('#title#', '<title>' + options.title + '</title>')
            .replace('#message#', '<h1>' + options.message + '</h1>')
            .replace('#content#', '<div>' + options.content + '</div>')
            .replace('#content2#', '<div>' + options.content2 + '</div>');
        return callback(null, rendered);
    });
});


app.set('views', './views');
app.set('view engine', 'website');


// Template 1
app.get('/', (req, res) => {
    res.render('template', {
        title: 'HOME',
        message: 'Home Page',
        content: '<a href="/about">Next Page: About</a>'
    });
});

app.get('/about', (req, res) => {
    res.render('template', {
        title: 'ABOUT',
        message: 'About Page',
        content: '<a href="/skills">Next Page: Skills</a>'
    });
});

app.get('/skills', (req, res) => {
    res.render('template', {
        title: 'SKILLS',
        message: 'Skills Page',
        content: '<a href="/portfolio">Next Page: Portfolio</a>'
    });
});

app.get('/portfolio', (req, res) => {
    res.render('template', {
        title: 'PORTFOLIO',
        message: 'Portfolio Page',
        content: '<a href="/contact">Next Page: Contact</a>'
    });
});

app.get('/contact', (req, res) => {
    res.render('template', {
        title: 'CONTACT',
        message: 'Contact Page',
        content: '<a href="/technology">Next Page: Technology</a>'
    });
});




// Template 2
app.get('/technology', (req, res) => {
    res.render('template2', {
        // title: 'TECHNOLOGY',
        message: 'Technology Page (Template 2)',
        content2: '<a href="/blog">Next Page: Blog</a>'
    });
});

app.get('/blog', (req, res) => {
    res.render('template2', {
        // title: 'BLOG',
        message: 'Blog Page (Template 2)',
        content2: '<a href="/shop">Next Page: Shop</a>'
    });
});

app.get('/shop', (req, res) => {
    res.render('template2', {
        // title: 'SHOP',
        message: 'Shop Page (Template 2)',
        content2: '<a href="/chat">Next Page: Chat</a>'
    });
});

app.get('/chat', (req, res) => {
    res.render('template2', {
        // title: 'CHAT',
        message: 'Chat Page (Template 2)',
        content2: '<a href="/consulting">Next Page: Consulting</a>'
    });
});

app.get('/consulting', (req, res) => {
    res.render('template2', {
        // title: 'CONSULTING',
        message: 'Consulting Page (Template 2)',
        content2: '<a href="/">Next Page: Home</a>'
    });
});









app.listen(port, () => {
    console.log('listening on port', port)
});


