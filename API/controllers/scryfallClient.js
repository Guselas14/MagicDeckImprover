const User = require("../models/Users");
const fetch = require("node-fetch");

const  scryfallClient = {};

// Create  scryfallClient
scryfallClient.getCardsByColor = async (color) =>{
    const whiteCards = await fetch(`https://api.scryfall.com/cards/search?order=color&q=c%3A${color}`)
    .then(response => response.json())
    .catch(error => console.log(error));
    return {
        totalCards: whiteCards.total_cards,
        hasMoreCards: whiteCards.has_more,
        urlNextPage: whiteCards.next_page,
        data: whiteCards.data
    };
};



module.exports =  scryfallClient;
