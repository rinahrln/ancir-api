'use strict';

const firebase = require('../db');
const Angkot = require('../models/angkot');
const firestore = firebase.firestore();

const addAngkot = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('angkot').doc().set(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllAngkot = async (req, res, next) => {
    try {
        const angkots = await firestore.collection('angkot');
        const data = await angkots.get();
        const angkotArray = [];
        if (data.empty) {
            res.status(404).send('No angkot record found');
        } else {
            data.forEach(doc => {
               const angkot = new Angkot (
                   doc.id,
                   doc.data().kodeAngkot,
                   doc.data().deskripsi,
                   doc.data().ruteMap,
                   doc.data().biayaPelajar,
                   doc.data().biayaUmum,
                   doc.data().jamOperasi,
                   doc.data().infoRute
               );
               angkotArray.push(angkot) 
            });
            res.send(angkotArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAngkot = async (req, res, next) => {
    try {
        const id = req.params.id;
        const angkot = await firestore.collection('angkot').doc(id);
        const data = await angkot.get();
        if (!data.exists) {
            res.status(404).send('Angkot with the given ID not found');
        } else {
            res.send(data.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateAngkot = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const angkot = await firestore.collection('angkot').doc(id);
        await angkot.update(data);
        res.send('Angkot record updated successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteAngkot = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('angkot').doc(id).delete();
        res.send('Record deleted successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addAngkot,
    getAllAngkot,
    getAngkot,
    updateAngkot,
    deleteAngkot
}