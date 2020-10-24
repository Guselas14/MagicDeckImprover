const mongoose = require('mongoose');
const Schema  = mongoose.Schema;
const CardSchema = require('./Cards');

const DeckSchema = new Schema({
    title: {type: String, require: true },
    // cards: {type: Array[CardSchema]},
    cardsNumber: { type: Number},
    userId: {type: String}
});

module.exports = mongoose.model('DeckSchema', DeckSchema);