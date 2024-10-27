const express = require('express');
const { getKey, getAnimals } = require('../controllers/animalController');
const router = express.Router();

// Get API Key
router.get('/get-key', getKey);

// Get Animals
router.post('/get-animals', getAnimals);

module.exports = router;