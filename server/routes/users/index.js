const express = require('express');
const usersSignup = require('./users-signup');

const usersRouter = express.Router;

usersRouter.post('/users/signup', usersSignup);

module.exports = usersRouter;
