const express = require('express');
const error = require('../middleware/error');

const planPackages = require('../routes/planPackages');
const customers = require('../routes/customers');
const users = require('../routes/users');

module.exports = function(app){
    app.use(express.json());
    app.use('/api/planpackages', planPackages);
    app.use('/api/customers', customers);
    app.use('/api/users', users);
    app.use(error);
}