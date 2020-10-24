const express = require('express');
const mongoose = require('mongoose');
const fetch = require("node-fetch");
const cors = require('cors');
const bodyParser = require('body-parser');



// Initialize the app
const app = express();

//Middlewares

// Form Data Middleware
app.use(bodyParser.urlencoded({      
  extended: false
}));

// Json Body Middleware
app.use(bodyParser.json());  
      
// Cors Middleware
app.use(cors()); 

// Bring in the Database Config and connect with DB
// mongoose.set('useCreateIndex', true);   //*****NEW**** 
const db = require('./config/keys');
mongoose.connect(db.mongoURL, { useNewUrlParser: true ,useUnifiedTopology: true,useFindAndModify: false})
.then(()=> { console.log("MongoDB is Connect!!", db.mongoURL) })
.catch(err => console.log(err,"Unable to connect with Db"));

// Bring in the Users route
const users = require('./routes/users');
app.use(users);

// Bring in the Decks route
const decks = require('./routes/decks');
app.use(decks);
const cardList = async (req,res, color) => {
    color = 'w';
    const whiteCards = await fetch(`https://api.scryfall.com/cards/search?order=color&q=c%3A${color}`)
    .then(response => response.json())
    .then(data => console.log(data));
    res.send(whiteCards);
   };
 

app.get('/', function (req, res) {
    res.send('Hello Wordl!')
});

const PORT = process.env.PORT || 3000;

app.get('/cards', cardList);
app.listen(PORT, () =>  {
  console.log(`App listening on port ${PORT}!`);
});