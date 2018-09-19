const express = require('express');
const error = require('../middleware/error');

const planPackages = require('../routes/planPackages');

module.exports = function(app){
    app.use(express.json());
    app.use('/api/planpackages', planPackages);
    app.use(error);
}