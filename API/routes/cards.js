const express = require('express');
const router = express.Router();
const cardsController = require('../controllers/cards');

router.get('/api/cardsbyname/:name',cardsController.getPossibleCardsByName);
router.get('/api/cardsbyexactname/:name',cardsController.getCardByExactName);
router.get('/api/cardsbycolor/:color',cardsController.getCardsByColor);

module.exports = router;