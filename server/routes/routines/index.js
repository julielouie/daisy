const express = require('express');
const routinesAdd = require('./routines-add');

const routinesRouter = express.Router();

routinesRouter.post('/routines', routinesAdd);

module.exports = routinesRouter;
