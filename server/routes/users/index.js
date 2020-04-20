const express = require('express');
const usersSignup = require('./users-signup');
const usersLogin = require('./users-login');

const usersRouter = express.Router;

usersRouter.post('/users/signup', usersSignup);
usersRouter.post('/users/login', usersLogin);

module.exports = usersRouter;
