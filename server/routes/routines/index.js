const express = require('express');
const routinesGetAll = require('./routines-get-all');
const routinesGet = require('./routines-get');
const routinesAdd = require('./routines-add');

const routinesRouter = express.Router();

routinesRouter.get('/routines', routinesGetAll);
routinesRouter.get('/routines/:routineId', routinesGet);
routinesRouter.post('/routines', routinesAdd);

module.exports = routinesRouter;
