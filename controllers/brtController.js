'use strict';

const firebase = require('../db');
const Angkot = require('../models/brt');
const firestore = firebase.firestore();

const addBRT = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('brt').doc().set(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addBRT
}