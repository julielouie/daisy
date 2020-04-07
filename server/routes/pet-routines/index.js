const express = require('express');
const petRoutinesAdd = require('./routine-add');

const petRoutinesRouter = express.Router;

petRoutinesRouter.post('/pet-routines', petRoutinesAdd);

module.exports = petRoutinesRouter;
