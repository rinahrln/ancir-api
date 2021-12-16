const express = require('express');
const {
    addBRT,
    getAllBRT,
    getBRT,
    updateBRT,
    deleteBRT
} = require('../controllers/brtController');

const router = express.Router();

router.post('/brt', addBRT);
router.get('/data-brt', getAllBRT);
router.get('/data-brt/:id', getBRT);
router.put('/data-brt/:id', updateBRT);
router.delete('/data-brt/:id', deleteBRT);


module.exports = {
    routes: router
}