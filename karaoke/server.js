// DEPENDENCIES
const express = require('express'); // import express web framework for node.js
const mongoose = require('mongoose'); // import to use mongoose db
const Member = require('./models/member_data.js');

// CONFIGURATION
const app = express(); // create a shorthand for the express functions;
const port = 3000;
const databaseName = 'karaokeDb'; // name of mongoose database

// MIDDLEWARE
app.use(express.json()); // body-parser
app.use(express.urlencoded({extended: true})); // body-parser
app.use(express.static('public')); //tells express to try to match requests with files in the directory called 'public'

// DATABASE
mongoose.connect('mongodb://localhost:27017/', { dbName: databaseName }, { useNewUrlParser: true}); // this sets the database name in mongoose and the data format
mongoose.connection.once('open', ()=> {
    console.log('Karaoke Clubhouse connected to mongo'); // this is a test line that tells us that it connected successfully
});
const seedMemberData = require('./models/seed_data.js');

// ROUTES 

// root --> http://localhost:3000/
app.get('/', (req, res) => { // this is what the app sends when it is requested
    // res.send('Hello World! Karaoke Clubhouse App is up and running.');
    res.send(seedMemberData);
});

// index --> http://localhost:3000/lobby
// this is the clubhouse lobby where you can see a list of all club members
app.get('/lobby', (req, res) => { // app sends lobby.ejs html render when accessing /lobby
    // res.send('Hello World! This is Karaoke Clubhouse Lobby!') // use to test before testing .ejs render;
    Member.find({}, (error, members) => {
        res.render('lobby.ejs', {
            allMembers: members
        })
    })
});

// create --> new member post route
app.post('/lobby', (req, res)=>{
    // add any data handling needed to change post data to match database schema
    Member.create(req.body, (error, createdData)=>{
        res.send(createdData);
    });
});

// create --> seed member data
app.get('/lobby/seed', (req, res)=>{
    // add any data handling needed to change post data to match database schema
    Member.create(seedMemberData, (error, createdData)=>{
        console.log(createdData);
        res.send(createdData);
    });
});

// LISTENER, express is listening to port 3000
app.listen(port, () => {
    console.log('Karaoke Clubhouse server is listening for requests');
});