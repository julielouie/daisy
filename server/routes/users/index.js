const express = require('express');
const usersGet = require('./users-get');
const usersSignup = require('./users-signup');
const usersLogin = require('./users-login');
const usersLogout = require('./users-logout');
const usersUpdate = require('./users-update');

const usersRouter = express.Router();

usersRouter.get('/users', usersGet);
usersRouter.post('/users/signup', usersSignup);
usersRouter.post('/users/login', usersLogin);
usersRouter.post('/users/logout', usersLogout);
usersRouter.patch('/users', usersUpdate);

module.exports = usersRouter;
