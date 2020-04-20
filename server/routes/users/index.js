const express = require('express');
const usersSignup = require('./users-signup');
const usersLogin = require('./users-login');
const usersUpdate = require('./users-update');

const usersRouter = express.Router();

usersRouter.post('/users/signup', usersSignup);
usersRouter.post('/users/login', usersLogin);
usersRouter.patch('/users', usersUpdate);

module.exports = usersRouter;
