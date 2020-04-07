const express = require('express');
const routinesGet = require('./routines-get');
const routinesAdd = require('./routines-add');

const routinesRouter = express.Router();

routinesRouter.get('/routines/:petId', routinesGet);
routinesRouter.post('/routines', routinesAdd);

module.exports = routinesRouter;
