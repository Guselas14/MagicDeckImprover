const axios = require('axios');
const uri = 'http://localhost:3000';

const apiCaller = {};

apiCaller.getDecks = async (userId)=>{
    let decks;
    const apiGetDecks = await axios.get(`${uri}/api/users/${userId}/decks`)
    if(apiGetDecks && apiGetDecks.data.decks){
        decks = apiGetDecks.data.decks;
        return decks;
    } else {
        console.log("No tienes Decks!");
    }
}

apiCaller.deleteDeck = async (deckId)=>{
    const result = await axios.delete(`${uri}/api/decks/${deckId}`)
    if(result){
       console.log('Deck deleted!');
    } else {
        console.log('Unaible to delete deck!');
    }
}

 module.exports = apiCaller;
