const express = require('express');
const petsGet = require('./pets-get');
const petsAdd = require('./pets-add');

const petsRouter = express.Router();

petsRouter.get('/pets/:userId', petsGet);
petsRouter.post('/pets', petsAdd);

module.exports = petsRouter;
