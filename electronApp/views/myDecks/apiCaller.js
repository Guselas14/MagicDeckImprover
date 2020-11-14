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
//  apiCaller.getDecks('5f945616c3ca8d2a0001cebd');

 module.exports = apiCaller;
