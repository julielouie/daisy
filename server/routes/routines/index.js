const express = require('express');
const routinesGetAll = require('./routines-get-all');
const routinesGet = require('./routines-get');
const routinesAdd = require('./routines-add');
const routinesUpdate = require('./routines-update');
const routinesDelete = require('./routines-delete');

const routinesRouter = express.Router();

routinesRouter.get('/routines', routinesGetAll);
routinesRouter.get('/routines/:routineId', routinesGet);
routinesRouter.post('/routines', routinesAdd);
routinesRouter.patch('/routines', routinesUpdate);
routinesRouter.delete('/routines/:routineId', routinesDelete);

module.exports = routinesRouter;
