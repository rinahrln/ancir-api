const express = require('express');
const {
    addBRT
} = require('../controllers/brtController');

const router = express.Router();

router.post('/brt', addBRT);

module.exports = {
    routes: router
}