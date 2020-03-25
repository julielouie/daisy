require('dotenv/config');
const express = require('express');

const staticMiddleware = require('./static-middleware');
const sessionMiddleware = require('./session-middleware');

const petsRouter = require('./routes/pets');
const petDetailsRouter = require('./routes/pet-details');
const usersRouter = require('./routes/users');

const app = express();

app.use(staticMiddleware);
app.use(sessionMiddleware);

app.use(express.json());

app.use('/api', petsRouter);
app.use('/api', petDetailsRouter);
app.use('/api', usersRouter);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});
