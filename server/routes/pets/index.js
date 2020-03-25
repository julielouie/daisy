const express = require('express');
const petsGet = require('./pets-get');

const petsRouter = express.Router();

petsRouter.get('/pets/:userId', petsGet);

module.exports = petsRouter;
