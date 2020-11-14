const mongoose = require('mongoose');
const Schema  = mongoose.Schema;
const CardSchema = require('./Cards');

const DeckSchema = new Schema({
    title: {type: String, require: true },
    cards: [CardSchema],
    cardsNumber: { type: Number},
    userId: {type: String},
    // deckPrice: {type: Number},
});

module.exports = mongoose.model('Decks', DeckSchema);
