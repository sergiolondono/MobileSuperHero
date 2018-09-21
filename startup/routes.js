const express = require('express');
const error = require('../middleware/error');

const planPackages = require('../routes/planPackages');
const customers = require('../routes/customers');
const users = require('../routes/users');
const simCards = require('../routes/simCards');
const auth = require('../routes/auth');

module.exports = function(app){
    app.use(express.json());
    app.use('/api/planpackages', planPackages);
    app.use('/api/customers', customers);
    app.use('/api/users', users);
    app.use('/api/simCards', simCards);
    app.use('/api/auth', auth);
    app.use(error);
}