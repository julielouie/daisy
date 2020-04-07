const express = require('express');
const petsGetAll = require('./pets-get-all');
const petsGet = require('./pets-get');
const petsAdd = require('./pets-add');
const petsUpdate = require('./pets-update');
const petsDelete = require('./pets-delete');

const petsRouter = express.Router();

petsRouter.get('/pets', petsGetAll);
petsRouter.get('/pets/:petId', petsGet);
petsRouter.post('/pets', petsAdd);
petsRouter.patch('/pets', petsUpdate);
petsRouter.delete('/pets/:petId', petsDelete);

module.exports = petsRouter;
