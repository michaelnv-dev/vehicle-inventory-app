const express = require('express');
const app = express();
const db = require('./db');

let VehicleController = require('./vehicle/VehicleController');
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
});
app.use('/vehicles', VehicleController);

module.exports = app;