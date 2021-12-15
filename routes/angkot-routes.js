const express = require('express');
const { 
    addAngkot,
    getAllAngkot,
    getAngkot,
    updateAngkot,
    deleteAngkot
} = require('../controllers/angkotController');

const router = express.Router();

router.post('/angkot', addAngkot);
router.get('/data-angkot', getAllAngkot);
router.get('/data-angkot/:id', getAngkot);
router.put('/data-angkot/:id', updateAngkot);
router.delete('/data-angkot/:id', deleteAngkot)

module.exports = {
    routes: router
}