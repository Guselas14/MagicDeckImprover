var express = require('express');
const fetch = require("node-fetch");
var app = express();

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

app.get('/cards', cardList);
app.listen(3000, function () {
  console.log('App listening on port 3000!');
});