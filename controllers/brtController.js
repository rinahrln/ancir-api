'use strict';

const firebase = require('../db');
const Brt = require('../models/brt');
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

const getAllBRT = async (req, res, next) => {
    try {
        const brts = await firestore.collection('brt');
        const data = await brts.get();
        const brtArray = [];
        if (data.empty) {
            res.status(404).send('No BRT record found');
        } else {
            data.forEach(doc => {
                const brt = new Brt (
                    doc.id,
                    doc.data().kodeBRT,                    
                    doc.data().ruteMap,
                    doc.data().biayaPelajar,
                    doc.data().biayaUmum,
                    doc.data().jamOperasi,
                    doc.data().infoRute,
                    doc.data().infoHalte,
                    doc.data().halte,
                    doc.data().namaHalte,
                    doc.data().infoJamDatang
                );
                brtArray.push(brt)
            });
            res.send(brtArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getBRT = async (req, res, next) => {
    try {
        const id = req.params.id;
        const brt = await firestore.collection('brt').doc(id);
        const data = await brt.get();
        if (!data.exists) {
            res.status(404).send('BRT with the given ID not found');
        } else {
            res.send(data.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }    
}

const updateBRT = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const brt = await firestore.collection('brt').doc(id);
        await brt.update(data);
        res.send('BRT record updated successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const deleteBRT = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('brt').doc(id).delete();
        res.send('Record deleted successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addBRT,
    getAllBRT,
    getBRT,
    updateBRT,
    deleteBRT
}