const express = require('express');
const usersGet = require('./users-get');
const usersSignup = require('./users-signup');
const usersLogin = require('./users-login');
const usersUpdate = require('./users-update');

const usersRouter = express.Router();

usersRouter.get('/users/:userId', usersGet);
usersRouter.post('/users/signup', usersSignup);
usersRouter.post('/users/login', usersLogin);
usersRouter.patch('/users', usersUpdate);

module.exports = usersRouter;
