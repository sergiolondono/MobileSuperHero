const validateObjectId = require('../middleware/validateObjectId');
const {Customer, validate} = require('../models/customer');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const customers = await Customer.find().sort('name');
    res.send(customers);
});

router.get('/:id', validateObjectId, async(req, res)=> {
    const customer = await Customer.findById(req.params.id);

    if(!customer) return res.status(404).send('The customer with the given ID was not found.');

    res.send(customer);
});

router.post('/', async (req, res)=> {
    const {error} = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    let customer = new Customer({
        name: req.body.name,
        phoneFlash: req.body.phoneFlash,
        phonePortability: req.body.phonePortability,
        stateActivation: req.body.stateActivation,
        portability: req.body.portability
    });

    customer = await customer.save();

    res.send(customer);
});

router.put('/:id',[validateObjectId], async(req, res) => {
    const {error} = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const customer = await Customer.findOneAndUpdate(req.params.id,
    {
        name: req.body.name,
        phoneFlash: req.body.phoneFlash,
        phonePortability: req.body.phonePortability,
        stateActivation: req.body.stateActivation,
        portability: req.body.portability
    }, { new: true });

    if(!customer) return res.status(404).send('The customer with the given ID was not found.');

    res.send(customer);
});

router.delete('/:id', [validateObjectId], async(req, res) => {
    const customer = await Customer.findByIdAndRemove(req.params.id);

    if(!customer) return res.status(404).send('The customer with the given ID was not found.');

    res.send(customer);
});

module.exports = router;