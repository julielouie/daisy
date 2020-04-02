const express = require('express');
const petsGet = require('./pets-get');
const petsAdd = require('./pets-add');
const petsUpdate = require('./pets-update');

const petsRouter = express.Router();

petsRouter.get('/pets/:userId', petsGet);
petsRouter.post('/pets', petsAdd);
petsRouter.patch('/pets/:petId', petsUpdate);

module.exports = petsRouter;
