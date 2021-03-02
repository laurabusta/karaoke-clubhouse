// DEPENDENCIES
const express = require('express'); // import express web framework for node.js

// CONFIGURATION
const app = express(); // create a shorthand for the express functions;
const port = 3000;

// MIDDLEWARE
app.use(express.static('public')); //tells express to try to match requests with files in the directory called 'public'

// ROUTES 

// root --> http://localhost:3000/
app.get('/', (req, res) => { // this is what the app sends when it is requested
    res.send('Hello World! Karaoke Clubhouse App is up and running.');
});

// index --> http://localhost:3000/lobby
// this is the clubhouse lobby where you can see a list of all club members
app.get('/lobby', (req, res) => { // app sends lobby.ejs html render when accessing /lobby
    // res.send('Hello World! This is Karaoke Clubhouse Lobby!') // use to test before testing .ejs render;
    res.render('lobby.ejs');
});

// LISTENER, express is listening to port 3000
app.listen(port, () => {
    console.log('Karaoke Clubhouse server is listening for requests');
});