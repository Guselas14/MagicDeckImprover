const express = require('express');
const router = express.Router();
const decksController = require('../controllers/decks');

// Create Deck
router.post('/api/users/:userid/decks', decksController.create);

// Get Deck by id
// router.get('/api/decks/:deckid',async(req,res) =>{
//     const deck = await Decks.findById(req.params.deckId);
//     if(!deck) {
//         res.status(400).json({success: false, msg: "Deck not found"})
//     }
//     res.status(200).json({success:true, deck})
// });

// Update Deck by id
router.put('/api/decks/:deckid/card', decksController.addCardToDeck);
// router.put('/api/decks/:deckid/card/:cardid', decksController.deleteCardFromDeck);
// // Delete Deck by id
// router.delete('/api/decks/:deckid', decksController.delete);

module.exports = router;