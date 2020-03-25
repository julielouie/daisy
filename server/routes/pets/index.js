const express = require('express');
const petsGet = require('./pets-get');

const petsRouter = express.Router();

petsRouter.get('/pets', petsGet);

module.exports = petsRouter;
