const express = require('express');
const router = express.Router();
const cardsController = require('../controllers/cards');

router.get('/api/cards/:color',cardsController.getCardsByColor);

module.exports = router;