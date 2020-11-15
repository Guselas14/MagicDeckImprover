const express = require('express');
const router = express.Router();
const decksController = require('../controllers/decks');


// Get Decks
router.get('/api/users/:userid/decks', decksController.getDecks);
// Create Deck
router.post('/api/users/:userid/decks', decksController.create);
// Update Deck by id
router.put('/api/decks/:deckid/card', decksController.addCardToDeck);
router.put('/api/decks/:deckid/card/:cardid', decksController.deleteCardFromDeck);
// // Delete Deck by id
router.delete('/api/decks/:deckid', decksController.delete);



module.exports = router;